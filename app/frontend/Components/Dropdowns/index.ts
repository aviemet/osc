import { ComboboxItem, SelectOption, type FormSelectProps } from "../Form/Inputs/Select"
import { type FormMultiSelectProps } from "../Form/Inputs/MultiSelect"
import { NestedObject, UseFormProps } from "use-inertia-form"

type FormSelectOmits = "defaultValue" | "onBlur" | "name" | "onSelect" | "onChange"
export interface AsyncDropdown<T> extends Omit<FormSelectProps, FormSelectOmits> {
	name?: string
	label?: string
	fetchOnOpen?: string
	required?: boolean
	errorKey?: string
	initialData?: T[]
	onSelect?: (data: T) => void
	onChange?: (protocol: SelectOption | null, options: ComboboxItem[], form: UseFormProps<NestedObject>) => void
}

export interface AsyncMultiSelect<T> extends Omit<FormMultiSelectProps, "onBlur" | "name"> {
	errorKey?: string
	initialData?: T[]
}

export { default as ProtocolDropdown } from "./ProtocolDropdown"
export { default as ServerDropdown } from "./ServerDropdown"
export { default as CommandDropdown } from "./CommandDropdown"
export { default as CommandValueDropdown } from "./CommandValueDropdown"
export { default as CommandPayloadTypesDropdown } from "./CommandPayloadTypesDropdown"

