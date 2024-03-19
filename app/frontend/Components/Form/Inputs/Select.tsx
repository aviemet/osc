import React from 'react'
import Field from '../Field'
import SelectInput, { type ISelectProps } from '@/Components/Inputs/Select'
import { ConditionalWrapper, Group } from '@/Components'
import { ModalFormButton } from '@/Components/Button'
import { useInertiaInput, type UseFormProps, NestedObject } from 'use-inertia-form'

type OmittedDropdownTypes = 'name'|'defaultValue'|'onBlur'|'onChange'|'onDropdownOpen'|'onDropdownClose'
export interface ISelectFormProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<ISelectProps, OmittedDropdownTypes>,
	IInertiaInputProps {
	defaultValue?: string
	onChange?: ((value: string|null, form: UseFormProps<TForm>) => void) | undefined
	onDropdownOpen?: (form: UseFormProps<any>) => void
	onDropdownClose?: (form: UseFormProps<any>) => void
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
		if(onBlur) onBlur(String(value), form)
	}

	const handleDropdownOpen = () => {
		if(onDropdownOpen) onDropdownOpen(form)
	}

	const handleDropdownClose = () => {
		if(onDropdownClose) onDropdownClose(form)
	}

	const handleNewFormSuccess = (data: { id: string|number }) => {
		setValue(String(data.id))
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
				<Group
					grow
					wrap="nowrap"
					align="baseline"
					justify="space-between"
				>
					{ children }
				</Group>
			)
			}
			condition={ newForm !== undefined }
		>
			<>
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
