import React, { useMemo } from 'react'
import { Grid } from '@/Components'
import { NumberInput, TextInput, useDynamicInputContext } from '@/Components/Form'
import { CommandDropdown, CommandValueDropdown } from '@/Components/Dropdowns'
import { useForm } from 'use-inertia-form'

interface CommandInputsProps {
	commands: Schema.CommandsOptions[]
}

const CommandInputs = ({ commands }: CommandInputsProps) => {
	const { record, index } = useDynamicInputContext<Schema.ProtocolsCommand>()
	const { setData } = useForm()

	const handleChange = () => {
		setData(`protocol.protocols_commands[${index}].command_value_id`, '')
	}

	const activeCommand = useMemo(
		() => commands.find(command => Number(command.id) === Number(record.command_id)),
		[record.command_id, commands],
	)

	return (
		<Grid>
			<Grid.Col span={ 1 }>
				{ record.order }
			</Grid.Col>
			<Grid.Col span={ 6 }>
				<CommandDropdown
					name="command_id"
					onChange={ handleChange }
				/>
			</Grid.Col>
			<Grid.Col span={ 5 }>
				{ activeCommand ?
					<CommandValueDropdown
						name="command_value_id"
						commandSlug={ activeCommand.slug! }
					/>
					:
					<TextInput label="Command Value" name="command_value_id" />
				}
			</Grid.Col>
			<Grid.Col span={ 6 }>
				<NumberInput label="Delay" name="delay" />
			</Grid.Col>
		</Grid>
	)
}

export default CommandInputs
