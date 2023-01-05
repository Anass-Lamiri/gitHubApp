
/* 
    making a web page that have an input field where the user will enter a user
    gitHub name and will be displayed in the user interface with the name of the
    repo and the link and the stars it has.
*/

let input = document.getElementById("input");
let submit = document.querySelector(".submit");

let userName = document.querySelector('.userName')
let link = document.querySelector('.link')
let stars = document.querySelector('.stars')

// make an api Request
submit.onclick = () => {
    let api = fetch('https://api.github.com/users/anass-lamiri/repos')
    api.then(
        data => data.json()    
    ).then(
        data => userName.innerHTML = data[0].name
    ).then(
        data => link.href = `https://github.com/anass-lamiri/gitHubApp`
    )
    .then(
        data => stars.innerHTML = `Stars: ${data[0].stargazers_count}`
    )
}
















