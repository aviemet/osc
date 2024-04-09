import React, { useMemo } from 'react'
import { Slider } from '@/Components'
import { type SliderProps } from '@mantine/core'
import { CommonControlProps } from '..'
import { Routes } from '@/lib'

interface SliderControlProtocolProps extends SliderProps, CommonControlProps {
	protocol: Schema.Protocol
}

interface SliderControlCommandProps extends SliderProps, CommonControlProps {
	command: Schema.Command
}

type SliderControlProps = SliderControlProtocolProps|SliderControlCommandProps

const SliderControl = (props: SliderControlProps) => {
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

	return (
		<Slider { ...props }>
			{ title }
		</Slider>
	)
}

export default SliderControl
