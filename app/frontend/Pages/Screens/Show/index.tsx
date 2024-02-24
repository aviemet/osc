import React from 'react'
import { Page, Tabs } from '@/Components'
import { Routes } from '@/lib'
import ScreenControlLayout from './ScreenControlLayout'

interface IShowScreenProps {
	screen: Schema.ScreensShow
	screens: Schema.ScreensOptions[]
}

const ShowScreen = ({ screen, screens }: IShowScreenProps) => {
	const title =  'Screen'

	return (
		<Page title={ title }>
			<Tabs defaultValue={ screen.slug } keepMounted={ false }>
				<Tabs.List>
					{ screens.map(iScreen => (
						<Tabs.Tab key={ iScreen.id } value={ iScreen.slug }>{ iScreen.title }</Tabs.Tab>
					)) }
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
