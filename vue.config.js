const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    pages: {
        index: {
            //入口
            entry: 'src/main.js',
        },
    },
    lintOnSave: false, //关闭语法检查
    //开启代理服务器（方式一）
    devServer: {
        // publicPath: '/',
        // outputDir: 'dist',
        // assetsDir: 'static',
        proxy: 'http://localhost:8087'
    },
    //开启代理服务器（方式二）
    // devServer: {
    //     proxy: {
    //         '/atguigu': {
    //             target: 'http://localhost:8087',
    //             pathRewrite: {'^/atguigu': ''},
    //             // ws: true, //用于支持websocket
    //             // changeOrigin: true //用于控制请求头中的host值
    //         }
    //     }
    // }
})
