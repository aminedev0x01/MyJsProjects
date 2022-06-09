let container = document.querySelector(".container ul");
let btn = document.querySelector(".input-group button");
let box = document.querySelector(".input-group input");

document.addEventListener("DOMContentLoaded", ()=> {
    for(let i = 0; i < localStorage.length; i++)
    {
        if (localStorage.getItem(i) != null)
        {
            let li = document.createElement("li");
            let span = document.createElement("span");
            let text = document.createTextNode("\u00D7");
            span.setAttribute("class", "badge bg-primary rounded-pill");
            span.classList.add("remove");
            span.appendChild(text);
            li.innerText = localStorage.getItem(i);
            span.addEventListener("click", ()=>{
                container.removeChild(li);
                let item = li.id.split("todo")[1];
                localStorage.removeItem(item);
            })
            li.addEventListener("click", () => {
                if (li.style.textDecoration == "line-through")
                {
                    li.style.textDecoration = "none";
                    span.appendChild(text);
                }
                else {
                    li.style.textDecoration = "line-through";
                    span.removeChild(text);
                }
            });
            li.setAttribute("id", "todo"+(localStorage.length-1));
            li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
            li.appendChild(span);
            container.appendChild(li);
        }
    }
})

btn.addEventListener("click", ()=>
{
    if (box.value.length > 3)
    {
        localStorage.setItem(localStorage.length, box.value);
        box.value = "";
        let li = document.createElement("li");
        let span = document.createElement("span");
        let text = document.createTextNode("\u00D7");
        span.setAttribute("class", "badge bg-primary rounded-pill");
        span.classList.add("remove");
        span.appendChild(text);
        li.innerText = localStorage.getItem(localStorage.length - 1);
        span.addEventListener("click", ()=>{
            container.removeChild(li);
            let item = li.id.split("todo")[1];
            localStorage.removeItem(item);
        })
        li.addEventListener("click", () => {
            if (li.style.textDecoration == "line-through")
            {
                li.style.textDecoration = "none";
                span.appendChild(text);
            }
            else {
                li.style.textDecoration = "line-through";
                span.removeChild(text);
            }
        });
        li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
        li.setAttribute("id", "todo"+(localStorage.length-1));
        li.appendChild(span);
        container.appendChild(li);
    }
})