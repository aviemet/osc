import React from 'react'
import IconProvider from './IconProvider'
import UiFrameworkProvider from './UiFrameworkProvider'

import './reset.css'
import '@mantine/core/styles.css'
import '@mantine/tiptap/styles.css'
import './global.css'
import QueryProvider from './QueryProvider'

interface IProviderProps {
	children?: React.ReactNode
}

const Providers = React.memo(({ children }: IProviderProps) => {
	return (
		<QueryProvider>
			<UiFrameworkProvider>
				<IconProvider>
					{ children }
				</IconProvider>
			</UiFrameworkProvider>
		</QueryProvider>
	)
})

export default Providers
