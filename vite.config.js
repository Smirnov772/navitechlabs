import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	server: {
		watch: {
			usePolling: true, // Использует поллинг вместо событий файловой системы
			interval: 100,    // Интервал проверки файлов (мс)
		},
		hmr: {
			overlay: false,   // Отключает отображение ошибок в браузере (опционально)
		},
	},
});
