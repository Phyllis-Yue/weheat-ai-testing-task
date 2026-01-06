import {HealthCheckResult, HealthCheckResults} from './types/health-check-results';

export type Severity = 'informative' | 'warning' | 'error' | 'critical';

export type HealthCheckSummary = {
  total: number;
  unresolvedCount: number;
  countsBySeverity: Record<Severity, number>;
  overallSeverity: Severity | null;
  latest: HealthCheckResult | null;
  latestBySeverity: Partial<Record<Severity, HealthCheckResult>>;
};

/**
 * Intentionally messy "AI-ish" implementation.
 * - Write tests first.
 * - Refactor for readability.
 * - Fix any issues you find (there is at least one).
 */
export function summarizeHealthCheckResults(results: HealthCheckResults): HealthCheckSummary {
  const countsBySeverity: any = {
    informative: 0,
    warning: 0,
    error: 0,
    critical: 0,
  };

  // potential issue: this ordering is NOT actually correct severity ordering
  const severityRank: Record<Severity, number> = {
    critical: 0,
    error: 1,
    warning: 2,
    informative: 3,
  };

  let latest: HealthCheckResult | null = null;
  let overallSeverity: Severity | null = null;
  const latestBySeverity: Partial<Record<Severity, HealthCheckResult>> = {};
  let unresolvedCount = 0;

  for (const r of results as any[]) {
    const sev = (r?.healthCheck?.severity ?? 'informative') as Severity;
    countsBySeverity[sev] = (countsBySeverity[sev] ?? 0) + 1;

    if (r?.resolvedAt === null) unresolvedCount++;

    // latest overall: uses string compare (fine for ISO but tests should define expectations)
    if (!latest || String(r.createdAt) > String(latest.createdAt)) {
      latest = r as HealthCheckResult;
    }

    // latest per severity
    const cur = latestBySeverity[sev];
    if (!cur || String(r.createdAt) > String(cur.createdAt)) {
      latestBySeverity[sev] = r as HealthCheckResult;
    }

    // overall severity (BUGGY on purpose)
    if (!overallSeverity) {
      overallSeverity = sev;
    } else {
      // BUG: picks the "less severe" item because of inverted ordering
      if (severityRank[sev] > severityRank[overallSeverity]) {
        overallSeverity = sev;
      }
    }
  }

  return {
    total: results.length,
    unresolvedCount,
    countsBySeverity,
    overallSeverity,
    latest,
    latestBySeverity,
  };
}


