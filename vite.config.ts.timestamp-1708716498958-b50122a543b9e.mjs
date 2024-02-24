// vite.config.ts
import { defineConfig } from "file:///Users/avram/Development/ruby/osc/node_modules/vite/dist/node/index.js";
import RubyPlugin from "file:///Users/avram/Development/ruby/osc/node_modules/vite-plugin-ruby/dist/index.js";
import wyw from "file:///Users/avram/Development/ruby/osc/node_modules/@wyw-in-js/vite/esm/index.mjs";
import tsconfigPaths from "file:///Users/avram/Development/ruby/osc/node_modules/vite-tsconfig-paths/dist/index.mjs";
import FullReload from "file:///Users/avram/Development/ruby/osc/node_modules/vite-plugin-full-reload/dist/index.js";
import react from "file:///Users/avram/Development/ruby/osc/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/Users/avram/Development/ruby/osc";
var config = defineConfig({
  build: {
    rollupOptions: {
      external: [
        "./app/frontend/Images/*"
      ]
    }
  },
  plugins: [
    tsconfigPaths(),
    RubyPlugin(),
    FullReload(["config/routes.rb", "app/views/**/*"], { delay: 200 }),
    react({
      babel: {
        plugins: ["babel-plugin-macros", "babel-plugin-styled-components"]
      }
    }),
    wyw({
      include: ["**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"]
      }
    })
  ],
  resolve: {
    dedupe: ["axios"],
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "app", "frontend")
    }
  },
  base: "./",
  server: {
    fs: {
      strict: false
    }
  }
});
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXZyYW0vRGV2ZWxvcG1lbnQvcnVieS9vc2NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hdnJhbS9EZXZlbG9wbWVudC9ydWJ5L29zYy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYXZyYW0vRGV2ZWxvcG1lbnQvcnVieS9vc2Mvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFJ1YnlQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tcnVieSdcbmltcG9ydCB3eXcgZnJvbSAnQHd5dy1pbi1qcy92aXRlJ1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocydcbmltcG9ydCBGdWxsUmVsb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLWZ1bGwtcmVsb2FkJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuY29uc3QgY29uZmlnID0gZGVmaW5lQ29uZmlnKHtcblx0YnVpbGQ6IHtcblx0XHRyb2xsdXBPcHRpb25zOiB7XG5cdFx0XHRleHRlcm5hbDogW1xuXHRcdFx0XHQnLi9hcHAvZnJvbnRlbmQvSW1hZ2VzLyonLFxuXHRcdFx0XSxcblx0XHR9LFxuXHR9LFxuXHRwbHVnaW5zOiBbXG5cdFx0dHNjb25maWdQYXRocygpLFxuXHRcdFJ1YnlQbHVnaW4oKSxcblx0XHRGdWxsUmVsb2FkKFsnY29uZmlnL3JvdXRlcy5yYicsICdhcHAvdmlld3MvKiovKiddLCB7IGRlbGF5OiAyMDAgfSksXG5cdFx0cmVhY3Qoe1xuXHRcdFx0YmFiZWw6IHtcblx0XHRcdFx0cGx1Z2luczogWydiYWJlbC1wbHVnaW4tbWFjcm9zJywgJ2JhYmVsLXBsdWdpbi1zdHlsZWQtY29tcG9uZW50cyddLFxuXHRcdFx0fSxcblx0XHR9KSxcblx0XHR3eXcoe1xuXHRcdFx0aW5jbHVkZTogWycqKi8qLnt0cyx0c3h9J10sXG5cdFx0XHRiYWJlbE9wdGlvbnM6IHtcblx0XHRcdFx0cHJlc2V0czogWydAYmFiZWwvcHJlc2V0LXR5cGVzY3JpcHQnLCAnQGJhYmVsL3ByZXNldC1yZWFjdCddLFxuXHRcdFx0fSxcblx0XHR9KSxcblx0XSxcblx0cmVzb2x2ZToge1xuXHRcdGRlZHVwZTogWydheGlvcyddLFxuXHRcdGFsaWFzOiB7XG5cdFx0XHQnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdhcHAnLCAnZnJvbnRlbmQnKSxcblx0XHR9LFxuXHR9LFxuXHRiYXNlOiAnLi8nLFxuXHRzZXJ2ZXI6IHtcblx0XHRmczoge1xuXHRcdFx0c3RyaWN0OiBmYWxzZSxcblx0XHR9LFxuXHR9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFSLFNBQVMsb0JBQW9CO0FBQ2xULE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sU0FBUztBQUNoQixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBTmpCLElBQU0sbUNBQW1DO0FBUXpDLElBQU0sU0FBUyxhQUFhO0FBQUEsRUFDM0IsT0FBTztBQUFBLElBQ04sZUFBZTtBQUFBLE1BQ2QsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLGNBQWM7QUFBQSxJQUNkLFdBQVc7QUFBQSxJQUNYLFdBQVcsQ0FBQyxvQkFBb0IsZ0JBQWdCLEdBQUcsRUFBRSxPQUFPLElBQUksQ0FBQztBQUFBLElBQ2pFLE1BQU07QUFBQSxNQUNMLE9BQU87QUFBQSxRQUNOLFNBQVMsQ0FBQyx1QkFBdUIsZ0NBQWdDO0FBQUEsTUFDbEU7QUFBQSxJQUNELENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNILFNBQVMsQ0FBQyxlQUFlO0FBQUEsTUFDekIsY0FBYztBQUFBLFFBQ2IsU0FBUyxDQUFDLDRCQUE0QixxQkFBcUI7QUFBQSxNQUM1RDtBQUFBLElBQ0QsQ0FBQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLFFBQVEsQ0FBQyxPQUFPO0FBQUEsSUFDaEIsT0FBTztBQUFBLE1BQ04sS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTyxVQUFVO0FBQUEsSUFDL0M7QUFBQSxFQUNEO0FBQUEsRUFDQSxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDSCxRQUFRO0FBQUEsSUFDVDtBQUFBLEVBQ0Q7QUFDRCxDQUFDO0FBRUQsSUFBTyxzQkFBUTsiLAogICJuYW1lcyI6IFtdCn0K
