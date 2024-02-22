import React from 'react'
import { useTableContext } from './TableContext'
import cx from 'clsx'

const RowIterator = ({ render }: { render: (obj: any) => JSX.Element }) => {
	const { tableState: { selected, rows } } = useTableContext()

	if(!rows || rows.length === 0) {
		return <></>
	}

	const injectRowProps = (row: JSX.Element) => {
		return React.cloneElement(row, {
			name: row.key,
			className: cx(
				{ checked: selected.has(String(row.key!)) },
			),
		})
	}

	return <>{ rows.map(row => injectRowProps(render(row))) }</>
}

export default RowIterator
