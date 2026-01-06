# Weheat Interview Task — AI-assisted test design + refactor (Health Monitoring)

**Timebox:** 60–90 minutes  
**Goal:** evaluate how you use AI tools responsibly to write good FE tests and refactor code safely.

## Rules

- You may use AI tools (Cursor/ChatGPT/Copilot/etc).
- Do **not** paste proprietary code into external tools.
- Keep changes limited to this repo.

## What you have

- **Types-only domain contracts**: `src/domain/health-monitoring/types/health-check-results.d.ts`
  - These are `.d.ts` types extracted from a real codebase (no implementations included).
- **Two small modules** that simulate a real app’s domain layer:
  - `summarizeHealthCheckResults.ts` (pure function)
  - `getHealthCheckResults.ts` (API wrapper)

Both modules are intentionally written in a **messy / AI-ish style** and may contain subtle logic issues.

## Your tasks (deliverables)

### A) Tests + refactor: summarizer (required)

1. Write tests for:
   - `summarizeHealthCheckResults(results)` in `src/domain/health-monitoring/summarizeHealthCheckResults.test.ts`
2. Refactor `summarizeHealthCheckResults.ts` to be:
   - Correct
   - Readable and maintainable
   - Pure (no side effects)

### B) Tests + refactor: API wrapper (required)

1. Write tests for:
   - `getHealthCheckResults({ heatPumpId })` in `src/domain/health-monitoring/getHealthCheckResults.test.ts`
2. Refactor `getHealthCheckResults.ts` while keeping behavior.

**What the API wrapper must do (behavior contract):**
- Calls `api.get('/health-check-results-by-heat-pump-id', { params })`
- Always includes `params.heatPumpId`
- Conditionally includes `params.code` when `process.env.WEHEAT_FUNCTIONS_API_KEY` is set

### C) AI usage log (required)

Fill in `interview-ai-log.md`:
- Which tools you used
- The prompts you used (3–8 is fine)
- 2 examples where AI output was wrong and you corrected it (explain why)
- How you validated your work

## How to run

```bash
npm install
npm test
```

## What we evaluate

- Test quality (edge cases, clear assertions, stability)
- Refactor quality (readable, small functions, types)
- Mocking approach (clean, minimal, reliable)
- AI usage maturity (accelerate + verify + correct)


