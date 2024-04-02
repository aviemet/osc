import React from 'react'
import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface QueryProviderProps {
	children: React.ReactNode
}

const queryClient = new QueryClient()

const QueryProvider = ({ children }: QueryProviderProps) => {
	return (
		<QueryClientProvider client={ queryClient }>
			{ process.env.NODE_ENV && process.env.NODE_ENV === 'development' && <ReactQueryDevtools /> }
			{ children }
		</QueryClientProvider>
	)
}

export default QueryProvider
