import { ErrorBag, Errors, PageProps, type Router } from "@inertiajs/core"
import { convertDates } from "./convertDates"
import axios from "axios"

export { default as  handlePageLayout } from "./handlePageLayout"

export const applyPropsMiddleware = (props: PageProps & {
	errors: Errors & ErrorBag
}) => {
	return convertDates(props)
}

export function setupCSRFToken() {
	const csrfToken = (document.querySelector("meta[name=csrf-token]") as HTMLMetaElement).content
	axios.defaults.headers.common["X-CSRF-Token"] = csrfToken
}

export function setupInertiaListeners(router: Router) {
	// Handle both full and partial page updates
	router.on("navigate", (event) => {
		event.detail.page.props = applyPropsMiddleware(event.detail.page.props)
	})

	// Handle partial updates
	const originalReload = router.reload.bind(router)
	router.reload = function(options?: { only?: string[] }) {
		if(options?.only) {
			// Intercept the response to apply middleware to partial updates
			const originalVisit = router.visit.bind(router)
			router.visit = function(url, visitOptions = {}) {
				const originalPreserveState = visitOptions.preserveState
				visitOptions.preserveState = (page) => {
					if(typeof originalPreserveState === "function") {
						page.props = applyPropsMiddleware(page.props)
						return originalPreserveState(page)
					}
					page.props = applyPropsMiddleware(page.props)
					return true
				}
				return originalVisit(url, visitOptions)
			}

			const result = originalReload(options)
			router.visit = originalVisit
			return result
		}
		return originalReload(options)
	}
}
