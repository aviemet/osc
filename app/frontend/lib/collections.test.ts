import { describe, expect, test } from 'vitest'
import { coerceArray, exclude, findMax } from './collections'

const records = [
	{ id: 1, str: 'hello1', obj: { key: 12 } },
	{ id: 2, str: 'hello2', obj: { key: 11 } },
	{ id: 3, str: 'hello3', obj: { key: 10 } },
]

describe('findMax', () => {
	test('returns element with largest id', () => {
		expect(findMax(records, 'id')).toEqual(records[2])
	})

	test('handles strings', () => {
		expect(findMax(records, 'str')).toBeNaN()
	})

	test('handles nested objects', () => {
		expect(findMax(records, 'obj.key')).toEqual(records[0])
	})
})
