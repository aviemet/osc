import { Routes } from '@/lib'
import axios from 'axios'
import { type UserPreferences, type UserTablePreferences } from '@/types'
import { useMutation, useQueryClient  } from '@tanstack/react-query'
import { type ReactMutationFunction } from '..'

// type UserPreferencesParams = {
// 	id: string | number
// 	preferences: UserPreferences
// }

// export const useUpdateUserPreferences: ReactMutationFunction<Schema.User, UserPreferencesParams> = (
// 	params,
// 	options,
// ) => {
// 	const queryClient = useQueryClient()

// 	return useMutation({
// 		mutationFn: async ({ id, preferences }) => {
// 			const res = await axios.patch(Routes.apiUpdateUserPreferences(id), {
// 				user: { user_preferences: preferences },
// 			})
// 			if(res.statusText !== 'OK') {
// 				throw new Error('Failed to update user preferences')
// 			}
// 			return res.data
// 		},
// 		mutationKey: ['user', params.id, 'preferences'],
// 		...options,
// 		onSuccess: (data, variables) => {
// 			queryClient.invalidateQueries({ queryKey: ['user', params.id, 'preferences'] })
// 			options?.onSuccess?.(data, variables)
// 		},
// 	})
// }

type UserTablePreferencesParams = {
	id: string | number
	preferences: UserTablePreferences
}

export const useUpdateUserTablePreferences: ReactMutationFunction<
	UserTablePreferencesParams,
	Schema.User,
	{ id: string|number }
> = ({
	params,
	options,
}) => {
	const queryClient = useQueryClient()

	const queryKey = ['user', params.id, 'table_preferences']

	return useMutation({
		mutationFn: async ({ id, preferences }) => {
			const res = await axios.patch(Routes.apiUpdateTablePreferences(id), {
				user: { table_preferences: preferences },
			})
			if(res.statusText !== 'OK') {
				throw new Error('Failed to update user preferences')
			}
			return res.data
		},
		mutationKey: queryKey,
		...options,
		onSuccess: (data, variables) => {
			queryClient.invalidateQueries({ queryKey })
			options?.onSuccess?.(data, variables)
		},
	})
}

