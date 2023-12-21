// import express dan routing
const express = require("express");
const router = require("./routes/api.js");

// Membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());
app.use(express.urlencoded());

// Menggunakan routing (router)
const router = require('./routes/api.js')
app.use(router);

// Mendefinisikan port.
app.listen(3000, () => {
    console.log('server running at http://127.0.0.1:3000');
});

// tugas
app.get("/students", (req, res) =>  {
    res.send("Menampilkan data student");
});
app.post("/students", (req, res) =>  {
    res.send("Menambahkan data student");
});
app.put("/students", (req, res) =>  {
    const {id} = req.params;
    res.send("Mengedit data student");
});
app.delete("/students", (req, res) =>  {
    const {id} = req.params;
    res.send("Menghapus data student");
});

