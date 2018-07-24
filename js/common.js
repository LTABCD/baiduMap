window.addEventListener('load',function(){
	var btn=document.querySelector('.backs');
	btn.ontouchend=function(){
		window.history.go(-1);
	}
});
