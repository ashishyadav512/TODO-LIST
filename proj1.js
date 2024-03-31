let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    item.appendChild(delbtn);

    ul.appendChild(item);
    inp.value = "";
   
    // ye jo input kr k then input box ko empty krne k liye  jisse screen clear ho jae ok 
})
let delbtns  = document.querySelectorAll(".delete");
for(delbtn of delbtns){
    delbtn.addEventListener("click",function(){

        let per  =this.parentElement;
        console.log(per);
        per.remove();
       

    });

}

 //event deligation 
 ul.addEventListener("click",function(event){
    // console.log("button clicker");
    // console.log(event.target);
    console.dir(event.target.nodeName);
  });


 

//for deletimg alll in one time then use all ok 