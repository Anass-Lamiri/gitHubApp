
/* 
    making a web page that have an input field where the user will enter a user
    gitHub name and will be displayed in the user interface with the name of the
    repo and the link and the stars it has.
*/

let input = document.getElementById("input");
let submit = document.querySelector(".submit");

input.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        e.preventDefault();
        submit.click()
    }
})

let userName = document.querySelector('.userName')
let link = document.querySelector('.link')
let stars = document.querySelector('.stars')
let show_data = document.querySelector('.show-data')

// make an api Request
submit.onclick = () => {
    if (input.value === "") {
        show_data.innerHTML = "<span class='error'>Please Write the Correct Github Username.</span>";
    } else {
        show_data.innerHTML = "loading...";
        fetch(`https://api.github.com/users/${input.value}/repos`)
        .then(res => res.json())
        .then(
            res => { 
                show_data.innerHTML = "";
                res.forEach(x => {
                    // create the main Div
                    let mainDiv = document.createElement('div')
                    mainDiv.className = 'result';
                    
                    // create the P tag that have the name of the repo
                    let p = document.createElement('p');
                    let pText = document.createTextNode(x.name);
                    p.className = 'userName'
                    p.appendChild(pText)
                    mainDiv.appendChild(p)
                    
                    // create the a tag that have the url of repo
                    let a = document.createElement('a')
                    let aText = document.createTextNode('Link')
                    a.className = 'link'
                    a.href = x.html_url
                    a.setAttribute('target', '_blank')
                    a.appendChild(aText)
                    
                    // create the p tag that have the starts count of the repo
                    let p2 = document.createElement('p')
                    let pText2 = document.createTextNode(`Stars : ${x.stargazers_count}`)
                    p2.className = 'stars'
                    p2.appendChild(pText2)
                    
                    // the span have the a and p2 tags
                    let span = document.createElement('span')
                    span.appendChild(p2)
                    span.appendChild(a)
                    mainDiv.appendChild(span)
                    
                    // append to the show-data div
                    show_data.appendChild(mainDiv)
                });
            }
        )
        input.value = "";
    }

}









