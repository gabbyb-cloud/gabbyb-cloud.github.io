# Gabby B. — Engineering Portfolio

Public software engineering portfolio focused on **Site Reliability Engineering, Platform Engineering, backend systems, and operational reliability**.

**Live site:** https://gabbyb-cloud.github.io/

## Portfolio Focus

The site highlights engineering work around:

- Linux operations and troubleshooting
- Kubernetes, Helm, and Terraform
- Prometheus/Grafana observability
- SLOs, alerting, incident response, and recovery
- Distributed systems and backend reliability
- PostgreSQL, Redis, performance analysis, and failure fallback
- Durable workflows with Temporal
- CI/CD and reproducible local environments

## Featured Case Studies

- **SRE Reliability Lab** — Kubernetes operations, observability, SLOs, alerting, controlled failure injection, recovery verification, runbooks, and incident documentation
- **Linux Operations Lab** — Linux services, permissions, networking, logs, system health, troubleshooting, and Bash automation
- **Order Fulfillment with Temporal** — durable workflows, retries, failure classification, Saga compensation, cancellation behavior, and crash recovery
- **Distributed Systems Performance Lab** — connection pooling, Redis caching and fallback, concurrency, throughput, and tail-latency analysis

## Design

The portfolio is intentionally lightweight and fast to review:

- Static HTML, CSS, and JavaScript
- No framework or build step
- Responsive layout
- Keyboard-accessible navigation
- GitHub Pages deployment
- Project-focused presentation with dedicated case-study pages

## Project Structure

```text
gabbyb-cloud.github.io/
├── assets/
│   ├── css/
│   └── js/
├── projects/
│   ├── distributed-systems-performance.html
│   ├── linux-operations-lab.html
│   ├── order-fulfillment.html
│   └── sre-reliability-lab.html
├── 404.html
├── favicon.svg
├── index.html
├── robots.txt
├── sitemap.xml
└── README.md
```

## Local Preview

From the repository root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

The site is deployed from the `main` branch with GitHub Pages.

Because the portfolio is static, deployment requires no application server, paid hosting service, or build pipeline.
