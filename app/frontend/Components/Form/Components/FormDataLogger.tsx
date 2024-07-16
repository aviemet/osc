import React from 'react'
import FormConsumer from './FormConsumer'

const FormDataLogger = () => {
	return (
		<FormConsumer>{ ({ data }) => {
			console.log({ data })
			return <></>
		} }</FormConsumer>
	)
}

export default FormDataLogger
