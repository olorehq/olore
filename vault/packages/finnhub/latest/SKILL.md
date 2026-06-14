---
name: olore-finnhub-latest
description: Local Finnhub API documentation reference (latest). Use for real-time stock/forex/crypto prices, company fundamentals and financials, earnings, news and sentiment, ETF/mutual fund holdings, economic data, alternative data (insider transactions, congressional trading, ESG), and WebSocket trades.
---

# Finnhub API Documentation

Finnhub provides a REST API and WebSocket feed for financial market data. This package covers the complete endpoint catalog plus Python SDK usage patterns.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/endpoints/default-api.md` | DefaultApi — Endpoint Catalog | OpenAPI-generated table of all ~100 endpoints: HTTP method, URL path (`/stock/candle`, `/forex/rates`, etc.), and parameter list. **Start here** for any question about what endpoint exists or what parameters it accepts. All URIs are relative to `https://finnhub.io/api/v1`. |
| `contents/usage/python-readme.md` | Python SDK README | Installation (`pip install finnhub-python`), client setup (`finnhub.Client(api_key=...)`), and per-endpoint Python method calls. Maps endpoint names to SDK methods. |
| `contents/usage/python-examples.py` | Python Examples | Executable script with 30+ real `finnhub_client.*` calls covering stocks, bonds, ESG, congressional trading, market status, earnings estimates, and alternative data. Use as a call-signature reference. |

## When to Use

Use this skill when the user asks about:
- Real-time and historical stock prices, candles, quotes (`/stock/candle`, `/quote`)
- Forex and crypto rates (`/forex/rates`, `/crypto/candle`)
- Company fundamentals: profile, financials, earnings, EPS/revenue/EBIT estimates
- News and sentiment: company news, market news, news sentiment scores
- ETF and mutual fund holdings and profile data
- Economic data: economic calendar, economic indicators
- Alternative data: insider transactions, congressional trading, supply-chain relationships
- ESG scores (current and historical)
- WebSocket real-time trades feed
- Bond price, tick, profile, and yield curve data
- Technical indicators and aggregate signals
- Market status, market holidays, earnings call schedules

## How to Find Information

1. **For any endpoint question** — read `contents/endpoints/default-api.md`. The summary table at the top lists every endpoint with its HTTP method, URL path, and a link to full parameter details lower in the file.
2. **For Python call signatures** — read `contents/usage/python-readme.md` for the common methods, or `contents/usage/python-examples.py` for concrete working calls.
3. **Endpoint-to-method mapping** — the Python method name mirrors the endpoint name in snake_case (e.g. `CompanyEarnings` → `finnhub_client.company_earnings()`).
