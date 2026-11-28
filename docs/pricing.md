# Subscription pricing model — 28 November 2026

## Proposed customer plans

| Plan | Monthly price | Voice minutes | WhatsApp replies |
| --- | ---: | ---: | ---: |
| Starter | Rs 14,999 | 500 | 500 |
| Growth | Rs 34,999 | 1,500 | 2,000 |
| Scale | Rs 74,999 | 3,000 | 5,000 |
| Custom | Quoted | Tailored | Tailored |

Each plan includes multilingual voice, the configured business knowledge, call transcripts, and the monthly allowances shown above. Recommend a plan against both voice minutes (`calls × average call length`) and replies. Count each generated WhatsApp answer as one reply. Monthly allowances do not roll over. Confirm overage rates, concurrency, integrations, and capacity in writing before activation; the portal does not yet enforce these plan allowances or automatically bill overages.

## Cost assumptions

- **Voice:** use the owner's Rs 8 per elapsed call minute as a conservative planning reserve. Google's current Gemini 3.8 Live paid rates are $0.005 per minute of input audio and $0.018 per minute of output audio. At the planning exchange rate of Rs 333/USD, charging both full audio rates for every elapsed minute gives Rs 7.66/minute. Real usage varies with who is speaking, token counts, and the account's paid/free tier. The normal built-in voice avoids the separate generated-voice path used by the old company demo.
- **WhatsApp AI replies:** the last 90 days contained only nine metered `gemini-3.8-flash` replies across customer workspaces, averaging 2,565 input and 59 output tokens. At published paid rates of $0.75/M input and $3.75/M output, this small sample estimates Rs 0.71 per reply at Rs 333/USD. Google lists doubled token rates from 1 January 2027, making the same sample about Rs 1.43. Use **Rs 2.50 per reply** as a temporary reserve for package planning; nine replies are not enough to establish a reliable long-run average.
- **Support:** reserve Rs 500, Rs 1,000 and Rs 2,000 per month for Starter, Growth and Scale. These are planning allowances, not time-sheet measurements.
- **Shared hosting:** keep Rs 21,000/month as a platform-wide planning budget, not a customer invoice or measured bill. Reconcile it against current AWS, Neon, Netlify, Cloudflare and recording-storage invoices before scaling ad spend.

Sources: [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing), [Neon pricing](https://neon.com/pricing), [Netlify pricing](https://www.netlify.com/pricing/), and [AWS VPC pricing](https://aws.amazon.com/vpc/pricing/).

## Full-allowance contribution model

Using Rs 8/minute for voice, Rs 2.50/reply reserve, and the support reserves above:

| Plan | Revenue | Voice reserve | Reply reserve | Support reserve | Contribution before shared hosting |
| --- | ---: | ---: | ---: | ---: | ---: |
| Starter | 14,999 | 4,000 | 1,250 | 500 | 9,249 |
| Growth | 34,999 | 12,000 | 5,000 | 1,000 | 16,999 |
| Scale | 74,999 | 24,000 | 12,500 | 2,000 | 36,499 |

One customer on each plan contributes Rs 62,747 before fixed hosting, or Rs 41,747 after the Rs 21,000 hosting budget. This leaves room for overhead while protecting against longer message context and provider-rate changes. It is not net profit: payment fees, taxes, ad spend, salaries, extraordinary support and contract-specific services are excluded. The proposed prices should be reviewed against actual invoices and real reply usage monthly during the first ad cohort.

## Product and billing boundaries

- Sell a monthly service subscription with explicit minute and reply allowances, not unmarked per-call rates.
- Quote custom integrations, paid WhatsApp templates, exceptional data work, and higher concurrency separately.
- Any extra usage or plan change needs a written price agreed before it is delivered; build usage alerts/enforcement before promising automatic caps or overage billing.
- The public calculator recommends a package only. It does not create a subscription, reserve capacity, or guarantee a final quote.
