'use strict';

let db = require('./postgresAssist');

let escape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

let findAll = (req, res, next) => {
  let pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 12;
  let page = req.query.page ? parseInt(req.query.page) : 1;
  let search = req.query.search;
  let min = req.query.min;
  let max = req.query.max;
  let whereParts = [];
  let values = [];

  if (search) {
    values.push(escape(search));
    whereParts.push('course.name || course.tags || course.authorId ~* $' + values.length);
  }

  if (min) {
    values.push(parseFloat(min));
    whereParts.push('course.timeLength >= $' + values.length);
  }

  if (max) {
    values.push(parseFloat(max));
    whereParts.push('course.timeLength <= $' + values.length);
  }

  let where = whereParts.length > 0 ? ('WHERE ' + whereParts.join(' AND ')) : '';

  let countSQL = 'SELECT COUNT(*) from course INNER JOIN author ON course.authorId = author.Id ' + where;

  let sql = 'SELECT coruse.id, course.name, course.timeLength, course.tags, author.name ' +
  'FROM course INNER JOIN author on course.authorId = author.id ' + where +
  ' ORDER BY course.name LIMIT $' + (values.length + 1) + ' OFFSET $' + (values.length + 2);

  db.query(countSql, values)
    .then(result => {
      let total = parseInt(result[0].count);
      db.query(sql, values.concat([pageSize, ((page - 1) * pageSize)]))
        .then(products => {
          return res.json({'pageSize': pageSize, 'page': page, 'total': total, 'products': products});
        })
          .catch(next);
    })
      .catch(next);
};

let findById = (req, res, next) => {
  let id = req.params.id;

  let sql = 'SELECT coruse.id, course.name, course.timeLength, course.tags, author.name ' +
  'FROM course INNER JOIN author on course.authorId = author.id' +
  ' WHERE course.Id = $1';

  db.query(sql, [id])
    .then(product => res.json(product[0]))
    .catch(next);
};

exports.findAll = findAll;
exports.findById = findById;
