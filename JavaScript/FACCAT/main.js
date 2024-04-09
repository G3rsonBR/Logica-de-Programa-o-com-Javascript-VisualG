const jsonDatas = [];
const addTextoBtn = [];
const exercises = [];

fetch("exercises.json")
  .then((resp) => resp.json())
  .then((data) => {
    jsonDatas.push(data.exercises);

    jsonDatas.forEach((e) => {
      addTextoBtn.push(
        e.forEach((el) => {
          addTextoBtn.push(el);
        })
      );
    });
    // Se uma função existir, adicione ela ao array
    addTextoBtn.forEach((e, index) => {
      let functionName = "exercise" + (index + 1);
      if (typeof window[functionName] === "function") {
        exercises.push({
          id: index + 1,
          texto: e,
          func: window[functionName],
        });
        console.log("A função " + functionName + " existe.");
      }
    });

    exercises.forEach((e, index) => {
      let mainContent = document.querySelector(".exercises-box");
      let btn = document.createElement("button");

      btn.innerHTML = e.texto;
      btn.setAttribute("onclick", `exercise${index + 1}()`);
      btn.setAttribute("class", `btn`);
      mainContent.appendChild(btn);
    });
  })
  .catch((error) => console.log(error));

export default addTextoBtn;