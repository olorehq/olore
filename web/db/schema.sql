-- olore download counter schema (Neon Postgres).
-- Run once against the Neon database after provisioning the Vercel Marketplace
-- integration (provides DATABASE_URL). Idempotent — safe to re-run.

create table if not exists downloads (
  name    text   not null,
  version text   not null,
  count   bigint not null default 0,
  primary key (name, version)
);

-- Optional daily trend. Drop if you don't want per-day breakdowns.
create table if not exists downloads_daily (
  day   date   not null,
  name  text   not null,
  count bigint not null default 0,
  primary key (day, name)
);
