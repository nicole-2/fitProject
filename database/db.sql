
-- TABLE USER
-- all pasword wil be encrypted using SHA1
  CREATE TABLE users (
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
  );

  ALTER TABLE users
    ADD PRIMARY KEY (id);

  ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;


  INSERT INTO users (id, username, password, fullname) 
    VALUES (1, 'Juan', 'juan1234', 'Juan Pérez');

-- LINKS TABLE
CREATE TABLE Clientes (
  id INT(11) NOT NULL,
  fullname VARCHAR(150) NOT NULL,
  ci INT(10) NOT NULL,
  telephone Int(10),
  homeAddress VARCHAR(255),
  exercise VARCHAR(255),
  attendanceTime Character(255),
  hour time,
  payment DECIMAL(4,2),
  user_id INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);

ALTER TABLE Clientes
  ADD PRIMARY KEY (id);

ALTER TABLE Clientes
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

--LinksCoaches TABLE
CREATE TABLE Entrenadores (
  id INT(11) NOT NULL,
  fullname VARCHAR(150) NOT NULL,
  ci INT(10) NOT NULL,
  telephone Int(10),
  homeAddress VARCHAR(255),
  specialty VARCHAR(255),
  workTime Character(255),
  startTime time,
  user_id INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_userCoach FOREIGN KEY(user_id) REFERENCES users(id)
);

ALTER TABLE Entrenadores
  ADD PRIMARY KEY (id);

ALTER TABLE Entrenadores
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

--LinksInventory TABLE
CREATE TABLE Maquinas (
  id INT(11) NOT NULL,
  machineName VARCHAR(150) NOT NULL,
  category VARCHAR(10) ,
  quantity Int(10),
  machineWeight INT (10),
  user_id INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_userInventory FOREIGN KEY(user_id) REFERENCES users(id)
);

ALTER TABLE Maquinas
  ADD PRIMARY KEY (id);

ALTER TABLE Maquinas
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

  
--LinksDiets TABLE
CREATE TABLE Dietas (
  id INT(11) NOT NULL,
  dietName VARCHAR(150) NOT NULL,
  dairyProduct VARCHAR(20) ,
  fruits VARCHAR(20) ,
  vegetables VARCHAR(20) ,
  slices Int(10),
  numberTimes INT (10),
  user_id INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_userDiet FOREIGN KEY(user_id) REFERENCES users(id)
);

ALTER TABLE Dietas
  ADD PRIMARY KEY (id);

ALTER TABLE Dietas
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;