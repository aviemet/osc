import { isPlainObject } from "lodash"

/**
 * Recursively check each prop value and convert ISO strings to dates
 */
export function convertDates<T extends string | Record<string, unknown> | Record<string, unknown>[]>(obj: T): T {
	if(Array.isArray(obj)) {
		// Recurse over array values
		return obj.map(convertDates) as unknown as T
	} else if(isPlainObject(obj)) {
		// Recurse over object values
		return Object.keys(obj).reduce((acc, key) => {
			(acc as any)[key] = convertDates((obj as any)[key])
			return acc
		}, {} as T)
	} else if(typeof obj === "string" && isISODateString(obj)) {
		// Case to convert the date object
		return new Date(obj) as unknown as T
	}

	return obj
}

function isISODateString(value: string) {
	const isoDateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?([+-]\d{2}:\d{2}|Z)?$/
	return isoDateFormat.test(value)
}
