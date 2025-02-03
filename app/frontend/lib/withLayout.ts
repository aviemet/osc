import { LAYOUTS } from "@/Layouts"
import { type PagesObject } from "@/entrypoints/application"

type LayoutType = keyof typeof LAYOUTS

export function withLayout<T extends object>(
	Component: PagesObject<T>["default"],
	layout: LayoutType
) {
	Component.defaultLayout = layout

	return Component
}
