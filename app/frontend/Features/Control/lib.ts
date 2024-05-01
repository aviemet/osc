import { Routes } from '@/lib'

export const controlRoute = (control: Schema.Control) => {
	if(control.protocol_id) {
		return Routes.apiExecuteProtocol(control.protocol_id)
	} else if(control.command_id) {
		return Routes.apiExecuteCommand(control.command_id)
	} else {
		return false
	}
}

export const controlTitle = (control: Schema.Control) => {
	if(control.protocol) {
		return control.protocol.title
	} else if(control.command) {
		return control.command.title
	} else {
		return false
	}
}
