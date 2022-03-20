// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  compress: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/project',
        permanent: true
      }
    ]
  },
  rewrites: () => [
    { source: "/api/:path*", destination: "http://localhost/:path*" }
  ],
  swcMinify: true,
  compiler: {
    styledComponents: true
  }
});