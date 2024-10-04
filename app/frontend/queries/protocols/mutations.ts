import { useMutation, useQueryClient } from "@tanstack/react-query"
import { type ReactMutationFunction } from ".."
import axios from 'axios';
import { Routes } from "@/lib";
import { queryKeys } from "./keys";

export const useCreateProtocol: ReactMutationFunction<
	Schema.ProtocolsFormData,
	Schema.ProtocolsShow
> = (options) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: queryKeys.protocols,
		mutationFn: async (data) => {
			const res = await axios.post(Routes.apiProtocols(), data)
			return res.data
		},
		...options,
		onSuccess: (data, variables) => {
			queryClient.invalidateQueries({ queryKey: queryKeys.protocols })
			options?.onSuccess?.(data, variables)
		},
	})
}
