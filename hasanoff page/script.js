const btn = document.querySelector("#register")



btn.addEventListener("click", () => {
 const firstname = prompt("Enter your firstname:", "")
 const secondname = prompt("Enter your secondname:", "")
 const age = prompt("Enter your age:", "")


swal({
 title: "Are you sure?",
 text: "That you've completed the registration by the correct way?",
 icon: "warning",
 buttons: true,
 dangerMode: true,
})
.then((willDelete) => {
 if (willDelete) {
   swal("Success", {
     icon: "success",
     text: "Your data  send succesfully!"
   });
 } else {
   swal("Refresh the site and reclick the button");
 }
 
});

})
