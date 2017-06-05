window.addEventListener("load",function(){
	var xhr=new XMLHttpRequest();
	var logout=document.querySelector(".logout");
	var loginBar=document.querySelector(".loginBar");
	var username=document.querySelector(".username");
	var deng=document.querySelector(".deng");
	deng.addEventListener("click",function(){
		xhr.open("post","member.txt")
		xhr.send(null);
		xhr.addEventListener("readystatechange",function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					if(deng.value==(xhr.responseText)){
						alert("恭喜您登陆成功")	;
						// sessionStorage.setItem("username",deng.value);
						// loginBar.style.display="none";
						// logUI.style.display="none";
						// username.innerHTML=username.value;
						// logout,style.display="block";

					}
				}
			}
		});

	});
		logout.addEventListener("click",function(){
		sessionStorage.removeItem("username");
		logout.style.display="none";
		loginBar.style.display="block";
		logUI.style.display="block";
	});

});


