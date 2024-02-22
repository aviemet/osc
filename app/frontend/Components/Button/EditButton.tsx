import React from 'react'
import { Link } from '@/Components'
import { EditIcon } from '@/Components/Icons'
import { ILinkProps } from '../Link'

interface IEditButtonProps extends Omit<ILinkProps, 'children'> {
	label?: string
}

const EditButton = ({ href, label }: IEditButtonProps) => {
	return (
		<Link as="button" href={ href } aria-label={ `Edit ${label}` }><EditIcon /></Link>
	)
}

export default EditButton
