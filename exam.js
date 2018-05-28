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