import usePageProps from './usePageProps'

const useAuth = () => {
	const { auth } = usePageProps()

	return {
		isLoggedIn: auth?.user !== null || auth?.user !== undefined,
		currentUser: auth?.user,
	}
}

export default useAuth
