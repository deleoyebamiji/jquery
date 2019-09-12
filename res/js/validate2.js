function validate2() {
			let ssname = document.forms['register2']['ssname'].value
			let ffname = document.forms['register2']['ffname'].value
			let mmname = document.forms['register2']['mmname'].value
			let ccountry = document.forms['register2']['ccountry'].value
			let sstate = document.forms['register2']['sstate'].value
			let ccity = document.forms['register2']['ccity'].value
			let eemail = document.forms['register2']['eemail'].value
			let pphone = document.forms['register2']['pphone'].value
			let uuname = document.forms['register2']['uuname'].value
			let ppassword = document.forms['register2']['ppassword'].value
			let ccpassword = document.forms['register2']['ccpassword'].value

			var alpha = /^[A-Za-z]+$/;
			var numbers = /^[0-9]+$/;
			var validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			
			if(ssname == ""  || ffname == "" || eemail == "" || pphone == "" || uuname == "" || ppassword == "" ||ccpassword =="") {
				document.getElementById('errorMsg2').innerHTML = "Alert: Please Fill In all Fields marked with (*)";
				return false;
			}
			else if(!(ssname.match(alpha))){
				document.getElementById('errorMsg2').innerHTML = "Error: Surname Must Be Alphabets Only";
				return false;
			}
			else if (!(ffname.match(alpha))) {
				document.getElementById('errorMsg2').innerHTML = "Error: Firstname Must Be Alphabets Only";
				return false;
			}
			else if(!(eemail.match(validemail))){
				document.getElementById('errorMsg2').innerHTML = "Error: Please Enter a valid email address";
				return false;
			}
			else if(!(pphone.match(numbers))){
				document.getElementById('errorMsg2').innerHTML = "Error: Please Enter a valid Pnone Number";
				return false;
			}
			else if(ppassword.length < 8){
				document.getElementById('errorMsg2').innerHTML = "Password Must Not Be Less Than 8 Characters";
				return false;
			}
			else if(ppassword != ccpassword){
				document.getElementById('errorMsg2').innerHTML = "Password Mismatch, Please Check Passwords And Try Again";
				return false;
			}
			else {
				
				$(".frmpage2").hide();
				$(".two").css("background-color", "grey");
				$(".frmpage3").show();
				$(".three").css("background-color", "#9D2F31");
			}
				
		}
		$(".btnBack1").click(function() {
			$(".frmpage2").hide();
			$(".two").css("background-color", "grey");
			$(".frmpage1").show();
			$(".one").css("background-color", "#9D2F31");
		})