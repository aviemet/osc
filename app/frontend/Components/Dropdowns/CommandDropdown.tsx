import React, { forwardRef } from 'react'
import { Select } from '@/Components/Form'
import { type AsyncDropdown } from '.'
import { commandsQuery } from '@/queries'

const CommandDropdown = forwardRef<HTMLInputElement, AsyncDropdown<Schema.CommandsOptions>>((
	{ label = 'Command', name = 'command_id', initialData = [], value, onSelect, ...props },
	ref,
) => {
	const { data } = commandsQuery()

	return (
		<Select
			ref={ ref }
			label={ label }
			name={ name }
			options={ !data ? [] : data.map(command => ({
				label: command.title,
				value: String(command.id),
				description: 'hi',
			})) }
			{ ...props }
		/>
	)
})

export default CommandDropdown
