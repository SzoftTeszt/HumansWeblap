console.log("helló")
url="http://172.16.16.148:5000/api/Humans"
console.log(url)
var data=[]
oszlopok=["name","age","address","job","hobby"]
xhttp = new XMLHttpRequest()


function getOnload(){
    console.log(xhttp.responseText)
    data=JSON.parse(xhttp.responseText)
    render();
}

function deleteOnload(){
    xhttp.open("get",url,true)
    xhttp.onload = getOnload
    xhttp.send()
}

function render(){
    container = document.getElementsByClassName("container")[0]
    container.innerHTML=""

    // fejléc kialakítása
    sor = document.createElement('div')
    sor.className="row"
    for (const oszlop of oszlopok) {
        cella = document.createElement('div')
        cella.className="col"
        cella.innerHTML=oszlop
        sor.appendChild(cella)
    }
    cella = document.createElement('div')
    cella.className="col"
    cella.innerHTML="Actions"
    sor.appendChild(cella)

    container.appendChild(sor)
    // fejléc vége
    for (const human of data) {
        sor = document.createElement('div')
        sor.className="row"
        sor.classList.add("my-2")
        for (const oszlop of oszlopok) {
            cella = document.createElement('div')
            cella.className="col"

            cella.innerHTML=human[oszlop]
            sor.appendChild(cella)
        }
        cella = document.createElement('div')
        cella.className="col"
        gomb = document.createElement("button")
        gomb.classList.add("btn")
        gomb.classList.add("btn-danger")
        gomb.innerHTML="Delete"
        gomb.onclick=function() { deleteHuman(human.id)}
        cella.appendChild(gomb)
        sor.appendChild(cella)

        container.appendChild(sor)
    }
}
function deleteHuman(id){
    console.log("delete",id)
    xhttp.open("delete",url+"/"+id,true)
    xhttp.setRequestHeader("Content-Type","application/json")
    // xhttp.setRequestHeader("Accept","application/json")
    xhttp.onload = deleteOnload
    xhttp.send()
}




// xhttp.onreadystatechange = function(){
//     if (xhttp.readyState==4 && xhttp.status==200){
        
//     }
// }



xhttp.open("get",url,true)
xhttp.onload = getOnload
// CRUD - post, get, update, delete 
xhttp.send()