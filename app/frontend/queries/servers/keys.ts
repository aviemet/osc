const queryRoot = "servers"

export const queryKeys = {
	servers: [queryRoot] as const,
	server: (slug: string) => [queryRoot, slug] as const,
}
