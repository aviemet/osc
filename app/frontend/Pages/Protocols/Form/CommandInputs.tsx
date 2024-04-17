import React from 'react'
import { Box, Grid, Label } from '@/Components'
import { Select, useDynamicInputContext } from '@/Components/Form'
import { CommandDropdown } from '@/Components/Dropdowns'
import { useDynamicInputs } from 'use-inertia-form'
import cx from 'clsx'

interface CommandInputsProps {
	commands: Schema.Command[]
}

const CommandInputs = ({ commands }: CommandInputsProps) => {
	const model = 'protocol_command'
	const { addInput, removeInput, paths } = useDynamicInputs({ model,  emptyData: {
		command_id: '',
		command_value_id: '',
		value: '',
		delay: '',
	} })

	return (
		<Box className={ cx('dynamic_inputs', model, paths) }>
			<Label style={ { flex: 1 } }>Commands</Label>

			{ commands.map((command, i) => (

				<Grid key={ command.id }>
					<Grid.Col span={ 6 }>
						<CommandDropdown name="id" />
					</Grid.Col>

					<Grid.Col span={ 6 } >
						<Select
							label="Command Value"
							name="protocol_command.command_value_id"
							options={ command.command_values.map(value => ({
								value: String(value.id),
								label: `${value.value}${value.label ? ` - ${value.label}` : ''}`,
							})) }
						/>
					</Grid.Col>
				</Grid>

			)) }

			{ /* { paths.map((path, i) => (
				<Grid key={ i }>
					<Grid.Col span={ 6 }>
						<CommandDropdown name="id" />
					</Grid.Col>

					<Grid.Col span={ 6 } >
						<Select
							label="Command Value"
							name="protocol_command.command_value_id"
							options={ record.command_values.map(value => ({
								value: String(value.id),
								label: `${value.value}${value.label ? ` - ${value.label}` : ''}`,
							})) }
						/>
					</Grid.Col>
				</Grid>
			) ) } */ }
		</Box>
	)
}

export default CommandInputs
