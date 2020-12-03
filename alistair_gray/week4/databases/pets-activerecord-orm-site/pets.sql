-- This file will create the structure of the 'pets' table, and will also insert some test (aka 'seed') data into it, i.e. insert some rows into the pets table

-- nukes the table so we can easily re-initialise our database by running 'sqlite3 database.db < pets.sql'
DROP TABLE IF EXISTS pets;

CREATE TABLE pets (
  id INTEGER PRIMARY KEY AUTOINCREMENT, --take care of the IDs for us

  name TEXT,
  species TEXT,
  description TEXT,
  roundness INTEGER,
  alive BOOLEAN,
  age INTEGER,
  image_url TEXT,
  owner_id INTEGER
  -- Foreign Key: This is the primary key of the owners table
  -- This MUST be named with the singular of the other table
  -- name, followed by '_id'
);

INSERT INTO pets (name, species, description, roundness, alive, age, image_url, owner_id)
  VALUES(
    'Ruby',
    'Canine',
    'The best dog',
    3, -- not very round
    1, --TRUE
    4,
    'https://images.unsplash.com/photo-1519138130-85a949fdcb4f?ixlib=rb-0.3.5&s=f340825cae4a33e3034dd209eb8c7355&w=1000&q=80',
    2 -- owner_id 2 => Luke (WARNING: hardcoded IDs will break in rails)
  );

INSERT INTO pets (name, species, description, roundness, alive, age, image_url, owner_id)
  VALUES(
    'Clarence Boddicker',
    'Human',
    'Baddie',
    8, -- very round
    0, -- FALSE
    50,
    'https://vignette.wikia.nocookie.net/robocop/images/d/dc/ClarenceBoddicker.jpg/revision/latest/scale-to-width-down/350?cb=20160816063931',
    1 -- owner_id 1 => Zara (WARNING: hardcoded IDs will break in rails)
  );

INSERT INTO pets (name, species, description, roundness, alive, age, image_url, owner_id)
  VALUES(
    'Kermit',
    'Desert Frog',
    'Extremely round, also quite sneaky',
    9, -- very round
    1, -- FALSE
    3,
    'https://i.pinimg.com/originals/40/8c/91/408c91147f943416d6fc3755a3a45f14.jpg',
    2 -- owner_id 2 => Luke (WARNING: hardcoded IDs will break in rails)
  );
