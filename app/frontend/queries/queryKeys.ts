const queryKeys = {
	commands: {
		root: ['commands'] as const,
		detail: (slug: string) => [...queryKeys.commands.root, slug] as const,
		payloadTypes: ['commands', 'payloadTypes'] as const,
	},
	controls: {
		root: ['controls'] as const,
		detail: (slug: string) => [...queryKeys.controls.root, slug] as const,
	},
	protocols: {
		root: ['protocols'] as const,
		detail: (slug: string) => [...queryKeys.protocols.root, slug] as const,
		options: ['protocols', 'options'] as const,
	},
	servers: {
		root: ['servers'] as const,
		detail: (slug: string) => [...queryKeys.servers.root, slug] as const,
		options: ['servers', 'options'] as const,
	},
}

export default queryKeys
