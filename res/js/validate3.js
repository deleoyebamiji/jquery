function validate3() {
			let sssname = document.forms['register3']['sssname'].value
			let fffname = document.forms['register3']['fffname'].value
			let mmmname = document.forms['register3']['mmmname'].value
			let cccountry = document.forms['register3']['cccountry'].value
			let ssstate = document.forms['register3']['ssstate'].value
			let cccity = document.forms['register3']['cccity'].value
			let eeemail = document.forms['register3']['eeemail'].value
			let ppphone = document.forms['register3']['ppphone'].value
			let uuuname = document.forms['register3']['uuuname'].value
			let pppassword = document.forms['register3']['pppassword'].value
			let cccpassword = document.forms['register3']['cccpassword'].value
			// alert(country);

			var alpha = /^[A-Za-z]+$/;
			var numbers = /^[0-9]+$/;
			var validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			
			if(sssname == ""  || fffname == "" || eeemail == "" || ppphone == "" || uuuname == "" || pppassword == "" ||cccpassword =="") {
				document.getElementById('errorMsg3').innerHTML = "Alert: Please Fill In all Fields marked with (*)";
				return false;
			}
			else if(!(sssname.match(alpha))){
				document.getElementById('errorMsg3').innerHTML = "Error: Surname Must Be Alphabets Only";
				return false;
			}
			else if (!(fffname.match(alpha))) {
				document.getElementById('errorMsg3').innerHTML = "Error: Firstname Must Be Alphabets Only";
				return false;
			}
			else if(!(eeemail.match(validemail))){
				document.getElementById('errorMsg3').innerHTML = "Error: Please Enter a valid email address";
				return false;
			}
			else if(!(ppphone.match(numbers))){
				document.getElementById('errorMsg3').innerHTML = "Error: Please Enter a valid Pnone Number";
				return false;
			}
			else if(pppassword.length < 8){
				document.getElementById('errorMsg3').innerHTML = "Password Must Not Be Less Than 8 Characters";
				return false;
			}
			else if(pppassword != cccpassword){
				document.getElementById('errorMsg3').innerHTML = "Password Mismatch, Please Check Passwords And Try Again";
				return false;
			}
			else {
				document.getElementById('errorMsg3').innerHTML = "Thank You! Your Form has been submitted successfully";
				return false;
			}
				
		}
		$(".btnBack2").click(function() {
			$(".frmpage3").hide();
			$(".three").css("background-color", "grey");
			$(".frmpage2").show();
			$(".two").css("background-color", "#9D2F31");
		})