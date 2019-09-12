function validate1() {
			let sname = document.forms['register1']['sname'].value
			let fname = document.forms['register1']['fname'].value
			let mname = document.forms['register1']['mname'].value
			let country = document.forms['register1']['country'].value
			let state = document.forms['register1']['state'].value
			let city = document.forms['register1']['city'].value
			let email = document.forms['register1']['email'].value
			let phone = document.forms['register1']['phone'].value
			let uname = document.forms['register1']['uname'].value
			let password = document.forms['register1']['password'].value
			let cpassword = document.forms['register1']['cpassword'].value

			var alpha = /^[A-Za-z]+$/;
			var numbers = /^[0-9]+$/;
			var validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			
			if(sname == ""  || fname == "" || email == "" || phone == "" || uname == "" || password == "" ||cpassword =="") {
				document.getElementById('errorMsg1').innerHTML = "Alert: Please Fill In all Fields marked with (*)";
				return false;
			}
			else if(!(sname.match(alpha))){
				document.getElementById('errorMsg1').innerHTML = "Error: Surname Must Be Alphabets Only";
				return false;
			}
			else if (!(fname.match(alpha))) {
				document.getElementById('errorMsg1').innerHTML = "Error: Firstname Must Be Alphabets Only";
				return false;
			}
			else if(!(email.match(validemail))){
				document.getElementById('errorMsg1').innerHTML = "Error: Please Enter a valid email address";
				return false;
			}
			else if(!(phone.match(numbers))){
				document.getElementById('errorMsg1').innerHTML = "Error: Please Enter a valid Pnone Number";
				return false;
			}
			else if(password.length < 8){
				document.getElementById('errorMsg1').innerHTML = "Password Must Not Be Less Than 8 Characters";
				return false;
			}
			else if(password != cpassword){
				document.getElementById('errorMsg1').innerHTML = "Password Mismatch, Please Check Passwords And Try Again";
				return false;
			}
			else {
				document.getElementById('errorMsg2').innerHTML = "";
				$(".frmpage1").hide();
				$(".one").css("background-color", "grey");
				$(".frmpage2").show();
				$(".two").css("background-color", "#9D2F31");
			}
				
		}
		
	