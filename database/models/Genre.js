module.exports = function(sequelize, dataTypes) {

    let alias = "Genre";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        name: {
            type: dataTypes.STRING
        },
       
        ranking: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: "genres",
        timestamps: false
    }

    let genre = sequelize.define(alias, cols, config);

    genre.associate = function(models) {
        genre.hasMany(models.Movie, {
            as: "movies",
            foreignKey: "genre_id"
        })
    }

    return genre;
}