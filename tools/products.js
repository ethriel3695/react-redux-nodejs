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

// let findAll = (req, res, next) => {
//   console.log('here too');
//   let pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 12;
//   let page = req.query.page ? parseInt(req.query.page) : 1;
//   let search = req.query.search;
//   let min = req.query.min;
//   let max = req.query.max;
//   let whereParts = [];
//   let values = [];

//   if (search) {
//     values.push(escape(search));
//     whereParts.push('course.title || course.watchhref || course.authorId ~* $' + values.length);
//   }

//   if (min) {
//     values.push(parseFloat(min));
//     whereParts.push('course.length >= $' + values.length);
//   }

//   if (max) {
//     values.push(parseFloat(max));
//     whereParts.push('course.length <= $' + values.length);
//   }

//   let where = whereParts.length > 0 ? ('WHERE ' + whereParts.join(' AND ')) : '';

//   let countSQL = 'SELECT COUNT(*) from course INNER JOIN author ON course.authorId = author.Id ' + where;

//   let sql = 'SELECT course.id, course.title, course.length, course.watchhref, course.programmingcategory, author.firstname ' +
//   'FROM course INNER JOIN author on course.authorId = author.id ' + where +
//   ' ORDER BY course.title LIMIT $' + (values.length + 1) + ' OFFSET $' + (values.length + 2);

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
  ' WHERE course.Id = $1';

  db.query(sql, [id])
    .then(product => res.json(product[0]))
    .catch(next);
};

let findAllAuthors = (req, res, next) => {
  let sql = 'SELECT author.id, author.firstname, author.lastname ' +
  'FROM author' +
  ' ORDER BY author.id';

  db.query(sql)
    .then(products => {
      return res.json({'authors': products});
    })
    .catch(next);
};

let saveCourse = (req, res, next) => {
  let id = req.params.id;
  console.log(req.params.id);
  console.log(req.params.title);
  let sql = `UPDATE course SET title = ${req.params.title}, authorid = ${req.params.authorid}
  , category = ${req.params.programmingcategory}, length = ${req.params.length}
  WHERE course.Id = $1;`;

  db.query(sql, [id])
    .then(product => {
      return res.json({'course': product});
    })
    .catch(next);
};

exports.findAll = findAll;
exports.findById = findById;
exports.findAllAuthors = findAllAuthors;
exports.saveCourse = saveCourse;
