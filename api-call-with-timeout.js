const fetchWithTimout = (url, time) => {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;
    let timer = null;
    fetch(url, { signal })
      .then((resp) => {
        resp
          .json()
          .then((r) => {
            clearTimeout(timer);
            resolve(r);
          })
          .catch((err) => {
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
    timer = setTimeout(() => {
      controller.abort();
    }, time);
  });
};

fetchWithTimout("https://jsonplaceholder.typicode.com/todos", 100)
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
  });
