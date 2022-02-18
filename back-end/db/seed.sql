\c dvd_db;

INSERT INTO dvd_tb 
    (title, image, release_date, runtime, director, is_favorite) 
VALUES
    ('Matrix', 'https://www.themoviedb.org/t/p/original/vybQQ7w7vGvF53IsGD0y0JSgIsA.jpg', 'March 31, 1999', 136, 'Lana Wachowski and Lilly Wachowski', TRUE),
    ('Matrix Reloaded', 'https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg', 'May 16, 2003 ', 138, 'Lana Wachowski and Lilly Wachowski', FALSE),
    ('Matrix Revolutions', 'https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/1723131/3751334/apieai9xx__67564.1625708773.jpg?c=2', 'October 27, 2003', 129, 'Lana Wachowski and Lilly Wachowski', FALSE),
    ('Wall-E', 'https://resizing.flixster.com/rhPHYS0MGJr1NnsewSSJqmjwseo=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2FkODNhNzI1LTRhOWItNDg0OC05ODcxLWM5NDlmMzVhZTYxYi53ZWJw', 'June 27, 2008', 97, 'Andrew Stanton', TRUE),
    ('Interstellar', 'https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg', 'October 26, 2014', 169, 'Christopher Nolan', TRUE),
    ('Sin City', 'https://m.media-amazon.com/images/M/MV5BODZmYjMwNzEtNzVhNC00ZTRmLTk2M2UtNzE1MTQ2ZDAxNjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg', 'April 1, 2005', 124, 'Frank Miller, Robert Rodriguez', TRUE),
    ('Captain Fantastic', 'https://www.brego.net/wp-content/uploads/captain-fantastic-poster-belgium-1008x1440.jpg', 'July 8, 2016', 118, 'Matt Ross', TRUE);
