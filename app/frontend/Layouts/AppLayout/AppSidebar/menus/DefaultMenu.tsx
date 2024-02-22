import React from 'react'
import { NavLink } from '@/Components'
import { Routes } from '@/lib'

export interface DefaultMenuProps {
}

const DefaultMenu = (props: DefaultMenuProps) => {
	return (
		<>
			<NavLink label="Home" href={ Routes.home() } />
		</>
	)
}

export default DefaultMenu
