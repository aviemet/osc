import React, { useMemo } from 'react'
import { Grid } from '@/Components'
import { NumberInput, TextInput, useDynamicInputContext } from '@/Components/Form'
import { CommandDropdown, CommandValueDropdown } from '@/Components/Dropdowns'
import { useForm } from 'use-inertia-form'
// import { useSortable } from '@dnd-kit/sortable'
// import { CSS } from '@dnd-kit/utilities'
// import { SortableList } from '@/Components/Sortable'
// import { useSortableFormContext } from './SortableFormSection'

interface CommandInputsProps {
	commands: Schema.Command[]
}

const CommandInputs = ({ commands }: CommandInputsProps) => {
	const { record, path, index } = useDynamicInputContext<Schema.ProtocolsCommand>()
	const { setData } = useForm()
	// const sortable = useSortableFormContext()

	const handleChange = () => {
		setData(`protocol.protocols_commands[${index}].command_value_id`, '')
		// console.log({ record, path, index })
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
			{ /* <Grid.Col span={ 6 }>{ record.order }</Grid.Col>
			<Grid.Col span={ 6 }>
				<NumberInput label="Delay" name="delay" />
			</Grid.Col> */ }
		</Grid>
	)
}

export default CommandInputs
