import { unset, get, set, isEmpty } from 'lodash'

export default class NestedObject {
	data = {}

	constructor(initialData?: Record<string, any>|Map<string, any>) {
		if(!initialData) return

		for(const [key, value] of Object.entries(initialData)) {
			this.set(key, value)
		}
	}

	get(key: string) {
		return get(this.data, key)
	}

	set(key: string, value: any) {
		return set(this.data, key, value)
	}

	unset(key: string) {
		unset(this.data, key)
	}

	isEmpty() {
		return isEmpty(this.data)
	}

	*[Symbol.iterator]() {
		yield* Object.entries(this.data)
	}

	entries() {
		return this[Symbol.iterator]()
	}

	values() {
		return Object.values(this.data)
	}

	keys() {
		return Object.keys(this.data)
	}
}
