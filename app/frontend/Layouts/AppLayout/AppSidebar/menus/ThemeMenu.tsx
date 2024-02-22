import React from 'react'
import { NavLink } from '@/Components'
import { Routes } from '@/lib'

export interface ThemeMenuProps {
	circle: Schema.Circle
	theme: Schema.ThemesShallow
}

const ThemeMenu = ({ circle, theme }: ThemeMenuProps) => {
	return (
		<>
			<NavLink
				href={ Routes.theme(theme.slug) }
				label="Overview"
			/>
			<NavLink
				href={ Routes.themeOrgs(theme.slug) }
				label="Organizations"
			/>
			<NavLink
				href={ Routes.themeMembers(theme.slug) }
				label="Members"
			/>
			<NavLink
				href={ Routes.themePresentations(theme.slug) }
				label="Presentations"
			/>
		</>
	)
}

export default ThemeMenu
