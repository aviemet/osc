import { Button, Modal, IconButton, IconButtonProps } from "@/Components"
import { EditIcon } from "@/Components/Icons"
import { modals } from "@mantine/modals"
import { Routes } from "@/lib"
import { useDisclosure } from "@/lib/hooks"
import { NestedFields, useForm, UseFormProps } from "use-inertia-form"
import { router } from "@inertiajs/react"
import ScreenControlForm, { ScreenControlFormData } from "@/Features/Controls/Form"
import ControlInputs from "../ControlInputs"

import cx from "clsx"
import * as classes from "./EditControls.css"

type ScreenControlEditFormData = {
	control: Schema.ControlsEdit
}

interface ControlEditIconProps extends IconButtonProps {
	control: Schema.ControlsEdit
}

const ControlEditIcon = ({ control, ...props }: ControlEditIconProps) => {
	const { getData, setData } = useForm<{ screen: Schema.ScreensEdit }>()
	const [opened, { open, close }] = useDisclosure(false)

	const handleEditButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation()
		e.preventDefault()
		console.log("HI")
		open()
		// modals.open({
		// 	title: "Edit Control",
		// 	children: (
		// 		// <ScreenControlForm
		// 		// 	remember={ false }
		// 		// 	control={ control }
		// 		// 	to={ Routes.control(control.id) }
		// 		// 	method="put"
		// 		// 	onSuccess={ handleEditSuccess }
		// 		// />
		// 	),
		// })
	}

	const handleEditSuccess = (form: UseFormProps<ScreenControlFormData>) => {
		// const updatedControl = form.data.control
		// const controls = getData("screen.controls")
		// const controlIndex = controls.findIndex(c => c.id === updatedControl.id)

		// if(controlIndex !== - 1) {
		// 	const updatedControls = [...controls]
		// 	updatedControls[controlIndex] = updatedControl
		// 	setData("screen.controls", updatedControls)
		// }

		router.reload()

		modals.closeAll()
	}

	return (
		<>
			<Modal opened={ opened } onClose={ close }>
				<>
					<NestedFields model="controls">
						<ControlInputs />
					</NestedFields>
				</>
			</Modal>

			<IconButton
				variant="subtle"
				color="gray"
				className={ cx(classes.editButtonIcon) }
				onClick={ handleEditButtonClick }
				{ ...props }
			>
				<EditIcon size={ 11 } />
			</IconButton>
		</>
	)
}

export default ControlEditIcon
