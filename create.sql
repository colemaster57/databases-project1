PRAGMA foreign_keys = ON;
-- user_id => username, email, password, balance
DROP TABLE IF EXISTS Users;
CREATE TABLE Users(
  user_id INTEGER PRIMARY KEY AUTOINCREMENT, 
  username VARCHAR(255), 
  email VARCHAR(255), 
  password VARCHAR(255), 
  balance DECIMAL(10,2)
);
-- dev_id => name, email, company name
DROP TABLE IF EXISTS Developers;
CREATE TABLE Developers(
  dev_id INTEGER PRIMARY KEY AUTOINCREMENT, 
  name VARCHAR(255),
  email VARCHAR(255), 
  company_name VARCHAR(255)
);
-- game_id => title, dev_id, price, release date, genre
DROP TABLE IF EXISTS Games;
CREATE TABLE Games(
  game_id INTEGER PRIMARY KEY AUTOINCREMENT, 
  title VARCHAR(255), 
  dev_id INTEGER,
  price DECIMAL(10,2), 
  release_date TEXT, 
  genre VARCHAR(100), 
  FOREIGN KEY(dev_id) REFERENCES Developers(dev_id)
);
--purchase_id => userid gameid
DROP TABLE IF EXISTS Purchases;
CREATE TABLE Purchases (
  purchase_id INTEGER PRIMARY KEY AUTOINCREMENT, 
  user_id INTEGER, 
  game_id INTEGER,  
  FOREIGN KEY(user_id) REFERENCES Users(user_id),
  FOREIGN KEY(game_id) REFERENCES Games(game_id)
);
--library_id => user_id, game_id
DROP TABLE IF EXISTS Library;
CREATE TABLE Library(
  library_id INTEGER PRIMARY KEY AUTOINCREMENT, 
  user_id INTEGER, 
  game_id INTEGER, 
  added_date TEXT, 
  FOREIGN KEY(user_id) REFERENCES Users(user_id),
  FOREIGN KEY(game_id) REFERENCES Games(game_id)
);