# Datetime

This is a library that aims to improve the support for Unix Timestamps in Javascript on Bristom projects. Feel free to use it as you want.

The implementations here are purely mathematical and aims to convert a Unix Timestamp to a pure date without messing with it's UTC or anything else.

## Installation

With [npm](https://npmjs.com):

    npm install @bristom/datetime

With [yarn](https://yarnpkg.com):

    yarn add @bristom/datetime

## Methods and Usage

The package exports two methods: **unixToDateTime** and **dateTimeToUnix**

### unixToDateTime

This is the function that takes a Unix Timestamp as an argument and converts it into a object.

The hour format is always 24h (for now)

```javascript
const { unixToDateTime } = require('@bristom/datetime');

const timestamp = 1625606050;

const converted = unixToDateTime(timestamp);

console.log(converted);

// It should return this object:
// {
//   second: 10,
//   minute: 14,
//   hour: 21,
//   day: 6,
//   month: 7,
//   year: 21,
//   week: 2
// }
```

### dateTimeToUnix

This function takes at least a date, month and year as an argument and converts it into a Unix Timestamp. You can also send hours, minutes and seconds as parameters but they aren't mandatory.

On the year argument, only the last two digits of the year are necessary, since the Unix Timestamp only goes till 2038 (for now the library only works with years from 2001 to 2038).

```javascript
const { dateTimeToUnix } = require('@bristom/datetime');

const converted = dateTimeToUnix(6, 7, 21, 18, 23);

console.log(converted);

// It should return this:
// 1625613480
```

## Conclusion

We have plans to implement support for years before 2001 and 12 hours format. But if you need it right now free to contribute as you wish, we welcome contributions from the community.

Any bug is also open to resolution if you know how, if you don't, open a issue and we will do what we can :)

Written and maintened by [luk3skyw4lker](https://github.com/luk3skyw4lker)
