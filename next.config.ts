import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  ...(process.env.ATS_STATIC_EXPORT === '1' ? {
    output: 'export',
    images: { unoptimized: true },
  } : {}),
};

export default nextConfig;
