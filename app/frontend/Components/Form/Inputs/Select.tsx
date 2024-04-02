import React from 'react'
import Field from '../Field'
import SelectInput, { type SelectProps } from '@/Components/Inputs/Select'
import { ConditionalWrapper, Group } from '@/Components'
import { ModalFormButton } from '@/Components/Button'
import { useInertiaInput, type UseFormProps, NestedObject } from 'use-inertia-form'
import { ComboboxData } from '@mantine/core'

type OmittedDropdownTypes = 'name'|'defaultValue'|'onBlur'|'onChange'|'onDropdownOpen'|'onDropdownClose'|'onSelect'
export interface ISelectFormProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<SelectProps, OmittedDropdownTypes>,
	IInertiaInputProps {
	defaultValue?: string
	onChange?: (option: ComboboxData|null, form: UseFormProps<TForm>) => void
	onClear?: (form: UseFormProps<TForm>) => void
	onDropdownOpen?: (form: UseFormProps<TForm>) => void
	onDropdownClose?: (form: UseFormProps<TForm>) => void
	onSelect?: (form: UseFormProps<TForm>) => void
	onOptionSubmit?: (option: ComboboxData|null, form: UseFormProps<TForm>) => void
	onSearchChange?: (value: string, form: UseFormProps<TForm>) => void
	endpoint?: string
	newForm?: React.ReactElement
	field?: boolean
}

const Select = <TForm extends NestedObject = NestedObject>(
	{
		name,
		label,
		model,
		required,
		defaultValue,
		onSearchChange,
		onChange,
		onBlur,
		onDropdownOpen,
		onDropdownClose,
		onSelect,
		fetchOnOpen,
		endpoint,
		newForm,
		field = true,
		id,
		errorKey,
		options,
		...props
	}: ISelectFormProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string, TForm>({ name, model, errorKey })

	const handleChange = (option: string|null) => {
		setValue(option ? option : '')

		onChange?.(option, form)
	}

	const handleBlur = () => {
		onBlur?.(String(value), form)
	}

	const handleDropdownOpen = () => {
		onDropdownOpen?.(form)
	}

	const handleDropdownClose = () => {
		onDropdownClose?.(form)
	}

	const handleNewFormSuccess = (data: { id: string|number }) => {
		setValue(String(data.id))
	}

	const handleSelect = () => {
		onSelect?.(form)
	}

	return (
		<ConditionalWrapper
			condition={ newForm !== undefined }
			wrapper={ children => (
				<Group
					grow
					wrap="nowrap"
					align="baseline"
					justify="space-between"
				>
					{ children }
				</Group>
			) }
		>
			<>
				<ConditionalWrapper
					condition={ field }
					wrapper={ children => (
						<Field
							type="select"
							required={ required }
							errors={ !!error }
						>
							{ children }
						</Field>
					) }
				>
					<SelectInput
						// Add "search" suffix to prevent password managers trying to autofill dropdowns
						id={ `${id || inputId}-search` }
						autoComplete="off"
						name={ inputName }
						label={ label }
						value={ String(value) }
						onChange={ handleChange }
						onBlur={ handleBlur }
						onDropdownClose={ handleDropdownClose }
						onDropdownOpen={ handleDropdownOpen }
						onSelect={ handleSelect }
						defaultValue={ defaultValue ?? String(value) }
						error={ error }
						options={ options }
						{ ...props }
					/>
				</ConditionalWrapper>
				{ newForm && <ModalFormButton
					title={ `Create New ${label}` }
					form={ newForm }
					onSuccess={ handleNewFormSuccess }
				/> }
			</>
		</ConditionalWrapper>
	)
}

export default Select
