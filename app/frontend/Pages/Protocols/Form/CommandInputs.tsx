import React, { useMemo } from 'react'
import { Grid, Label } from '@/Components'
import { NumberInput, TextInput, useDynamicInputContext } from '@/Components/Form'
import { CommandDropdown, CommandValueDropdown } from '@/Components/Dropdowns'
import { useForm } from 'use-inertia-form'
import dayjs from 'dayjs'
import { humanizeDuration } from '@/lib/formatters'
import TextInputComponent from '@/Components/Inputs/TextInput'

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

			<Grid.Col span={ 6 }>
				<CommandDropdown
					name="command_id"
					onChange={ handleChange }
				/>
			</Grid.Col>

			<Grid.Col span={ 6 }>
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
				<NumberInput label="Delay (in milliseconds)" name="delay" />
			</Grid.Col>

			<Grid.Col span={ 6 }>
				<Label>Human Readable Duration</Label>
				<TextInputComponent readOnly variant="outline" value={
					(record?.delay || 0) === 0 ?
						'No Delay'
						:
						humanizeDuration(dayjs.duration(record?.delay || 0, 'millisecond'))
				} />
			</Grid.Col>

		</Grid>
	)
}

export default CommandInputs
