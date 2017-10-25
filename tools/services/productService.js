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
   console.log(values);
   qs = Object.keys(values).map(key => {
    return encodeURIComponent(values[key]);
      });
 }
  // return request({url: baseURL + '/courses' + qs})
  //   .then(data => data = JSON.parse(data));
  return request({url: baseURL + '/products' + qs})
    .then(data => data = JSON.parse(console.log(data)));
};

export let findById = () => {
  return request({url: baseURL + '/course/' + id})
    .then(data => data = JSON.parse(data));
};
