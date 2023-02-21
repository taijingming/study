const http = require("http")
const { host, port } = require("../config")
const { readFile } = require("./utils")

const serve = http.createServer(async(req, res) => {
    const url = req.url
    console.log(url)
    let resData = null

    switch (url) {
        case '/':
            res.setHeader('Content-Type', 'text/html')
            resData = await readFile('index.html',req, res)
            break;
        case '/index.css':
            res.setHeader('Content-Type', 'text/css;charset=utf-8')
            await readFile('index.css',req.headers, res,)
            break;
        case '/img.jpg':
            res.setHeader('Content-type', 'image/jpg')
            res.setHeader('Content-type', 'image/jpg')
            resData = await readFile('img.jpg',req, res, 'max-age')
            break;
            case '/img1.jpg':
            res.setHeader('Content-type', 'image/jpg')
            res.setHeader('Cache-Control', 'no-store')
            resData = await readFile('img1.jpg',req, res)
            break;
        case '/img2.jpg':
            res.setHeader('Content-type', 'image/jpg')
            resData = await readFile('img2.jpg',req, res, 'last-modified')
        //     break;
        case '/img3.jpg':
            res.setHeader('Content-type', 'image/jpg')
            resData = await readFile('img3.jpg',req, res, 'etag')
            break;
        case '/img4.jpg':
            res.setHeader('Content-type', 'image/jpg')
            resData = await readFile('img4.jpg',req, res, 'Expires')
            break;
        case '/logo.png': 
            resData = await readFile('logo.png',req, res)
        default:
            break;
    }
    res.end(resData?.data)
})
serve.listen(port, host, () => {
    console.log(`Serve is runing at ${host}:${port}`)
})