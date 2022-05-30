// Add the coffee to local storage with key "coffee"

const url = 'https://masai-mock-api.herokuapp.com/coffee/menu';


function getData(){
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        append(res.menu.data);
        console.log(res.menu.data);
    })
    // .catch(error){
        //     console.log(err)
    // }
}

// async function getData(){
    
//     try{

//         let res = await fetch(url);
    
//         let menu = await res.json();
    
//         console.log(menu); 
//     } catch (err){
//         console.log(error);
//     }
// }

getData();

let coffeeArr = JSON.parse(localStorage.getItem("coffee")) || [];

let bucket_count = document.createElement('coffee_count');
// bucket_count.innerText = .length;

function append(menu){
     menu.forEach(function(ele){


         let container = document.getElementById("menu");

         let small = document.createElement("div");
         let image = document.createElement("img");
         image.src = ele.image;
         
         let title = document.createElement("p");
         title.innerText = ele.title;

         let price = document.createElement("p");
         price.innerText = ele.price;

         let desc = document.createElement("p");
         desc.innerText = ele.description;

         let button = document.createElement("button");
         button.setAttribute("id","add_to_bucket");
         button.innerText = "Add to Bucket";
         button.style.cursor = "pointer";
         button.style.color = "purple";
         button.addEventListener("click",function(){
             addit(ele);
         })
         
         small.append(image,title,price,desc,button);
         container.append(small);
        })
    }

 function addit(ele){
     coffeeArr.push(ele);
     localStorage.setItem("coffee",JSON.stringify(coffeeArr));
     alert('Your order is successfully added');
    //   window.location.href = "bucket.html";
}
