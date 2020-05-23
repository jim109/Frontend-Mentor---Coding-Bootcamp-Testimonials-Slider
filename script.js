/* document.getElementById("next").onclick = function () {
  myfunction();
};
function myfunction() {
  document.getElementById("next").src = "You Click Me";
} */

/* document.getElementById("demo").onclick = function () {
  myFunction();
};

function myFunction() {
  document.getElementById("demo").innerHTML = "YO CLICKED ME!";
} */

/* function changeImagen() {
  var elemento = document.getElementById("demo");
  elemento.style.color = "red";
} */
function changeImagenNext() {
  var photo = document.getElementById("imgPhoto");
  var text = document.getElementById("content-text");
  photo.style.content = "url(./images/image-john.jpg)";
  text.innerHTML =
    "“ If you want to lay the best foundation <br>possible I’d recommend taking this<br> course. The depth the instructors go into <br>is incredible. I now feel so confident about <br>starting up as a professional developer. ” <br><br><strong>John Tarkpor</strong> <span>Junior Front-end Developer</span>";
}

function changeImagenPrev() {
  var photo = document.getElementById("imgPhoto");
  var text = document.getElementById("content-text");
  photo.style.content = "url(./images/image-tanya.jpg)";
  text.innerHTML =
    "“ I’ve been interested in coding for a while <br />but never taken the jump, until now. I<br />couldn’t recommend this course enough.<br />I’m now in the job of my dreams and so<br />excited about the future. ”<br /> <br /><strong>Tanya Sinclair</strong> <span>UX Engineer</span>";
}
