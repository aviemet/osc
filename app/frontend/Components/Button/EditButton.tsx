import React from 'react'
import { Link } from '@/Components'
import { EditIcon } from '@/Components/Icons'
import { LinkProps } from '../Link'

interface IEditButtonProps extends Omit<LinkProps, 'children'> {
	label?: string
}

const EditButton = ({ href, label }: IEditButtonProps) => {
	return (
		<Link as="button" href={ href } aria-label={ `Edit ${label}` }><EditIcon /></Link>
	)
}

export default EditButton
