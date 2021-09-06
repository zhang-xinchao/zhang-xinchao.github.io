const pointer = document.getElementsByClassName("pointer")[0];
const stopwatch = document.getElementsByClassName("stopwatch")[0];

stopwatch.addEventListener("mouseover", e => {
    pointer.classList.add("visible");
});

stopwatch.addEventListener("mouseout", e => {
    pointer.classList.remove("visible");
});

stopwatch.addEventListener("mousemove", e => {
    pointer.style.top = e.clientY;
    pointer.style.left = e.clientX;

});
