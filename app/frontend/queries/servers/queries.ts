import { 	useQuery } from '@tanstack/react-query'
import { Routes } from '@/lib'
import axios from 'axios'
import { type ReactQueryFunction } from '..'
import { queryKeys } from './keys'

export const useGetServers: ReactQueryFunction<Schema.ServersOptions[]> = (options) => {
	return useQuery({
		queryKey: queryKeys.servers,
		queryFn: async (): Promise<Schema.ServersOptions[]> => {
			const res = await axios.get(Routes.apiServers())
			return res.data
		},
		...options,
	})
}
