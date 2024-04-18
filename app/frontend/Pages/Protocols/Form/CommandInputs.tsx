import React, { useEffect } from 'react'
import { Box, Grid, Label } from '@/Components'
import { Select, TextInput, useDynamicInputContext } from '@/Components/Form'
import { CommandDropdown } from '@/Components/Dropdowns'
import { useDynamicInputs } from 'use-inertia-form'
import cx from 'clsx'
import CommandValueDropdown from '@/Components/Dropdowns/CommandValueDropdown'
import { useQueryClient } from '@tanstack/react-query'
import { commandsQuery } from '@/queries'

interface CommandInputsProps {
	commands: Schema.Command[]
}

const CommandInputs = ({ commands }: CommandInputsProps) => {
	const { data } = commandsQuery({ initialData: commands })
	const { record, path, index } = useDynamicInputContext()

	const activeCommand = commands.find(command => command.id === record.command_id)

	const queryClient = useQueryClient()

	const handleChange = (option, options, form) => {
		queryClient.invalidateQueries(['commands'])
	}

	useEffect(() => {
		console.log({ data })
	}, [data])

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
