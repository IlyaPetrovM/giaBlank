var examTitles = {
0001:{name:'РУССКИЙ  ',time: 235},
0002:{name:'МАТЕМАТИК',time: 235},
0003:{name:'ФИЗИКА   ',time: 180},
0004:{name:'ХИМИЯ    ',time: 140},
0005:{name:'ИНФОРМАТИ',time: 150},
0006:{name:'БИОЛОГИЯ ',time: 180},
0007:{name:'ИСТОРИЯ  ',time: 180},
0008:{name:'ГЕОГРАФИЯ',time: 120},
0009:{name:'АНГЛИЙСКИ',time: 120},
0012:{name:'ОБЩЕСТВОЗ',time: 180},
0018:{name:'ЛИТЕРАТУР',time: 235},
0029:{name:'АНГЛИЙСКИ',time: 120}
};
console.log(examTitles);
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
var duration = 235;
function startTime(){
    var tm=new Date();
	var offset_m = duration*60*1000;
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

function setDate(){
	exDate = document.getElementById('exDate');
	var tm=new Date();
	var d=FormatNumberLength(tm.getDate(),2);
	var m=FormatNumberLength(tm.getMonth()+1,2);
	var y=FormatNumberLength(tm.getFullYear()%100,2);
	exDate.placeholder = d+'-'+m+'-'+y;
}

function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}
function formatDate(tm){
	var d=FormatNumberLength(tm.getDate(),2);
	var m=FormatNumberLength(tm.getMonth()+1,2);
	var y=FormatNumberLength(tm.getFullYear()%100,2);
	return d+'-'+m+'-'+y;
}
function clearNode(node){
   while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

var AuditoryDate = {'05-06-18':{1:02,3:02}};

function setUpExam(){
    var org = {};
    schools = {
        '     ':'',
        2357:'ГБОУ "Школа №547"',
        12745:'ГБОУ Школа №463',
        12881:'ГБОУ Школа №494',
        13586:'ГБОУ "МГХУ имени Л.М.Лавровского"',
        13602:'АНО ПО "Школа классического танца"',
        13709:'ГБОУ "Школа №1257"',
        13745:'ГБОУ "Школа №1272"'}; 
        schools[13193]='ЧУ СОШ "Столичный - КИТ"';
        schools[13758]='ГБОУ Школа №630';
        
    org['29-05-18']=[
        2357,13193,13745
    ];
    org['31-05-18']=[ 2357,12745,12881,
        13586,
        13602,
        13709,
        13745
    ];
    org['02-06-18']=[2357,
        13758 ];
    org['05-06-18']=[2357,13193,13745];
    
    var orgValues = document.getElementById('orgValues');
    var orgNames = document.getElementById('orgNames');
    clearNode(orgValues);
    clearNode(orgNames);
    let today_str = (document.getElementById('exDate').value || document.getElementById('exDate').placeholder);
    console.log(today_str,org);
    let todayOrg = org[today_str];
    if(todayOrg===undefined){
        todayOrg = [
            "     ","     ","     ","     ","     "
            ];
    }
	auditory.onchange = function(){
		let aud = parseInt(auditory.value);
		let code = AuditoryDate[today_str][aud];
		let subjT = examTitles[code].name;
		duration = (examTitles[code].time || 235);
		
		subjCode.value = code;
		subjTitle.value = subjT;
	
	}
	
    for(let i in todayOrg){
        let code=todayOrg[i];
        console.log(code);
        let orgCode = document.createElement('input');
        orgCode.className = 'value';
        let orgName = document.createElement('input');
        orgName.className = 'orgName';
        orgName.placeholder = schools[code];
        orgCode.placeholder = code;
        orgCode.type = orgName.type = 'text';
            orgValues.appendChild(orgCode);
            orgNames.appendChild(orgName);
        
    }
}