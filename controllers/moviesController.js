let db =  require("../database/models");

let moviesController = {
list: function(req, res) {
    db.Movie.findAll().then(function(movies){
        res.render("listOfMovies", {movies: movies})
    })
},

detail: function(req, res) {
    db.Movie.findByPK(req.params.id).then(function(movies){
        res.render("moviesDetails", {movies: movies})
    })
},

new: function(req, res) {
    db.Movie.findAll({
        limit: 5,
        order: [ 
            ["release_date", "DESC"]
        ],
    }).then(function(movies){
        res.render("moviesNew", {movies: movies})
    })
},

top: function(req, res) {
    db.Movie.findAll({
       where: {
           rating:{[db.Sequelize.Op.gte]: 8}
       }
    }).then(function(movies){
        res.render("moviesTop", {movies: movies})
    })
},

search: function(req, res) {
    db.Movie.findAll({
        where: {
            title: {
                [db.Sequelize.substring] : req.query.text,
            }
        }
    .then(function(movies){
        res.render("movieSearch", {movies: movies})
    })
})},
};

module.exports = moviesController;
