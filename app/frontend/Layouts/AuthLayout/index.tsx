import React from 'react'
import { Box, Center, Flex, Paper } from '@/Components'
import * as classes from './AuthLayout.css'

interface LayoutProps {
	children: any
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<Flex className={ classes.authLayout }>
			<Center p="lg" id="auth-layout-left">
				<Paper shadow="lg" radius="lg" p="xl" withBorder>
					{ children }
				</Paper>
			</Center>

			<Box id="auth-layout-right">
			</Box>
		</Flex>
	)
}

export default Layout
