export const SamplePlanText = `# Jars define how your money is being partitioned.
jars:
  necessity: 25%
  security: 200000
  education: 0%
  lifestyle: 10%
  dream: 5%

# Investments define how the rest of your money will be invested.
investments:
  Gold: 10%
  Thai Market: 10%
  Cash: 20%
  Dividend Stocks: 20%
  Global Market: 40%

# Budgets define how much budget you've allocated to each spending category.
budgets:
  condo:
    jar: necessity
    rent: fixed monthly 6000
    common fee: fixed yearly 15000
    water: monthly 500
  transit:
    jar: necessity
    electricity: monthly 2500
    motorcycle: daily transit (10 * 2)
    bts: monthly transit (950 + 500)
  food:
    jar: necessity
    dining: daily 200
    snacks: daily 200
    cooking: monthly 8000`
