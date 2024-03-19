import React from 'react'
import { NestedObject, UseFormProps, useInertiaInput } from 'use-inertia-form'
import { IFormInputProps } from '.'
import { ConditionalWrapper } from '@/Components'
import Field from '../Field'
import MultiSelect, { type IMultiSelectProps } from '@/Components/Inputs/MultiSelect'

type OmittedDropdownTypes = 'name'|'onBlur'|'onChange'|'onDropdownOpen'|'onDropdownClose'
export interface IFormDropdownProps<TForm extends NestedObject = NestedObject>
	extends Omit<IMultiSelectProps, OmittedDropdownTypes>,
	IFormInputProps<string[], TForm> {
	onDropdownOpen?: (form: UseFormProps<any>) => void
	onDropdownClose?: (form: UseFormProps<any>) => void
}

const MultiSelectComponent = <TForm extends NestedObject = NestedObject>(
	{
		options = [],
		label,
		required,
		id,
		name,
		errorKey,
		model,
		field = true,
		onBlur,
		onChange,
		onDropdownOpen,
		onDropdownClose,
		...props
	}: IFormDropdownProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string[], TForm>({ name, model, errorKey })

	const handleBlur = () => {
		if(onBlur) onBlur(value, form)
	}

	const handleChange = (values: string[]) => {
		setValue(values)

		onChange?.(values, form)
	}

	const handleDropdownOpen = () => {
		if(onDropdownOpen) onDropdownOpen(form)
	}

	const handleDropdownClose = () => {
		if(onDropdownClose) onDropdownClose(form)
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
				<Field
					type="select"
					required={ required }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
			condition={ field }
		>
			<MultiSelect
				// Add "search" suffix to prevent password managers trying to autofill dropdowns
				id={ `${id || inputId}-search` }
				autoComplete="off"
				name={ inputName }
				label={ label }
				value={ value }
				error={ error }
				options={ options }
				onBlur={ handleBlur }
				onChange={ handleChange }
				onDropdownClose={ handleDropdownClose }
				onDropdownOpen={ handleDropdownOpen }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

export default React.memo(MultiSelectComponent)
