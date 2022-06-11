let is_empty = document.getElementById("emptyNote");

if (localStorage.length > 2)
{
    is_empty.style.display = "none";
}

if(localStorage.getItem("tindex") == null)
{
    localStorage.setItem("tindex", 0);
}

if(localStorage.getItem("nindex") == null)
{
    localStorage.setItem("nindex", 0);
}