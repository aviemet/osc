import React, { forwardRef } from 'react'
import normalizeUrl from 'normalize-url'
import { ExternalLinkIcon } from '@/Components/Icons'
import { Anchor, type AnchorProps } from '@mantine/core'
import * as classes from './Link.css'
import cx from 'clsx'

interface ExternalLinkProps
	extends AnchorProps,
	Omit<React.ComponentPropsWithoutRef<'a'>, keyof AnchorProps> {
	href: string
	as?: 'a'|'button'
	disabled?: boolean
}

const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>((
	{ children, href, as, className, disabled = false, ...props },
	ref,
) => {
	const url = normalizeUrl(href, { stripWWW: false })

	return (
		<Anchor
			href={ disabled ? 'javascript:void(0)' : url }
			target="_blank"
			rel="noreferrer"
			className={ cx(classes.external, className ) }
			ref={ ref }
			{ ...props }
		>
			{ children }
			<ExternalLinkIcon className="external" />
		</Anchor>
	)
})

export default ExternalLink
