import request from './request';

let baseURL = '';

export let findAll = (values) => {
  let qs = '';
  if (values) {
    qs = Object.keys(values).map(key => {
      return encodeURIComponent(values[key]);
    });
  }
  return request({url: baseURL + '/api/courses' + qs})
    .then(data => parseDataAsJSON(data));
};

export let findById = (id) => {
  return request({url: baseURL + 'api/course/' + id})
    .then(data => parseDataAsJSON(data));
};

export let findAllAuthors = (values) => {
  let qs = '';

  if (values) {
    qs = Object.keys(values).map(key => {
      return encodeURIComponent(values[key]);
    });
  }
  return request({url: baseURL + '/api/authors' + qs})
    .then(data => parseDataAsJSON(data));
};

export let saveCourse = (values) => {
  let qs = '';

  if (values) {
    qs = Object.keys(values).map(key => {
      return encodeURIComponent(key) + '/' + encodeURIComponent(values[key]);
    }).join('/');
  }

  return request({url: baseURL + `/api/saveCourse/` + qs})
    .then(data => parseDataAsJSON(data));
};

export let deleteCourse = (values) => {
  let qs = '';

  if (values) {
    qs = Object.keys(values).map(key => {
      return encodeURIComponent(key) + '/' + encodeURIComponent(values[key]);
    }).join('/');
  }

  return request({url: baseURL + `/api/deleteCourse/` + qs})
    .then(data => parseDataAsJSON(data));
};

let parseDataAsJSON = (data) => {
  return JSON.parse(data);
};
