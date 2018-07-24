window.addEventListener('load',function(){
	var data=["北京市","上海市","天津市","重庆市","河北省","河南省",
			 "云南省","辽宁省","黑龙江省","湖南省","安徽省","山东省",
			 "新疆维吾尔自治区","江苏省","浙江省","江西省","湖北省","广西壮族自治区",
			 "甘肃省","山西省","内蒙古自治区","陕西省","吉林省","福建省","贵州省",
			 "广东省","青海省","西藏自治区","四川省","宁夏回族自治区","海南省","台湾省","香港特别行政区","澳门特别行政区"
	]
	var span=document.querySelectorAll('section>a>p>.left');
	for(var i=0;i<span.length;i++){
		span[i].innerText=data[i];
	}
})
