import {
	type UseQueryOptions,
	type UseMutationOptions,
	type UseQueryResult,
	type UseMutationResult,
} from '@tanstack/react-query'

/**
 * Query types
 */

interface LimitedQueryOptions<TData> extends Omit<UseQueryOptions<TData>, 'queryKey'|'queryFn'> {}

type ReactQueryFunctionBasic<TData> = (options?: LimitedQueryOptions<TData>) => UseQueryResult<TData, Error>
type ReactQueryFunctionWithParams<TData, TParams extends Record<string, string|number|string[]>> = (params: TParams, options?: LimitedQueryOptions<TData>) => UseQueryResult<TData, Error>

export type ReactQueryFunction<TData, TParams = undefined> =
	TParams extends undefined
		? ReactQueryFunctionBasic<TData>
		: TParams extends Record<string, string|number|string[]>
			? ReactQueryFunctionWithParams<TData, TParams>
			: never;

/**
 * Mutation types
 */

interface LimitedMutationOptions<TReturnData, TVariables, TError = unknown> extends Omit<UseMutationOptions<TReturnData, TError, TVariables, unknown>, 'mutationKey'|'onSuccess'> {
	onSuccess?: (data: TReturnData, variables: TVariables) => void
}

export type ReactMutationFunction<
	TMutationVariables,
	TReturnData,
	TParams = undefined,
	TError = unknown
> = TParams extends undefined
	? ({
		options
	}: {
		options: LimitedMutationOptions<TReturnData, TMutationVariables, TError>
	}) => UseMutationResult<TReturnData, TError, TMutationVariables, unknown>
		: ({
			params,
			options,
		}: {
			params: TParams,
			options?: LimitedMutationOptions<TReturnData, TMutationVariables, TError>
		}) => UseMutationResult<TReturnData, TError, TMutationVariables, unknown>

/**
 * Folder exports
 */

export * from './commands'
export * from './protocols'
export * from './servers'
export * from './controls'
