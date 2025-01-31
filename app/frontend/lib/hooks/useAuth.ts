import usePageProps from "./usePageProps"

const useAuth = () => {
	const { auth } = usePageProps()

	return {
		isLoggedIn: Boolean(auth?.user),
		currentUser: auth?.user,
	}
}

export default useAuth
