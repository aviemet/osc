import { type ISelectFormProps } from '../Form/Inputs/Select'
import { type IFormDropdownProps } from '../Form/Inputs/MultiSelect'

export interface IAsyncDropdown<T> extends Omit<ISelectFormProps, 'defaultValue'|'onBlur'> {
	model?: string
	label?: string
	fetchOnOpen?: string
	required?: boolean
	errorKey?: string
	initialData?: T[]
}

export interface IAsyncMultiSelect<T> extends Omit<IFormDropdownProps, 'onBlur'> {
	errorKey?: string
	initialData?: T[]
}

export { default as ProtocolDropdown }        from './ProtocolDropdown'

