import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {

    port: 5173,// 원하는 포트 번호로 변경 가능
    host: true
  },
})
