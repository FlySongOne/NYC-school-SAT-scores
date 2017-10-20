

CREATE TABLE IF NOT EXISTS scores(
  id SERIAL PRIMARY KEY,
  school_name TEXT,
  num_taken VARCHAR(255),
  reading VARCHAR(255),
  math VARCHAR(255),
  writing VARCHAR(255),
  dbn VARCHAR(255)
);
