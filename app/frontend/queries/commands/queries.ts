import { 	useQuery } from '@tanstack/react-query'
import { Routes } from '@/lib'
import axios from 'axios'
import { ComboboxData } from '@mantine/core'


export const commandQuery = (slug: string) => {
	return useQuery({
		queryKey: [`command/${slug}`],
		queryFn: (): Promise<Schema.CommandsShow> => {
			return axios.get(Routes.apiCommand(slug)).then(res => res.data)
		},
	})
}

export const commandsQuery = () => {
	return useQuery({
		queryKey: ['commands'],
		queryFn: (): Promise<Schema.CommandsOptions[]> => {
			return axios.get(Routes.apiCommands()).then(res => res.data)
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
