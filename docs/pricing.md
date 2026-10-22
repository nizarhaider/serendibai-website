# Subscription pricing — 22 October 2026

All amounts are LKR. The website shows monthly subscriptions and included minutes, never a per-call or per-minute selling price.

## Current packages

| Plan | Monthly price | Included minutes | Voice cost at full usage | Voice gross margin |
| --- | ---: | ---: | ---: | ---: |
| Starter | 9,999 | 600 | 4,800 | 52.0% |
| Growth | 24,999 | 2,000 | 16,000 | 36.0% |
| Scale | 49,999 | 5,000 | 40,000 | 20.0% |
| Custom | Quoted | Tailored | Calculated individually | Quoted for the workload |

Use the owner's supplied **Rs8 per conversation minute** as the voice-cost assumption. This replaces the earlier Rs25/minute planning reserve; it is not newly verified provider billing. Cost is `included minutes × 8`; voice gross margin is `(subscription − voice cost) / subscription`.

## Hosting, support and business profit

The stack remains Gemini Live over direct WhatsApp WebRTC, an AWS runtime, Neon for business data and call records, Netlify for the website and portal, S3 for recordings, and a Cloudflare tunnel. There is no separate ASR/TTS charge or Pinecone dependency in the voice path.

Keep the earlier **Rs21,000/month shared infrastructure budget** as an explicit planning allowance, rather than charging the whole platform to every customer: runtime/disk/IPv4 Rs7,000, Neon Rs5,250, Netlify Rs7,000, and S3/traffic Rs1,750. These are budgets, not measured bills; they use the earlier planning FX of Rs350/USD. Do not add the variable Gemini voice cost again within this fixed hosting budget. Recording traffic, retention and concurrency may require a larger reserve as usage grows.

Allow monthly support/onboarding reserves of Rs500 for Starter, Rs1,000 for Growth and Rs2,000 for Scale. Bespoke integration work is quoted separately.

| Plan | Revenue | Full-allowance voice cost | Support reserve | Contribution toward shared hosting and profit |
| --- | ---: | ---: | ---: | ---: |
| Starter | 9,999 | 4,800 | 500 | 4,699 |
| Growth | 24,999 | 16,000 | 1,000 | 7,999 |
| Scale | 49,999 | 40,000 | 2,000 | 7,999 |

Business operating contribution is `sum(customer contributions) − 21,000`. At full allowance, five Starter customers contribute Rs2,495 after the shared budget; three Growth or three Scale customers contribute Rs2,997. One customer on each package contributes `4,699 + 7,999 + 7,999 − 21,000 = −Rs303/month`. Doubling the included minutes reduces margins: the packages still cover their voice cost and support reserves, but the customer mix must cover shared hosting. These figures exclude taxes, payment fees, acquisition costs, general salaries and other overhead; they are not guaranteed net profit.

## Calculator and commercial scope

Recommend the cheapest package covering monthly minutes, calculated as `inbound calls per month × average minutes per call`. Above 5,000 monthly minutes, recommend Custom. There is no separate conversation-duration gate.

Maximum simultaneous calls is collected only for setup planning and included in the WhatsApp enquiry. It does not multiply monthly minutes, affect the recommendation, or define a tier allowance. Confirm provisioned capacity during onboarding; the calculator does not promise unlimited concurrency.

Monthly allowances do not roll over. Additional usage requires an agreed upgrade or custom quote. Prices exclude applicable taxes, paid WhatsApp templates and bespoke integrations. Ordinary relevant WhatsApp follow-ups remain standard functionality. Final capacity is confirmed during onboarding.

This change is a marketing calculator and enquiry flow. Subscription billing, automatic usage enforcement and runtime concurrency provisioning are not implemented by this change. Monitor actual supplier costs and review the Rs8 assumption against production billing.

## Earlier evidence

The initial analysis inspected saved Neon usage for 21 calls containing a Gemini 3.8 connection, spanning 27.576 minutes. Its conservative token proxy included high-rate assumptions for thoughts and unclassified tokens and possible repeated metadata; it was not a provider invoice. The owner subsequently supplied Rs8/minute as the pricing basis. Do not present either that proxy or the new assumption as an audited cost.

Provider reference links from the initial review: https://ai.google.dev/gemini-api/docs/pricing, https://neon.com/pricing, https://www.netlify.com/pricing/, https://aws.amazon.com/vpc/pricing/.
