import React from 'react'
import { Box, Page, Tabs } from '@/Components'
import Control from '../Components/Control'
import { Routes } from '@/lib'
import { useLocation } from '@/lib/hooks'
import { router } from '@inertiajs/react'

interface IShowScreenProps {
	screen: Schema.ScreensShow
	screens: Schema.ScreensOptions[]
}

const ShowScreen = ({ screen, screens }: IShowScreenProps) => {
	const { paths } = useLocation()

	const title =  'Screen'

	return (
		<Page title={ title }>
			<Tabs
				variant="outline"
				value={ paths[1] }
				onChange={ value => value && router.get(Routes.screen(value)) }
				defaultValue={ screen.slug } keepMounted={ false }
			>
				<Tabs.List>
					{ screens.map(iScreen => (
						<Tabs.Tab key={ iScreen.id } value={ iScreen.slug }>{ iScreen.title }</Tabs.Tab>
					)) }
				</Tabs.List>

				{ screens.map(iScreen => (
					<Tabs.Panel key={ iScreen.id } value={ iScreen.slug }>
						{ iScreen.id === screen.id &&
							<Box>
								{ screen?.controls?.map(control => (
									<Control key={ control.id } control={ control } />
								)) }
							</Box>
						}
					</Tabs.Panel>
				)) }

			</Tabs>
		</Page>
	)
}

export default ShowScreen
