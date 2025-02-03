import React, { useEffect } from "react"
import { Tabs } from "@mantine/core"
import { type VisitOptions } from "@inertiajs/core"
import { router } from "@inertiajs/react"
import { TabsComponentProps } from "."
import { coerceArray } from "@/lib"
import { useLocation } from "@/lib/hooks"

const UrlTabs = ({ children, onChange, defaultValue, dependencies, ...props }: TabsComponentProps) => {
	const { params } = useLocation()

	const navigateTab = (value: string | null, options?: VisitOptions) => {
		let only: string[] = []
		if(value && dependencies?.[value]) {
			only = coerceArray(dependencies[value])
		}

		router.reload(Object.assign({
			preserveState: true,
			preserveScroll: true,
			data: { tab: value },
			only,
		}, options || {}))
	}

	const activeTab = params.get("tab")

	// Handle direct navigation to tabbed page
	useEffect(() => {
		if(!activeTab && defaultValue) {
			navigateTab(defaultValue, { replace: true })
		} else {
			document.addEventListener("inertia:navigate", function reloadActiveTab() {
				navigateTab(activeTab)
				document.removeEventListener("inertia:navigate", reloadActiveTab)
			})
		}
	}, [])

	const handleTabChange = (value: string | null) => {
		navigateTab(value || activeTab)

		if(onChange) onChange(value || activeTab)
	}

	return (
		<Tabs
			defaultValue={ activeTab || defaultValue }
			keepMounted={ false }
			onChange={ handleTabChange }
			{ ...props }
		>
			{ children }
		</Tabs>
	)
}

export default UrlTabs
