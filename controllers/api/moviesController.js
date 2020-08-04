let db =  require("../../database/models");
let sequelize = db.sequelize;

let moviesController = {

list: function(req, res) {
    db.Movie.findAll().then(function(movies){
        for (let i = 0; i < movies.length; i++) {
            movies[i].setDataValue("endpoint", "/api/movies" + movies[i].id)
        }
        let respuesta = 
    {
            meta: {
                status: 200,
                total: movies.length,
                url: "/api/movies",
            },
            data: movies
    }
        res.send(respuesta)
    })
},

find: function(req, res) {
    db.Movie.findByPK(req.params.id).then(function(movies){
        res.json(movie)
    })
},

store: function(req, res) {
    db.Movie.create({
        title: req.body.title, 
        awards: req.body.awards,
        genre_id: req.body.genre_id,
        length: req.body.length,
        rating: req.body.rating,
    });
    res.send({
        status: 200
    })
},

update: function(req, res) {
    db.Movie.update({
        title: req.body.title, 
        awards: req.body.awards,
        genre_id: req.body.genre_id,
        length: req.body.length,
        rating: req.body.rating,
    }, {
        where: {
            id: req.params.id
        }
    });
    res.send({
        status: 200
    })

},

delete: function(req, res) {
    db.Movie.destroy({
        where: {
            id: req.params.id
        }
    })
}


}


module.exports = moviesController;
