import {
	LAYOUTS,
	AuthLayout,
	PublicLayout,
	AppLayout,
	LayoutProps,
} from "@/Layouts"
import { PagesObject } from "../application"

const LAYOUT_COMPONENTS: Record<keyof typeof LAYOUTS, ({ children }: LayoutProps) => React.JSX.Element> = {
	"auth": AuthLayout,
	"app": AppLayout,
	"public": PublicLayout,
} as const

const handlePageLayout = (page: PagesObject) => {
	const DefaultLayout = LAYOUT_COMPONENTS[page.default.defaultLayout as keyof typeof LAYOUTS] || AppLayout
	page.default.layout ||= (children: React.ReactNode) => <DefaultLayout>{ children }</DefaultLayout>

	return page.default
}

export default handlePageLayout
