import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/a-to-do-list-app/',
  plugins: [react()],
});
