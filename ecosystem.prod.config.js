module.exports = {
    apps: [
        {
            name: 'api',
            script: 'dist/index.js',
            instances: process.env.WEB_CONCURRENCY || 2,
            exec_mode: 'cluster',
            max_memory_restart: '700M',
            autorestart: true,
            watch: false,
        },
    ],
};
