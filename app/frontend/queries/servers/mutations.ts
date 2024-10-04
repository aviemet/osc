import { useMutation, useQueryClient } from "@tanstack/react-query"
import { type ReactMutationFunction } from ".."
import axios from 'axios';
import { Routes } from "@/lib";
import { queryKeys } from "./keys";

export const useCreateServer: ReactMutationFunction<
	Schema.ServersFormData,
	Schema.ServersShow
> = (options) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: queryKeys.servers,
		mutationFn: async (data) => {
			const res = await axios.post(Routes.apiServers(), data)
			return res.data
		},
		...options,
		onSuccess: (data, variables) => {
			queryClient.invalidateQueries({ queryKey: queryKeys.servers })
			options?.onSuccess?.(data, variables)
		},
	})
}
