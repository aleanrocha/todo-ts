/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'todo-white': '#fafafa',
        'primary-color': '#282c34',
        'secondary-color': '#61dafb'
      }
    }
  },
  plugins: []
}
