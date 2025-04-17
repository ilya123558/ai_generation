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
  // Чтобы подключить возможность отображать ссылки на изображения
  // images: {
  //   domains: ['example.com'],  // Замените на домен, с которого будете загружать изображения
  // }, 
}

export default nextConfig;