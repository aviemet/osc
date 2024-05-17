import { useQuery } from '@tanstack/react-query'
import { Routes } from '@/lib'
import axios from 'axios'
import { ComboboxData } from '@mantine/core'
import { type QueryFunction, type QueryFunctionSingle } from '..'

export const useGetCommand: QueryFunctionSingle<Schema.CommandsShow> = (slug, options) => {
	return useQuery({
		queryKey: [`command/${slug}`],
		queryFn: () => {
			return axios.get(Routes.apiCommand(slug)).then(res => res.data)
		},
		...options,
	})
}

export const useGetCommands: QueryFunction<Schema.CommandsOptions[]> = (options) => {
	return useQuery({
		queryKey: ['commands'],
		queryFn: () => {
			return axios.get(Routes.apiCommands()).then(res => res.data)
		},
		...options,
	})
}

export const useGetCommandPayloadTypes: QueryFunction<ComboboxData> = (options) => {
	return useQuery({
		queryKey: ['commandPayloadTypes'],
		queryFn: () => {
			return axios.get(Routes.apiCommandsPayloadTypes()).then(res => res.data)
		},
		...options,
	})
}
