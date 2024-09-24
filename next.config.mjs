/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/ragip-diler",
				destination: "/ragip-diler/dashboard/home",
				permanent: true,
			},
			{
				source: "/ragip-diler/dashboard",
				destination: "/ragip-diler/dashboard/home",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
