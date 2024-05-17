import { 	useQuery } from '@tanstack/react-query'
import { Routes } from '@/lib'
import axios from 'axios'

export const useGetProtocolOptions = () => {
	return useQuery({
		queryKey: ['protocolOptions'],
		queryFn: async (): Promise<Schema.ProtocolsOptions[]> => {
			const res = await axios.get(Routes.apiProtocolsOptions())
			return res.data
		},
	})
}

export const useGetProtocol = (slug: string) => {
	return useQuery({
		queryKey: [`protocol/${slug}`],
		queryFn: async (): Promise<Schema.ProtocolsShow> => {
			const res = await axios.get(Routes.apiProtocol(slug))
			return res.data
		},
	})
}
