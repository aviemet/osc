import React from 'react'
import { Box } from '@mantine/core'
import cx from 'clsx'
import { Form as InertiaForm, type FormProps, type NestedObject } from 'use-inertia-form'
import * as classes from './Form.css'


interface IFormProps<TForm> extends FormProps<TForm> {
	grid?: boolean
}

export interface ExtendableFormProps<TForm> extends Omit<IFormProps<TForm>, 'data'> {}

const Form = <TForm extends NestedObject>(
	{ children, data, grid = true, className, railsAttributes = true, ...props }: IFormProps<TForm>,
) => {
	return (
		<Box className={ cx('form') }>
			<InertiaForm
				data={ data }
				className={ cx({ 'format-grid': grid }, classes.form, className) }
				railsAttributes={ railsAttributes }
				{ ...props }
			>
				{ children }
			</InertiaForm>
		</Box>
	)
}

export default Form
