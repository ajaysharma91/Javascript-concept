window.localStorageWithTimeout = {
  setItem: function (key, value, expiryTime) {
    const tempStorage = {
      value,
      expiryTime: Date.now() + expiryTime,
    };
    localStorage.setItem(key, JSON.stringify(tempStorage));
  },
  getItem: function (key) {
    const result = JSON.parse(localStorage.getItem(key));
    if (result.expiryTime <= Date.now()) {
      localStorage.removeItem(key);
      return null;
    }
    return result.value;
  },
  removeItem: function (key) {
    localStorage.removeItem(key);
  },
  clear: function () {
    localStorage.clear();
  },
};

localStorageWithTimeout.setItem("token", "1234566", 7000);

setTimeout(function(){
    console.log(localStorageWithTimeout.getItem("token"))
},6000)
