const queryRoot = "commands"

export const queryKeys = {
	commands: [queryRoot] as const,
	command: (slug: string) => [queryRoot, slug] as const,
	payloadTypes: [queryRoot, "payloadTypes"] as const,
}
