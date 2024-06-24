import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/pizza-bar-main/dist/', // 確保這個 base 路徑與你的 GitHub Pages 頁面一致
});
