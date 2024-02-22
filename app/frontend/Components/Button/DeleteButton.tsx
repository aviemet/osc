import React from 'react'
import { Link } from '@/Components'
import { type ILinkProps } from '../Link'
import { TrashIcon } from '@/Components/Icons'

interface IDeleteButtonProps extends Omit<ILinkProps, 'children'> {
	label?: string
}

const DeleteButton = ({ href, label }: IDeleteButtonProps) => {
	return (
		<Link as="button" href={ href } aria-label={ `Delete ${label}` }><TrashIcon /></Link>
	)
}

export default DeleteButton
