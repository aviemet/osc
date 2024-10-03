import { useMutation, useQueryClient } from "@tanstack/react-query"
import { type ReactMutationFunction } from ".."
import axios from 'axios';
import { Routes } from "@/lib";
import { queryKeys } from "./keys";

export const useCreateCommand: ReactMutationFunction<Schema.CommandsFormData, Schema.CommandsShow> = (options) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: queryKeys.commands,
		mutationFn: async (data) => {
			const res = await axios.post(Routes.apiCommands(), data)
			return res.data
		},
		...options,
		onSuccess: (data, variables) => {
			queryClient.invalidateQueries({ queryKey: queryKeys.commands })
			options?.onSuccess?.(data, variables)
		},
	})
}
