import path from 'path';

export const resolve = {
    extensions: ['.js', '.jsx'],
};
export const module = {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                },
            },
        },
    ],
};