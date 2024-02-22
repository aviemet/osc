import React, { useEffect, useMemo } from 'react'
import { MantineProvider, createTheme, px, type CSSVariablesResolver } from '@mantine/core'
import { type CSSVariables } from '@mantine/core/lib/core/MantineProvider/convert-css-variables/css-variables-object-to-string'
import { Notifications } from '@mantine/notifications'
import { theme as themeObject, vars } from '@/lib/theme'
import useLayoutStore from '@/lib/store/LayoutStore'
import { toKebabCase } from '@/lib'

const UiFrameworkProvider = ({ children }: { children: React.ReactNode }) => {
	/**
	 * Primary color customization
	 */
	const { primaryColor } = useLayoutStore()

	const theme = useMemo(() => createTheme({ ...themeObject, primaryColor }), [primaryColor])

	const cssVariablesResolver = useMemo((): CSSVariablesResolver => {
		return (resolverTheme) => {
			const variables: CSSVariables = {}
			const dark: CSSVariables = {}
			const light: CSSVariables = {}

			Object.entries(vars.colors[primaryColor]).forEach(([key, val]) => {
				if(key.match(/[0-9]/)) {
					variables[`--mantine-color-primary-${toKebabCase(key)}`] = val
				} else {
					dark[`--mantine-color-primary-${toKebabCase(key)}`] = val
					light[`--mantine-color-primary-${toKebabCase(key)}`] = val
				}
			})

			return {
				variables,
				dark,
				light,
			}
		}
	}, [primaryColor])


	useEffect(() => {
		/* eslint-disable no-console */
		if(process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
			console.log({ theme })
			console.log({ vars })

			console.log({ breakpointsPx: Object.fromEntries(
				Object.entries(theme.breakpoints ?? []).map(([key, val]) => [key, px(val)]),
			) })
		}
		/* eslint-enable */
	}, [])

	return (
		<MantineProvider
			theme={ theme }
			defaultColorScheme="dark"
			cssVariablesResolver={ cssVariablesResolver }
		>
			<Notifications />
			{ children }
		</MantineProvider>
	)
}

export default UiFrameworkProvider
