import { 	useQuery } from '@tanstack/react-query'
import { Routes } from '@/lib'
import axios from 'axios'
import { ComboboxData } from '@mantine/core'

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

export const commandPayloadTypesQuery = () => {
	return useQuery({
		queryKey: ['commandPayloadTypes'],
		queryFn: (): Promise<ComboboxData> => {
			return axios.get(Routes.apiCommandsPayloadTypes()).then(res => res.data)
		},
	})
}

export const serversQuery = () => {
	return useQuery({
		queryKey: ['servers'],
		queryFn: (): Promise<Schema.ServersOptions[]> => {
			return axios.get(Routes.apiServers()).then(res => res.data)
		},
	})
}
