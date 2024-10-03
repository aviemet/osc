import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface QueryProviderProps {
	children: React.ReactNode
}

const queryClient = new QueryClient()

const isDev = false // process.env.NODE_ENV && process?.env?.NODE_ENV === 'development'

const QueryProvider = ({ children }: QueryProviderProps) => {
	return (
		<QueryClientProvider client={ queryClient }>
			{ isDev && <ReactQueryDevtools buttonPosition='bottom-right' /> }
			{ children }
		</QueryClientProvider>
	)
}

export default QueryProvider
