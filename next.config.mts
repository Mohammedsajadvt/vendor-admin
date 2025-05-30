// next.config.mjs
/** @type {import('next').NextConfig} */
const nextI18nextConfig = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es'],
    }
};

const nextConfig = {
  // ... other Next.js configurations
  ...nextI18nextConfig,
};

export default nextConfig;