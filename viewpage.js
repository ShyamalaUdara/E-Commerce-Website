document.addEventListener("DOMContentLoaded",function(){

      
    let image=document.getElementById('img');
  let content=document.getElementById('details');
  let getedval=JSON.parse(sessionStorage.getItem("selectitem"));
 
  console.log(getedval);
  if(!getedval){
   window.alert("no items found....");
  }
  var url=`https://fakestoreapi.com/products/${getedval.id}`;
  console.log(url);
  var ajax=new  XMLHttpRequest();
  ajax.open("GET",url);
  ajax.send();
  ajax.onload= function(){
   if (ajax.status===200){
        let data=JSON.parse(ajax.response);
        console.log(data);
        image.innerHTML=`<img  style="width:300px" id="ima"src=${data.image}>`;
        content.innerHTML=`<p id="title">Title:${data.title}</p>
         <p id="category">Category:${data.category}</p><p id="price">Price:&nbsp${data.price}</p>
         <p id="dec">Description:</p><p id="description">${data.description}</p>
         <a href="cartpage.html"><button id="btn1" onclick="send(${data.id})">Add to cart</button></a>
         <a href="Buypage.html"><button id="btn3" onclick="send(${data.id})">Buy</button></a>
         <a href="index.html"><button id="btn2">Back to Home page</button></a>`;

   }

     
  }
 });
  function send(id){
   var idvalue=id;
  var caritem={id:idvalue};
  sessionStorage.setItem("caritem",JSON.stringify(caritem));
 
 }