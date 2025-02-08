import React from "react"
import { createInertiaApp, router } from "@inertiajs/react"
import { createRoot } from "react-dom/client"
import { LAYOUTS } from "../Layouts"
import {
	applyPropsMiddleware,
	setupCSRFToken,
	setupInertiaListeners,
	handlePageLayout,
} from "./middleware"

import dayjs from "dayjs"
import localizedFormat from "dayjs/plugin/localizedFormat"
import duration from "dayjs/plugin/duration"
import relativeTime from "dayjs/plugin/relativeTime"

const pages = import.meta.glob<PagesObject>("../Pages/**/index.tsx")

dayjs.extend(localizedFormat)
dayjs.extend(duration)
dayjs.extend(relativeTime)

const SITE_TITLE = "OSC"

export type PagesObject<T = any> = { default: React.ComponentType<T> & {
	layout?: React.ComponentType<T>
	defaultLayout?: keyof typeof LAYOUTS
} }

document.addEventListener("DOMContentLoaded", () => {
	setupCSRFToken()
	setupInertiaListeners(router)

	createInertiaApp({
		title: title => `${SITE_TITLE} - ${title}`,

		resolve: async (name) => {
			const page: PagesObject = (await pages[`../Pages/${name}/index.tsx`]())

			return handlePageLayout(page)
		},

		setup({ el, App, props }) {
			const root = createRoot(el)

			props.initialPage.props = applyPropsMiddleware(props.initialPage.props)

			root.render(<App { ...props } />)
		},
	})
})
