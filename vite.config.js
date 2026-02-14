import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react()],
    // 'command' é 'build' quando rodamos npm run build/deploy
    // No GitHub Pages, o caminho base deve ser o nome do repositório
    base: command === 'build' ? '/yinyang-site/' : '/',
  }
})
