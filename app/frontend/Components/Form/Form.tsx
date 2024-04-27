import React from 'react'
import { Box } from '@mantine/core'
import cx from 'clsx'
import { Form as InertiaForm, type FormProps as FormProps, type NestedObject } from 'use-inertia-form'
import * as classes from './Form.css'

const Form = <TForm extends NestedObject>(
	{ children, data, className, railsAttributes = true, ...props }: FormProps<TForm>,
) => {
	return (
		<Box className={ cx('form') }>
			<InertiaForm
				data={ data }
				className={ cx(classes.form, className) }
				railsAttributes={ railsAttributes }
				remember={ false }
				{ ...props }
			>
				{ children }
			</InertiaForm>
		</Box>
	)
}

export default Form
