import { Routes } from "@/lib"

export * as Routes from "./routes/routes"
export * as formatter from "./formatters"

export * from "./colors"
export * from "./collections"
export * from "./forms"
export * from "./strings"
export * from "./theme"
export * from "./units"
export * from "./uuid"

export const polymorphicRoute = (model: string, param: string | number) => {
	// @ts-ignore
	return Routes[camelize(model)](param)
}

export { withLayout } from "./withLayout"

export { useTranslation } from "react-i18next"
