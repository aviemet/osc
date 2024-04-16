import { exclude } from '@/lib'

export const transformProtocolFormData = (protocol: Schema.ProtocolsFormData) => {
	return exclude(protocol, [
		'id',
		'slug',
		'created_at',
		'updated_at',
		'commands[].id',
		'commands[].slug',
		'commands[].address',
		'commands[].description',
		'commands[].server_id',
	])
}
