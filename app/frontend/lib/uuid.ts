const B64_SEPARATOR = " "

export const encodeId = (model: string, id: number) => btoa(`${model}${B64_SEPARATOR}${id}`)

export const decodeId = (id: string) => {
	const parts = atob(id).split(B64_SEPARATOR)
	return {
		model: parts[0],
		id: parts[1],
	}
}
