import { type DateValue, type DatesRangeValue } from '@mantine/dates'

export { default as AutocompleteInput } from './AutocompleteInput'
export { default as Checkbox }          from './Checkbox'
export { default as CurrencyInput }     from './CurrencyInput'
export { default as DateInput }         from './DateInput'
export { default as DateTimeInput }     from './DateTimeInput'
export { default as HiddenInput }       from './HiddenInput'
export { default as MultiSelect }       from './MultiSelect'
export { default as NumberInput }       from './NumberInput'
export { default as PasswordInput }     from './PasswordInput'
export { default as SegmentedControl }  from './SegmentedControl'
export { default as RichText }          from './RichText'
export { default as Select }            from './Select'
export { default as SwatchInput }       from './SwatchInput'
export { default as Textarea }          from './Textarea'
export { default as TextInput }         from './TextInput'

export interface BaseInputProps {
	wrapper?: boolean
}

export type DateInputValue = DateValue | DatesRangeValue | Date[] | undefined
