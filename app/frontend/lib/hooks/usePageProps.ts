import { usePage } from '@inertiajs/react'
import { PageProps, Errors, ErrorBag } from '@inertiajs/core'

export interface SharedInertiaProps extends PageProps {
	auth: {
		form_authenticity_token: string
		user: Schema.UsersShare
	}
	circle: Schema.Circle
	flash: FlashMessage
	errors: Errors & ErrorBag
}

const usePageProps = () => {
	return usePage<SharedInertiaProps>().props
}

export default usePageProps
