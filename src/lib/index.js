export function date_format(str = '') {
	const date = str ? new Date(str) : new Date();
	return Intl.DateTimeFormat().format(date);
}
