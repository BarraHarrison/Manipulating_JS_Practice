// Scripts
document.addEventListener("DOMContentLoaded", function(){
    // storing the user input into JS
    // validating the user information
    // add event listener to the submit button
    // create a new pair of elements
    // console.log to see inputs and errors

    let shippingForm = document.getElementById("shipping-form");
    
    shippingForm.addEventListener("submit", function(e) { // e just stands for "event"
        e.preventDefault(); // this prevents the default behaviour when the submit button is pressed
        let formData = new FormData(shippingForm);
        console.log(formData);

        let hasErrors = false;

        // JS Variables
        // let firstName = formData.get("firstName");
        // console.log(firstName);
        // let lastName = formData.get("lastName");
        // console.log(lastName);
        // let userAge = formData.get("userAge");
        // console.log(userAge);
        // let cityName = formData.get("cityName");
        // console.log(cityName);
        // let userEmail = formData.get("userEmail");
        // console.log(userEmail);

        // access the form elements with e.target and elements array
        let firstName = e.target.elements["firstName"].value;
        let lastName = e.target.elements["lastName"].value;
        let userAge = e.target.elements["userAge"].value;
        let cityName = e.target.elements["cityName"].value;
        let userEmail = e.target.elements["userEmail"].value;

        // console.log(firstName);
        // console.log(lastName);
        // console.log(userAge);
        // console.log(cityName);
        // console.log(userEmail);

        

        let errors = verifyFormData(firstName, lastName, userAge, cityName, userEmail);
        if(errors.length > 0) {
            hasErrors = true;
            for (let i = 0; i < errors.length; i++){
                switch (errors[i]) {
                        case firstName:
                        shippingForm.firstName.classList.add("input-error");
                        break;
                        case lastName:
                        shippingForm.lastName.classList.add("input-error");
                        break;
                        case userAge:
                        shippingForm.userAge.classList.add("input-error");
                        break;
                        case cityName:
                        shippingForm.cityName.classList.add("input-error");
                        break;
                        case userEmail:
                        shippingForm.userEmail.classList.add("input-error");
                        break;
                        default:
                        return;
                }
            }
            
        };

        shippingForm.addEventListener("input", function(e){
            console.log("input detected");
            e.target.elements
        })

    });
});



function verifyFormData(firstName, lastName, userAge, cityName, userEmail) {
    // validate the information
    let errors = [];
    
    if(firstName.length > 10 || firstName === " ") {
        errors.push(firstName);
        // return an error message
    };
    if(lastName.length > 10 || lastName === " ") {
        errors.push(lastName);
        // return an error message
    };
    if(userAge === "" ||isNaN(userAge)) {
        errors.push(userAge);
        // return an error message
    };
    if(cityName.length > 10) {
        // return an error message
    };
    if(userEmail === " ") {
        errors.push(userEmail);
    }
    return errors;
};


function resetFormErrors(shippingForm){
    let formElements = shippingForm.addEventListener("input", function(e){
        console.log("input detected");
    })
}

// if(hasErrors) {
//     resetFormErrors(shippingForm);
// } else {

// }