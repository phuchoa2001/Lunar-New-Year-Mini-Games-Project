/** @type {import('tailwindcss').Config} */

const path = require('path')
const withTM = require('next-transpile-modules')([
  'antd-mobile',
]);

module.exports = withTM({
  future: {
    webpack5: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/styles/*": ["styles/*"],
      "@/components/*": ["components/*"],
      "@/utils/*": ["utils/*"],
      "@/hooks/*": ["hooks/*"],
      "@/api/*": ["api/*"]
    }
  },
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
});