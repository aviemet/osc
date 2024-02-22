import React from 'react'
import { type PageProps } from '@inertiajs/core'
import Providers from '@/Layouts/Providers'
import { Flash } from '@/Components/Flash'

import AppLayout from './AppLayout'
import AuthLayout from './AuthLayout'
import PublicLayout from './PublicLayout'

import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(localizedFormat)

interface LayoutWrapperProps {
	children: React.ReactNode
}

interface InertiaPageProps extends PageProps {
	props: LayoutWrapperProps
}

const LayoutWrapper = React.memo(({ children }: LayoutWrapperProps) => {
	return (
		<Providers>
			<Flash />
			{ children }
		</Providers>
	)
})

const AppLayoutLayout = (page: InertiaPageProps) => {
	return (
		<LayoutWrapper>
			<AppLayout>{ page }</AppLayout>
		</LayoutWrapper>
	)
}

const AuthLayoutLayout = (page: InertiaPageProps) => {
	return (
		<LayoutWrapper>
			<AuthLayout>{ page }</AuthLayout>
		</LayoutWrapper>
	)
}

const PublicLayoutLayout = (page: InertiaPageProps) => {
	return (
		<LayoutWrapper>
			<PublicLayout>{ page }</PublicLayout>
		</LayoutWrapper>
	)
}

export {
	AppLayoutLayout as AppLayout,
	AuthLayoutLayout as AuthLayout,
	PublicLayoutLayout as PublicLayout,
}
