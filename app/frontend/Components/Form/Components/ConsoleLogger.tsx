import React from 'react'
import FormConsumer from './FormConsumer'

const ConsoleLogger = ({ prop }) => {
	return (
		<FormConsumer>{ (form) => {
			console.log({ [prop]: form[prop] })
			return <></>
		} }</FormConsumer>
	)
}

export default ConsoleLogger
