import React from "react"
import { Select } from "@/Components/Form"
import { type AsyncDropdown } from "."
import { useGetCommands } from "@/queries"

const CommandDropdown = ({
	label = "Command",
	name = "command_id",
	initialData = [],
	value,
	onSelect,
	...props
}: AsyncDropdown<Schema.CommandsOptions>) => {
	const { data } = useGetCommands()

	return (
		<Select
			label={ label }
			name={ name }
			options={ !data
				? []
				: data.map(command => ({
					label: command.title,
					value: String(command.id),
				})) }
			{ ...props }
		/>
	)
}

export default CommandDropdown
