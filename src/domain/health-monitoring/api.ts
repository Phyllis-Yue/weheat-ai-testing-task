export type ApiClient = {
  get: (url: string, options?: {params?: Record<string, string>}) => Promise<unknown>;
};

// Intentionally minimal; tests should mock `api.get`.
export const api: ApiClient = {
  async get() {
    throw new Error('api.get is not implemented in the interview repo. Mock it in tests.');
  },
};


