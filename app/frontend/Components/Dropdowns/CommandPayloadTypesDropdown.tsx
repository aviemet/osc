import React, { forwardRef } from 'react'
import { Select } from '@/Components/Form'
import { type AsyncDropdown } from '.'
import { commandPayloadTypesQuery } from '@/queries'

interface CommandPayloadTypesDropdownProps extends Omit<AsyncDropdown<Record<number,string>>, 'onSelect'> {
	onSelect?: (data: Record<number, string>) => void
}

const ProtocolDropdown = forwardRef<HTMLInputElement, CommandPayloadTypesDropdownProps>((
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
