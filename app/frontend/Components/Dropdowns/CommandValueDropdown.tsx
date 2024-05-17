import React, { forwardRef } from 'react'
import { Select } from '@/Components/Form'
import { type AsyncDropdown } from '.'
import { useGetCommand } from '@/queries'

interface CommandValueDropdownProps extends AsyncDropdown<Schema.CommandValue> {
	commandSlug: string
}

const CommandValueDropdown = forwardRef<HTMLInputElement, CommandValueDropdownProps>((
	{ label = 'Command Value', name = 'command_value_id', commandSlug, initialData = [], value, onSelect, ...props },
	ref,
) => {
	const { data } = useGetCommand(commandSlug)

	return (
		<Select
			ref={ ref }
			label={ label }
			name={ name }
			options={ !data?.command_values ? [] : data?.command_values?.map(value => ({
				label: `${value.value}${value.label ? ` - ${value.label}` : ''}`,
				value: String(value.id),
				description: 'hi',
			})) }
			{ ...props }
		/>
	)
})

export default CommandValueDropdown
