import React from 'react'
import { Link } from '@/Components'
import { type LinkProps } from '../Link'
import { TrashIcon } from '@/Components/Icons'

interface IDeleteButtonProps extends Omit<LinkProps, 'children'> {
	children?: string
	label?: string
}

const DeleteButton = ({ children, href, label, onClick, ...props }: IDeleteButtonProps) => {
	const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement, Event>) => {
		onClick?.(e)
	}

	return (
		<Link
			as="button"
			color="red"
			method="delete"
			href={ href }
			aria-label={ `Delete ${label}` }
			onClick={ handleClick }
			{ ...props }
		>
			<TrashIcon />{ children }
		</Link>
	)
}

export default DeleteButton
