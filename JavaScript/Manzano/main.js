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

    let actualExercise = ''
    exercises.forEach((e, index) => {
      switch (index) {
        case 0:
          createExercisesDiv('Exercícios da página 25 e 26', 1);
          actualExercise = ".exercises" + 1
          break
        case 13:
          createExercisesDiv('Exercícios da página 41 e 42', 2);
          actualExercise = ".exercises" + 2
          break
        default:
          break
      }

      let mainContent = document.querySelector(`${actualExercise}`);

      let btn = document.createElement("button");

      btn.innerHTML = e.texto;
      btn.setAttribute("onclick", `exercise${index + 1}()`);
      btn.setAttribute("class", `btn`);
      mainContent.appendChild(btn);
    });
  })
  .catch((error) => console.log(error));

function createExercisesDiv(textInside, param) {
  const boxExercises = document.querySelector(".exercises-box");
  const divExercises = document.createElement("div");

  divExercises.setAttribute("class", `exercises${param} exercises firstChildExercises`);
  const text = document.createElement("p");

  text.innerHTML = textInside;
  boxExercises.appendChild(divExercises);
  divExercises.appendChild(text);
}

export default addTextoBtn;