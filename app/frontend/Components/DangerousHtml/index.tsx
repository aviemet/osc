import { Box, type BoxProps } from '@mantine/core'
import React from 'react'

interface IDangerousHtmlProps extends BoxProps {
	children?: string|null
}

const DangerousHtml = ({ children, ...props }: IDangerousHtmlProps) => {
	return (
		<Box { ...props } dangerouslySetInnerHTML={ { __html: children || '' } } />
	)
}

export default DangerousHtml
