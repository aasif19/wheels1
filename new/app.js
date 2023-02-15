
 let card=document.querySelector(".card")
 let big2=document.getElementById("big2")
// let card2=document.querySelector("#card2")
// let card3=document.querySelector("#card3")

function scrollWin() {
  
    window.scrollBy(1500, 0);
    
  }
  function scrollback() {
  
    window.scrollBy(-1500, 0);
   
    
  }

  // card.forEach(element => {
  //   enlarge();
  // });

  function enlarge(){
    card.style.transform = "scale(1.4)";
  }

  function normal(){
    card.style.transform = "scale(1)";
  }
//   let arrowicon=document.querySelectorAll(".arrow");
//   let firstImage=card.querySelectorAll("img")[0];

// let firstImagewidth=firstImage.clientWidth +150;
//   arrowicon.forEach(btn => {
//     btn.addEventListener("click",()=>{
//      card.scrollLeft +=btn.id =="left"? -firstImagewidth : firstImagewidth;
//     })
//   });