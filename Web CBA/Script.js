document.querySelector("#firstname").value
document.querySelectorAll("#registration_Form input")
NodeList(8) [input#fname.form-control,
input#lname.form-control,
input#phone.form-control,
input#email.form-control,
input#gender.form-control,
input#profession.form-control,
input#address.form-control,
input#submit.form-control]
Array.form(document.querySelectorAll("registrationFrom input"))
.reduce((acc, input) => ({...acc,[input.id]: input.value}), {});
{}
Array.form(document.querySelectorAll("registrationForm input"))
.reduce((acc, input) => ({...acc,[input.id]: input.value}), {});
{fname: "", lname:"", phone:"", email: "", } 
{gender:""} {profession:""} {address:""} {submit:""}