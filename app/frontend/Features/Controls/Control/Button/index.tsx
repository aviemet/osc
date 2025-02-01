import { type ControlButtonBaseProps } from "./Base"
import EditControlButton from "./Edit"
import ControlButton from "./Control"

export default ({ edit, control, ...props }: ControlButtonBaseProps) => {
	return edit ?
		<EditControlButton edit={ true } control={ control } { ...props } />
		:
		<ControlButton edit={ false } control={ control } { ...props } />
}

