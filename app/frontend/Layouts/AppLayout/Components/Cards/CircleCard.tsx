import React from 'react'
import { Badge, Button, Card, Group, Text } from '@/Components'
import { Link } from '@inertiajs/react'
import { Routes } from '@/lib'

interface CircleCardProps {
	circle: Schema.Circle & {
		slug: string
	}
}

const CircleCard = ({ circle }: CircleCardProps) => {
	return (
		<Card
			shadow="sm"
			p="lg"
			my="md"
			radius="md"
			withBorder
			component={ Link }
			href={ Routes.circle(circle.slug) }
		>
			<Group justify="space-between" mt="md" mb="xs">
				<Text fw={ 500 }>{ circle.name }</Text>
				<Badge color="pink"></Badge>
			</Group>

			<Text size="sm" c="dimmed">

			</Text>

			<Button color="blue" fullWidth mt="md" radius="md">

			</Button>
		</Card>
	)
}

export default CircleCard
