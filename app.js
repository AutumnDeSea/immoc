var express = require('express');
var port = process.env.PORT || 3000;
var path = require('path')
var app = express();
app.set('views', './views/pages');
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname,'static')))  //静态文件的路径
app.listen(port);
console.log('immooc started on port' + port);

// index page
app.get('/', function(req, res) {
    res.render('index',{
        title: 'imooc 首页',
        movies: [{
            title: '机械战警',
            _id: 1,
            poster: "http://g4.ykimg.com/05160000530EEB63675839160D0B79D5"
        }, {
            title: '机械战警',
            _id: 2,
            poster: "http://g4.ykimg.com/05160000530EEB63675839160D0B79D5"
        }, {
            title: '机械战警',
            _id: 3,
            poster: "http://g4.ykimg.com/05160000530EEB63675839160D0B79D5"
        }, {
            title: '机械战警',
            _id: 4,
            poster: "http://g4.ykimg.com/05160000530EEB63675839160D0B79D5"
        }, {
            title: '机械战警',
            _id: 5,
            poster: "http://g4.ykimg.com/05160000530EEB63675839160D0B79D5"
        }, {
            title: '机械战警',
            _id: 6,
            poster: "http://g4.ykimg.com/05160000530EEB63675839160D0B79D5"
        }]
    })
})

// detail page
app.get('/movie/:id', function(req, res) {
    res.render('detail',{
        title: 'imooc 详情页'
    })
})

// admin page
app.get('/admin/movie', function(req, res) {
    res.render('admin',{
        title: 'imooc 后台录入页'
    })
})

// list page
app.get('/admin/list', function(req, res) {
    res.render('list',{
        title: 'imooc 列表项'
    })
})