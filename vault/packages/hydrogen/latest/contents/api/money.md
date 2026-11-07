---
title: Money
description: >-
  The formatMoney function formats a MoneyV2 value or a same-currency price
  range for display. Use the function to show product prices, compare-at prices,
  and price ranges in the active market's locale.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/money'
  md: 'https://shopify.dev/docs/api/hydrogen/latest/money.md'
api_name: hydrogen
---

# Money

The `formatMoney` function formats a `MoneyV2` value or a same-currency price range for display. Use the function to show product prices, compare-at prices, and price ranges in the active market's locale.

Import `formatMoney` from `@shopify/hydrogen`.

***

## Price formatting

## format​Money(**[money](#formatmoney-propertydetail-money)**​,**[options](#formatmoney-propertydetail-options)**​)

Formats a price or a price range for display. Pass a `MoneyV2` price, or an array of `MoneyV2` prices in one currency for a range, with the active market's locale.

The returned object converts to the formatted string in template literals and string concatenation. For custom price layouts, read the parts of the formatted price. A range shows the lowest and highest prices. When every price in the range matches, the output shows one price.

The function throws an error when an amount isn't numeric, when a range is empty, or when the prices in a range use different currencies.

### Parameters

* **money**

  **MoneyV2 | readonly MoneyV2\[]**

  **required**

  A price, or an array of prices in one currency for a range.

* **options**

  **FormatMoneyOptions**

  **required**

  Locale and display settings.

### Returns

* **FormattedMoney | FormattedMoneyRange**

  The formatted price or range, which converts to a string in template literals.

### MoneyV2

A price with an amount and a currency code, in the \`MoneyV2\` shape that the Storefront API and Customer Account API return. The currency code accepts any string, including Customer Account API currencies such as USDC that the Storefront API currency enum doesn't list.

* amount

  Decimal amount as a string, such as \`19.99\`. \`formatMoney\` throws an error when the amount doesn't parse as a number.

  ```ts
  string
  ```

* currencyCode

  Currency code, such as \`USD\`, in any letter case. A code that isn't three letters formats as a decimal amount followed by the code, such as \`19.00 USDC\`. An unrecognized three-letter code appears as the code, such as \`XYZ 19.00\`.

  ```ts
  string
  ```

### FormatMoneyOptions

Locale and display settings for a formatted price or price range.

* currencyDisplay

  How the currency appears: \`symbol\`, \`narrowSymbol\`, \`code\`, or \`name\`. Defaults to \`symbol\`. In the \`en-US\` locale, the \`symbol\` value tells dollar currencies apart, such as \`CA$5.00\`. The \`narrowSymbol\` value shows \`$5.00\` for every dollar currency.

  ```ts
  keyof NumberFormatOptionsCurrencyDisplayRegistry
  ```

* locale

  BCP 47 locale, such as \`en-US\`, \`fr-CA\`, or \`ja-JP\`. In market-aware storefronts, pass the active market's locale. A hardcoded \`en-US\` formats every market as US English.

  ```ts
  string
  ```

* maximumFractionDigits

  Most fraction digits to show. Defaults to the currency's standard number of digits, such as 0 for JPY. Output without a currency symbol defaults to 2.

  ```ts
  number
  ```

* minimumFractionDigits

  Fewest fraction digits to show. Defaults to the currency's standard number of digits, such as 0 for JPY. Output without a currency symbol defaults to 2.

  ```ts
  number
  ```

* withoutCurrency

  Pass \`true\` to leave out the currency symbol or code. Defaults to \`false\`.

  ```ts
  boolean
  ```

* withoutTrailingZeros

  Pass \`true\` to drop the fraction digits of a whole amount, such as \`$19.00\` to \`$19\`. Amounts with a fraction keep their digits. Defaults to \`false\`. For a range, defaults to \`true\` when every price is a whole amount and you set neither fraction digit option.

  ```ts
  boolean
  ```

### FormattedMoney

A formatted price, with structured parts for custom price layouts.

* amount

  Formatted number without the currency, such as \`1,299.00\` or \`-19.99\`.

  ```ts
  string
  ```

* currencyName

  Currency name in the locale's language, such as \`US dollars\`. Falls back to the currency code.

  ```ts
  string
  ```

* currencyNarrowSymbol

  Narrow currency symbol, such as \`$\` for both USD and CAD. For a code that isn't three letters, holds the code.

  ```ts
  string
  ```

* currencySymbol

  Currency part of the formatted price, such as \`$\`, \`€\`, or \`CA$\`. Follows the \`currencyDisplay\` option. For a code that isn't three letters, holds the code. For other codes, empty when \`withoutCurrency\` is \`true\`.

  ```ts
  string
  ```

* localizedString

  Formatted price, such as \`$1,299.00\`.

  ```ts
  string
  ```

* numericAmount

  Amount as a number.

  ```ts
  number
  ```

* parts

  Typed pieces of the formatted price, such as the currency, integer, and fraction, for custom layouts.

  ```ts
  NumberFormatPart[]
  ```

* toString

  Returns the formatted price. Template literals and string concatenation call the method for you.

  ```ts
  () => string
  ```

* withoutTrailingZeros

  Formatted price without the fraction digits of a whole amount, such as \`$19\`.

  ```ts
  string
  ```

* withoutTrailingZerosAndCurrency

  Formatted amount without the currency and without the fraction digits of a whole amount, such as \`19\`.

  ```ts
  string
  ```

### FormattedMoneyRange

A formatted price range, with its lowest and highest prices.

* currencyCode

  Currency code that every price in the range shares, in uppercase.

  ```ts
  string
  ```

* localizedString

  The formatted range, such as \`$10 – $19\`.

  ```ts
  string
  ```

* max

  Highest price in the input.

  ```ts
  MoneyV2
  ```

* min

  Lowest price in the input.

  ```ts
  MoneyV2
  ```

* toString

  Returns the formatted range. Template literals and string concatenation call the method for you.

  ```ts
  () => string
  ```

### Examples

* #### Format a price

  ##### Description

  Wrap \`formatMoney\` in a small app function. This example reads the localized string and the string without trailing zeros.

  ##### TypeScript

  ```ts
  import { formatMoney, type MoneyV2 } from "@shopify/hydrogen";

  export function formatPrice(money: MoneyV2, locale = "en-US"): string {
    return formatMoney(money, { locale }).toString();
  }

  const price = formatMoney({ amount: "19.00", currencyCode: "USD" }, { locale: "en-US" });
  price.localizedString;
  // "$19.00"
  price.withoutTrailingZeros;
  // "$19"
  ```

* #### Format a price range

  ##### Description

  Format a product's price range as one string. This example strips trailing zeros with \`withoutTrailingZeros\` when both prices are whole numbers.

  ##### TypeScript

  ```ts
  import { formatMoney, type MoneyV2 } from "@shopify/hydrogen";

  export function formatPriceRange(
    priceRange: { minVariantPrice: MoneyV2; maxVariantPrice: MoneyV2 },
    locale: string,
  ) {
    return formatMoney([priceRange.minVariantPrice, priceRange.maxVariantPrice], {
      locale,
      withoutTrailingZeros: true,
    }).toString();
  }
  ```

***
