function startTime(){
    var tm=new Date();
    var h=tm.getHours();
    var m=tm.getMinutes();
    var s=tm.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('time').innerHTML=h+":"+m+":"+s;
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