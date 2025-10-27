document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    const nameRegex = /^[A-Za-z\s]+$/; 


    const firstname = document.getElementById("firstname").value.trim();
    if (firstname === "" || !nameRegex.test(firstname)) {
        document.getElementById("firstnameError").textContent = "Valid first name is required (letters only).";
        isValid = false;
    }

  
    const middlename = document.getElementById("middlename").value.trim();
    if (middlename === "" || !nameRegex.test(middlename)) {
        document.getElementById("middlenameError").textContent = "Valid middle name is required (letters only).";
        isValid = false;
    }

 
    const lastname = document.getElementById("lastname").value.trim();
    if (lastname === "" || !nameRegex.test(lastname)) {
        document.getElementById("lastnameError").textContent = "Valid last name is required (letters only).";
        isValid = false;
    }


    const batchInput = document.getElementById("batch");


    batchInput.addEventListener("input", function () {
        let val = this.value.toUpperCase(); // force uppercase
        val = val.replace(/^(\d{2})(-?)([A-Z]?)$/, (match, d, dash, l) => {
            return dash ? `${d}-${l}` : `${d}${l}`; 
    });
    this.value = val;
});


    const batch = batchInput.value.trim();
    const batchRegex = /^\d{2}-?[A-Z]$/; 
        if (!batchRegex.test(batch)) {
        document.getElementById("batchError").textContent = "Batch must be in format 33-H or 33H.";
        isValid = false;
    } else {
    document.getElementById("batchError").textContent = "";
    }

    const technology = document.getElementById("technology").value.trim();
    if (technology === "" || !nameRegex.test(technology)) {
        document.getElementById("technologyError").textContent = "Valid technology is required (letters only).";
        isValid = false;
    }

    const id = document.getElementById("id").value.trim();
    const idRegex = /^\d{4}-\d{2}-\d{3}$/;
    if (!idRegex.test(id)) {
        document.getElementById("idError").textContent = "ID must be in format YYYY-XX-XXX (e.g., 2023-33-247).";
        isValid = false;
    }


    const contact = document.getElementById("contactnumber").value.trim();
    const phoneRegex = /^(09\d{9}|\d{10,11})$/;
    if (!phoneRegex.test(contact)) {
        document.getElementById("contactError").textContent = "Enter a valid 10–11 digit contact number.";
        isValid = false;
    }

   
    if (isValid) {
        alert(" Form submitted successfully!");
    }
});