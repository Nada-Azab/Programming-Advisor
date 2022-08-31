button1 = document.getElementById("sub1");
button2 = document.getElementById("sub2");
button3 = document.getElementById("sub3");
button4 = document.getElementById("sub4");

button1.addEventListener('click', () => {
    let ans = confirm("Do you want to subscribe?");
    if (ans === true) {
        location.href = 'live.html';
    }
    else
        location.href = 'teachers.html';
});

button2.addEventListener('click', () => {
    let ans = confirm("Do you want to subscribe?");
    if (ans === true)
        location.href = 'live.html';
    else
        location.href = 'teachers.html';
});

button3.addEventListener('click', () => {
    let ans = confirm("Do you want to subscribe?");
    if (ans === true)
        location.href = 'live.html';
    else
        location.href = 'teachers.html';
});

button4.addEventListener('click', () => {
    let ans = confirm("Do you want to subscribe?");
    if (ans === true)
        location.href = 'live.html';
    else
        location.href = 'teachers.html';
});