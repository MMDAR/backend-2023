// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static create(data) {
    return new Promise((resolve, reject) => {
      const { nama, nim, email, jurusan } = data;
      const sql = "INSERT INTO students (nama, nim, email, jurusan, created_at, updated_at) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";

      db.query(sql, [nama, nim, email, jurusan], (err, results) => {
        if (err) {
          reject(err);
        } else {
          const insertedStudent = {
            id: results.insertId,
            nama,
            nim,
            email,
            jurusan,
            created_at: results.affectedRows > 0 ? new Date() : null,
            updated_at: results.affectedRows > 0 ? new Date() : null,
          };
          resolve(insertedStudent);
        }
      });
    });
  }

  static find(id) {
  return new Promise( ( resolve, reject) => {
  const sql = "SELECT * FROM students WHERE id"
  db.query( sql, id, (err, results) => {
  // destructing array
  const [student] = results;
  resolve( student );
});
});
};

  static async update(id, data) {
  await new Promise( ( resolve, reject) => {
  const sql = "UPDATE students SET ? WHERE id = ?";
  db.query( sql, [data, id], (err, results) => {
  resolve( results );
});
});
// mencari data yang baru diupdate
const student = await this. find( id );
return student;
};

static delete(id) {
  return new Promise((resolve, reject)=>{
    const sql = "Delete from students where id = ?";
    db.query(sql,id,(err,result)=>{
      resolve(result);
    });
  });
}
};




// export class Student
module.exports = Student;
