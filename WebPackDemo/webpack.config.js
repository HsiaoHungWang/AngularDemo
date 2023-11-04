const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 entry:'./src/main.ts',
 resolve:{extensions:['.ts','.js']},
 output:{
    filename:'bundle.js',
    path:path.resolve(__dirname, 'dist')
 },
 module:{
    rules:[
        {
         test:/\.ts?$/,
         use:'ts-loader',
         exclude:'/node_modules/'
        }
    ]
 },
 plugins:[new HtmlWebpackPlugin({
    title:'webpack dmeo',
    //filename:'abc.html'
    template:'./template.html'
 })],
 devServer:{
   port:4200,
   open:true
 }

}
