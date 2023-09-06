
let k;
const check = document.querySelectorAll("img");
const options=["rock.jpeg","paper.jpeg","scissor.png"];
let data;
var user_count=0;
var computer_count=0;
check.forEach(checks=>checks.addEventListener("click",(e)=>{
      let a=document.getElementById("user_input");
      data = e.target.src;
      a.src=data
      k=checks.getAttribute("src")
      generate(options);
      document.getElementById("user_count").innerHTML="user Count = "+user_count;
      document.getElementById("computer_count").innerHTML="computer Count = "+computer_count;
}))


function generate(value){
   let computer_choice =value[ Math.floor(Math.random()*3)];
   let b = document.getElementById("mac_input").src=computer_choice;
   if(k=="rock.jpeg" && computer_choice=="scissor.png"){
      document.getElementById("tick").src="tick.png";
      user_count+=1;
   }
   else if(k=="paper.jpeg" && computer_choice=="rock.jpeg"){
      document.getElementById("tick").src="tick.png";
      user_count+=1;
   }
   else if(k=="scissor.png" && computer_choice=="paper.jpeg"){
      document.getElementById("tick").src="tick.png";
      user_count+=1;
   }
   else if (k==computer_choice){
      document.getElementById("tick").src="equal.png";
   }
   else{
      document.getElementById("tick").src="wrong.jpg";
      computer_count+=1;
   }
}



