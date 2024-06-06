import React, { forwardRef } from 'react'
import { Checkbox, type CheckboxProps as MantineCheckboxProps } from '@mantine/core'
import { type BaseInputProps } from '.'
import InputWrapper from './InputWrapper'

export interface CheckboxProps extends MantineCheckboxProps, BaseInputProps {}

type CheckboxComponentType = React.ForwardRefExoticComponent<
  CheckboxProps & React.RefAttributes<HTMLInputElement>
> & {
	Group: typeof Checkbox.Group
};

const CheckboxComponent: CheckboxComponentType = forwardRef<HTMLInputElement, CheckboxProps>((
	{ id, name, wrapper, wrapperProps, ...props },
	ref,
) => {
	const inputId = id ?? name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			<Checkbox
				ref={ ref }
				id={ inputId }
				name={ name }
				{ ...props }
			/>
		</InputWrapper>
	)
}) as CheckboxComponentType

CheckboxComponent.Group = Checkbox.Group

export default CheckboxComponent
