import React, { forwardRef } from 'react'
import { Select } from '@/Components/Form'
import { type IAsyncDropdown } from '.'
import { protocolsOptionsQuery } from '@/queries'

interface ProtocolDropdownProps extends Omit<IAsyncDropdown<Schema.ProtocolsOptions>, 'onSelect'> {
	onSelect?: (data: Schema.ProtocolsOptions) => void
}

const ProtocolDropdown = forwardRef<HTMLInputElement, ProtocolDropdownProps>((
	{ label = 'Protocol', name = 'protocol_id', initialData = [], value, onSelect, ...props },
	ref,
) => {
	const { data } = protocolsOptionsQuery()

	return (
		<Select
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
