/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

const repo = "personal-website";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;
