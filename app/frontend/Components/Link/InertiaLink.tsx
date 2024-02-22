import React, { forwardRef } from 'react'
import { router } from '@inertiajs/react'
import { Method, Visit } from '@inertiajs/core'
import { type ButtonProps } from '@mantine/core'
import { Button } from '@/Components'
import { exclude } from '@/lib/collections'
import AnchorLink, { type IAnchorLinkProps } from '@/Components/Link/AnchorLink'

interface ILinkProps extends IAnchorLinkProps {
	children?: React.ReactNode
	href: string
	as: 'a'|'button'
	method?: Method
	visit?: Omit<Visit, 'method'>
	buttonProps?: ButtonProps
	disabled?: boolean
}

const InertiaLinkComponent = forwardRef<HTMLAnchorElement, ILinkProps>((
	{ children, href, as = 'a', method, visit, buttonProps, style, disabled, ...props },
	ref,
) => {
	const handleHTTP = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault()

		router.visit(href, {
			method,
			...visit,
		})
	}

	const mergedButtonProps = Object.assign(
		{ disabled },
		buttonProps,
		exclude(props, ['classNames', 'style', 'vars']),
	)

	const processedHref = disabled ? '#' : href

	if((method !== undefined && method !== 'get')) {
		return <Button
			ref={ ref }
			component={ AnchorLink }
			href={ processedHref }
			onClick={ handleHTTP }
			style={ [{ '&:hover': { textDecoration: 'none' } }, style] }
			c="bright"
			{ ...mergedButtonProps }
		>
			{ children }
		</Button>
	}

	if(as === 'button') {
		return <Button
			ref={ ref }
			component={ AnchorLink }
			href={ processedHref }
			style={ [{ '&:hover': { textDecoration: 'none' } }, style] }
			c="bright"
			{ ...mergedButtonProps }
		>
			{ children }
		</Button>
	}

	return (
		<AnchorLink href={ processedHref } ref={ ref } { ...props }>{ children }</AnchorLink>
	)
})

export default InertiaLinkComponent
