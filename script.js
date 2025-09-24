let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = ()=> {
    menuIcon.classList.toggle("fa.xmark");
    navbar.classList.toggle("active")
}
// scroll section
let sections = document.querySelector("section");
let navlinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop = 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href'=' + id + ']").classList.add("active");

            }

        )
        }
    })
}
menuIcon.classList.remove("fa.xmark");
navbar.classList.remove("active")
// validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let valid = true;
  
    // Get values
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
  
    // Regex patterns
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let mobilePattern = /^[0-9]{10,15}$/;
  
    // Clear old errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
  
    // Validation
    if (fullName === "") {
      document.getElementById("fullNameError").textContent = "Full name is required";
      valid = false;
    }
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        valid = false;
      }
    
      if (!mobile.match(mobilePattern)) {
        document.getElementById("mobileError").textContent = "Enter a valid mobile number 11 digits";
        valid = false;
      }
    
      if (subject === "") {
        document.getElementById("subjectError").textContent = "Subject is required";
        valid = false;
      }
    
      if (message.length < 10) {
        document.getElementById("messageError").textContent = "Message must be at least 10 characters";
        valid = false;
      }
    
      // If everything is valid
      if (valid) {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
      }
    });
    
  