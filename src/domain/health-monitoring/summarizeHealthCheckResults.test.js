const {healthCheckResultsFixture} = require('./fixtures/healthCheckResults.fixture');
const {summarizeHealthCheckResults} = require('./summarizeHealthCheckResults');

describe('summarizeHealthCheckResults', () => {
  it('TODO: empty results', () => {
    // This test should FAIL until you implement it properly.
    throw new Error('TODO: write this test');
  });

  it('TODO: counts severities correctly and returns the most severe overallSeverity', () => {
    // This test should FAIL until you implement it properly.
    // Use healthCheckResultsFixture to avoid writing too much data by hand.
    const summary = summarizeHealthCheckResults(healthCheckResultsFixture);
    expect(summary).toBeDefined();
    throw new Error('TODO: write assertions');
  });
});


