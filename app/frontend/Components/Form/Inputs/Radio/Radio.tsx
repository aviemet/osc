import React from "react"
import { useForm, useInertiaInput, type NestedObject } from "use-inertia-form"
import ConditionalWrapper from "@/Components/ConditionalWrapper"
import { Field } from "@/Components/Form"
import RadioInput, { type RadioProps } from "@/Components/Inputs/Radio"
import FormRadioGroup from "./Group"
import { type BaseFormInputProps } from ".."

export interface FormRadioProps<TForm extends NestedObject>
	extends
	Omit<RadioProps, "name" | "onChange" | "onBlur" | "onFocus" | "defaultValue">,
	Omit<BaseFormInputProps<string, TForm>, "name"> {}

const FormRadioComponent = <TForm extends NestedObject>(
	{
		value,
		onChange,
		onBlur,
		onFocus,
		id,
		required,
		className,
		model,
		field = true,
		style,
		wrapperProps,
		errorKey,
		defaultValue,
		clearErrorsOnChange,
		...props
	}: FormRadioProps<TForm>,
) => {
	const form = useForm<TForm>()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(value, form)
	}

	const handleBlur = () => {
		onBlur?.(value, form)
	}

	return (
		<RadioInput
			id={ id || value }
			className={ className }
			value={ value }
			onChange={ handleChange }
			onBlur={ handleBlur }
			onFocus={ e => onFocus?.(value, form) }
			style={ [{ padding: "14px 10px" }, style] }
			wrapper={ false }
			{ ...props }
		/>
	)
}

FormRadioComponent.Group = FormRadioGroup

export default FormRadioComponent
