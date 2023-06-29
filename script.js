let search = document.getElementById("search");
let btn1 = document.getElementById("btn-1");
let count = 0;
btn1.addEventListener("click", () => {
  let text = search.value;
  if (text !== "") {
    let sct2 = document.createElement("div");
    document.body.appendChild(sct2);
    sct2.setAttribute("class", "sct-2");
    let check = document.createElement("div");
    sct2.appendChild(check);
    check.setAttribute("class", "check");
    let p = document.createElement("p");
    sct2.appendChild(p);
    p.setAttribute("tag", "p");
    p.innerText = text;
    search.value = "";
    let btnX = document.createElement("div");
    sct2.appendChild(btnX);
    btnX.setAttribute("class", "btnX");
    btnX.innerText = "X";
    count++;
    btnX.addEventListener("click", () => {
      sct2.remove();
      count--;
    });
    let i = 0;
    let color = ''
    p.addEventListener("click", () => {
      if (i == 0) {
        color = sct2.style.backgroundColor
        p.style.textDecoration = "line-through";
        check.innerHTML = "<span style = color:grey >&#10003;</span>";
        sct2.style.backgroundColor = "rgba(137, 137, 137, 0.934)";
        i++;
      } else {
        p.style.textDecoration = "none";
        check.innerHTML = "";
        sct2.style.backgroundColor = color;
        i--;
      }
    });
  } else {
    alert("Empty");
  }
});
