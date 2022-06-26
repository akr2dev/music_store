const express = require("express");
const app = express();
const db = require("./config/database");
const port = process.env.PORT || 3001;
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Welcome to music app");
})
//GET all songs
app.get("/api/songs", (req, res)=>{
    const query = "SELECT * from songs_tbl";
    db.query(query, (err, result)=>{
        if(!err){
            //console.log(result);
            res.json(result);
        }else {
            res.status(404).send("error fetching!");
        }
    })
})
//Get Song by id
app.get("/api/song/:id", (req, res)=>{
    const query = "SELECT * from songs_tbl";
    let id = req.params.id;
    console.log(id);
    db.query(query, (err, result)=>{
        if(!err){
            //console.log(result);
          const song =  result.find(val => val.id == id);
          if(song)
            res.json(song);
            else
                res.send("not found")
        }else {
            res.status(404).send("error fetching!");
        }
    })
})
//Create new Song
let songs = {};
app.post("/api/add/song", (req, res)=>{
    songs = req.body;
    const query = "INSERT INTO songs_tbl (song, artist, language) VALUES ?";
    const values = [
        [songs.song, songs.artist, songs.language]
    ];
    db.query(query, [values], (err, result) => {
        if (!err) {
            //console.log(result);
            res.json(req.body);
        } else {
            //console.log(err);
            res.status(403);
            res.send("song is not added, try again!");
        }
    })
})
// Update existing song
let newSong = {};
app.put("/api/song/:id", (req, res)=>{
   let id = req.params.id;
   newSong = req.body;
   const query = `UPDATE songs_tbl
                  SET song = ?,
                      artist = ?,
                      language = ?
                   WHERE id = ? `
    const {song, artist, language} = newSong;
    db.query(query, [song, artist, language, id], (err, result)=>{
        if(!err) {
            res.send("Updated successfully");
        } else {
            res.status(403);
            res.send("song is not updated, try again!");
        }
    })
})
// Delete existing song
app.delete("/api/song/:id", (req, res)=>{
    let id = req.params.id;
    const query = `DELETE FROM songs_tbl WHERE id=${id}`;
    db.query(query, (err, result)=>{
        if(!err){
            //console.log(result)
            res.send("Deleted Successfully")
        } else {
            res.send("Song not deleted")
        }
    })
})

app.listen(port, "0.0.0.0", ()=>{
    console.log("server running on port" + port )
})