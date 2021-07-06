const { unixToDateTime, dateTimeToUnix } = require('../src/DateTime');

test('unixToDateTime', () => {
	const timestamp = 1625606050;

	const converted = unixToDateTime(timestamp);

	expect(converted).toEqual({
		second: 10,
		minute: 14,
		hour: 21,
		day: 6,
		month: 7,
		year: 21,
		week: 2
	});
});

test('dateTimeToUnix', () => {
	const converted = dateTimeToUnix(6, 7, 21, 18, 23);

	expect(converted).toEqual(1625613480);
});
