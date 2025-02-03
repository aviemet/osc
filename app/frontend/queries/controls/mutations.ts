import { useMutation, useQueryClient } from "@tanstack/react-query"
import { type ReactMutationFunction } from ".."
import axios from "axios"
import { Routes } from "@/lib"
import { queryKeys } from "./keys"

export const useCreateControl: ReactMutationFunction<
	Schema.ControlsFormData,
	Schema.ControlsShow
> = (options) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: queryKeys.controls,
		mutationFn: async (data) => {
			const res = await axios.post(Routes.apiControls(), data)
			return res.data
		},
		...options,
		onSuccess: (data, variables) => {
			queryClient.invalidateQueries({ queryKey: queryKeys.controls })
			options?.onSuccess?.(data, variables)
		},
	})
}
