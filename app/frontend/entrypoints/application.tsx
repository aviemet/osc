import React from 'react'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { PublicLayout, AppLayout, AuthLayout } from '../Layouts'

type PagesObject = { default: React.ComponentType<any> & {
	layout?: React.ComponentType<any>
} }

const pages = import.meta.glob<PagesObject>('../Pages/**/index.tsx')

document.addEventListener('DOMContentLoaded', () => {
	createInertiaApp({
		title: title => `OSC - ${title}`,

		resolve: async name => {
			let checkedName = name
			let layout

			switch(name.substring(0, name.indexOf('/'))) {
				case 'Public':
					layout = PublicLayout
					checkedName = name.replace('Public/', '')
					break
				case 'Auth':
					layout = AuthLayout
					checkedName = name.replace('Auth/', '')
					break
				default:
					layout = AppLayout
			}

			const page = (await pages[`../Pages/${checkedName}/index.tsx`]()).default

			if(page.layout === undefined) page.layout = layout

			return page
		},

		setup({ el, App, props }) {
			const root = createRoot(el)
			root.render(<App { ...props } />)
		},
	})
})
