// create flexbox js

var rowy = document.getElementById("flxdir");
var coly = document.getElementById("flxcol");
var flexbox = document.getElementById("flex");
var fxone = document.getElementById("flx-1");
var fxtwo = document.getElementById("flx-2");
var fxthree = document.getElementById("flx-3");
var rangeone = document.getElementById("basisone");
var rangetwo = document.getElementById("basistwo");
var rangethree = document.getElementById("basisthree");
var fstart = document.getElementById("fstart");
var fend = document.getElementById("fend");
var strt = document.getElementById("strt");
var ed = document.getElementById("ed");
var sbtw = document.getElementById("sbtw");
var sarnd = document.getElementById("sarnd");
var sevy = document.getElementById("sevy");
var none = document.getElementById("none");
var wrapy = document.getElementById("flxwrap");
var wrp = document.getElementById("wrp");
var wrprvsr = document.getElementById("wrp-rvsr");
var nowrp = document.getElementById("nowrp");
var fx = document.getElementById("fx");
var fxs = document.getElementById("fxs");
var fxsxs = document.getElementById("fxsxs");


function flexyy() {
	if(wrapy.value) {
		flexbox.style.gap = wrapy.value;
	}
	if(wrapy.value === "") {
		flexbox.style.order = "1%";
	}
	if(fx.value) {
		fxone.style.order = fx.value;
	}
	if(fxs.value) {
		fxtwo.style.order = fxs.value;
	}
	if(fxsxs.value) {
		fxthree.style.order = fxsxs.value;
	}
	if (fx.value == "") {
		fxone.style.order = "";
	}
	if (fxs.value == "") {
		fxtwo.style.order = "";
	}
	if (fxsxs.value == "") {
		fxthree.style.order = "";
	}
	if(fx.value === "") {
		fxone.style.gap = "1%";
	}
}




setInterval(flexyy,1000);

var store = flexbox.className;

window.onload = function refreshed() {
	rangeone.value = "0";
	rangetwo.value = "0";
	rangethree.value = "0";
	fxone.innerHTML = "";
	fxtwo.innerHTML = "";
	fxthree.innerHTML = "";
	fxone.style.width = "11em";
	fxtwo.style.width = "11em";
	fxthree.style.width = "11em";
}

rowy.onclick = function() {
	flexbox.style.flexDirection = "row";
}
coly.onclick = function() {
	flexbox.style.flexDirection = "Column";
}


function flexbasis() {
	if(rangeone.value) {
		fxone.style.flexBasis = rangeone.value +"%";
		fxone.innerHTML = rangeone.value +"%";
		fxone.style.border = "1px solid red";
	}
	if(rangetwo.value) {
		fxtwo.style.flexBasis = rangetwo.value +"%";
		fxtwo.innerHTML = rangetwo.value +"%";
		fxtwo.style.border = "1px solid lime";
	}
	if(rangethree.value) {
		fxthree.style.flexBasis = rangethree.value +"%";
		fxthree.innerHTML = rangethree.value +"%";
		fxthree.style.border = "1px solid blue";
	}
	if(rangeone.value < 2) {
		fxone.style.flexBasis = "";
		fxone.innerHTML = "";
	}
	if(rangetwo.value < 2) {
		fxtwo.style.flexBasis = "";
		fxtwo.innerHTML = "";
	}
	if(rangethree.value < 2) {
		fxthree.style.flexBasis = "";
		fxthree.innerHTML = "";
	}
	else {
		return false;
	}
}



function justifycontent() {
	fstart.onclick = function() {
		flexbox.style.justifyContent = "flex-start";
	}
	fend.onclick = function() {
		flexbox.style.justifyContent = "flex-end";
	}
	strt.onclick = function() {
		flexbox.style.justifyContent = "start";
	}
	ed.onclick = function() {
		flexbox.style.justifyContent = "end";
	}
	sbtw.onclick = function() {
		flexbox.style.justifyContent = "space-between";
	}
	sarnd.onclick = function() {
		flexbox.style.justifyContent = "space-around";
	}
	sevy.onclick = function() {
		flexbox.style.justifyContent = "space-evenly";
	}
	none.onclick = function() {
		flexbox.style.justifyContent = "center";
	}
}


justifycontent();

flexbasis();

setInterval(flexbasis, 1000);


function animate() {
	fxone.onclick = animation;
	fxtwo.onclick = animation;
	fxthree.onclick = animation;
}

animate();

function animation(e) {
	var anim = e.target;
	anim.style.flexBasis = "20%";
}

wrp.onclick = function() {
	flexbox.style.flexWrap = "wrap";
}

wrprvsr.onclick = function() {
	flexbox.style.flexWrap = "wrap-reverse";
}

nowrp.onclick = function() {
	flexbox.style.flexWrap = "nowrap";
}


var sop = document.getElementById("kkk");
if  (window.innerWidth < 600) {
 sop.innerHTML = "sorry! flexplay doesn't support for mobile";
 sop.style.fontSize = "50px";		
 sop.style.fontFamily = "system-ui"; 
 sop.style.lineHeight = "0.9"; 
 sop.style.fontWeight = "bold"; 
 sop.style.textAlign = "center"; 
}




