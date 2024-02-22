import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			all: true,
			include: ['app/frontend/**/*.test.{ts,tsx}'],
		},
	},
}))
