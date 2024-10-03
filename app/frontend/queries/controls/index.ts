import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Routes } from '@/lib'
import axios from 'axios'
import { ComboboxData } from '@mantine/core'
import { type ReactQueryFunction, type ReactMutationFunction } from '..'

export const useGetControl: ReactQueryFunction<Schema.ControlsShow, { slug: string }> = ({ slug }, options) => {
	return useQuery({
		queryKey: [`control/${slug}`],
		queryFn: async () => {
			const res = await axios.get(Routes.apiControl(slug))
			return res.data
		},
		...options,
	})
}

export const useGetControls: ReactQueryFunction<Schema.ControlsOptions[]> = (options) => {
	return useQuery({
		queryKey: ['controls'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiControls())
			return res.data
		},
		...options,
	})
}

export const useCreateControl: ReactMutationFunction<
	Schema.ControlsFormData & { type: string },
	Schema.ControlsShow
> = ({ options }) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: async ({ type }) => {
			const res = await axios.post(Routes.apiControls(), type)
			return res.data
		},
		mutationKey: ['controls'],
		...options,
		onSuccess: (data, variables) => {
			queryClient.invalidateQueries({ queryKey: ['controls'] })
			options?.onSuccess?.(data, variables)
		},
	})
}
