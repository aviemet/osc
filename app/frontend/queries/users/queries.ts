import { useQuery } from '@tanstack/react-query'
import { Routes } from '@/lib'
import axios from 'axios'
import { type ReactQueryFunction } from '..'
import { queryKeys } from './keys'

export const useGetUsers: ReactQueryFunction<Schema.User[]> = (options) => {
	return useQuery({
		queryKey: queryKeys.users,
		queryFn: async () => {
			const res = await axios.get(Routes.apiUsers())
			return res.data
		},
		...options,
	})
}
