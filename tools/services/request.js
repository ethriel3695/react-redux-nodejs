export default opts => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    console.log(opts.url);
    if (opts.url.includes('save')) {
      xhr.open(opts.method || 'POST', opts.url);
    } else {
      xhr.open(opts.method || 'GET', opts.url);
    }
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        rejectRequest(reject, xhr);
      }
    };
    xhr.onerror = () => {
      rejectRequest(reject, xhr);
    };
    if (opts.headers) {
      Object.keys(opts.headers).forEach(key => {
        xhr.setRequestHeader(key, opts.headers[key]);
      });
    }

    xhr.send(opts.data);
  });
};
function rejectRequest (reject, xhr) {
  reject({
    status: this.status,
    statusText: xhr.statusText,
  });
}
