const queryRoot = 'protocols'

export const queryKeys = {
	protocols: [queryRoot] as const,
	protocol: (slug: string) => [queryRoot, slug] as const,
	protocolOptions: [queryRoot, 'options'] as const,
}
