import { unset, get, set, isEmpty } from "lodash"

export default class NestedURLSearchParams {
	_data: Record<string, unknown> = {}

	constructor(initialData?: string | Record<string, any> | URLSearchParams) {
		if(!initialData) return

		if(initialData instanceof URLSearchParams || typeof initialData === "string") {
			let searchParams: URLSearchParams

			if(initialData instanceof URLSearchParams) {
				searchParams = initialData
			} else {
				searchParams = new URLSearchParams(initialData)
			}

			for(const [key, value] of searchParams.entries()) {
				this.set(key, value)
			}

			return
		}

		this._data = structuredClone(initialData)
	}

	get data() {
		return this._data
	}

	get(key: string) {
		return get(this._data, key)
	}

	set(key: string, value: any) {
		return set(this._data, key, value)
	}

	unset(key: string) {
		unset(this._data, key)
	}

	isEmpty() {
		return isEmpty(this._data)
	}

	*[Symbol.iterator]() {
		yield* Object.entries(this._data)
		// for(const [key, value] of Object.entries(this._data)) {
		// 	yield [key, value]
		// }
	}

	entries() {
		return Object.entries(this._data)
	}

	values() {
		return Object.values(this._data)
	}

	keys() {
		return Object.keys(this._data)
	}

	toString() {
		return `?${convertToQueryString(this.data)}`.replace(/\&$/, "")
	}

	params() {
		return new URLSearchParams(this._data.toString())
	}

	clone() {
		return new NestedURLSearchParams(this._data)
	}
}

const ignoreValues = [undefined, null, ""]

const convertToQueryString = (obj: Record<string, any>, parentKey = ""): string => {
	let queryString = ""

	for(const key in obj) {
		if(Object.prototype.hasOwnProperty.call(obj, key)) {
			const value = obj[key]

			if(ignoreValues.some(ignore => value === ignore)) continue

			const formattedKey = parentKey ? `${parentKey}[${key}]` : key

			if(typeof value === "object" && Object.prototype.toString.call(value) === "[object Object]" && value !== null) {
				queryString += convertToQueryString(value, formattedKey)
			} else {
				let formattedValue = value

				if(value instanceof Date) {
					formattedValue = value.toISOString()
				}

				queryString += `${formattedKey}=${formattedValue}&`
			}
		}
	}

	return queryString
}
