import React, { forwardRef, useMemo } from 'react'
import { type Method, type Visit } from '@inertiajs/core'
import cx from 'clsx'
import InertiaLink from './InertiaLink'
import ExternalLink from './ExternalLink'
import { type AnchorProps, type ButtonProps } from '@mantine/core'
import * as classes from './Link.css'

export { default as NavLink } from './NavLink'

export interface ILinkProps extends Omit<AnchorProps, 'onClick'|'onProgress'> {
	children?: React.ReactNode
	href: string
	method?: Method
	visit?: Omit<Visit, 'method'>
	external?: boolean
	as?: 'a'|'button'
	onProgress?: React.ReactEventHandler<HTMLAnchorElement>
	target?: string
	rel?: string
	tabIndex?: number
	disabled?: boolean
	buttonProps?: ButtonProps
	preserveScroll?: boolean
}

const externalPrefix = ['http', 'www']

const Link = forwardRef<HTMLAnchorElement, ILinkProps>((
	{ children, href, as = 'a', method, visit, external, onProgress, preserveScroll, buttonProps, className, ...props },
	ref,
) => {
	const renderExternal = useMemo(() => {
		if(external !== undefined) return external

		let localExternal = false
		externalPrefix.some(prefix => {
			if(href.startsWith(prefix)) {
				const url = new URL(href)
				localExternal = url.hostname !== window.location.hostname
			}
		})
		return localExternal
	}, [href, external])

	if(renderExternal) {
		return (
			<ExternalLink
				href={ href }
				ref={ ref }
				className={ cx(className, classes.link ) }
				{ ...onProgress }
				{ ...props }
			>
				{ children }
			</ExternalLink>
		)
	}

	return (
		<InertiaLink
			href={ href }
			as={ as }
			method={ method }
			visit={ visit }
			ref={ ref }
			preserveScroll={ preserveScroll }
			className={ cx(className, classes.link ) }
			{ ...onProgress }
			{ ...props }
		>
			{ children }
		</InertiaLink>
	)
})

export default Link
