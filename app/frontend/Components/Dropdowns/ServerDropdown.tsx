import React, { forwardRef } from 'react'
import { Select } from '@/Components/Form'
import { type AsyncDropdown } from '.'
import { serversQuery } from '@/queries'

interface ServerDropdownProps extends Omit<AsyncDropdown<Schema.ServersOptions>, 'onSelect'> {
	onSelect?: (data: Schema.ServersOptions) => void
}

const ServerDropdown = forwardRef<HTMLInputElement, ServerDropdownProps>((
	{ label = 'Server', name = 'server_id', initialData = [], value, onSelect, ...props },
	ref,
) => {
	const { data } = serversQuery()

	return (
		<Select
			ref={ ref }
			label={ label }
			name={ name }
			options={ !data ? [] : data.map(server => ({
				label: server.title!,
				value: String(server.id),
			})) }
			{ ...props }
		/>
	)
})

export default ServerDropdown
