import React from 'react'
import { Head } from '@inertiajs/react'

export interface PageProps {
	children?: React.ReactNode
	title?: string
	meta?: React.ReactNode
}

const Page = ({ children, title, meta }: PageProps) => {

	return (
		<>
			{ title && <Head title={ title }>
				{ meta && meta }
			</Head> }

			{ children }
		</>
	)
}

export default Page
