/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    images: { domains: ['https://nguyenthanhluongtdc.github.io'], formats: ['image/avif', 'image/webp'], }
}
 module.exports = nextConfig