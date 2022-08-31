var person = [
    {
        email:"gehad@gmail.com",
        password: "123456789"
    },
    {
        email: "nour@gmail.com",
        password: "987654321" 
    },
    {
        email: "ali@gmail.com",
        password: "147258369"
    }
]

let users = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addUser = function (ev) {
    ev.preventDefault();  //to stop the form submitting
    let user = {
        id: Date.now(),
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email2').value,
        password: document.getElementById('pass2').value
    }
    users.push(user);
    //for display purposes only
    console.warn('added', { users });
    //saving to localStorage
    localStorage.setItem('myUsers', JSON.stringify(users));
    location.href = "Menu.html";

}

document.getElementById('sendData').addEventListener('click', addUser);

// //for log in ->verfiy the email and password
// function ver() {
    
//     for (let i = 0; i < users.length; i++) {
//         if ((users[i].email === document.getElementById('email1').value) && (users[i].password === document.getElementById('pass1').value)) {
//             console.log("login successfully");
//             location.href = "Menu.html";
//             return;
//         }
//     }
//     alert("incorrect username or password");
// }
// var emailInput = document.getElementById("email2");
// var passInput = document.getElementById("pass2");
// var info = JSON.parse(localStorage.getItem("info"));

// if(info){
//     emailInput.value = info.e_mail;
//     passInput.value = info.password;
// }


// document
//     .getElementById("reg-form")
//     .addEventListener("submit", function(event){
//         event.preventDefault();

//         var e_mail = emailInput.value.trim();
//         var password = passInput.value.trim();
        
//         if(!e_mail || !password){
//             return;
//         }

//         var info ={
//             e_mail : e_mail,
//             password : password
//         };

//         let person;

//         if(localStorage.getItem('person')){
//                 person = JSON.parse(localStorage.getItem('person', JSON.stringify(person)));
//             }
//             else{
//                     person =[];
//                 }
//                 person.push('info', JSON.stringify(info));
//                 localStorage.setItem("person", JSON.stringify(person));
//             });

    function getinfo() {
        var emaillogin = document.getElementById("email1").value
        var passlogin = document.getElementById("pass1").value

        for( i=0 ; i<person.length; i++){
            if((emaillogin==person[i].email) && (passlogin==person[i].password)){
                alert("login succesfully");
                window.location.assign("Menu.html");
                return
            }
        }
            alert("incorrect username or password");
        }


////// register && login
const labels = document.querySelectorAll('.form-control label');

function next() {
    document.getElementById('log').style.display = "none";
    document.getElementById('regis').style.display = "block";
}
function prev() {
    document.getElementById('regis').style.display = "none";
    document.getElementById('log').style.display = "block";
}


// animation
labels.forEach(function (label) {
    label.innerHTML = label.innerText.split("").map(function (letter, idx) {
        return `<span style="transition-delay:${idx * 50}ms;"> ${letter} </span>`;
    }).join('');
    
});









