/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['photobank.maximum.expert'],
		unoptimized: true, // Отключаем оптимизацию изображений
	},
	output: 'export',
};

export default nextConfig;
