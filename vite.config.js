// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/CourseraAssignment/', // Use repository name here
  plugins: [react()],
});
