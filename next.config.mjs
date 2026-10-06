/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects(){
    return[
      {
        source:'/insights',
        destination:'/',
        permanent:true,
      },
    ];
  },
  output: 'export',
  trailingSlash: true, // Exports routes as folder/index.html instead of page.html
  images: {
    unoptimized: true,
  },
};

export default nextConfig;