import React from 'react'
import { Box } from '@mantine/core'
import cx from 'clsx'
import { Form as InertiaForm, type FormProps, type NestedObject } from 'use-inertia-form'

interface IFormProps<TForm> extends FormProps<TForm> {
	grid?: boolean
}

const Form = <TForm extends NestedObject>(
	{ children, data, grid = true, className, railsAttributes = true, ...props }: IFormProps<TForm>,
) => {

	return (
		<Box>
			<InertiaForm
				data={ data }
				className={ cx({ 'format-grid': grid }, className) }
				railsAttributes={ railsAttributes }
				{ ...props }
			>
				{ children }
			</InertiaForm>
		</Box>
	)
}

export default Form
