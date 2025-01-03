import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup';




export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "./src/utils/styles/index.scss";` },
    },
  },
  base: "/globalEthix"
});