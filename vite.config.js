import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default 

{
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        landing: 'index2.html',
      },
    },
  },
};

defineConfig({
  plugins: [
    tailwindcss(),
  ],

  
})

