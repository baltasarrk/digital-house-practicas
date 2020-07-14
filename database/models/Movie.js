module.exports = function(sequelize, dataTypes) {

    let alias = "Movie";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        title: {
            type: dataTypes.STRING
        },
        created_at: {
            type: dataTypes.DATE
        }, 
        rating: {
            type: dataTypes.DOUBLE
        },
        awards: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        },
    };

    let config = {
        tableName: "movies",
        timestamps: false,
        underscore: true,
    }

    let Movie = sequelize.define(alias, cols, config);

    Movie.associate = function(models) {
        Movie.belongsTo(models.Genre, {
            as: "genre",
            foreignKey: "genre_id"
        });
        Movie.belongsToMany(models.Actor, {
            as: "actors",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false,
    });
}

    return Movie;
}