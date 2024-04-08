import { type FormSelectProps } from '../Form/Inputs/Select'
import { type FormMultiSelectProps } from '../Form/Inputs/MultiSelect'

export interface AsyncDropdown<T> extends Omit<FormSelectProps, 'defaultValue'|'onBlur'|'name'> {
	name?: string
	label?: string
	fetchOnOpen?: string
	required?: boolean
	errorKey?: string
	initialData?: T[]
}

export interface AsyncMultiSelect<T> extends Omit<FormMultiSelectProps, 'onBlur'|'name'> {
	errorKey?: string
	initialData?: T[]
}

export { default as ProtocolDropdown } from './ProtocolDropdown'
export { default as ServerDropdown } from './ServerDropdown'
export { default as CommandPayloadTypesDropdown } from './CommandPayloadTypesDropdown'

