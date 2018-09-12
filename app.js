var express = require('express');
var port = process.env.PORT || 3000;
var path = require('path');
var mongoose = require('mongoose');
var _ = require('underscore');
mongoose.connect('mongodb://localhost/imooc',{ useNewUrlParser: true });
var Movie = require('./models/movie.js');
var app = express();
app.set('views', './views/pages');
app.set('view engine', 'jade')
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
 
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname,'static')))  //静态文件的路径
app.listen(port);
console.log('immooc started on port' + port);

// index page
app.get('/', function(req, res) {
    Movie.fetch(function(err, movies) {
        if(err) {
            console.log(err)
        }
        res.render('index',{
            title: 'imooc 首页',
            movies: movies
        })
    })
})

// detail page
app.get('/movie/:id', function(req, res) {
    var id = req.params.id;
    Movie.findById(id, function(err, movie) {
        if(err) {
            console.log(err);
        }
        res.render('detail',{
            title: movie.title,
            movie: movie
        })
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
// admin update movie
app.get('admin/update/:id',function (req, res) {
    var id = req.params.id;
    if(id) {
        Movie.findById(id, function(err, movie) {
            res.render('admin', {
              title: 'immoc后台更新'  ,
              movie: movie
            })
        })
    }
})
// admin post movie
app.post('/admin/movie/new',function(req, res) {
    var id = req.body.movie._id;
    var movieObj = req.body.movie;
    var _movie = null;
    if(id !== 'undefined'){
        Movie.findById(id, function(err, movie) {
            if(err) {
                console.log(err)
            }
            _movie = _.extend(movie, movieObj)
            _movie.save(function(err, movie) {
                if(err) {
                    console.log(err);
                }
                res.redirect('/movie/'+movie._id)
            })
        })
    }else {
        _movie = new Movie({
            doctor: movieObj.doctor,
            title: movieObj.title,
            country: movieObj.country,
            language: movieObj.language,
            year: movieObj.year,
            poster: movieObj.poster,
            summary: movieObj.summary,
            flash: movieObj.flash
        })
        _movie.save(function(err, movie) {
            if(err) {
                console.log(err);
            }
            res.redirect('/movie/'+movie._id)
        })
    }
})

// list page
app.get('/admin/list', function(req, res) {
    Movie.fetch(function(err, movies) {
        if(err) {
            console.log(err)
        }
        res.render('/admin/list',{
            title: 'imooc 列表',
            movies: movies
        })
    })
})