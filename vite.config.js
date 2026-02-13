import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/yinyang-site/', // <--- COLOQUE O NOME DO SEU REPOSITÓRIO AQUI ENTRE AS BARRAS
})
