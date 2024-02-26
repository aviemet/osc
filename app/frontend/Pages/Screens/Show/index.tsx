import React from 'react'
import { Page, Tabs } from '@/Components'
import { Routes } from '@/lib'
import ScreenControlLayout from './ScreenControlLayout'
import { SettingsIcon } from '@/Components/Icons'
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
				variant="pills"
				value={ paths[1] }
				onChange={ value => value && router.get(Routes.screen(value)) }
				defaultValue={ screen.slug } keepMounted={ false }
			>
				<Tabs.List>
					{ screens.map(iScreen => (
						<Tabs.Tab key={ iScreen.id } value={ iScreen.slug }>{ iScreen.title }</Tabs.Tab>
					)) }
					<Tabs.Link href={ Routes.editScreen(screen.slug) } position='right'><SettingsIcon /></Tabs.Link>
				</Tabs.List>

				{ screens.map(iScreen => (
					<Tabs.Panel key={ iScreen.id } value={ iScreen.slug }>
						<>{ iScreen.id === screen.id && <ScreenControlLayout screen={ screen } /> }</>
					</Tabs.Panel>
				)) }

			</Tabs>
		</Page>
	)
}

export default ShowScreen
