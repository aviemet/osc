import { useQuery } from '@tanstack/react-query'
import { Routes } from '@/lib'
import axios from 'axios'
import { ComboboxData } from '@mantine/core'
import { type ReactQueryFunction } from '..'

export const useGetCommand: ReactQueryFunction<Schema.CommandsShow, {slug:string}> = ({ slug }, options) => {
	return useQuery({
		queryKey: [`command/${slug}`],
		queryFn: async () => {
			const res = await axios.get(Routes.apiCommand(slug))
			return res.data
		},
		...options,
	})
}

export const useGetCommands: ReactQueryFunction<Schema.CommandsOptions[]> = (options) => {
	return useQuery({
		queryKey: ['commands'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiCommands())
			return res.data
		},
		...options,
	})
}

export const useGetCommandPayloadTypes: ReactQueryFunction<ComboboxData> = (options) => {
	return useQuery({
		queryKey: ['commandPayloadTypes'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiCommandsPayloadTypes())
			return res.data
		},
		...options,
	})
}
