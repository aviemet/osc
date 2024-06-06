import React, { useState } from 'react'
import { DoubleDownArrowIcon } from '@/Components/Icons'
import { useLayoutStore } from '@/lib/store'
import { useBooleanToggle } from '@/lib/hooks'
import { useClickOutside } from '@mantine/hooks'
import {
	ActionIcon,
	Paper,
	Transition,
	useMantineTheme,
	rem,
	px,
	Tooltip,
	Box,
} from '@mantine/core'

import cx from 'clsx'
import * as classes from './AdvancedSearch.css'

const scaleY = {
	in: { opacity: 1, transform: 'scaleY(1)' },
	out: { opacity: 0, transform: 'scaleY(0)' },
	common: { transformOrigin: 'top' },
	transitionProperty: 'transform, opacity',
}

interface AdvancedSearchProps {
	children: React.ReactNode
}

const AdvancedSearch = ({ children }: AdvancedSearchProps) => {
	const { sidebarOpen } = useLayoutStore()
	const { primaryColor, other: { navbar: { width } } } = useMantineTheme()
	const navBarWidth = width[sidebarOpen ? 'open' : 'closed']

	const [open, toggleOpen] = useBooleanToggle(false)
	const [searchButton, setSearchButton] = useState<HTMLButtonElement | null>(null)
	const [searchPaper, setSearchPaper] = useState<HTMLDivElement | null>(null)

	useClickOutside(
		() => toggleOpen(false),
		null,
		[searchButton, searchPaper],
	)

	return (
		<>
			<Tooltip
				withArrow
				label="Advanced Search"
				color={ primaryColor }
				position="left"
			>
				<ActionIcon
					size={ 42 }
					variant="filled"
					onClick={ () => toggleOpen() }
					ref={ setSearchButton }
					data-ignore-outside-clicks
				>
					<DoubleDownArrowIcon size={ 24 } />
				</ActionIcon>
			</Tooltip>
			<Transition
				mounted={ open }
				transition={ scaleY }
				duration={ 200 }
				timingFunction="ease"
			>
				{ (styles) => (
					<Paper
						ref={ setSearchPaper }
						shadow="md"
						p="md"
						className={ cx(classes.paper) }
						style={ {
							...styles,
							left: rem(navBarWidth + Number(px('1rem'))),
							top: searchButton ? rem(searchButton.getBoundingClientRect().bottom + 10) : undefined,
						} }
					>
						<Box>
							{ children }
						</Box>
					</Paper>
				) }
			</Transition>
		</>
	)
}

export default AdvancedSearch

export { default as useAdvancedSearch } from './useAdvancedSearch'
