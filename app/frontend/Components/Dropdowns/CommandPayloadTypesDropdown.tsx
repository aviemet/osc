import React, { forwardRef } from 'react'
import { Select } from '@/Components/Form'
import { type AsyncDropdown } from '.'
import { commandPayloadTypesQuery } from '@/queries'

const ProtocolDropdown = forwardRef<HTMLInputElement, AsyncDropdown<Record<number,string>>>((
	{ label = 'Payload Type', name = 'payload_type', initialData = [], value, onSelect, ...props },
	ref,
) => {
	const { data } = commandPayloadTypesQuery()

	return (
		<Select
			ref={ ref }
			label={ label }
			name={ name }
			options={ data }
			{ ...props }
		/>
	)
})

export default ProtocolDropdown
