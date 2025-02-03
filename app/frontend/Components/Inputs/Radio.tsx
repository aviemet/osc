import React, { forwardRef } from "react"
import { Radio, type RadioProps as MantineRadioProps } from "@mantine/core"
import { type BaseInputProps } from "."
import InputWrapper from "./InputWrapper"

export interface RadioProps extends Omit<MantineRadioProps, "value">, BaseInputProps {
	value: string
}

type RadioComponentType = React.ForwardRefExoticComponent<
  RadioProps & React.RefAttributes<HTMLInputElement>
> & {
	Group: typeof Radio.Group
};

const RadioComponent: RadioComponentType = forwardRef<HTMLInputElement, RadioProps>((
	{ id, wrapper, wrapperProps, value, ...props },
	ref,
) => {
	const inputId = id ?? value

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			<Radio
				ref={ ref }
				id={ inputId }
				value={ value }
				{ ...props }
			/>
		</InputWrapper>
	)
}) as RadioComponentType

RadioComponent.Group = Radio.Group

export default RadioComponent
