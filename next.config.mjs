/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src', 'views', 'style')],
    additionalData: `
      @import 'mixins.scss';
      @import 'variables.scss';
      @import 'size.scss';
      @import 'fonts.scss';
    `,
  },

  images: {
    domains: ['i.imgur.com', 'photogen.impulsrent.ru'],
  }, 
}

export default nextConfig;