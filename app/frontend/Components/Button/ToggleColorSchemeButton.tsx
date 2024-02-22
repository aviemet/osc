import React from 'react'
import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core'
import { SunIcon, MoonIcon } from '@/Components/Icons'

const ToggleColorSchemeButton = () => {
	const { colorScheme, setColorScheme } = useMantineColorScheme()
	const computedColorScheme = useComputedColorScheme('dark')

	const toggleColorScheme = () => {
		setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')
	}

	return (
		<ActionIcon
			color={ colorScheme === 'dark' ? 'yellow' : 'blue' }
			onClick={ () => toggleColorScheme() }
			title="Toggle color scheme"
			style={ { display: 'inline-flex' } }
			aria-label={ `Toggle color scheme to ${colorScheme === 'dark' ? 'light' : 'dark'} mode` }
		>
			{ colorScheme === 'dark' ? <SunIcon size={ 18 } /> : <MoonIcon size={ 18 } /> }
		</ActionIcon>
	)
}

export default ToggleColorSchemeButton
