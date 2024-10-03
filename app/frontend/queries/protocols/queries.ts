import { useQuery } from '@tanstack/react-query'
import { Routes } from '@/lib'
import axios from 'axios'
import { type ReactQueryFunction } from '..'
import { queryKeys } from './keys'

export const useGetProtocol: ReactQueryFunction<Schema.ProtocolsShow, { slug: string }> = ({ slug }, options) => {
	return useQuery({
		queryKey: queryKeys.protocol(slug),
		queryFn: async () => {
			const res = await axios.get(Routes.apiProtocol(slug))
			return res.data
		},
		...options,
	})
}

export const useGetProtocolOptions: ReactQueryFunction<Schema.ProtocolsOptions[]> = (options) => {
	return useQuery({
		queryKey: queryKeys.protocolOptions,
		queryFn: async () => {
			const res = await axios.get(Routes.apiProtocolsOptions())
			return res.data
		},
		...options,
	})
}
