// TODO 3: Import data students dari folder data/students.js
// code here
const fruits = require('./data');

// Membuat Class StudentController
// TODO 4: Tampilkan data students
// code here
class StudentController {
    index(req, res) {
      const data = {
        message : "Menampilkan semua Students" ,
        data : [],
      };
      res.json(data);
    }
  
    // TODO 5: Tambahkan data students
    // code here
    store(req, res) {
      const {nama} = req.body;

      const data = {
        message: ('Menambahkan data Student: ${nama}')
      };
      res.json(data);
    }
  
    update(req, res) {
      const {id} = req.params;
      const {nama} = req.body;

      const data = {
        message: ('Mengedit Student id: ${id}, nama ${nama}'),
        data: [],
      };
      res.json(data);
    }
  
    // TODO 7: Hapus data students
    // code here
    destroy(req, res) {
      const {id} = req.params;

      const data = {
        message: 'menghapus student id ${id}',
        data: [],
      };
      res.json(data);
    }
  }
  
  // Membuat object StudentController
  const object = new StudentController();
  
  // Export object StudentController
  module.exports = object;