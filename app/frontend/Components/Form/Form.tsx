import React from 'react'
import { Box } from '@mantine/core'
import cx from 'clsx'
import { Form as InertiaForm, UseFormProps, type FormProps as FormProps, type NestedObject } from 'use-inertia-form'
import * as classes from './Form.css'
import { FormConsumer } from './Components'

interface FormComponentProps<TForm> extends Omit<FormProps<TForm>, 'children'> {
	children: React.ReactNode | ((form: UseFormProps<TForm>) => React.ReactNode)
}

const Form = <TForm extends NestedObject>(
	{ children, data, className, railsAttributes = true, ...props }: FormComponentProps<TForm>,
) => {
	return (
		<Box className={ cx('form') }>
			<InertiaForm
				data={ data }
				className={ cx(classes.form, className) }
				railsAttributes={ railsAttributes }
				{ ...props }
			>
				{ React.isValidElement(children) ? children : <FormConsumer>{ form => children(form) }</FormConsumer> }
			</InertiaForm>
		</Box>
	)
}

export default Form
