var startEx = document.getElementById('startEx');
var timeStart = document.getElementById('timeStart');
var timeEnd = document.getElementById('timeEnd');
var examStarted = false;
startEx.onclick = function(e){
	examStarted = true;
	titleBlock.style.display = 'flex';
	startEx.style.display = 'none';
	timeStart.style.display = 'block';
	timeEnd.style.display = 'block';
}
function formatTime(tm){
    var h=tm.getHours();
    var m=tm.getMinutes();
    var s=tm.getSeconds();
	m=checkTime(m);
    s=checkTime(s);
	return h+":"+m+":"+s;
}
function startTime(){
    var tm=new Date();
	var offset_m = 150*60*1000;
	var tmEnd = new Date();
	tmEnd.setTime(tm.getTime()+offset_m);
    document.getElementById('time').innerHTML=formatTime(tm);
	if(!examStarted){
		document.getElementById('timeStart').innerHTML=formatTime(tm);
		document.getElementById('timeEnd').innerHTML=formatTime(tmEnd);
	}
    t=setTimeout('startTime()',500);
}
function checkTime(i){
    if (i<10)
    {
        i="0" + i;
    }
    return i;
}
function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}
function setDate(){
	exDate = document.getElementById('exDate');
	var tm=new Date();
	var d=FormatNumberLength(tm.getDate(),2);
	var m=FormatNumberLength(tm.getMonth()+1,2);
	var y=FormatNumberLength(tm.getFullYear()%100,2);
	exDate.placeholder = d+'-'+m+'-'+y;
}