import React, { forwardRef } from "react"
import { InputProps } from "react-html-props"

const TextInputComponent = forwardRef<HTMLInputElement, InputProps>((
	{ name, id, ...props },
	ref,
) => {
	const inputId = id || name

	return (
		<input
			ref={ ref }
			name={ name }
			id={ inputId }
			type="hidden"
			{ ...props }
		/>
	)
})

export default TextInputComponent
