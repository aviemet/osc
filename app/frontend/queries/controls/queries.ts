import { useQuery } from "@tanstack/react-query"
import { Routes } from "@/lib"
import axios from "axios"
import { type ReactQueryFunction } from ".."

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
		queryKey: ["controls"],
		queryFn: async () => {
			const res = await axios.get(Routes.apiControls())
			return res.data
		},
		...options,
	})
}
