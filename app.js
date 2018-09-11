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
        title: 'imooc 详情页',
        movie: {
           doctor:'何塞.帕迪利亚',
           country:"美国",
           title:"机械战警",
           year:2014,
           poster:"http://r3.ykimg.com/05160000530EEB63675839160D0B79D5",
           language:"英语",
           flash:"http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf",
           summary:"《机械战警》是由何塞·帕迪里亚执导，乔尔·金纳曼、塞缪尔·杰克逊、加里·奥德曼等主演的一部科幻电影，改编自1987年保罗·范霍文执导的同名电影。影片于2014年2月12日在美国上映，2014年2月28日在中国大陆上映。影片的故事背景与原版基本相同，故事设定在2028年的底特律，男主角亚历克斯·墨菲是一名正直的警察，被坏人安装在车上的炸弹炸成重伤，为了救他，OmniCorp公司将他改造成了生化机器人“机器战警”，代表着美国司法的未来。"
          }
    })
})

// admin page
app.get('/admin/movie', function(req, res) {
    res.render('admin',{
        title: 'imooc 后台录入页',
        movie: {
            title: '',
            doctor: '',
            country: '',
            year: '',
            poster: '',
            flash: '',
            summary: '',
            language: ''
        }
    })
})

// list page
app.get('/admin/list', function(req, res) {
    res.render('list',{
        title: 'imooc 列表项',
        movies: [{
        	_id:1,
            title: "机械战警",
            doctor: '何塞·帕迪里亚',
            country: '美国',
            year: 2014,
            poster: 'http://g4.ykimg.com/05160000530EEB63675839160D0B79D5',
            flash: 'http://player.youku.com/player.php/sid/XNjA2NDU2Nzk2/v.swf',
            summary: '简介：2028年，专事军火开发的机器人公司Omni Corp.生产了大量装备精良的机械战警，他们被投入到惩治犯罪等行动中，取得显著的效果。罪犯横行的底特律市，嫉恶如仇、正义感十足的警察亚历克斯·墨菲（乔尔·金纳曼 饰）遭到仇家暗算，身体受到毁灭性破坏。借助于Omni公司天才博士丹尼特·诺顿（加里·奥德曼 饰）最前沿...',
            language: '英语'
        }]
    })
})