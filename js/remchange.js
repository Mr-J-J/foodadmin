(function(){
	window.addEventListener("resize",remChange);
	remChange();
	function remChange(){
		var ratio = 80.75;//自设的一个比例
		var docEle = document.documentElement; //获取到页面的根
		var viewWidth = docEle.getBoundingClientRect().width || window.innerWidth;//获取屏幕宽度
		docEle.style.fontSize = viewWidth / ratio + "px";//设置根字体大小
	}
})();