import React from "react"

interface ErrorProps {
	status: any
}

const Error = ({ status }: ErrorProps) => {
	return (
		<>
			<div>Error</div>
			<div>{ status }</div>
		</>
	)
}

export default Error
