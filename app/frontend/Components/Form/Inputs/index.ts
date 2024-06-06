import { NestedObject, UseFormProps, UseInertiaInputProps } from 'use-inertia-form'

export { default as Autocomplete }     from './Autocomplete'
export { default as CurrencyInput }    from './CurrencyInput'
export { default as DateInput }        from './DateInput'
export { default as DateTimeInput }    from './DateTimeInput'
export { default as HiddenInput }      from './HiddenInput'
export { default as MultiSelect }      from './MultiSelect'
export { default as NumberInput }      from './NumberInput'
export { default as PasswordInput }    from './PasswordInput'
export { default as SegmentedControl } from './SegmentedControl'
export { default as RichText }         from './RichText'
export { default as Select }           from './Select'
export { default as SwatchInput }      from './SwatchInput'
export { default as Switch }           from './Switch'
export { default as TextInput }        from './TextInput'
export { default as Textarea }         from './Textarea'

export {
	default as Checkbox,
	GroupedCheckbox,
} from './Checkbox'

export type InputConflicts = 'name'|'onChange'|'onBlur'|'onFocus'|'value'|'defaultValue'
export interface BaseFormInputProps<T, TForm extends NestedObject = NestedObject>
	extends UseInertiaInputProps<T>
{
	model?: string
	errorKey?: string
	field?: boolean
	required?: boolean
	hidden?: boolean
	onChange?: (value: T, form: UseFormProps<TForm>) => void
	onBlur?: (value: T, form: UseFormProps<TForm>) => void
	onFocus?: (value: T, form: UseFormProps<TForm>) => void
	wrapperProps?: Record<string, any>
}
