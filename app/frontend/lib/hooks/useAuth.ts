import { usePageProps } from "./usePageProps"

export const useAuth = () => {
	const { auth } = usePageProps()

	return {
		isLoggedIn: Boolean(auth?.user),
		currentUser: auth?.user,
	}
}
