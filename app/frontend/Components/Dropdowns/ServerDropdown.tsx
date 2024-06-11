import React from 'react'
import { Select } from '@/Components/Form'
import { type AsyncDropdown } from '.'
import { useGetServers } from '@/queries'

const ServerDropdown = ({
	label = 'Server',
	name = 'server_id',
	initialData = [],
	value,
	onSelect,
	...props
}: AsyncDropdown<Schema.ServersOptions>) => {
	const { data } = useGetServers()

	return (
		<Select
			label={ label }
			name={ name }
			options={ !data ? [] : data.map(server => ({
				label: server.title!,
				value: String(server.id),
			})) }
			{ ...props }
		/>
	)
}

export default ServerDropdown
