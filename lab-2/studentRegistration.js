function registerStudent() {
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let gender = document.getElementById("gender").value;
            let dob = document.getElementById("dob").value;
            let course = document.getElementById("course").value;
            let msg = document.getElementById("message");

            if (name === "" || email === "" || phone === "" || gender === "" || dob === "" || course === "") {
                alert("❗ Please fill all fields");
                return;
            }

            let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!regex.test(email)) {
                alert("Invalid Email address");
                return;
            }

            // if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(email)){
            //     alert("Enter Valid email address");
            //     return
            // }

            if (!/^[0-9]{10}$/.test(phone)) {
                alert("❗ Enter a valid 10-digit phone number");
                return;
            }

    msg.style.display = "block";

    setTimeout(() => { msg.style.display = "none"; }, 3000);

    document.getElementById("regForm").reset();
}