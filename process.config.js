module.exports = {
  apps: [
    {
      name: "Gemini-clone",
      cwd: "./",
      script: "./dist/vite.config.js",
      watch: false,
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
      instances: 1,
      exec_mode: "cluster",
    },
  ],
};
