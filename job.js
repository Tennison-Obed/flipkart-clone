// <!-- Number input -->
// <label>Previous Company</label><br>
// <input type="number" placeholder="Enter your age"><br><br>



// camelCase


const experienceInput = document.querySelector("#ex-input");
const formEle = document.querySelector("form");
const submitButton = document.querySelector("button");

const label = document.createElement("label");
const preCompanyInput = document.createElement("input");

label.innerText = "Previous Company"


experienceInput.addEventListener("input",function (event) {
    if(event.target.value > 0){
        // appendChild
        experienceInput.parentNode.insertBefore(preCompanyInput, event.target.nextSibling);  
        experienceInput.parentNode.insertBefore(label, event.target.nextSibling);  
    }
    if(event.target.value<1){
        label.remove();
        preCompanyInput.remove();
    }
    
})


document.querySelector("button").addEventListener("click",function(e){
    e.target.parentNode.remove();

})






// ### Features:
// Task: Build a Mini DOM App

// 1. Input field
// 2. Button
// 3. List output
// 4. Add item on click
// 5. Clear input
// 6. Optional: Remove item on click