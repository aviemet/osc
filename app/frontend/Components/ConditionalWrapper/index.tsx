import React from "react"

interface ConditionalWrapperProps {
	children: JSX.Element | React.ReactNode
	condition: boolean
	wrapper: (children: JSX.Element | React.ReactNode) => JSX.Element
	elseWrapper?: (children: JSX.Element | React.ReactNode) => JSX.Element
}

const ConditionalWrapper = ({ children, condition, wrapper, elseWrapper }: ConditionalWrapperProps) => {
	if(condition) {
		return wrapper(children)
	} else if(elseWrapper) {
		return elseWrapper(children)
	}

	return <>{ children }</>
}

export default ConditionalWrapper
