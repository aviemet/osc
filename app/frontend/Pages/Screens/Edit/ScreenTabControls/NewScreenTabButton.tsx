import React from "react"
import { Button } from "@/Components"
import { modals } from "@mantine/modals"
import ScreenForm from "../../New/Form"
import { Routes } from "@/lib"

const NewScreenTabButton = () => {

	const handleNewScreenModalTrigger = () => {
		modals.open({
			title: "Create a New Screen",
			children: (
				<ScreenForm
					to={ Routes.screens() }
					onSubmit={ () => modals.closeAll() }
				/>
			),
		})
	}

	return (
		<Button
			p="xs"
			variant="subtle"
			onClick={ handleNewScreenModalTrigger }
		>+</Button>
	)
}

export default NewScreenTabButton
