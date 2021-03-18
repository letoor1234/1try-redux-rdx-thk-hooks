module.exports ={
    entry: './app/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'app.js'
    },
    module: {
        rules:[
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }	
}