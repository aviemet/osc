import dayjs from 'dayjs'

export const currency = (amount: number, currency = 'USD') => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
	})
	return formatter.format(amount)
}

export const date = {
	short: (date: string|Date) => dayjs(new Date(date)).format('MM/DD/YYYY'),
	long: (date: string|Date) => dayjs(new Date(date)).format('MM/DD/YYYY HH:mm:ss'),
	relative: (date: string|Date) => {
		return dayjs(new Date(date)).format('MM/DD/YYYY')
	},
	english: (date: string|Date) => dayjs(new Date(date)).format('MM/DD/YYYY'),
}

const durationKeys = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'] as const
export const humanizeDuration = (duration: plugin.Duration) => {
	let humanDuration = ''

	durationKeys.forEach((unit) => {
		const value = duration.get(unit)
		if(value > 0) {
			humanDuration += `${humanDuration === '' ? '' : ', '}${value} ${unit}${value > 1 ? 's' : ''}`
		}
	})

	return humanDuration
}
