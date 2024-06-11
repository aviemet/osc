import React from 'react'
import { Select } from '@/Components/Form'
import { type AsyncDropdown } from '.'
import { useGetProtocolOptions } from '@/queries'

const ProtocolDropdown = ({
	label = 'Protocol',
	name = 'protocol_id',
	initialData = [],
	value,
	onSelect,
	...props
}: AsyncDropdown<Schema.ProtocolsOptions>) => {
	const { data } = useGetProtocolOptions()

	return (
		<Select
			label={ label }
			name={ name }
			options={ !data ? [] : data.map(protocol => ({
				label: protocol.title,
				value: String(protocol.id),
				slug: protocol.slug,
			})) }
			{ ...props }
		/>
	)
}

export default ProtocolDropdown
