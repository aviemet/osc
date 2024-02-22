const WORDS_REGEX = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g

const toWords = (str?: string|null) => {
	const input = str ?? ''
	return input.match(WORDS_REGEX) || []
}

export const capitalize = (str?: string|null): string => {
	if(typeof str !== 'string') return ''
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export const toCamelCase = (str?: string|null) => {
	const words = toWords(str)

	return words.map((word, i) => {
		const lowered = word.toLocaleLowerCase()
		if(i === 0) {
			return lowered
		}
		return capitalize(lowered)
	}).join('')
}

export const initials = (str: string) => {
	if(str.length === 0) return null

	const split = str.split(/[ \-_]/)

	let initials = split[0].charAt(0).toUpperCase()

	if(split.length > 1) {
		initials += split[split.length - 1].charAt(0).toUpperCase()
	}

	return initials
}

export const toKebabCase = (str?: string|null) => {
	const words = toWords(str)

	return words.map((word, i) => word.toLocaleLowerCase()).join('-')
}
