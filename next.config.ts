import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const nextConfig: NextConfig = {
    reactStrictMode: true
};

export default createVanillaExtractPlugin()(nextConfig);
