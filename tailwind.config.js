/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-page': "url('/Images/person+writing+in+a+journal+with+computer+in+background.jpg')",
        'about-page': "url('/Images/about.png')",
        'mobile': "url('/Images/mobile1.jpg')",
      },
    },
  },
  plugins: [    require('preline/plugin' , 'tailwindcss-animated'),
  ],
}





