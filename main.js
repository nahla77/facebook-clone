//Select Audience//
const container = document.querySelector(".container1"),
      privacy = container.querySelector(".write-post .privacy"),
      arrowBack = container.querySelector(".audience .arrow-back");
      privacy.addEventListener("click", () => {
        container.classList.add("active");
      });
      arrowBack.addEventListener("click", () => {
        container.classList.remove("active");
      });
 


//create new post//

const popOutButton = document.getElementById("button")

const exitcontainer = document.getElementById("bg_container")
const bg_container = document.querySelector(".bg-popContainer")
// Add event listeners 

popOutButton.addEventListener("click", popOutNow);

document.addEventListener("mouseout", exitmouse);


function popOutNow(e) {
    e.preventDefault();

    document.querySelector(".bg-popContainer").classList.add ("active");

}


const cancelPop = document.getElementById("close");

cancelPop.addEventListener("click", CancelPopOut);

function CancelPopOut(e) {
    e.preventDefault(); 
    bg_container.style.display = "none";

}



function exitmouse(event) {


    if (event.clientY < 50 ){
        document.removeEventListener("mouseout", exitmouse);


        //show pop out now

        exitcontainer.style.display = "flex"




        }
}
