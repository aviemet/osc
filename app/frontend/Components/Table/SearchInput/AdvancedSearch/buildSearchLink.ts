import { NestedURLSearchParams, coerceArray, isUnset } from '@/lib'
import { type InputParam } from './useAdvancedSearch'

/**
 * Generate a URL for advanced searching
 *
 * @param inputParams List of all input params passed to hook
 * @param values Map of all current search values
 * @returns Link to same page with URL params to use for advanced search
 */
function buildSearchLink(
	inputParams: readonly InputParam[],
	values: NestedURLSearchParams,
) {
	const localValues = values.clone()

	inputParams.forEach(param => {
		const value = localValues.get(param.name)

		// Exclude key if dependents are empty
		if(param?.dependent) {
			let shouldBeIncluded = true

			coerceArray(param.dependent).forEach(dependentParam => {
				if(isUnset(values.get(dependentParam))) {
					shouldBeIncluded = false
				}
			})

			if(!shouldBeIncluded) {
				localValues.unset(param.name)
				return
			}
		}

		// Handle Date values
		if(value instanceof Date || (Array.isArray(value) && value[0] instanceof Date)) {
			const dateStr = coerceArray(value).reduce((str, date, i) => {
				return `${str}${i === 0 ? '' : ','}${date.toISOString()}`
			}, '')
			localValues.set(param.name, dateStr)
			return
		}

		localValues.set(param.name, value)

	})

	if(localValues.isEmpty()) {
		return `${location.pathname}`
	} else {
		localValues.set('adv', 'true')
		return localValues.toString()
	}
}

export default buildSearchLink
