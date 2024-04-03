console.log("helló")
url="http://172.16.16.148:5000/api/Humans"
console.log(url)
data=[]
oszlopok=["name","age","address","job","hobby"]

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
    container.appendChild(sor)
    // fejléc vége
    for (const human of data) {
        sor = document.createElement('div')
        sor.className="row"
        for (const oszlop of oszlopok) {
            cella = document.createElement('div')
            cella.className="col"
            cella.innerHTML=human[oszlop]
            sor.appendChild(cella)
        }
        container.appendChild(sor)
    }
}


xhttp = new XMLHttpRequest()

// xhttp.onreadystatechange = function(){
//     if (xhttp.readyState==4 && xhttp.status==200){
        
//     }
// }

xhttp.onload = function(){
    data=JSON.parse(xhttp.responseText)
    render();
}

xhttp.open("get",url,true)
// CRUD - post, get, update, delete 
xhttp.send()