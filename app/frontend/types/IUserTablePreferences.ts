export default interface IUserTablePreferences {
	[model: string]: {
		hide: Record<string, boolean>,
		limit: string
	}
}
