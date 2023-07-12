const obj = {
  a: 1,
  b: {
    c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: {
      i: 5,
      j: 6,
    },
  },
};

//   const filter = (s) => typeof s === 'string'
const filter = (n) => n >= 0;

function deepFiltering(obj, inF) {
  for (let key in obj) {
    let val = obj[key];
    if (val && typeof val === "object" && !Array.isArray(val)) {
      deepFiltering(val, inF);
    } else {
      if (inF(val) === false) {
        delete obj[key];
      }
    }
    console.log(key, obj[key]);
    if (JSON.stringify(val) === "{}") {
      delete obj[key];
    }
  }
}

deepFiltering(obj, filter);
console.log(obj);
