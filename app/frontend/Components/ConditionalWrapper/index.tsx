import React from 'react'

interface IConditionalWrapperProps {
	children: JSX.Element
	condition: boolean
	wrapper: (children: React.ReactNode) => JSX.Element
}

const ConditionalWrapper = ({ children, condition, wrapper }: IConditionalWrapperProps) => condition ? wrapper(children) : children

export default ConditionalWrapper
