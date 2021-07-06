const LEAP_YEAR = year => year % 4 === 0;
const dow = (year, month, day) => {
	const dowArray = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];

	year -= month < 3;
	const dow_r =
		(year + year / 4 - year / 100 + year / 400 + dowArray[month - 1] + day) % 7;

	return dow_r;
};

module.exports = {
	unixToDateTime(epoch) {
		const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		const dateObject = {
			second: 0,
			minute: 0,
			hour: 0,
			day: 0,
			month: 0,
			year: 0,
			week: 0
		};

		let year = 70;
		let days = 0;
		let month;
		let monthLength;

		dateObject.second = Math.trunc(epoch % 60);
		epoch /= 60;
		dateObject.minute = Math.trunc(epoch % 60);
		epoch /= 60;
		dateObject.hour = Math.trunc(epoch % 24);
		epoch /= 24;

		while ((days += LEAP_YEAR(year) ? 366 : 365) <= epoch) {
			year++;
		}

		days -= LEAP_YEAR(year) ? 366 : 365;
		epoch -= days;

		for (month = 0; month < 12; month++) {
			monthLength = month === 1 && LEAP_YEAR(year) ? 29 : monthDays[month];
			if (epoch >= monthLength) {
				epoch -= monthLength;
			} else {
				break;
			}
		}

		dateObject.month = month + 1;
		dateObject.day = Math.trunc(epoch + 1);
		dateObject.year = year - 100;
		dateObject.week = Math.trunc(
			dow(dateObject.year, dateObject.month, dateObject.day)
		);

		return dateObject;
	},

	dateTimeToUnix(day, month, year, minute = 0, hour = 0, second = 0) {
		let timeStamp = null;

		if (year > 0 && year < 34) {
			const dim = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

			let dc;
			dc = day;

			for (let i = 0; i < month - 1; i++) {
				dc += dim[i];
			}

			if (month > 2 && year % 4 === 0) {
				++dc;
			}

			dc = dc + 365 * year + (year + 3) / 4 - 1;

			timeStamp = ((dc * 24 + hour) * 60 + minute) * 60 + second + 946684800;
		}

		return timeStamp;
	}
};
