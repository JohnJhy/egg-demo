const util = {
  request(url, data = {}, cb) {
    const csrftoken = Cookies.get('csrfToken');
    if (csrftoken) {
      return axios
        .post(url, Object.assign({ _csrf: csrftoken }, data))
        .then(res => {
          cb && cb(res);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
};