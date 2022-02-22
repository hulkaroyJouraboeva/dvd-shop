\c dvd_db;

INSERT INTO dvd_tb 
    (name, image, release_date, runtime, director, is_favorite, description, price, rating, featured) 
VALUES
    ('Matrix', 'https://www.themoviedb.org/t/p/original/vybQQ7w7vGvF53IsGD0y0JSgIsA.jpg', 'March 31, 1999', 136, 'Lana Wachowski and Lilly Wachowski', TRUE, 'some description', 5, 4, TRUE),
    ('Matrix Reloaded', 'https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg', 'May 16, 2003 ', 138, 'Lana Wachowski and Lilly Wachowski', FALSE, 'some description', 5, 4, TRUE),
    ('Matrix Revolutions', 'https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/1723131/3751334/apieai9xx__67564.1625708773.jpg?c=2', 'October 27, 2003', 129, 'Lana Wachowski and Lilly Wachowski', FALSE, 'some description', 5, 4, TRUE),
    ('Wall-E', 'https://resizing.flixster.com/rhPHYS0MGJr1NnsewSSJqmjwseo=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2FkODNhNzI1LTRhOWItNDg0OC05ODcxLWM5NDlmMzVhZTYxYi53ZWJw', 'June 27, 2008', 97, 'Andrew Stanton', TRUE, 'some description', 5, 4, TRUE),
    ('Interstellar', 'https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg', 'October 26, 2014', 169, 'Christopher Nolan', TRUE, 'some description', 5, 4, TRUE),
    ('Sin City', 'https://m.media-amazon.com/images/M/MV5BODZmYjMwNzEtNzVhNC00ZTRmLTk2M2UtNzE1MTQ2ZDAxNjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg', 'April 1, 2005', 124, 'Frank Miller, Robert Rodriguez', TRUE, 'some description', 5, 4, TRUE),
    ('Captain Fantastic', 'https://www.brego.net/wp-content/uploads/captain-fantastic-poster-belgium-1008x1440.jpg', 'July 8, 2016', 118, 'Matt Ross', TRUE, 'some description', 5, 4, TRUE);

INSERT INTO reviews_tb 
    (dvd_id, reviewer, content, rating) 
VALUES
    (4, 'Hulkaroy', 'all time fave animation', 10),
    (4, 'Hulkaroy2', 'ironically realistic', 9),
    (6, 'Hulkaroy', 'love the format, pulled it off well', 9),
    (5, 'Hulkaroy', 'mindblowingly awesome, on the science of Kip Thorne, pretty cool', 8),
    (7, 'Hulkaroy', 'fun-fing-tastic, no based fr', 10),
    (1, 'Hulkaroy', 'really cool movie', 9),
    (3, 'Hulkaroy', 'Matrix 2 & 3 were just a blur, dont remember much tbh', 5);