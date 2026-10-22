# Subscription pricing — 22 October 2026

All amounts below are LKR unless marked USD. This is the internal planning model, not a measured supplier invoice. The website shows subscription prices only.

| Plan | Monthly price | Included minutes | Simultaneous calls | Budgeted cost at full usage | Contribution | Margin |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Starter | 49,900 | 300 | 1 | 31,500 | 18,400 | 36.9% |
| Growth | 99,900 | 1,000 | 3 | 53,000 | 46,900 | 46.9% |
| Scale | 249,900 | 3,000 | 5 | 111,000 | 138,900 | 55.6% |
| Custom | Quoted | Tailored | Tailored | Calculated for the workload | Target at least 50% | Quoted |

## Verified stack and usage

- Runtime: `voice-agent/app/gemini.py` uses `gemini-3.8-live`, with direct Meta WhatsApp WebRTC. There is no separate paid ASR or TTS service and no Pinecone dependency in the call path; business knowledge and catalogue tools query Neon.
- Hosting: AWS inventory confirmed a running `t4g.small` in Mumbai. The portal and marketing website use Netlify. Calls are persisted in Neon and MP3 recordings are archived to S3. Cloudflare provides the tunnel; no paid Cloudflare plan is assumed.
- Read-only Neon analysis found 21 calls containing a Gemini 3.8 connection event and saved usage, spanning 27.576 minutes. Sessions with reconnects may contain more than one connection event. Older 3.1-only calls were excluded. This is a small development sample, not a representative production cohort.
- Google publishes Gemini 3.8 Live prices of $0.75/M text input tokens, $3/M audio input, $4.50/M text output and $12/M audio output. Conversation context is included in the saved prompt counts; do not estimate cost using audio duration alone.
- Sample token totals: text input 195,023; audio input 155,170; audio output 21,902; thoughts 9,148; unclassified prompt 43,468; unclassified response 751.
- Conservative valuation: `(195023 × .75 + 155170 × 3 + 21902 × 12 + 9148 × 12 + 43468 × 3 + 751 × 12) / 1,000,000 = $1.12379325`. Thoughts and unclassified output are deliberately valued at the higher audio-output rate. This may overcount usage already represented by other fields or repeated metadata; it is a planning proxy, not reconstructed billing.
- Weighted sample cost: $0.04075/minute. Call-level 90th percentile: $0.04959/minute; maximum: $0.06837/minute. With the planning FX of 350 LKR/USD, these are approximately Rs14.26, Rs17.36 and Rs23.93 per minute.

## Budget and calculations

Use **350 LKR/USD as a planning assumption**, not a claim about the live exchange rate. Do not rely on provider credits or free tiers.

Variable reserve per minute: `$0.07 × 350 + Rs0.50 = Rs25`. The Rs0.50 allowance covers incremental recording storage, requests and traffic. Recording retention and actual bandwidth must be monitored; this is not an unlimited-retention promise. The $0.07 AI reserve is above the observed sample maximum, but long sessions or more complex prompts can still exceed it.

Budget a full shared infrastructure baseline of **$60/month = Rs21,000**: runtime, disk and IPv4 $20; Neon $15; Netlify $20; S3/traffic $5. These are operating budgets rather than confirmed account bills. Neon and Netlify values use their public paid-plan guidance. The runtime reserve includes headroom rather than reusing an introductory EC2 promotion. Higher concurrency may require a larger instance; capacity must be load-tested before onboarding.

Each subscription is costed against the **entire baseline**, so the first customer does not rely on five other customers to subsidise hosting. Additional per-customer support/onboarding reserves are Rs3,000, Rs7,000 and Rs15,000 respectively, giving fixed reserves of Rs24,000, Rs28,000 and Rs36,000. Guided onboarding is included within this reserve; bespoke integrations are separately quoted.

- Starter: `300 × 25 + 24,000 = 31,500`; contribution `49,900 − 31,500 = 18,400`.
- Growth: `1,000 × 25 + 28,000 = 53,000`; contribution `99,900 − 53,000 = 46,900`.
- Scale: `3,000 × 25 + 36,000 = 111,000`; contribution `249,900 − 111,000 = 138,900`.
- Margin: `(price − budgeted cost) / price`. These are contribution margins after the stated reserves, before tax, payment fees, acquisition costs, general salaries and other overhead. They are not guaranteed net profit.
- Custom: estimate variable usage, dedicated capacity, support and integration work; quote at least `estimated cost / 0.5` for a 50% target margin. Review any paid WhatsApp templates or business-initiated calls separately. No outbound calling allowance is offered here.

The calculator chooses the cheapest plan covering both minutes and simultaneous calls. Average conversations over ten minutes go to Custom because the short-call sample does not validate their context cost. More than 3,000 monthly minutes or five concurrent calls also goes to Custom. Monthly allowances do not roll over; additional usage requires an agreed upgrade or quote. Taxes, paid message templates and bespoke integrations are excluded from advertised prices. Ordinary relevant WhatsApp follow-ups remain standard functionality.

This change is a marketing calculator and enquiry flow. It does not implement subscription billing, usage enforcement or runtime concurrency provisioning. Agree and configure limits during onboarding; monitor actual usage before promising a fixed cost at scale.

## Sources

- Google model rates: https://ai.google.dev/gemini-api/docs/pricing
- Neon Launch pricing: https://neon.com/pricing
- Netlify Pro pricing: https://www.netlify.com/pricing/
- AWS public IPv4 pricing: https://aws.amazon.com/vpc/pricing/
- Meta inbound calling reference: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/pricing (Meta returned HTTP 429 during verification; no unverified Meta rate is presented as a confirmed invoice rate).

Review this model after a representative production month, longer-call samples, any model change, or a material exchange-rate change.
