// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    const data = {
      message: "Menampilkkan semua students",
      data: students,
    };

    res.json(data);
  }

 async store(req, res) {
     /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    // code here
    try {
        const newStudent = await Student.create(req.body);

        const data = {
            message: "Menambahkan data student",
            data: newStudent,
        };

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Terjadi error pada server" });
    }
}

  async update(req, res) {
    const { id } = req.params;
    const student = await Student.find( id );
if (student) {
  // melakukan update data
    const student = await Student.update(id, req.body);
    const data = {
      message: 'Mengedit data students',
      data: student,
    };
    res.status( 200 ). json(data );
}
  else {
    const data = {
    message: 'Student not found',
  };
  res.status(404 ). json(data );
}



    // const { nama } = req.body;

    // const data = {
    //   message: `Mengedit student id ${id}, nama ${nama}`,
    //   data: [],
    // };

    // res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    const data = {
      message: `Menghapus student id ${id}`,
      data: [],
    };

    res.json(data);
  }

  // kode lain sebelumnya 
  async destroy(req, res) {
    const {id} = req.params;
    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: 'Menghapus data students',
      };
res.status(200).json(data);
} else {
  const data = {
    message: 'Student not found',
    };
res.status(404).json(data);
}

}
async show(req, res) {
    const {id} = req.params;
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: 'Menampilkan detail dari data Students',
        data: student,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: 'Data Student tidak ditemukan',
      };
      res.status(404).json(data);
    }
  }
};

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;