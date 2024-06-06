import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation } from '@/lib/hooks'
import { isUnset } from '@/lib/forms'
import { router } from '@inertiajs/react'
import cx from 'clsx'
import { NestedURLSearchParams } from '@/lib'
import buildSearchLink from './buildSearchLink'

type SpecialSearchTypes = 'date'

interface Options {
	path: string
}

export type InputParam<T = string|Date> = {
	name: string
	default?: T
	dependent?: string|string[]
	keyUpListener?: boolean
	type?: SpecialSearchTypes
}

export type ParamValue = string|number|Date|Date[]|undefined|null

/**
 * Hook for building advanced search interfaces
 * @param inputParams Array of objects with the following structure: { label: string, name: string, default?: unknown, dependent?: string|string[] }
 * @param options Options
 * @returns link: A URL with the search parameters represented as GET params,
 *  reset(): A method to clear all search values,
 * 	inputProps(name): Method to return object of props to be passed into an input
 */
const useAdvancedSearch = (
	inputParams: InputParam[],
	options?: Options,
) => {
	// TODO: Trying to infer keys from prop
	type InputParamName = typeof inputParams[number]['name']

	const location = useLocation()

	const [searchLink, setSearchLink] = useState(location.href)

	const localInputParams = useMemo(() => {
		const finalParams: InputParam[] = []

		inputParams.forEach(param => {
			switch(param?.type) {
				case 'date':
					finalParams.push({
						name: `${param.name}[start]`,
					})
					finalParams.push({
						name: `${param.name}[end]`,
					})
					finalParams.push({
						name: `${param.name}[type]`,
						dependent: `${param.name}[start]`,
					})
					break
				default:
					finalParams.push(param)
					return
			}
		})

		return inputParams.concat(finalParams)
	}, [inputParams])

	// Builds a Map from keys in `inputParams` with values from URL string
	// These are the starting values for local state used for form inputs
	const startingValues = useMemo(() => localInputParams.reduce(
		(data: NestedURLSearchParams, param) => {
			// Handle special input types
			switch(param?.type) {
				case 'date':
					data.set(`${param.name}[type]`, 'exact')
					data.set(`${param.name}[start]`, data.get(`${param.name}[start]`) || '')
					data.set(`${param.name}[end]`, data.get(`${param.name}[end]`) || '')

					return data
				default:
					data.set(param.name, data.get(param.name) || param.default || '')
			}

			return data
		},
		location.nestedParams.clone(),
	), [localInputParams, location.nestedParams])

	const [values, setValues] = useState(startingValues)

	// Build URL params when input values change
	useEffect(() => {
		setSearchLink(buildSearchLink(localInputParams, values))
	}, [localInputParams, values])

	const resetValues = useCallback(() => {
		setValues(prevValues => localInputParams.reduce(
			(data, param) => {
				data.set(param.name, param.default ?? '')
				return data
			},
			prevValues.clone(),
		))
	}, [localInputParams])

	// Method returned from hook to be passed to an input
	const buildInputProps = <T = string|Date>(name: InputParamName) => {
		const param = localInputParams.find(param => param.name === name)

		let value: T
		switch(param?.type) {
			case 'date':
				// @ts-ignore
				value = new Date(values.get(name))
				break
			default:
				value = values.get(name) as T
		}

		return {
			name,
			value,
			mb: 10,
			...( param?.keyUpListener !== false && { onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => {
				if(e.key === 'Enter') {
					router.get(searchLink, undefined, { preserveScroll: true })
				}
			} }),
			wrapperProps: {
				className: cx({ highlighted: !isUnset(value) && !param?.dependent }),
			// 	style: (theme: MantineTheme) => ({
			// 		'&.highlighted, &.highlighted input': {
			// 			color: theme.other.colorSchemeOption(
			// 				theme.colors[theme.primaryColor][6],
			// 				theme.colors[theme.primaryColor][4],
			// 			),
			// 		},
			// 		'&.highlighted input': {
			// 			outlineColor: theme.other.colorSchemeOption(
			// 				theme.colors[theme.primaryColor][6],
			// 				theme.colors[theme.primaryColor][4],
			// 			),
			// 		},
			// 	}),
			},
		}
	}

	const setInputValue = useCallback((name: InputParamName, value: ParamValue) => setValues(prevValues => {
		const newValues = prevValues.clone()
		newValues.set(name, value)
		return newValues
	}), [])

	return {
		values,
		link: searchLink,
		inputProps: buildInputProps,
		setInputValue,
		reset: resetValues,
	}
}

export default useAdvancedSearch
