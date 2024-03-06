let div= document.getElementsByTagName('div')[0];

// console.log(div);
let ajax=new XMLHttpRequest();
ajax.open("GET","https://fakestoreapi.com/products");
ajax.send();
ajax.onload=()=>{
    let data=JSON.parse(ajax.response);
    data.forEach(element => {
        let section=document.createElement('section');
        div.appendChild(section);
         div.appendChild(section);
         console.log(section);
        section.innerHTML=`<img style="width:150px" src=${element.image}>
        <p id="a">id:${element.id}</p>
        <p id="b">Title:${element.title}</p>
        <p id="c">Category: ${element.category}</p>
        <p id="d">Price:${element.price}</p> 
         <button onclick="final(${element.id})">view</button>`;
        
    })
    
    function final(id){
         var idvalue=id;
        var selectitem={id:idvalue};
        sessionStorage.setItem("selectitem",JSON.stringif(selectitem));
        console.log(JSON.parse(sessionStorage.getItem("selectitem")));
       }
   }

    


function productId(id){
  var idvalue=id;
 var selectitem={id:idvalue};
 sessionStorage.setItem("selectitem",JSON.stringif(selectitem));
 console.log(JSON.parse(sessionStorage.getItem("selectitem")));
}