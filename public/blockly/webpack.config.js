const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Base config that applies to either development or production mode.
const config = {
    entry: './src/index.js',
    output: {
        // Compile the source files into a bundle.
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    resolve: {
        fallback: { 'os': require.resolve('os-browserify/browser'), 'path': require.resolve('path-browserify'), 'crypto': require.resolve('crypto-browserify'), "vm": require.resolve("vm-browserify"), "buffer": require.resolve("buffer/"), "stream": require.resolve("stream-browserify"), "https": require.resolve("https-browserify"), "http": require.resolve("stream-http"), "url": require.resolve("url/"), "zlib": require.resolve("browserify-zlib"), "assert": require.resolve("assert/"), "fs": require.resolve("browserify-fs"),  },
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
    },

    // Enable webpack-dev-server to get hot refresh of the app.
    devServer: {
        static: './build',
    },
    module: {
        rules: [
            {
                // Load CSS files. They can be imported into JS files.
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        // Generate the HTML index page based on our template.
        // This will output the same index page with the bundle we
        // created above added in a script tag.
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        // Set the output path to the `build` directory
        // so we don't clobber production builds.
        config.output.path = path.resolve(__dirname, 'build');

        // Generate source maps for our code for easier debugging.
        // Not suitable for production builds. If you want source maps in
        // production, choose a different one from https://webpack.js.org/configuration/devtool
        config.devtool = 'eval-cheap-module-source-map';

        // Include the source maps for Blockly for easier debugging Blockly code.
        config.module.rules.push({
            test: /(blockly\/.*\.js)$/,
            use: [require.resolve('source-map-loader')],
            enforce: 'pre',
        });

        // Ignore spurious warnings from source-map-loader
        // It can't find source maps for some Closure modules and that is expected
        config.ignoreWarnings = [/Failed to parse source map/];
    }
    return config;
};
