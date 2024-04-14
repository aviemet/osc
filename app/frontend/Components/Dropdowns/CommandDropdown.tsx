import React, { forwardRef } from 'react'
import { Select } from '@/Components/Form'
import { type AsyncDropdown } from '.'
import { commandsQuery } from '@/queries'

interface CommandDropdownProps extends Omit<AsyncDropdown<Schema.CommandsOptions>, 'onSelect'> {
	onSelect?: (data: Schema.CommandsOptions) => void
}

const CommandDropdown = forwardRef<HTMLInputElement, CommandDropdownProps>((
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
