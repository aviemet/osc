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

interface ControlEditIconProps extends IconButtonProps {
	control: Schema.ControlsEdit
	index: number
}

const ControlEditIcon = ({ control, index, ...props }: ControlEditIconProps) => {
	const [opened, { open, close }] = useDisclosure(false)

	const handleEditButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		// e.stopPropagation()
		// e.preventDefault()

		open()
	}

	return (
		<>
			<Modal title="Edit Control" opened={ opened } onClose={ close } data-no-dnd>
				<>
					<NestedFields model={ `controls[${index}]` }>
						<ControlInputs index={ index } closeModal={ close } />
					</NestedFields>
				</>
			</Modal>

			<IconButton
				variant="subtle"
				color="gray"
				size="sm"
				mt={ 2 }
				mr={ 2 }
				className={ cx(classes.editButtonIcon) }
				onClick={ handleEditButtonClick }
				data-no-dnd
				{ ...props }
			>
				<EditIcon size={ 11 } />
			</IconButton>
		</>
	)
}

export default ControlEditIcon
