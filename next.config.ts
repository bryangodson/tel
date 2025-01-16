const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  basePath: isProd ? "/tel" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/tel" : "",
};

export default nextConfig;
