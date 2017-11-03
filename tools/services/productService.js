import request from './request';

let baseURL = '';

export let findAll = (values) => {
  let qs = '';
  // if (values) {
  //   qs = Object.keys(values).map(key => {
  //     return encodeURIComponent(key) + '=' + encodeURIComponent(values[key]);
  //   }).join('&');
  //   qs = '?' + qs;
  // }

  if (values) {
    qs = Object.keys(values).map(key => {
      return encodeURIComponent(values[key]);
    });
  }
  return request({url: baseURL + '/api/courses' + qs})
    .then(data => data = JSON.parse(data));
};

export let findById = (id) => {
  return request({url: baseURL + 'api/course/' + id})
    .then(data => data = JSON.parse(data));
};

export let findAllAuthors = (values) => {
  let qs = '';

  if (values) {
    qs = Object.keys(values).map(key => {
      return encodeURIComponent(values[key]);
    });
  }
  return request({url: baseURL + '/api/authors' + qs})
    .then(data => data = JSON.parse(data));
};

export let saveCourse = (values) => {
  // console.log(values);
  let qs = '';
  let id = values.id;
  if (values) {
    qs = Object.keys(values).map(key => {
      return encodeURIComponent(key) + '/' + encodeURIComponent(values[key]);
    }).join('/');
    qs = qs;
  }

  return request({url: baseURL + '/api/saveCourse/' + qs})
    .then(
      data => data = JSON.parse(data));
};
