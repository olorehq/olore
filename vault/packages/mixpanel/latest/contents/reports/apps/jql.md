# JQL: Create custom queries using Javascript code

> ❗️JQL is currently in maintenance mode. We recommend discontinuing use of JQL and using an [alternate method](/docs/export-methods) to get the data you need. Below are alternatives for common use cases and you need help deciding the best method for you, reach out to [support](https://mixpanel.com/contact-us/support).
> - Raw Event export: [Export API](https://developer.mixpanel.com/reference/raw-data-export-api) or [Data Pipelines](/docs/data-pipelines)
> - User Profile export: [Engage Query API](https://developer.mixpanel.com/reference/engage-query) or [Data Pipelines](/docs/data-pipelines)
> - Other reporting: [Query API](https://developer.mixpanel.com/reference/query-api) or in-app [Core Reports](/docs/reports)
>  
> ❗️JQL is a self-serve tool. If you choose JQL, your developer team will be responsible to write and maintain the query logic.

The JQL JavaScript code must define a `main()` function. This JavaScript will be compiled, and the `main()` function will be executed by the query engine. The return value of `main()` must be a sequence of zero or more transformations applied to a collection of events, user records or joined records.  
Events are retrieved by calling the `Events()` function.

For example, the following query counts the number of events that happened on one day in 2016:

```javascript Example
function main() {
  return Events({
    from_date: "2016-01-04",
    to_date: "2016-01-04"
  }).reduce(mixpanel.reducer.count());
}
```



## Querying Events

The events collection is fetched by calling `Events()` with a single object argument that describes what events should be fetched. 
```javascript Example
function main() {
  // Get all signups and purchases by users with email addresses
  // from Yahoo or Gmail between January 1st and January 2nd
  return Events({
    from_date: '2016-01-01',
    to_date: '2016-01-02',
    event_selectors: [
        {event: 'signup', label: 'Signup'},
        {event: 'purchase', selector: '"yahoo" in properties["$email"]',
            label: 'Purchase (Yahoo)'},
        {event: 'purchase', selector: '"gmail" in properties["$email"]',
            label: 'Purchase (Gmail)'}
    ]
  })
}
```



## Event Object Specification

The event objects returned from `Events()` have the following attributes:

| Attribute           | Type                                              | Description                                                                                                                                                                                                                                                    |
| :------------------ | :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **name**            | <span style="font-family: courier">string</span>  | The name of the event.                                                                                                                                                                                                                                         |
| **distinct_id**     | <span style="font-family: courier">string</span>  | The distinct_id of the user associated with this event. If distinct_id was not sent with the event, this will be undefined.                                                                                                                                    |
| **time**            | <span style="font-family: courier">integer</span> | The timestamp of the event, expressed as milliseconds since January 1, 1970 in your project's timezone, not UTC.                                                                                                                                               |
| **sampling_factor** | <span style="font-family: courier">float</span>   | The rate at which this event was sampled (if you are using Mixpanel's sampling feature). 0.05 means the event is being sampled at 5%. This is important for getting accurate counts of sampled events. If you are not using sampling, this will always be 1.0. |
| **properties**      | <span style="font-family: courier">object</span>  | An object containing all of the properties of the event.                                                                                                                                                                                                       |

## Querying Profiles

Profile data is fetched by calling `People()`

| Argument           | Type                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                |
| :----------------- | :--------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **user_selectors** | <span style="font-family: courier">array</span></br><span style="color: green">optional</span> | An optional list of {selector: "Segmentation expression"} objects that restrict user records retrieved. A record is retrieved if it matches any of the expressions. Segmentation expression in user selectors expressions can only access user properties, not event properties. See also information on Segmentation expressions as [argument to Events()](https://developer.mixpanel.com/reference/segmentation-expressions). |

```javascript Example
function main() {
  // get all users who signed up in 2016
  return People(
  ).filter(function(user){
    return user.properties.signup_date >= new Date("2016-01-01") &&
           user.properties.signup_date < new Date("2017-01-01");
  });
}
```



or, equivalently:

```javascript Example
function main() {
  // get all users who signed up in 2016
  return People({
    user_selectors:[{selector:
        'has_prefix(string(user["signup_date"]), "2016")'}]
  });
}
```



## User Object Specification

The user objects returned from `People()` have the following attributes:

| Attribute       | Type                                              | Description                                                                                                                                                 |
| :-------------- | :------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **distinct_id** | <span style="font-family: courier">string</span>  | The distinct_id of the user.                                                                                                                                |
| **time**        | <span style="font-family: courier">integer</span> | The timestamp of the most recent user record update, expressed as milliseconds since January 1, 1970 in your project's timezone, not UTC.                   |
| **last_seen**   | <span style="font-family: courier">integer</span> | The timestamp of the most recent user record update provided via Set() method, expressed as milliseconds since January 1, 1970, in your project's timezone. |
| **properties**  | <span style="font-family: courier">object</span>  | An object containing all of the properties of the user.                                                                                                     |

## Combining Events and Profiles

You can combine (join) events and profile data using `join(Events(), People())` expression.

Apart from joined collection, join() accepts an optional third argument: an object with join options:

| Argument      | Type                                                                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :------------ | :---------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **type**      | <span style="font-family: courier">string</span></br><span style="color: green">optional</span> | Join type: full, left, right or inner. Default is a full join.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **selectors** | <span style="font-family: courier">string</span></br><span style="color: green">optional</span> | An optional list of {event: "event name", selector: "Segmentation expression"} objects that restrict event/user pairs retrieved. A record is retrieved if it matches any of the selector objects. To learn more about selectors, refer to [Segmentation API](https://developer.mixpanel.com/reference/segmentation-expressions). Segmentation expressions in join() selectors can access both events and user properties. |

```javascript Example
function main() {
  return join(
    Events({
      from_date: "2016-01-01",
      to_date: "2016-06-01",
    }),
    People(),
    // Fetch tuples that satisfy multiple conditions:
    // * They're both event and user records.
    // * Event is sent from US.
    // * User age is above thirty.
    {
      type:"inner",
      selectors:[{selector:
        'properties["country"] == "US" and user["age"] > 30'}]
    }
  );
}
```



## Joined Object Specification

The objects returned from `join()` have the following attributes:

| Attribute       | Type                                             | Description                                                                                                                                          |
| :-------------- | :----------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| **distinct_id** | <span style="font-family: courier">string</span> | The distinct_id of both event and matching user.                                                                                                     |
| **event**       | <span style="font-family: courier">object</span> | Event object. For users with no events, this property is undefined                                                                                   |
| **user**        | <span style="font-family: courier">object</span> | User object with distinct_id matching the event. For events without distinct id or when there's no matching user record, this property is undefined. |

## join() Operation Details

You cannot apply any transformations to the collections inside `join()`. For example, this is not legal: `join(Events(...).map(...)`, `People(...).filter())`

## Passing Parameters to a Query

The query engine creates and populates a `params` object inside the global context. The object is constructed from a JSON blob passed as the params argument to the JQL HTTP endpoint.

Query parameters allow you to write more flexible and reusable queries. We recommend populating Events `from_date/to_date` using params to make the query code reusable across different date ranges.

For example, you could pass these params:

```javascript Example
params = {
  start_date: "2016-01-01",
  end_date: "2016-01-10",
  event: "View Blog"
}
```



to this query:

```javascript Example
function main() {
  return Events({
    from_date: params.start_date,
    to_date: params.end_date,
  }).filter(function(event) { return event.name == params.event })
}
```



Alternatively, and more efficiently, you can pass multiple events as a list in a `params` object using `_.map`.

For example, you could pass these params:

```javascript Example
params = {
  start_date: "2016-01-01",
  end_date: "2016-01-10",
  events: ["View Blog", "View Landing Page", "pageview"]
};
```



to this query:

```javascript Example
function main() {
  return Events({
    from_date: params.start_date,
    to_date: params.end_date,
    event_selectors: _.map(params.events, event => ({event: event}))
  });
}
```



# Transformations

Transformations are applied to collections, taking one collection as input and producing another. A transformation takes a user-defined function (or a built-in function) that controls how the transformation works.

The JQL API provides the following set of transformations, which can be chained together to do complex analysis.

## filter(function(item) {})

Filter the collection by calling the provided function on each of its elements. If the function evaluates to true, keep the element. Otherwise, discard it.

```javascript Example
// filter for "login" events from users who signed up in January.
function main() {
  return join(
      Events({
        from_date: "2016-01-01",
        to_date: "2016-04-01"
      }),
      People())
  .filter(function(tuple) {
    return tuple.event && tuple.user &&
        tuple.event.name == "login" &&
        tuple.user.properties.signup_date >= new Date("2016-01-01") &&
        tuple.user.properties.signup_date <= new Date("2016-02-01");
  });
}
```



## map(function(item) {})

Build a new collection by applying the provided function to each element of the input collection. The output collection contains the return value of the provided function for each element in the input collection, so an input collection of size N will result in an output collection of size N.

```javascript Example
// Extract the email domain name for further analysis.
// The resulting collection contains strings.
function main() {
  return Events({
    from_date: "2016-01-01",
    to_date: "2016-01-07"
  })
  .map(function(event) {
    var pos = event.properties.$email.indexOf("@");
    return event.properties.$email.slice(pos + 1);
  });
}
```



## reduce([reducer function(s)])

`reduce()` turns the input collection into just a single value.

It takes one argument - a reducer or list of reducer functions, which must implement the following signature:

```javascript Example
function(accumulators, items) {
  // Combine previously-aggregated "accumulators"
  // with new "items" and return the result.
}
```



A reducer function accepts two arguments: an array of its previous results (accumulators), and an array of items to reduce. The first argument - accumulators - is used to break down the initial set of values into many calls of the reducer function. JQL runs the reduction in a hierarchical fashion, where some subsets of inputs are reduced to accumulator values first, and multiple accumulator values are combined subsequently. There are no guarantees on the order of input.

The example below is using a reduce function that counts elements up.

```javascript Example
// Count events.

function main() {
  return Events({
    from_date: "2016-01-01",
    to_date: "2016-01-07"
  })
  .reduce(function(previous_counts, events) {
    var count = events.length;
    for (var i = 0; i < previous_counts.length; i++) {
        count += previous_counts[i];
    }
    return count;
  });
}
```



Counting is a common use case, so JQL provides a built-in `mixpanel.reducer.count()` that could be used in place of the snippet above.

```javascript Example
// Count events.

function main() {
  return Events({
    from_date: "2016-01-01",
    to_date: "2016-01-07"
  })
  	.reduce(mixpanel.reducer.count());
}
```



While there are built-in reducer methods to address common use cases, a reducer function is flexible and can be used to aggregate inputs into a single value.  For example, returning the earliest timestamp and latest timestamp could be done using a reducer function.

```javascript Example
// Return earliest timestamp and latest timestamp of events
function main() {
  return Events({
    from_date: "2016-01-01",
    to_date: "2016-01-07"
  })
  .reduce(function(accumulators, items){
    var result = {
      earliest: null,
      latest: null
    };
    for (var i = 0; i < accumulators.length; i++) {
      result.earliest = minimum(result.earliest, accumulators[i].earliest);
      result.latest = Math.max(result.latest, accumulators[i].latest);
    }
    for (var j = 0; j < items.length; j++) {
      result.earliest = minimum(result.earliest,items[j].time);
      result.latest = Math.max(result.latest,items[j].time);
    }
    return result;
  });
}

// Helper function to return minimum value (ignoring null)
function minimum(x,y) {
  if (x === null) {
    return y;
  }
  if (y === null) {
    return x;
  }
  return Math.min(x,y);
}
```



## groupBy([keys], [reducer function(s)])

Group the collection according to the provided list of keys, then apply the provided reducer function(s) to each group. The underlying action of `groupBy()` is similar to the one of `reduce()` - aggregating many input values into one. However, the output collection is different: while `reduce()` aggregates everything into a single value, `groupBy()` produces a collection with the following structure:

```json Result
{
  "key": <composite group key>,
  "value": <return value of reducer function or list of values if composite reducer supplied>
}
```



The group key is computed from a key specification - the first argument of the `groupBy()` transformation. This argument is a list containing property names or functions that compute a key from a collection element.

If you use property names as keys, you can use dot notation (i.e., a ".") to access values inside nested objects. For example, if you had a list of objects that looked like

`{"item": "t-shirt", "info": {"size": "XL"}}`, you could group by

`["item", "info.size"]`

It is common to use dot notation to group on event properties. For example, in `Events(...).groupBy(['properties.$city', 'properties.$browser'], ...)`, each unique combination of City and Browser becomes a group, so the following groups may be output:

- ["New York", "Firefox"]
- ["San Francisco", "Firefox"]
- ["San Francisco", "Safari"]
- etc.

As with a list of keys, the `groupBy()` can accept a single reducer or a list of reducer functions. Each reducer supplied in this argument is then applied to each group key. When a list of reducer functions is provided, the value for each group key will be a list of the results from each function. Reducer functions can include both built-in and custom reducer functions. The signature of a reduce function provided to a `groupBy()` is:

```javascript Example
function(accumulators, items) {
    // Analyze items, return accummulators
}
```



```javascript Example
function main() {
  return Events({
    from_date: "2016-01-01",
    to_date: "2016-02-01",
    event_selectors: [{event: "Change Plan"}],
  })
  .groupBy(
    [
      "properties.New Plan",
      "properties.Previous Plan",
      // use a function to dynamically calculate a day of the event.
      function(ev) {
        return (new Date(ev.time)).toDateString();
      }
    ],
    [
      mixpanel.reducer.count(),
      mixpanel.reducer.any()
    ]
  );
}
```



The group key can only include scalars - strings, numbers, booleans, nulls. If a group-by property evaluates to a list of multiple scalars, `groupBy()` can treat in two different ways:

Inline that list into group key (this is the default behavior). The following query computes, for every sequence of notification campaigns each user participated in, the total number of profiles that have that sequence:

```javascript Example
function main() {
  return People().groupBy(["properties.$campaigns"],
                          mixpanel.reducer.count());
}
```



Create a different group key for each list element. The following query computes the number of users that participated in each campaign.

```javascript Example
function main() {
  return People().groupBy(
        mixpanel.multiple_keys(["properties.$campaigns"]),
        mixpanel.reducer.count())
}
```



A single query can use both key treatments, even with the same property, like in a query below:

```javascript Example
function main() {
  return People().groupBy([
          mixpanel.multiple_keys(["properties.$campaigns"]),
          "properties.$campaigns"],
        mixpanel.reducer.count());
}
```



## groupByUser([optional additional keys], [reducer function(s)])

Group events by distinct_id and, optionally, additional keys, then apply the provided reducer function(s) to each group.

This transformation is a specialization of `groupBy()` that guarantees that the reduce function(s) will process all events of a single user in temporal order.

This guarantee is reflected in the signature of the reduce function provided to `groupByUser()`:

```javascript Example
function(state, events) {
    // Analyze events, aggregate in state. Return the new state.
}
```



Its first argument is a single accumulator or a list of accumulators, but not an array of accumulators as used in `groupBy()` and `reduce()` cases. The accumulator value is always the value of last call to the reduce function, with an initial value of Undefined.

The difference in signature means that reducer function implementations can not be used interchangeably between `groupByUser()` and `groupBy()/reduce()`. Built-in reducers, however, can be used in both contexts.

The output of `groupByUser()` is a collection of objects with the following structure:

```json Example
{
  "key": [<user distinct_id>] + <optional additional keys>,
  "value": <return value of reducer function(s)>
}
```



`groupByUser()` can only be applied to the source data collection. This means it must be called either on the `Events()`, `People()` or `join()` collections directly, or on the collection returned by `Events({ ... }).filter(...) or People({ ... }).filter(...) or join( ... ).filter(...)`

A very common use-case for `groupByUser()` is to compute some property of each user based on their behavior. For example, the code below computes what events users typically perform after a "login" event.

**Frequencies of Events Following "Login":** 

```javascript Example
// For each user, find how often they perform each event
// after signing up.
function main() {
  return Events({
    from_date: "2016-01-01",
    to_date: "2016-02-01"
  })
  .groupByUser(function(state, events) {
    state = state || { distribution: {} };
    if (events.length == 0) {
        return state;
    }
    for (var i = 0; i < events.length - 1; ++i) {
        if (events[i].name == "login") {
            state.distribution[events[i + 1].name] =
                state.distribution[events[i + 1].name] || 0;
            ++state.distribution[events[i + 1].name];
        }
    }
    // Previous call for this user may have contained
    // "login" as the last event.
    if (state.last_event_login) {
        state.distribution[events[0].name] =
            state.distribution[events[0].name] || 0;
        ++state.distribution[events[0].name];
    }
    // If last event is "login", next call should see that.
    if (events[events.length - 1].name == "login") {
        state.last_event_login = true;
    }
    return state;
  });
}
```



It is possible to compute more fine-grained aggregation with `groupByUser()` by providing a list of additional keys in the first argument. User distinct_id always remains the implicit first key.

The following example computes, for each user and each day, when they did their first event on that day.

**Multiple Groups per User:** 

```javascript Example
// figure out the hour where the most users do something
// for the first time that day
function main() {
  return Events({
    from_date: "2016-01-01",
    to_date: "2016-01-07"
  })
  // group the events for each user by day, then get
  // the first hour we saw them in each of those days.
  .groupByUser([getDay], function(first_hour, events) {
    if (first_hour === undefined) {
      first_hour = (new Date(events[0].time)).getHours();
    }
    return first_hour;
  })
}

function getDay(event) {
  return (new Date(event.time)).toISOString().split('T')[0];
}
```



`groupByUser()` places the same restriction on group keys as `groupBy()` does: a key can only include scalars, and list keys can be treated in two different ways depending on presence of the `mixpanel.multiple_keys()` decorator.

## flatten()

Flatten the collection by inlining array elements of the input collection. The contents of arrays in the input collection are placed into the output collection. Input elements that are not arrays are forwarded into the output collection without modification.

```javascript Example
// Compute percentiles on counts for number
// of events each user has done.
function main() {
  return Events({
    from_date: "2016-01-01",
    to_date: "2016-01-07"
  })
  // Compute the number of events for each user.
  .groupByUser(mixpanel.reducer.count())
  .reduce(mixpanel.reducer.numeric_percentiles('value',
      [10, 25, 50, 75, 90]))
  .flatten();
}
```



## sortAsc(accessor)

Sort the input collection by the provided sort key - either property name or a function. Sort key must be a scalar.

```javascript Example
// Find the users who have used the product the least.
function main() {
    return Events({
      from_date: "2016-01-01",
      to_date: "2016-01-07"
    })
    .groupBy(['properties.$email'], mixpanel.reducer.count())
    .sortAsc('value');
}
```



## sortDesc(accessor)

Similar to `sortAsc()`, but sort in descending order.

```javascript Example
// Find the most popular events.
function main() {
    return Events({
      from_date: "2016-01-01",
      to_date: "2016-01-07"
    })
    .groupBy(['name'], mixpanel.reducer.count())
    .sortDesc('value');
}
```



# Chained Aggregations

Chaining `groupBy()` operations in JQL can be used to compute complex statistics. The simplest case for chained aggregations is the query below that computes the number of unique users that had events from each country:

```javascript Example
function main() {
  return Events({
    from_date:"2016-01-01",
    to_date:"2016-06-01",
  })
  .groupByUser(["properties.country"], mixpanel.reducer.null())
  .groupBy([mixpanel.slice("key", 1)], mixpanel.reducer.count());
}
```



The first `.groupByUser()` transformation results in a collection of objects with the following structure: `{key:[distinct_id, country], value: null}`.

The second aggregation instructs JQL to strip off position 0 of the key holding the distinct_id, and aggregate again, counting results up. The result is going to be a number of unique users for each country.

`mixpanel.slice("key", <start>, <optional limit>)` is a built-in function that instructs JQL to strip away key components that don't fall into \[start, limit) interval, coalescing some groups and producing a more coarse grouping.

This approach can be extended for computing more complex statistics. For example, here is median over a maximum number of events users had in each country:

```javascript Example
function main() {
  return Events({
    from_date:"2016-01-01",
    to_date:"2016-06-01",
  })
  .groupByUser(["properties.country"], mixpanel.reducer.count())
  .groupBy([mixpanel.slice("key", 1)], mixpanel.reducer.max("value"))
  .reduce(mixpanel.reducer.numeric_percentiles("value", 50));
}
```



> 📘 NOTE
> 
> An important note on data serialization: the query engine is sometimes forced to serialize and transfer collections during transformations using JSON. Complex data types such as functions and dates are not preserved, so you should avoid storing these types in accumulator objects.

# JQL Builtins

We provide a set of useful helper functions for use with the `groupBy()`,` groupByUser()`, and `reduce()` transformations. These functions are provided by the query engine, so they are available with no extra work to you.

Some of built-in reducers, e.g. `avg()` or `sum()`, compute statistics over numeric collections. Each of the numeric built-in reducers accepts an optional first argument - an accessor - that instructs it how to convert the input object to a numeric value.

An accessor can be a JavaScript function, a string with a dot-separated property path, or a built-in mapper function, like `mixpanel.numeric_bucket()`.

For example, the following query computes the average age of your users:

```javascript Example
function main() {
  return People().reduce(mixpanel.reducer.avg("properties.age"));
}
```



This example makes use of the property name accessor to `mixpanel.reducer.avg()` built-in. A custom function could be used too; in the example below, that function computes length of an array property:

```javascript Example
function main() {
  return People().reduce(mixpanel.reducer.avg(
    function(u) { return u.properties.$campaigns.length; }));
}
```



## mixpanel.reducer.count()

Count the number of elements in the collection (or group, if passed to groupBy()). For example, you could use groupBy() and this reducer to implement Mixpanel's Segmentation report.

**Example:** 

```javascript
// count the number of events between two dates
function main() {
  return Events({
    from_date: "2015-08-01",
    to_date: "2015-08-30"
  }).reduce(mixpanel.reducer.count());
}
```



**Result** 

```json
// 15834 total events
[15834]
```



```javascript Example
// count the number of people of each age
function main() {
  return People().groupBy(["properties.age"],
    mixpanel.reducer.count());
}
```



```json Result
[
  {
    "key": [0],
    "value": 109
  },
  {
    "key": [1],
    "value": 120
  },
  ...
]
```



## mixpanel.reducer.sum(accessor)

Sum a collection of numeric values together.

| Argument     | Type                                               | Description                                                              |
| :----------- | :------------------------------------------------- | :----------------------------------------------------------------------- |
| **accessor** | <span style="font-family: courier">function</span> | Optional property accessor to retrieve a numeric property from the item. |

```javascript Example
// compute the total number of notification hits
function main() {
  return People()
    .reduce(mixpanel.reducer.sum(
      function(u) { return u.properties.$campaigns.length; }));
}
```



```json Result
[11301]
```



## mixpanel.reducer.numeric_summary(accessor)

Get a numeric summary of a collection. Returns the count, sum, sum of squares, average and standard deviation for a collection of numeric values.

| Argument     | Type                                               | Description                                                              |
| :----------- | :------------------------------------------------- | :----------------------------------------------------------------------- |
| **accessor** | <span style="font-family: courier">function</span> | Optional property accessor to retrieve a numeric property from the item. |

```javascript Example
// understand page load times
function main() {
  return Events({
    from_date: "2015-10-01",
    to_date: "2015-10-02",
    event_selectors: [{event: "pageview"}],
  })
  .reduce(mixpanel.reducer.numeric_summary('properties.load_time_ms'));
}
```



```json Result
// count = 221 events
// sum(load time) == 32624 milliseconds
// sum squares = 9199564 ms^2
[{ "count": 221, "sum": 32624, "sum_squares": 9199564, "avg": 147.61991, "stddev": 140.838023 }]
```



## mixpanel.reducer.avg(accessor)

Compute the average of a numeric collection. `avg()` is a shortcut replacement for the two-step process: aggregate with `numeric_summary()`, and follow-up with a `.map()` step that computes average.

| Argument     | Type                                               | Description                                                              |
| :----------- | :------------------------------------------------- | :----------------------------------------------------------------------- |
| **accessor** | <span style="font-family: courier">function</span> | Optional property accessor to retrieve a numeric property from the item. |

```javascript Example
function main() {
  return Events({
    from_date: "2016-01-01",
    to_date: "2016-06-01",
    event_selectors: [{event:"pageview"}]
  })
  .reduce(mixpanel.reducer.avg("properties.load_time_ms"));
}
```



```json Result
[148.9087]
```



## mixpanel.reducer.numeric_percentiles(accessor, percentiles spec)

Compute percentiles of a numeric collection. Note: this built-in samples the numeric stream; it's output will differ from exact percentile value up to a fixed error bound. The result may also fluctuate between runs.

| Argument       | Type                                               | Description                                                               |
| :------------- | :------------------------------------------------- | :------------------------------------------------------------------------ |
| **accessor**   | <span style="font-family: courier">function</span> | name of a numeric property or a function that computes number from input. |
| **percentile** | <span style="font-family: courier">number</span>   | A percentile number, in (0, 100) interval (alternative 1).                |
| **percentile** | <span style="font-family: courier">array</span>    | Array of percentile numbers (alternative 2).                              |

```javascript Example
// Find median page load time
function main() {
  return Events({
    from_date: "2015-06-01",
    to_date: "2016-06-01",
    event_selectors: [{event: "pageview"}],
  })
  .reduce(mixpanel.reducer.numeric_percentiles(
       "properties.load_time_ms", 50));
}
```



```json Result
[118]
```



```javascript Example
// Find 90th, 95th, 99th, 99.9th percentiles of page load time.
function main() {
  return Events({
    from_date: "2015-06-01",
    to_date: "2016-06-01",
    event_selectors: [{event: "pageview"}],
  })
  .reduce(mixpanel.reducer.numeric_percentiles(
       "properties.load_time_ms", [90, 95, 99, 99.9]));
}
```



```json Result
[
 [
     {"percentile":90,"value":356},
     {"percentile":95,"value":468},
     {"percentile":99,"value":732},
     {"percentile":99.9,"value":1725}
 ]
]
```



## mixpanel.reducer.min(accessor)/max(accessor)

Compute minimum (or maximum) element in a numeric collection.

| Argument     | Type                                               | Description                                                                  |
| :----------- | :------------------------------------------------- | :--------------------------------------------------------------------------- |
| **accessor** | <span style="font-family: courier">function</span> | Name of a numeric property, or a function that computes a number from input. |

```javascript Example
// Find minimum page load time.
function main() {
  return Events({
    from_date: "2015-06-01",
    to_date: "2016-06-01",
    event_selectors: [{event: "pageview"}],
  })
  .reduce(mixpanel.reducer.min("properties.load_time_ms"));
}
```



```json Result
[0]
```



## mixpanel.reducer.min_by(accessor)/max_by(accessor)

Find the element in a collection that gives the minimum (or maximum) value of a numeric property.

| Argument     | Type                                               | Description                                                                  |
| :----------- | :------------------------------------------------- | :--------------------------------------------------------------------------- |
| **accessor** | <span style="font-family: courier">function</span> | Name of a numeric property, or a function that computes a number from input. |

```javascript Example
// Find the pageview event with lowest load time.
function main() {
  return Events({
    from_date: "2015-06-01",
    to_date: "2016-06-01",
    event_selectors: [{event: "pageview"}],
  })
  .reduce(mixpanel.reducer.min_by("properties.load_time_ms"));
}
```



```json Result
[
 {
     "name":"pageview",
     "distinct_id":"8bcf7259-5c6c-4b10-9b8a-34148607aa95",
     "time":1437541412000,
     "sampling_factor":1,
     "properties":{
         "$email":"Sylvia.Harper@outlookx.com",
         "$import":true,
         "country":"MX",
         "load_time_ms":0
     }
 }
]
```



## mixpanel.reducer.top(limit)

Limit the response to the top N values of a collection. This function expects the input collection to be of the `groupBy()` format: `{ "key": [...], "value": <numeric value> }`. The output of this function is a collection containing a single item, the list of the top N items.

| Argument  | Type                                              | Description                   |
| :-------- | :------------------------------------------------ | :---------------------------- |
| **limit** | <span style="font-family: courier">integer</span> | The number of items to return |

```javascript Example
// get the top 3 countries sending any event
  function main() {
  return Events({
    from_date: "2015-06-01",
    to_date: "2016-06-01",
    event_selectors:[{event: "pageview"}]
  })
  .groupBy(["properties.country"], mixpanel.reducer.count())
  .reduce(mixpanel.reducer.top(3));
}
```



```json Result
[
  [
    {
      "key": ["USA"],
      "value": 1234
    },
    {
      "key": ["MEX"],
      "value": 678
    },
    {
      "key": ["CAN"],
      "value": 345
    }
  ]
]
```



## mixpanel.reducer.applyGroupLimits(limit spec)/


Limit the response of each group to the top N values of a collection and optionally to the top N values of the entire collection. This function expects the input collection to be of the `groupBy()` format: `{ "key": [...], "value": <numeric value> }`. The output of this function is a collection with the following structure.

| Argument   | Type                                             | Description                                 |
| :--------- | :----------------------------------------------- | :------------------------------------------ |
| **limits** | <span style="font-family: courier">array</span>  | Array of limits per group.                  |
| **global** | <span style="font-family: courier">number</span> | limit Maximum number of results to display. |

```javascript
// Get the top events by user, by date, limited to the top 12 results
function main() {
  return Events({ // Collect our events
    from_date: '2016-01-01',
    to_date:   '2016-01-31',
  }) // Group the events by multiple keys
  .groupBy(["name","properties.$email","properties.signup_date"], mixpanel.reducer.count())
  // Sort the results in the desired order by the desired property
  .sortDesc('value')
  // Limit the results of each group displayed
  .applyGroupLimits([5,5,5], 12)
}
```



```json Result
[
  {
    "key": [
      "login",
      "Ralph.Vargas@aolx.com",
      "2015-11-29T05:55:40"
    ],
    "value": 30
  },
  {
    "key": [
      "login",
      "Frances.Mendoza@gmailx.com",
      "2015-12-12T06:50:28"
    ],
    "value": 28
  }, ...
  {
    "key": [
      "View Blog",
      "Henry.Murray@gmailx.com",
      "2015-12-22T20:14:32"
    ],
    "value": 8
  }
]
```



## mixpanel.reducer.object_merge()

Merge a collection of JavaScript objects into a single object. Numeric leaf values are summed.

```javascript Example
// alternate way of calculating the same thing as
// mixpanel.reducer.numeric_summary()
function main() {
  return Events({
    from_date: "2015-10-01",
    to_date: "2015-10-02",
    event_selectors: [{event: "pageview"}],
  })
  .map(function(event) {
    var load_time_ms = event.properties.load_time_ms;
    return {
      count: 1,
      sum: load_time_ms,
      sum_squares: load_time_ms * load_time_ms
    }
  })
  .reduce(mixpanel.reducer.object_merge());
}
```



```json Result
[{ "count": 221, "sum": 32624, "sum_squares": 9199564}]
```



## mixpanel.reducer.any()

```javascript Example
function main() {
  return Events({
    from_date: "2015-10-01",
    to_date: "2015-10-02",
  })
  .filter(function(e) { return e.properties.country == "US"; })
  .reduce(mixpanel.reducer.any());
}
```



```json Result
[
  {
    "name": "pageview",
    "distinct_id": "75a54352-33c9-4606-9d5f-c5eca9b77b5d",
    ...
  }
]
```



## mixpanel.reducer.null()

Always return null.

```javascript Example
// Dump distinct ids of users who had events in January 2016.
function main() {
  return Events({
    from_date: "2016-01-01",
    to_date: "2016-01-31",
  })
  .groupByUser(mixpanel.reducer.null())
}
```



```json Result
[
   {"key": "1f83aed1-63c4-48ec-aa44-91b90fc1917d", "value": null},
   ...
]
```



## mixpanel.numeric_bucket(accessor, buckets spec)

Bucketize a numeric value by normalizing it to the lower boundary of the bucket it falls into. It is commonly used to reduce the number of distinct keys when aggregating over numeric values.

| Argument | Type                                             | Description                                                                             |
| :------- | :----------------------------------------------- | :-------------------------------------------------------------------------------------- |
| **spec** | <span style="font-family: courier">array</span>  | List of bucket boundaries (alternative 1).                                              |
| **spec** | <span style="font-family: courier">object</span> | with bucket_size and offset fields specifying regular bucket intervals (alternative 2). |

```javascript Example
// Bucketize all users into five age groups.
function main () {
  return People().groupBy(
     [mixpanel.numeric_bucket('properties.age', [0, 5, 18, 30, 60])],
     mixpanel.reducer.count());
 }
```



```json Result
[
  {
    "key": [0],
    "value": 539
  },
  {
    "key": [5],
    "value": 1041
  },
  ...
]
```



```javascript Example
// Bucketize all users into regular buckets by event count.
function main() {
  return Events({
    from_date: "2015-10-01",
    to_date: "2015-10-02",
  }).groupByUser(mixpanel.reducer.count())
    .groupBy(
      [mixpanel.numeric_bucket('value', {bucket_size: 10, offset:1})],
      mixpanel.reducer.count());
}
```



```json Result
[
  {
    "key": [1],
    "value": 422
  },
  {
     "key": [11],
     "value": 15
  }
]
```



## mixpanel.to_number(accessor)

Convert input into a number. mixpanel.to_number() is commonly used when executing numeric aggregations over a collection of mixed non-numeric data. When unable to interpret input as a number, return undefined.

| Argument     | Type                                               | Description                                             |
| :----------- | :------------------------------------------------- | :------------------------------------------------------ |
| **accessor** | <span style="font-family: courier">function</span> | Name of property to convert (or a javascript function). |

```javascript Example
// Compute the distribution of signup times
function main() {
  return People()
    .reduce(mixpanel.reducer.numeric_summary(
      mixpanel.to_number('properties.signup_date')
    ));
}
```



```json Result
[
  {
    "count": 4411,
    "sum": 6369278974417,
    "sum_squares": 9.1971e+21,
    "avg": 1443953519.477896,
    "stddev": 5988562.937055
  }
]
```



## mixpanel.numeric_bucket()

`mixpanel.numeric_bucket()` can be used to segment events over calendar period, when applied to time property.

```javascript
function main() {
  return Events({
    from_date: "2016-01-01",
    to_date: "2016-01-30",
  }).groupBy([mixpanel.numeric_bucket('time', {bucket_size: 86400 * 1000})],
             mixpanel.reducer.count());
}
```



JQL defines several constants with bucket specs for widely used time bucket boundaries, when applied to milliseconds since Unix epoch.

- `mixpanel.daily_time_buckets` - buckets for calendar days

- `mixpanel.weekly_time_buckets` - buckets for calendar weeks, starting on Monday

- `mixpanel.monthly_time_buckets` - buckets for calendar months

- `mixpanel.quarterly_time_buckets` - buckets for calendar quarters: Jan - Mar, Apr - Jun, ...

- `mixpanel.annual_time_buckets` - buckets for calendar years

The following is an equivalent of the query above.

```javascript Example
function main() {
  return Events({
    from_date: "2016-01-01",
    to_date: "2016-01-30",
  }).groupBy([
    mixpanel.numeric_bucket('time', mixpanel.daily_time_buckets)],
    mixpanel.reducer.count());
}
```
