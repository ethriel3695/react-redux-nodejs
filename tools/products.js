'use strict';

let db = require('./postgresAssist');

// let escape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

let findAll = (req, res, next) => {
  let countSQL = 'SELECT COUNT(*) from course INNER JOIN author ON course.authorId = author.Id;';

  let sql = 'SELECT course.id, course.title, course.length, course.watchhref, course.programmingcategory, author.firstname, author.lastname ' +
  'FROM course INNER JOIN author on course.authorId = author.id ' +
  ' ORDER BY course.title;';

  db.query(countSQL)
    .then(result => {
      let total = parseInt(result[0].count);

      db.query(sql)
        .then(products => {
          return res.json({'total': total, 'products': products});
        })
        .catch(next);
    })
    .catch(next);
};

//   db.query(countSQL, values)
//     .then(result => {
//       let total = parseInt(result[0].count);

//       db.query(sql, values.concat([pageSize, ((page - 1) * pageSize)]))
//         .then(products => {
//           return res.json({'pageSize': pageSize, 'page': page, 'total': total, 'products': products});
//         })
//           .catch(next);
//     })
//       .catch(next);
// };

let findById = (req, res, next) => {
  let id = req.params.id;

  let sql = 'SELECT course.id, course.title, course.length, course.watchhref, course.programmingcategory, author.firstname ' +
  'FROM course INNER JOIN author on course.authorId = author.id' +
  ' WHERE course.Id = $1;';

  db.query(sql, [id])
    .then(product => res.json(product[0]))
    .catch(next);
};

let findAllAuthors = (req, res, next) => {
  let sql = 'SELECT author.id, author.firstname, author.lastname ' +
  'FROM author' +
  ' ORDER BY author.id;';

  db.query(sql)
    .then(products => {
      return res.json({'authors': products});
    })
    .catch(next);
};

let saveCourse = (req, res, next) => {
  let id = req.params.id;

  let sql = `UPDATE course SET title = '${req.params.title}', authorid = ${req.params.authorid}
  , programmingcategory = '${req.params.programmingcategory}', length = '${req.params.length}'
  WHERE course.Id = ${id};`;

  let selectSQL = `SELECT course.id, course.title, course.length, course.watchhref, course.programmingcategory, author.firstname
  FROM course JOIN author on course.authorId = author.id WHERE course.Id = ${id};`;

    // db.query(sql)
    // .then(result => {
    //   return res.json({'course': result});
    // }).catch(next);

    db.query(sql)
    .then(result => {
      let total = 1;

      db.query(selectSQL)
        .then(products => {
          return res.json({'total': total, 'course': products});
        })
        .catch(next);
    })
    .catch(next);

    // db.query(selectSQL)
    // .then(product => {
    //   console.log(product)
    //   return res.json({'course': product[0]});
    // }).catch(next);


  // db.query(sql, [id])
  //     // console.log('Update Complete')
  //     .then(product => {
  //       console.log(product)
  //       return res.json({'course': product});
  //     })
  //     .catch(next);

  // db.query(selectSQL)
  //   .then(product => {
  //     console.log(product)
  //     return res.json({'course': product});
  //   })
  //     .catch(next);
};

exports.findAll = findAll;
exports.findById = findById;
exports.findAllAuthors = findAllAuthors;
exports.saveCourse = saveCourse;
