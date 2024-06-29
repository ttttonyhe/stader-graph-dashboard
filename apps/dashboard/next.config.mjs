/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	productionBrowserSourceMaps: false,
	images: {
		minimumCacheTTL: 3600,
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static.ouorz.com",
			},
		],
	},
	experimental: {
		reactCompiler: true,
	},
	transpilePackages: ["@sgd/shared"],
}

export default nextConfig
