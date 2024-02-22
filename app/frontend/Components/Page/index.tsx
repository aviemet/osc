import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { Head } from '@inertiajs/react'
import { DefaultMenu } from '@/Layouts/AppLayout/AppSidebar/menus'
import { Portal } from '@mantine/core'
import useLayoutStore from '@/lib/store/LayoutStore'

export interface PageProps {
	children?: React.ReactNode
	title?: string
	meta?: React.ReactNode
	hideNavMenu?: boolean
	navMenu?: (props: any) => React.JSX.Element
}

const Page = ({ children, title, meta, hideNavMenu = false, navMenu: NavMenu }: PageProps) => {
	const { sidebarVisible, setSidebarVisible } = useLayoutStore()

	const dynamicNavMenuRef = useRef(document.getElementById('dynamic-nav-menu'))

	useLayoutEffect(() => {
		if(dynamicNavMenuRef.current) return

		dynamicNavMenuRef.current = document.getElementById('dynamic-nav-menu')
	}, [])

	useEffect(() =>{
		if(sidebarVisible === !hideNavMenu) return

		setSidebarVisible(!hideNavMenu)
	}, [hideNavMenu])

	return (
		<>
			{ title && <Head title={ title }>
				{ meta && meta }
			</Head> }

			{ dynamicNavMenuRef.current && <Portal target={ dynamicNavMenuRef.current }>
				{ NavMenu ? <NavMenu /> : <DefaultMenu /> }
			</Portal> }

			{ children }
		</>
	)
}

export default Page
