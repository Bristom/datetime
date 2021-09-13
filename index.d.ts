interface IDateTime {
	second: number;
	minute: number;
	hour: number;
	day: number;
	month: number;
	year: number;
	week: number;
}

export function unixToDateTime(epoch: number): IDateTime;
export function dateTimeToUnix(
	day: number,
	month: number,
	year: number,
	minute: number,
	hour: number,
	second: number
): number;
