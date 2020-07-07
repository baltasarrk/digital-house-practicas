SELECT * FROM actors;
-- Gunn

SELECT title, awards FROM movies;
-- Parque

SELECT * FROM movies WHERE title="Titanic";
-- 320

SELECT * FROM series WHERE title = "Person of Interest";
-- 4

SELECT season_id FROM episodes WHERE number = 2;
-- 46

SELECT * FROM movies WHERE release_date BETWEEN "1999.10.01" AND "2004.11.30";
-- rey

SELECT * FROM movies WHERE title LIKE "%a";
-- hotel

SELECT COUNT(*) FROM actors WHERE first_name="Jim";
-- 3

SELECT SUM(awards) FROM movies WHERE title="La Guerra De Las Galaxias";
-- 3

SELECT movies.title FROM actors INNER JOIN movies ON movies.id = favorite_movie_id WHERE actors.first_name = "Leonardo" AND actors.last_name="Di Caprio";
-- de

SELECT * FROM actors INNER JOIN movies ON movies.id = favorite_movie_id WHERE actors.rating = 2.3 ORDER BY movies.id;
-- Titanic

SELECT * FROM series INNER JOIN genres ON genres.id = genre_id;
-- Fantasia

SELECT * FROM movies INNER JOIN genres ON genre_id = genres.id WHERE genres.name = "Animacion";
-- Intensamente

SELECT * FROM actors INNER JOIN actor_movie ON actors.id = actor_movie.actor_id INNER JOIN movies ON movies.id = actor_movie.movie_id WHERE movies.title = "Parque Jurásico";
-- Dern

SELECT title, rating from movies INNER JOIN genres ON genres.id = movies.genre_id WHERE rating BETWEEN 1 AND 4;
-- Mi

SELECT genres.name, AVG(length) FROM movies INNER JOIN genres ON genres.id = movies.genre_id GROUP BY genres.name;
-- Infantiles

SELECT * FROM actors INNER JOIN actor_movie ON actors.id = actor_movie.actor_id GROUP BY actors.last_name;



