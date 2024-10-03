import { Routes } from '@/lib'
import axios from 'axios'
import { type UserPreferences, type UserTablePreferences } from '@/types'
import { useMutation, useQueryClient  } from '@tanstack/react-query'
import { type ReactMutationFunction } from '..'
import { queryKeys } from './keys'

type UserPreferencesParams = {
	id: string | number
	preferences: UserPreferences
}

export const useUpdateUserPreferences: ReactMutationFunction<
	UserPreferencesParams,
	Schema.User,
	{ id: string | number }
> = (params, options) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: queryKeys.userPreferences(params.id),
		mutationFn: async ({ id, preferences }) => {
			const res = await axios.patch(Routes.apiUpdateUserPreferences(id), {
				user: { user_preferences: preferences },
			})
			if(res.statusText !== 'OK') {
				throw new Error('Failed to update user preferences')
			}
			return res.data
		},
		...options,
		onSuccess: (data, variables) => {
			queryClient.invalidateQueries({ queryKey: queryKeys.userPreferences(variables.id) })
			options?.onSuccess?.(data, variables)
		},
	})
}

type UserTablePreferencesParams = {
	id: string | number
	preferences: UserTablePreferences
}

export const useUpdateUserTablePreferences: ReactMutationFunction<
	UserTablePreferencesParams,
	Schema.User,
	{ id: string | number }
> = (params, options) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: queryKeys.userTablePreferences(params.id),
		mutationFn: async ({ id, preferences }) => {
			const res = await axios.patch(Routes.apiUpdateTablePreferences(id), {
				user: { table_preferences: preferences },
			})
			if(res.statusText !== 'OK') {
				throw new Error('Failed to update table preferences')
			}
			return res.data
		},
		...options,
		onSuccess: (data, variables) => {
			queryClient.invalidateQueries({ queryKey: queryKeys.userTablePreferences(variables.id) })
			options?.onSuccess?.(data, variables)
		},
	})
}

