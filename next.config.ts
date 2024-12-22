import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    pageExtensions: ["ts", "tsx", "md", "md"],
    experimental: {
      mdxRs: true
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.md$/,
            loader: "frontmatter-markdown-loader",
            options: { mode: ["react-component"] }
        });
        return config;
    }
};

export default nextConfig;
