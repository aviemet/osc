import React from 'react'
import { Section } from '@/Components'
import * as classes from './Table.css'

const TableSection = ({ children }: { children: React.ReactNode }) => {
	return (
		<Section fullHeight className={ classes.section }>
			{ children }
		</Section>
	)
}

export default TableSection
