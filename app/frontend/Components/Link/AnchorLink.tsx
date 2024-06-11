import React, { forwardRef } from 'react'
import { Link, type InertiaLinkProps } from '@inertiajs/react'
import { Anchor, type AnchorProps } from '@mantine/core'

export interface AnchorLinkProps
	extends Omit<InertiaLinkProps, 'color'|'size'|'span'|'style'>,
	Omit<AnchorProps, 'href'> {

}

const AnchorLink = forwardRef<HTMLAnchorElement, AnchorLinkProps>((
	props,
	ref,
) => {
	return (
		<Anchor ref={ ref } component={ Link } { ...props } />
	)
})

export default AnchorLink
