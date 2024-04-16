import { cloneDeep, get, unset } from 'lodash'

export { default as NestedObject } from './Collections/NestedObject'
export { default as NestedURLSearchParams } from './Collections/NestedURLSearchParams'

/**
 * Ensures the object is an array member
 */
export const coerceArray = <T extends unknown>(arg: T | T[] | null | undefined) => {
	if(arg === null || arg === undefined) return []

	if(Array.isArray(arg)) return arg

	return [arg]
}

/**
 * Returns a new object excluding with the specified keys
 */
export const exclude = <T extends any, K extends string>(obj: T, keys: K | K[]): Omit<T, K> => {
	let clone = cloneDeep(obj)

	if(clone) {
		coerceArray(keys).forEach(key => {
			const split = key.split(/\[\](.*)/s)

			if(split.length > 1) {
				clone = excludeGenericArrayAccess(clone, split[0], split[1])
			} else {
				unset(clone, key)
			}
		})
	}
	return clone
}

/**
 * Supports notation with generic array access for all child objects:
 * 'root[].childArrayKey'
 * 'root[].childArrayKey.subarray[].deepAccess'
 */
const excludeGenericArrayAccess = <T extends any>(obj: T, arrKey: string, attrKey: string) => {
	const arr = get(obj, arrKey)

	if(Array.isArray(arr)) {
		for(let i = 0; i < arr.length; i++) {
			// @ts-ignore I don't want to properly type this right now
			obj = exclude(obj, `${arrKey}[${i}]${attrKey}`)
		}
	}
	return obj
}
