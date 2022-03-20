const express = require('express')
const router = express.Router()

router.get('/get', (req, res) => {
    const query = req.query;

    // res.setHeader()

    res.send({
        code: 200, 
        data: query,
        msg: 'get 请求成功'
    })
})

router.post('/post', (req, res) => {
    const body = req.body;

    res.send({
        code: 200, 
        data: body,
        msg: 'get 请求成功'
    })
})



module.exports = router