import React from "react"
import { Select } from "@/Components/Form"
import { type AsyncDropdown } from "."
import { useGetCommandPayloadTypes } from "@/queries"

const ProtocolDropdown = (
	{
		label = "Payload Type",
		name = "payload_type",
		initialData = [],
		value,
		onSelect,
		...props
	}: AsyncDropdown<Record<number,string>>) => {
	const { data } = useGetCommandPayloadTypes()

	return (
		<Select
			label={ label }
			name={ name }
			options={ data }
			{ ...props }
		/>
	)
}

export default ProtocolDropdown
