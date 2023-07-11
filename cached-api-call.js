function cachedApiCall(time) {
  const cached = {};
  return async (url, config = {}) => {
    const keyUrl = `${url}${JSON.stringify(config)}`;
    if (!cached[keyUrl] || cached[keyUrl].entry < Date.now()) {
      // new api call
      console.log("Calling New call")
      try {
        let res = await fetch(url, config);
        res = await res.json();
        cached[keyUrl] = { value: res, entry: Date.now() + time };
      } catch (error) {
        console.log(error);
      }
    }
    return cached[keyUrl].value;
  };
}

const time = 2000;
const url = "https://jsonplaceholder.typicode.com/todos";
const apiCall = cachedApiCall(time);
apiCall(url, {}).then((res) => console.log("1 ",res));
setTimeout(function () {
  apiCall(url, {}).then((res) => console.log("2 ",res));
}, time - 1000);
setTimeout(function () {
  apiCall(url, {}).then((res) => console.log("3 ",res));
}, time + 1000);
