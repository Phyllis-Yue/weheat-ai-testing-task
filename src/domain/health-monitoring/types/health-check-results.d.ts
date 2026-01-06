// Types-only contract (safe to share).
// Extracted from a real codebase; implementations are intentionally not included in this interview repo.

export type HealthCheck = {
  healthCheckId: number;
  name: string;
  severity: 'informative' | 'warning' | 'error' | 'critical';
  definition: string;
  notificationTemplateId: string | null;
  salesforceProblemId: string;
  relevantVariables: string[];
  internalNotifications: string[];
  sendWeheatNotification: boolean;
};

export type HealthCheckResult = {
  healthCheckId: number;
  installationId: string | null;
  heatPumpId: string;
  status: number;
  createdAt: string;
  resolvedAt: string | null;
  analysisStartAt: string | null;
  analysisEndAt: string | null;
  notificationStatus: number;
  source: string;
  analysisValue: unknown;
  success: boolean;
  healthCheck: HealthCheck;
};

export type HealthCheckResults = HealthCheckResult[];


