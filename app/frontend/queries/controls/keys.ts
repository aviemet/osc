const queryRoot = 'control'

export const queryKeys = {
	controls: [queryRoot] as const,
	control: (slug: string) => [queryRoot, slug] as const,
}
