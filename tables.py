import sqlite3

conn = sqlite3.connect('project1.db')
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE Users(
user_id INTEGER PRIMARY KEY AUTOINCREMENT, 
username VARCHAR(255), 
email VARCHAR(255), 
password VARCHAR(255), 
balance DECIMAL(10,2))
''')

cursor.execute('''
CREATE TABLE Games(
game_id INTEGER PRIMARY KEY AUTOINCREMENT, 
title VARCHAR(255), 
dev_id INTEGER,
price DECIMAL(10,2), 
release_date TEXT, 
genre VARCHAR(100), 
FOREIGN KEY(dev_id) REFERENCES Developers(dev_id))
''')

cursor.execute('''
CREATE TABLE Developers(
dev_id INTEGER PRIMARY KEY AUTOINCREMENT, 
name VARCHAR(255),
email VARCHAR(255), 
company_name VARCHAR(255))
''')

cursor.execute('''
CREATE TABLE Purchases (
purchase_id INTEGER PRIMARY KEY AUTOINCREMENT, 
user_id INTEGER, 
game_id INTEGER,  
FOREIGN KEY(user_id) REFERENCES Users(user_id),
FOREIGN KEY(game_id) REFERENCES Games(game_id))
''')

cursor.execute('''
CREATE TABLE Library(
library_id INTEGER PRIMARY KEY AUTOINCREMENT, 
user_id INTEGER, 
game_id INTEGER, 
added_date TEXT, 
FOREIGN KEY(user_id) REFERENCES Users(user_id),
FOREIGN KEY(game_id) REFERENCES Games(game_id))
UNIQUE(user_id, game_id) 
''')

cursor.execute('''
INSERT INTO Users(username, email, password, balance) VALUES ('john_smither', 'johnsmith@gmail.com', 'mydog21', 0)
''')
cursor.execute('''
INSERT INTO Users(username, email, password, balance) VALUES ('gamerdude1', 'thegamerdude@gmail.com', 'xgamerdudex', 0)
''')
cursor.execute('''
INSERT INTO Users(username, email, password, balance) VALUES ('alexthegreat', 'alexmiller1998@gmail.com', 'ilovemygf', 0)
''')
cursor.execute('''
INSERT INTO Users(username, email, password, balance) VALUES ('2xlift', 'peterlift@gmail.com', 'adc123', 0)
''')

cursor.execute('''
INSERT INTO Developers(name, email, company_name) VALUES ('Riot', 'riotgames@gmail.com', 'Riot Games')
''')

dev_id_1 = cursor.lastrowid

cursor.execute('''
INSERT INTO Games(title, dev_id, price, release_date, genre)
VALUES ('League of Legends', ?, 0, '2009-10-27', 'MOBA')
''', (dev_id_1,))

cursor.execute('''
INSERT INTO Games(title, dev_id, price, release_date, genre)
VALUES ('Valorant', ?, 0, '2020-06-02', 'FPS')
''', (dev_id_1,))

cursor.execute('''
INSERT INTO Games(title, dev_id, price, release_date, genre)
VALUES ('TFT', ?, 0, '2019-06-26', 'Auto Battler')
''', (dev_id_1,))

cursor.execute('''
INSERT INTO Developers(name, email, company_name) VALUES ('Valve', 'Valve@gmail.com', 'Valve Corp')
''')
dev_id_2 = cursor.lastrowid

cursor.execute('''
INSERT INTO Games(title, dev_id, price, release_date, genre)
VALUES ('CSGO', ?, 10, '2012-08-21', 'FPS')
''', (dev_id_2,))

cursor.execute('''
INSERT INTO Games(title, dev_id, price, release_date, genre)
VALUES ('Portal', ?, 15, '2007-10-10', 'Puzzle')
''', (dev_id_2,))

cursor.execute('''
INSERT INTO Games(title, dev_id, price, release_date, genre)
VALUES ('Garry's Mod', ?, 10, '2006-11-29', 'Sandbox')
''', (dev_id_2,))

cursor.execute('''
INSERT INTO Developers(name, email, company_name) VALUES ('Rockstar', 'rockstar@gmail.com', 'Rockstar Games Inc')
''')
dev_id_3 = cursor.lastrowid

cursor.execute('''
INSERT INTO Games(title, dev_id, price, release_date, genre)
VALUES ('GTA V', ?, 30, '2013-09-17', 'Action Adventure')
''', (dev_id_3,))

cursor.execute('''
INSERT INTO Games(title, dev_id, price, release_date, genre)
VALUES ('Red Dead Redemption 2', ?, 60, '2018-10-26', 'Action Adventure')
''', (dev_id_3,))

cursor.execute('''
INSERT INTO Games(title, dev_id, price, release_date, genre)
VALUES ('L.A. Noire', ?, 20, '2011-11-08', 'Detective')
''', (dev_id_3,))





conn.commit()
conn.close()

