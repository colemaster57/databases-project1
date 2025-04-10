
INSERT INTO Users(username, email, password, balance) VALUES ('john_smither', 'johnsmith@gmail.com', 'mydog21', 0);
INSERT INTO Users(username, email, password, balance) VALUES ('gamerdude1', 'thegamerdude@gmail.com', 'xgamerdudex', 0);
INSERT INTO Users(username, email, password, balance) VALUES ('alexthegreat', 'alexmiller1998@gmail.com', 'ilovemygf', 0);
INSERT INTO Users(username, email, password, balance) VALUES ('2xlift', 'peterlift@gmail.com', 'adc123', 0);


INSERT INTO Developers(name, email, company_name) VALUES ('Riot', 'riotgames@gmail.com', 'Riot Games');
INSERT INTO Developers(name, email, company_name) VALUES ('Valve', 'Valve@gmail.com', 'Valve Corp');
INSERT INTO Developers(name, email, company_name) VALUES ('Rockstar', 'rockstar@gmail.com', 'Rockstar Games Inc');

--Games for Riot (dev_id = 1)
INSERT INTO Games(title, dev_id, price, release_date, genre) VALUES ('League of Legends', 1, 0, '2009-10-27', 'MOBA');
INSERT INTO Games(title, dev_id, price, release_date, genre) VALUES ('Valorant', 1, 0, '2020-06-02', 'FPS');
INSERT INTO Games(title, dev_id, price, release_date, genre) VALUES ('TFT', 1, 0, '2019-06-26', 'Auto Battler');

-- Games for Valve (dev_id = 2)
INSERT INTO Games(title, dev_id, price, release_date, genre) VALUES ('CSGO', 2, 10, '2012-08-21', 'FPS');
INSERT INTO Games(title, dev_id, price, release_date, genre) VALUES ('Portal', 2, 15, '2007-10-10', 'Puzzle');
INSERT INTO Games(title, dev_id, price, release_date, genre) VALUES ('Garry''s Mod', 2, 10, '2006-11-29', 'Sandbox');

-- Games for Rockstar (dev_id = 3)
INSERT INTO Games(title, dev_id, price, release_date, genre) VALUES ('GTA V', 3, 30, '2013-09-17', 'Action Adventure');
INSERT INTO Games(title, dev_id, price, release_date, genre) VALUES ('Red Dead Redemption 2', 3, 60, '2018-10-26', 'Action Adventure');
INSERT INTO Games(title, dev_id, price, release_date, genre) VALUES ('L.A. Noire', 3, 20, '2011-11-08', 'Detective');
