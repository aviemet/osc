import React from 'react'
import { Switch, type SwitchProps } from '@mantine/core'

export interface ISwitchProps extends SwitchProps {}

const SwitchComponent = ({ id, name, style, ...props }: ISwitchProps) => {
	const inputId = id ?? name

	return (
		<>
			<Switch
				id={ inputId }
				name={ name }
				required={ props.required }
				style={ [{ padding: '14px 10px' }, style] }
				{ ...props }
			/>
		</>
	)
}

export default SwitchComponent
