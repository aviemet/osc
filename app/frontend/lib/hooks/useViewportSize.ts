import { useEffect } from 'react';
import { useViewportSize as useMantineViewportSize } from '@mantine/hooks';

type OnChangeCallback = (dimensions: { width: number, height: number }) => void

const useViewportSize = (onChange?: OnChangeCallback) => {
	const { width, height } = useMantineViewportSize()

	useEffect(() => {
		onChange?.({ width, height })
	}, [width, height, onChange])

	return { width, height }
}

export default useViewportSize
