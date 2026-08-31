/** @type {import('next').NextConfig} */
const nextConfig = {
  // GSAP / Lenis set up imperative scroll effects that React's StrictMode
  // double-invoke (dev only) tears down and rebuilds mid-frame, which throws
  // benign reconciliation errors. Production never double-invokes.
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
