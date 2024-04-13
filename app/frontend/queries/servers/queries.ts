import { 	useQuery } from '@tanstack/react-query'
import { Routes } from '@/lib'
import axios from 'axios'

export const serversQuery = () => {
	return useQuery({
		queryKey: ['servers'],
		queryFn: (): Promise<Schema.ServersOptions[]> => {
			return axios.get(Routes.apiServers()).then(res => res.data)
		},
	})
}
