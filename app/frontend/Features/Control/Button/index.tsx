import React, { useMemo } from 'react'
import { Button } from '@/Components'
import { Routes } from '@/lib'
import axios from 'axios'
import EditButton from '../EditButton'
import { type ButtonProps } from '@mantine/core'
import { type CommonControlProps } from '..'

interface ButtonControlProtocolProps extends ButtonProps, CommonControlProps {
	protocol: Schema.Protocol
}

interface ButtonControlCommandProps extends ButtonProps, CommonControlProps {
	command: Schema.Command
}

type ButtonControlProps = ButtonControlProtocolProps|ButtonControlCommandProps

const ButtonControl = (props: ButtonControlProps) => {
	const { edit, control } = props
	let protocol: Schema.Protocol
	let command: Schema.Command

	if('protocol' in props) {
		protocol = props.protocol
	}
	if('command' in props) {
		command = props.command
	}

	const route = useMemo(() => {
		if(control) {
			return Routes.apiExecuteProtocol(control.protocol.id)
		} else if(protocol) {
			return Routes.apiExecuteProtocol(protocol.id!)
		} else if(command) {
			return Routes.apiExecuteCommand(command.id!)
		} else {
			return false
		}
	}, [props])

	const title = useMemo(() => {
		if(control) {
			return control.title
		} else if(protocol) {
			return protocol.title
		} else if(command) {
			return command.title
		} else {
			return ''
		}
	}, [props])

	const handleButtonClick = () => {
		if(edit || route === false) return

		axios.put(route)
	}

	return (
		<Button
			onClick={ handleButtonClick }
			{ ...props }
		>
			{ (edit && control) && <EditButton control={ control } /> }
			{ title }
		</Button>
	)
}

export default ButtonControl
