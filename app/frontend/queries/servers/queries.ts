import { 	useQuery } from '@tanstack/react-query'
import { Routes } from '@/lib'
import axios from 'axios'

export const useGetServers = () => {
	return useQuery({
		queryKey: ['servers'],
		queryFn: async (): Promise<Schema.ServersOptions[]> => {
			const res = await axios.get(Routes.apiServers())
			return res.data
		},
	})
}
