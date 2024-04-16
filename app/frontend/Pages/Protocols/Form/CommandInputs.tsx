import React from 'react'
import { Grid } from '@/Components'
import { Select, useDynamicInputContext } from '@/Components/Form'
import { CommandDropdown } from '@/Components/Dropdowns'


const CommandInputs = () => {
	const { record } = useDynamicInputContext<Schema.Command>()

	return (
		<Grid>
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
	)
}

export default CommandInputs
