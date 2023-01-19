### How to run 

1. Run `npm install`
2. import db file
3. Run `npm start`

### api routes
| Route                 | HTTP Method | Description                                                                                           |
|------------------------|-------------|-------------------------------------------------------------------------------------------------------|
| `/api/songs`           | GET         | Retrieves a list of all songs.                                                                        |
| `/api/song/:id`        | GET         | Retrieves a specific song by its id.                                                                 |
| `/api/add/song`        | POST        | Adds a new song to the database with the following JSON structure: {song, artist, language}           |
| `/api/song/:id`        | PUT         | Updates an existing song in the database with the following JSON structure: {song, artist, language} |
| `/api/song/:id`        | DELETE      | Deletes an existing song in the database.                                                            |
