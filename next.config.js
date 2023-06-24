/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	images: {
		domains: ['lifscnxzktzcffgkwvuw.supabase.co'],
	},
}

module.exports = nextConfig
