import React from 'react'
import IconProvider from './IconProvider'
import UiFrameworkProvider from './UiFrameworkProvider'

import './reset.css'
import '@mantine/core/styles.css'
import '@mantine/tiptap/styles.css'
import './global.css'

interface IProviderProps {
	children?: React.ReactNode
}

const Providers = React.memo(({ children }: IProviderProps) => {
	return (
		<UiFrameworkProvider>
			<IconProvider>
				{ children }
			</IconProvider>
		</UiFrameworkProvider>
	)
})

export default Providers
