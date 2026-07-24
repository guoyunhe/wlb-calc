# WLB Calculator

Test if your job is good enough for a healthy life.

## Parameters

- **Daily Working Hours** - Hours spent at work each day
- **Daily Commute Hours** - Hours spent commuting to/from work each day
- **Weekly Working Days** - Number of days working per week
- **Annual Paid Leave Days** - Number of paid vacation days per year
- **Annual Paid Sick Leave Days** - Number of paid sick leave days per year
- **After-Hours Communication** - Hours spent on work communication outside working hours per day

## Algorithm

The score starts at 100 and is deducted based on the following rules:

| Parameter                 | Ideal Value | Penalty Weight | Penalty Type |
| ------------------------- | ----------- | -------------- | ------------ |
| Daily Working Hours       | 7 hours     | 10             | excess       |
| Daily Commute Hours       | 1 hour      | 5              | excess       |
| After-Hours Communication | 0 hours     | 5              | direct       |
| Weekly Working Days       | 5 days      | 40             | excess       |
| Annual Paid Leave         | 20 days     | 0.5            | deficit      |
| Annual Sick Leave         | 10 days     | 0.5            | deficit      |

### Penalty Types

- **excess**: Score -= max(0, value - ideal) * penaltyWeight
- **deficit**: Score -= max(0, ideal - value) * penaltyWeight
- **direct**: Score -= value * penaltyWeight

The final score is clamped between 0 and 100.

## Score Levels

| Grade | Score Range | Description                                 |
| ----- | ----------- | ------------------------------------------- |
| **A** | 90-100      | Excellent - Perfect work-life balance       |
| **B** | 80-89       | Good - Basic balance with slight pressure   |
| **C** | 60-79       | Average - Need to pay attention to workload |
| **D** | 40-59       | Poor - Suggest adjusting work status        |
| **E** | 0-39        | Very Poor - Run! Please run!                |

## Presets

- **955** (Green) - 9 AM to 5 PM, 5 days a week
- **965** (Green) - 9 AM to 6 PM, 5 days a week
- **995** (Orange) - 9 AM to 9 PM, 5 days a week
- **大小周** (Red) - Alternating 6-day/5-day workweeks
- **996** (Red) - 9 AM to 9 PM, 6 days a week

## Tech Stack

- React 18
- Mantine UI
- i18next (Chinese/English)
- Vite
- TypeScript

## Development

```bash
pnpm install
pnpm run dev
```

## Build

```bash
pnpm run build
```

## Acknowledgments

- [955.WLB](https://github.com/formulahendry/955.WLB)
