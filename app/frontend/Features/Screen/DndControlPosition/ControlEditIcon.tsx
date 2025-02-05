import { Box, BoxProps } from "@/Components"
import { EditIcon } from "@/Components/Icons"
import { modals } from "@mantine/modals"
import ScreenControlForm from "@/Features/Controls/Form"
import { Routes } from "@/lib"
import { useForm, UseFormProps } from "use-inertia-form"

import cx from "clsx"
import * as classes from "./EditControls.css"

type ScreenControlEditFormData = {
	control: Schema.ControlsEdit
}

interface ControlEditIconProps extends BoxProps {
	control: Schema.ControlsEdit
}

const ControlEditIcon = ({ control, ...props }: ControlEditIconProps) => {
	const { getData, setData } = useForm<{ screen: Schema.ScreensEdit }>()

	const handleEditButtonClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation()
		e.preventDefault()

		modals.open({
			title: "Edit Control",
			children: (
				<ScreenControlForm<ScreenControlEditFormData>
					remember={ false }
					control={ { control } }
					to={ Routes.control(control.id) }
					method="put"
					onSuccess={ handleEditSuccess }
					filter={ ["control.id", "control.command", "control.updated_at", "control.created_at", "control.command_id", "control.protocol"] }
				/>
			),
		})
	}

	const handleEditSuccess = (form: UseFormProps<ScreenControlEditFormData>) => {
		const updatedControl = form.data.control
		const controls = getData("screen.controls")
		const controlIndex = controls.findIndex(c => c.id === updatedControl.id)

		if(controlIndex !== - 1) {
			const updatedControls = [...controls]
			updatedControls[controlIndex] = updatedControl
			setData("screen.controls", updatedControls)
		}

		modals.closeAll()
	}

	return (
		<Box
			className={ cx(classes.editButtonIcon) }
			onMouseUp={ handleEditButtonClick }
			{ ...props }
		>
			<EditIcon size={ 11 } />
		</Box>
	)
}

export default ControlEditIcon
