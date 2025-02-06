import { Form } from "@/Components/Form"
import { FormProps } from "use-inertia-form"
import ControlFormInputs from "./ControlFormInputs"

export type ScreenControlFormData = {
	control: Schema.ControlsFormData
}

export interface ScreenControlFormProps extends Omit<FormProps<ScreenControlFormData>, "data"> {
	control?: Schema.ControlsFormData
}

const ScreenControlForm = ({ control, ...props }: ScreenControlFormProps) => {
	return (
		<Form<ScreenControlFormData>
			model="control"
			data={ control ? { control } : undefined }
			remember={ false }
			{ ...props }
		>
			<ControlFormInputs />
		</Form>
	)
}

export default ScreenControlForm
