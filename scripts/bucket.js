// On clicking remove button the item should be removed from DOM as well as localstorage.

let coffeeArr = JSON.parse(localStorage.getItem("coffee"));
displayIt(coffeeArr);

let bucketArr = JSON.parse(localStorage.getItem("bucket"));



function displayIt(data){
    data.forEach(function(ele,i){
        
        let total = document.getElementById('total_amount');
        total.innerText = ele.price;
        

        let bucket = document.getElementById("bucket");
        
        let small = document.createElement("div");
        let image = document.createElement("img");
        image.src = ele.image;
        
        let title = document.createElement("p");
        title.innerText = ele.title;
        
        let price = document.createElement("p");
        price.innerText = ele.price;
        
        let desc = document.createElement("p");
        desc.innerText = ele.description;
        
        let button1 = document.createElement("button");
        button1.setAttribute("id","remove_coffee");
        button1.innerText = "Remove"
        button1.style.cursor = "pointer";
        button1.style.color = "red";
        button1.addEventListener("click",function(){
            Removeit(ele,i);
        })

        let button2 = document.createElement("button");
        button2.setAttribute("id","confirm_checkout");
        button2.innerText = "Cheakout"
        button2.style.cursor = "pointer";
        button2.style.color = "green";
        button2.addEventListener("click",function(){
            Cheakitout(ele);
        })
        
        small.append(image,title,price,desc,button1,button2);
        bucket.append(small);
       })
   }

  function Removeit(ele,i){
      coffeeArr.splice(i,1);
    //   bucketArr.push(ele);
      localStorage.setItem("coffee",JSON.stringify(coffeeArr));
      window.location.reload();
  }

  function  Cheakitout(ele){
      window.location.href = "checkout.html";
  }