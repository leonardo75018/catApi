


let igm = document.querySelector("img")
// console.log(igm)


// fetch("https://api.thecatapi.com/v1/images/search")
// .then(res => res.json())
// .then(data => igm.src=data[0].url)


fetch("https://api.thecatapi.com/v1/images/search")
.then(res =>{
    if(res.ok){
        res.json().then(data => igm.src=data[0].url)
    }else{
        console.log("ERROR");
        document.getElementById("err").innerHTML = "ERROR 404"
    
        
    }
} )

