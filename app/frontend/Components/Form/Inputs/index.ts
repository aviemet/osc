import { type UseFormProps } from 'use-inertia-form'

export { default as TextInput } from './TextInput'
export { default as NumberInput } from './NumberInput'
export { default as PasswordInput } from './PasswordInput'
export { default as CurrencyInput } from './CurrencyInput'
export { default as HiddenInput } from './HiddenInput'
export { default as DateTime } from './DateTime'
export { default as Textarea } from './Textarea'
export { default as RichText } from './RichText'
export { default as Checkbox } from './Checkbox'
export { default as Select } from './Select'
export { default as Switch } from './Switch'
export { default as RadioButtons } from './RadioButtons'

export type InputConflicts = 'name'|'onChange'|'onBlur'|'onFocus'
export interface BaseFormInputProps<T = string> {
	name: string
	model?: string
	errorKey?: string
	field?: boolean
	required?: boolean
	hidden?: boolean
	onChange?: (value: T, form: UseFormProps) => void
	onBlur?: (value: T, form: UseFormProps) => void
	onFocus?: (value: T, form: UseFormProps) => void
	wrapperProps?: Record<string, any>
}
