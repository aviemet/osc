import React, { forwardRef } from 'react'
import { Select } from '@/Components/Form'
import { type AsyncDropdown } from '.'
import { useGetProtocolOptions } from '@/queries'

const ProtocolDropdown = forwardRef<HTMLInputElement, AsyncDropdown<Schema.ProtocolsOptions>>((
	{ label = 'Protocol', name = 'protocol_id', initialData = [], value, onSelect, ...props },
	ref,
) => {
	const { data } = useGetProtocolOptions()

	return (
		<Select
			ref={ ref }
			label={ label }
			name={ name }
			options={ !data ? [] : data.map(protocol => ({
				label: protocol.title,
				value: protocol.slug,
			})) }
			{ ...props }
		/>
	)
})

export default ProtocolDropdown
