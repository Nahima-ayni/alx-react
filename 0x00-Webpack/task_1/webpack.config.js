const path = require('path');

module.exports = {
    mode: 'production', // Set mode to production
    entry: './js/dashboard_main.js', // Entry point of the application
    output: {
        filename: 'bundle.js', // Output filename
        path: path.resolve(__dirname, 'public'), // Output directory
        publicPath: '/', // Public URL of the output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
