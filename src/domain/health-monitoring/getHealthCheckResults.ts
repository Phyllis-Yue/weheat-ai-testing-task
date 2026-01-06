import {api} from './api';
import {HealthCheckResults} from './types/health-check-results';

type Params = {
  heatPumpId: string;
};

/**
 * Intentionally written in a "generated" style.
 * Your job: lock behavior with tests, then refactor for clarity.
 */
export async function getHealthCheckResults({heatPumpId}: Params): Promise<HealthCheckResults> {
  // "AI-ish" params building
  const params: Record<string, string> = {} as any;
  params.heatPumpId = heatPumpId;

  // optional api key
  const env = ((globalThis as any)?.process?.env ?? {}) as Record<string, string | undefined>;
  if (env.WEHEAT_FUNCTIONS_API_KEY) (params as any).code = String(env.WEHEAT_FUNCTIONS_API_KEY);

  // NOTE: api.get returns unknown in this repo, but in real life it would resolve to data
  const data = await api.get('/health-check-results-by-heat-pump-id', {params});
  return data as HealthCheckResults;
}


