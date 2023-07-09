// Mock data

const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandomBool(n) {
  const threashold = 1000;
  if (n > threashold) n = threashold;
  return Math.floor(Math.random() * threashold) % n === 0;
}

function getSuggestions(text) {
  var pre = "pre";
  var post = "post";
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }

  return new Promise((resolve, reject) => {
    const randomTimout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimout);
  });
}

(function () {
  const input = document.getElementById("search");
  const suggestionArea = document.getElementById("suggestion-area");
  const onFocus = () => {
    suggestionArea.style.display = "block";
  };

  const onChange = (e) => {
    processData(e.target.value);
  };

  const processData = async (value) => {
    if (!value) return;
    try {
      const resp = await getSuggestions(value);
      console.log(resp);
      if (resp.length > 0) {
        const item = document.createElement("ul");
        console.log({ item });

        resp.forEach((element) => {
          const listItem = document.createElement("li");
          listItem.style.cursor = "pointer";
          listItem.innerText = element;
          console.log({ listItem });
          item.appendChild(listItem);
        });
        suggestionArea.innerHTML = "";
        suggestionArea.appendChild(item);
      }
    } catch (error) {
      console.log({ error });
    }
  };
  const onBlur = (e) => {
    if (e.target == input || e.target == suggestionArea) {
      return;
    } else suggestionArea.style.display = "none";
  };

  const onClick = (e) => {
    const { value } = e.target;
    input.innerText = value;
    input.focus();
  };

  input.addEventListener("focus", onFocus);
  input.addEventListener("keyup", onChange);
  window.addEventListener("click", onBlur);
  suggestionArea.addEventListener("click", onClick);
})();
