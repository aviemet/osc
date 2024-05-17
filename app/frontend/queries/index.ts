import { type UseQueryResult, type UseQueryOptions } from '@tanstack/react-query'

export * from './commands/queries'
export * from './protocols/queries'
export * from './servers/queries'

interface LimitedQueryOptions<T> extends Omit<UseQueryOptions<T>, 'queryKey'|'queryFn'> {}

export type QueryFunction<T> = (options?: LimitedQueryOptions<T>) => UseQueryResult<T, Error>
export type QueryFunctionSingle<T, S = string> = (slug: S, options?: LimitedQueryOptions<T>) => UseQueryResult<T, Error>
