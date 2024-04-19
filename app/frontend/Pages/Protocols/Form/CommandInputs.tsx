import React, { useMemo } from 'react'
import { Grid } from '@/Components'
import { TextInput, useDynamicInputContext } from '@/Components/Form'
import { CommandDropdown } from '@/Components/Dropdowns'
import CommandValueDropdown from '@/Components/Dropdowns/CommandValueDropdown'
import { useQueryClient } from '@tanstack/react-query'
import { useForm } from 'use-inertia-form'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface CommandInputsProps {
	commands: Schema.Command[]
}

const CommandInputs = ({ commands }: CommandInputsProps) => {
	const { record, path, index } = useDynamicInputContext<Schema.ProtocolsCommand>()
	const { setData } = useForm()

	const handleChange = () => {
		setData(`protocol.protocols_commands[${index}].command_value_id`, '')
		// console.log({ record, path, index })
	}

	const activeCommand = useMemo(
		() => commands.find(command =>  Number(command.id) === Number(record.command_id)),
		[record.command_id, commands],
	)

	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({ id: index })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	}

	return (
		<Grid ref={ setNodeRef } style={ style } { ...attributes } { ...listeners }>
			<Grid.Col span={ 6 }>
				<CommandDropdown
					name="command_id"
					onChange={ handleChange }
				/>
			</Grid.Col>
			<Grid.Col span={ { sm: 6 } }>
				{ activeCommand ?
					<CommandValueDropdown
						name="command_value_id"
						commandSlug={ activeCommand.slug! }
					/>
					:
					<TextInput label="Command Value" name="command_value_id" />
				}
			</Grid.Col>
		</Grid>
	)
}

export default CommandInputs
