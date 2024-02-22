export { default as Button } from './Button'
export { default as ConditionalWrapper } from './ConditionalWrapper'
export { default as DangerousHtml } from './DangerousHtml'
export { default as Heading } from './Heading'
export { default as Link, NavLink } from './Link'
export { default as Menu } from './Menu'
export { default as Page, type PageProps } from './Page'
export { default as RichTextEditor } from './RichTextEditor'
export { default as Section } from './Section'
export { default as Table } from './Table'
export { default as Label } from './Label'
export { default as Tabs } from './Tabs'

// Export UI library components as a proxy to allow easy refactoring
export {
	Box,
	Badge,
	Card,
	Center,
	Container,
	Divider,
	Flex,
	Group,
	List,
	Modal,
	Paper,
	SimpleGrid,
	Stack,
	Text,
	Tooltip,
	ThemeIcon as Icon,
} from '@mantine/core'
