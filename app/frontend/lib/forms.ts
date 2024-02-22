import { isEmpty } from 'lodash'
import { useForm } from 'use-inertia-form'

/**
 * Test if a value is "unset" in the context of a form input value. Returns true if the value can be considered "empty"
 * @param v Variable to test whether is an "unset" value
 * @returns boolean
 */
export const isUnset = <T extends any>(v: T) => {
	if(typeof v === 'number') {
		return v === 0 ? false : !Boolean(v)
	}

	if(v instanceof Date) return false

	if(Array.isArray(v)) return !v.some(el => el !== '' && el !== undefined)

	return isEmpty(v)
}

export function getInputOnChange<Value>(
	setValue: (value: Value | ((current: Value) => Value)) => void,
) {
	return (val: Value | React.ChangeEvent<unknown> | ((current: Value) => Value)) => {
		if(!val) {
			setValue(val as Value)
		} else if(typeof val === 'function') {
			setValue(val)
		} else if(typeof val === 'object' && 'nativeEvent' in val) {
			const { currentTarget } = val

			if(currentTarget instanceof HTMLInputElement) {
				if(currentTarget.type === 'checkbox') {
					setValue(currentTarget.checked as any)
				} else {
					setValue(currentTarget.value as any)
				}
			} else if(
				currentTarget instanceof HTMLTextAreaElement ||
        currentTarget instanceof HTMLSelectElement
			) {
				setValue(currentTarget.value as any)
			}
		} else {
			setValue(val)
		}
	}
}

/**
 * Check if within a UseForm context
 * @returns boolean
 */
export function useInFormContext() {
	try {
		useForm()
		return true
	} catch(e) {
		return false
	}
}
