import { defineConfig } from "vite"
import RubyPlugin from "vite-plugin-ruby"
import wyw from "@wyw-in-js/vite"
import tsconfigPaths from "vite-tsconfig-paths"
import FullReload from "vite-plugin-full-reload"
import react from "@vitejs/plugin-react"
import path from "path"

const config = defineConfig({
	build: {
		rollupOptions: {
			external: [
				"./app/frontend/Images/*",
			],
		},
		outDir: "public/vite-production",
	},
	plugins: [
		tsconfigPaths(),
		RubyPlugin(),
		FullReload(["config/routes.rb", "app/views/**/*"], { delay: 200 }),
		react({
			babel: {
				plugins: ["babel-plugin-macros"],
			},
		}),
		wyw({
			include: ["**/*.{ts,tsx}"],
			babelOptions: {
				presets: ["@babel/preset-typescript", "@babel/preset-react"],
			},
		}),
	],
	resolve: {
		dedupe: ["axios"],
		alias: {
			"@": path.resolve(__dirname, "app", "frontend"),
		},
	},
	base: "./",
	server: {
		fs: {
			strict: false,
		},
	},
	mode: process.env.NODE_ENV || "development",
})

export default config
