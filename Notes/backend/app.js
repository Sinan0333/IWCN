const express = require('express');
const cors = require('cors')
require('dotenv').config();
const { createNote,getAllNotes,deleteNoteById } = require('./database');
const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
      origin: ["http://localhost:5173"],
      methods: ["GET", "POST","DELETE"],
      credentials: true,
    })
);


app.post('/create', async(req, res) => {
   try {

    const {date,heading,note} = req.body
    await createNote(date,heading,note)

    const result = await getAllNotes()
    res.json({data:result})

   } catch (error) {
    res.status(500).json({error:"Internal server error"})
   }
});

app.get('/get_notes', async(req, res) => {
    try {

        const result = await getAllNotes()
        res.json({data:result})
        
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
});


app.delete('/delete/:id', async(req, res) => {
   try {

    const {id} = req.params
    await deleteNoteById(id)
    
    const result = await getAllNotes()
    res.json({data:result})

   } catch (error) {
    res.status(500).json({error:"Internal server error"})
   }
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });