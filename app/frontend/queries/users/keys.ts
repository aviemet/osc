const queryRoot = 'users'

export const queryKeys = {
	users: [queryRoot] as const,
	user: (id: string | number) => [queryRoot, id] as const,
	userPreferences: (id: string | number) => [queryRoot, id, 'preferences'] as const,
	userTablePreferences: (id: string | number) => [queryRoot, id, 'table_preferences'] as const,
}
