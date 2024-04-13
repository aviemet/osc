import { 	useQuery } from '@tanstack/react-query'
import { Routes } from '@/lib'
import axios from 'axios'

export const protocolsOptionsQuery = () => {
	return useQuery({
		queryKey: ['protocolOptions'],
		queryFn: (): Promise<Schema.ProtocolsOptions[]> => {
			return axios.get(Routes.apiProtocolsOptions()).then(res => res.data)
		},
	})
}

export const protocolQuery = (slug: string) => {
	return useQuery({
		queryKey: [`protocol/${slug}`],
		queryFn: (): Promise<Schema.ProtocolsShow> => {
			return axios.get(Routes.apiProtocol(slug)).then(res => res.data)
		},
	})
}
