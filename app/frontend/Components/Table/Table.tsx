import React from 'react'
import { Table, type TableProps } from '@mantine/core'
import cx from 'clsx'
import * as classes from './Table.css'

import Head from './Head'
import Body from './Body'
import RowIterator from './RowIterator'
import Row from './Row'
import Cell from './Cell'
import HeadCell from './Cell/HeadCell'
import Footer from './Footer'
import Pagination from './Pagination'
import TableProvider from './TableContext'
import TableSection from './Section'
import SearchInput from './SearchInput'
import ColumnPicker from './ColumnPicker'
import ConditionalWrapper from '../ConditionalWrapper'

export interface ITableProps extends TableProps {
	fixed?: boolean
	wrapper?: boolean
	rowSpacing?: boolean
}

type TableComponent = (({ children, className, fixed, wrapper, ...props }: ITableProps) => JSX.Element)

type TableObjects = {
	Head: typeof Head
	Body: typeof Body
	RowIterator: typeof RowIterator
	Row: typeof Row
	Cell: typeof Cell
	HeadCell: typeof HeadCell
	Footer: typeof Footer
	Pagination: typeof Pagination
	TableProvider: typeof TableProvider
	Section: typeof TableSection
	SearchInput: typeof SearchInput
	ColumnPicker: typeof ColumnPicker
}

export type TableObject = TableComponent & TableObjects

const TableComponent: TableComponent & TableObjects = ({
	children,
	className,
	wrapper = true,
	fixed = false,
	rowSpacing = true,
	striped = true,
	highlightOnHover = true,
	...props
}) => {

	// const stylesArray = useMemo(() => {
	// 	const arr: (Sx | undefined)[] = []
	// 	if(wrapper) {
	// 		arr.push({ thead: { top: -10 } })
	// 	}
	// 	if(sx) {
	// 		arr.push(...packSx(sx))
	// 	}
	// 	return arr
	// }, [wrapper, sx])

	return (
		<ConditionalWrapper
			condition={ wrapper }
			wrapper={ children => <div className={ classes.wrapper }>{ children }</div> }
		>
			<Table
				striped={ striped }
				highlightOnHover={ highlightOnHover }
				className={ cx(className, classes.table, { [classes.rowSpacing]: rowSpacing, 'layout-fixed': fixed, 'layout-auto': !fixed }) }
				// sx={ stylesArray }
				{ ...props }
			>
				{ children }
			</Table>
		</ConditionalWrapper>
	)
}

TableComponent.Head = Head
TableComponent.Body = Body
TableComponent.RowIterator = RowIterator
TableComponent.Row = Row
TableComponent.Cell = Cell
TableComponent.HeadCell = HeadCell
TableComponent.Footer = Footer
TableComponent.Pagination = Pagination
TableComponent.TableProvider = TableProvider
TableComponent.Section = TableSection
TableComponent.SearchInput = SearchInput
TableComponent.ColumnPicker = ColumnPicker

export default TableComponent
