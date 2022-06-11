let modal = document.querySelector("#exampleModal");
let btn = document.querySelector("#exampleModal #saveBtn");
let container = document.querySelector("#mycontainer");

function create(tindex, nindex)
{
    let is_empty = document.getElementById("emptyNote");
    is_empty.style.display = "none";
    //first part
    let div = document.createElement("div");

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let close = document.createElement("button");
    let b = document.createElement("b");

    div.classList.add("col-md-4");
    div1.classList = "card text-white bg-dark mb-3";
    div2.classList = "card-header d-inline-flex align-content-center justify-content-between";
    close.classList.add("btn-close");

    b.innerText = localStorage.getItem("t"+tindex);
    close.type = "button";
    close.setAttribute("data-bs-dismiss", "card");
    close.setAttribute("aria-label", "close");
    close.addEventListener("click", ()=>
    {
        close.parentNode.parentNode.parentNode.remove();
        localStorage.removeItem("t"+tindex);
        localStorage.removeItem("n"+nindex);
        if (localStorage.length == 2)
        {
            is_empty.style.display = "block";
        }
    })

    //second part
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let p = document.createElement("p");
    let editButton = document.createElement("button");

    div3.classList = "card-body text-white";
    p.classList.add("card-text");
    p.innerText = localStorage.getItem("n"+nindex);
    p.style.fontSize = "15px";
    editButton.classList = "btn btn-primary";
    editButton.innerText = "Edit";

    let text = document.createTextNode(localStorage.getItem("t"+tindex));
    div2.appendChild(text);
    div2.appendChild(close);
    div1.appendChild(div2);

    div3.appendChild(p);
    editButton.addEventListener("click", ()=>
    {
        document.getElementById("createBtn").click();
        document.querySelector("#exampleModal #form4Example1").value = text.textContent;
        document.querySelector("#exampleModal #form4Example2").value = p.innerText;
        btn.addEventListener("click", ()=>{
            text.textContent = document.querySelector("#exampleModal #form4Example1").value;
            p.innerText = document.querySelector("#exampleModal #form4Example1").value;
            div.remove();
            localStorage.removeItem("t"+tindex);
            localStorage.removeItem("n"+nindex);
            document.getElementById("closeBtn").click();
        });
    })
    div4.appendChild(editButton);
    div3.appendChild(div4);

    div1.appendChild(div3);
    div.appendChild(div1);
    container.appendChild(div);
}

btn.addEventListener("click", ()=>{
    let title = document.querySelector("#exampleModal #form4Example1");
    let note = document.querySelector("#exampleModal #form4Example2");
    let tindex = localStorage.getItem("tindex");
    let nindex = localStorage.getItem("nindex");
    if (title.value.length == 0)
    {
        title.value = "No Title";
    }
    if (note.value.length != 0)
    {
        localStorage.setItem("t"+tindex, title.value);
        localStorage.setItem("n"+nindex, note.value);
        create(tindex, nindex);
        tindex++;
        nindex++;
        localStorage.setItem("tindex", tindex);
        localStorage.setItem("nindex", nindex);
        title.value = "";
        note.value = "";
        document.getElementById("closeBtn").click();
    }else {
        note.classList.add("border-danger");
        note.addEventListener("click", ()=>{
            note.classList.remove("border-danger");
        })
    }
})

document.addEventListener("DOMContentLoaded", ()=>
{
    for (let index = 0; index < localStorage.getItem("tindex"); index++) {
        if (localStorage.getItem("t"+index))
        {
            create(index, index);
        }
    }
})