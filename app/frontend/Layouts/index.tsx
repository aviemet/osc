import Providers from "@/Layouts/Providers"
import { Flash } from "@/Components"

import BareAppLayout from "./AppLayout"
import BareAuthLayout from "./AuthLayout"
import BarePublicLayout from "./PublicLayout"

import "@/lib/i18n"

import dayjs from "dayjs"
import localizedFormat from "dayjs/plugin/localizedFormat"
import duration from "dayjs/plugin/duration"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(localizedFormat)
dayjs.extend(duration)
dayjs.extend(relativeTime)

export const LAYOUTS = {
	"auth": "auth",
	"app": "app",
	"public": "public",
}

export interface LayoutProps {
	children: any
}

export const LayoutWrapper = ({ children }: LayoutProps) => {
	return (
		<Providers>
			<Flash />
			{ children }
		</Providers>
	)
}

export const AppLayout = ({ children }: LayoutProps) => {
	return (
		<LayoutWrapper>
			<BareAppLayout>{ children }</BareAppLayout>
		</LayoutWrapper>
	)
}

export const AuthLayout = ({ children }: LayoutProps) => {
	return (
		<LayoutWrapper>
			<BareAuthLayout>{ children }</BareAuthLayout>
		</LayoutWrapper>
	)
}

export const PublicLayout = ({ children }: LayoutProps) => {
	return (
		<LayoutWrapper>
			<BarePublicLayout>{ children }</BarePublicLayout>
		</LayoutWrapper>
	)
}
