import React from "react"
import Link, { LinkProps } from "../Link"
import cx from "clsx"

interface TabLinkProps extends LinkProps {
	position?: undefined | "right"
}

const TabLink = ({ position, className, ...props }: TabLinkProps) => {
	return (
		<Link { ...props } className={ cx(className, position) } />
	)
}

export default TabLink
