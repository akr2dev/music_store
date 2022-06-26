### How to run 

1. Run `npm install`
2. import db file
3. Run `npm start`

### api routes
- /api/songs => **GET** 
- /api/song/:id => **GET** by id
- /api/add/song => **POST** 
  - JSON {song, artist, language}
- /api/song/:id => **PUT**  
  - JSON {song, artist, language}
- /api/song/:id => **Delete**