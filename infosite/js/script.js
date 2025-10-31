
//時間表示はじめ
    function twoDigit(num) {
      let ret;
      if( num < 10 ) 
        ret = "0" + num; 
      else 
        ret = num; 
      return ret;
    }
    function showClock() {
		let nowDate = new Date();
		let nowYear = nowDate.getFullYear()-2000;
		let nowMonth = twoDigit(nowDate.getMonth()+1);
		let nowDay = twoDigit(nowDate.getDate());
		let nowHour = twoDigit(nowDate.getHours());
		let nowMin = twoDigit(nowDate.getMinutes());
		let nowSec = twoDigit(nowDate.getSeconds());
      let msg =  nowYear +"/"+ nowMonth + "/" + nowDay + " " + nowHour + ":" + nowMin + ":" + nowSec;
      document.getElementById("realtime").innerHTML = msg;
    }
    setInterval('showClock()',1000);
// 時間表示おわり

	let pass = "1234"; //平文
	let misscount = 0;

    function SVmodeChange(){
	let passchk = prompt("パスワードを入力してください");
	let notice = document.getElementById("notice");
	if(passchk === pass){
	notice.className ="show_success";
	notice.innerHTML = "✔️ 管理者モードに変更しました"
	setTimeout(function(){notice.className = notice.className.replace("show_success","");},1000);
	let annoBtnOpen = document.getElementById('annobtn');
		annoBtnOpen.className = "show";
	let editAreaOpen = document.getElementById('editArea');
		editAreaOpen.className = "show";
	}else{
	notice.className ="show_error";
	notice.innerHTML = "⚠️ パスワードが違います"
	setTimeout(function(){notice.className = notice.className.replace("show_error","");},1000);
	misscount += 1;
	if(misscount == 3){
		alert("警告：パスワードが違います 再度確認した上で入力してください");
		misscount = 0;
		}
	}
	}

    function copy1(){
 let cptxt = document.getElementsByClassName("link")[0];
 navigator.clipboard.writeText(cptxt.innerText).then(success,faild);
    
 function success(){
    alert("ユーザー名をコピーしました");
}
function faild(){
    console.log("コピーに失敗しました");
 }
 }

function copy2(){
 let cptxt = document.getElementsByClassName("pass")[0];
 navigator.clipboard.writeText(cptxt.innerText).then(success,faild);
    
 function success(){
    alert("パスワードをコピーしました");
}
function faild(){
    console.log("コピーに失敗しました");
 }
 }

function copy3(){
 let cptxt = document.getElementsByClassName("link")[1];
 navigator.clipboard.writeText(cptxt.innerText).then(success,faild);
    
 function success(){
    alert("ユーザー名をコピーしました");
}
function faild(){
    console.log("コピーに失敗しました");
 }
 }

function copy4(){
 let cptxt = document.getElementsByClassName("pass")[1];
 navigator.clipboard.writeText(cptxt.innerText).then(success,faild);
    
 function success(){
    alert("パスワードをコピーしました");
}
function faild(){
    console.log("コピーに失敗しました");
 }
 }

function copy5(){
 let cptxt = document.getElementsByClassName("link")[2];
 navigator.clipboard.writeText(cptxt.innerText).then(success,faild);
    
 function success(){
    alert("ユーザー名をコピーしました");
}
function faild(){
    console.log("コピーに失敗しました");
 }
 }

function copy6(){
 let cptxt = document.getElementsByClassName("pass")[2];
 navigator.clipboard.writeText(cptxt.innerText).then(success,faild);
    
 function success(){
    alert("パスワードをコピーしました");
}
function faild(){
    console.log("コピーに失敗しました");
 }
 }

//　お知らせ更新
function annochange(){
	let addannotext = prompt("変更するテキストを入力してください");
	let anno = document.getElementById('annotxt');
	anno.innerHTML = addannotext;
}

// [新規追加]はじめ
function addon(){
let passchk = prompt("パスワードを入力してください");
if(passchk === pass){
	const mainf = document.getElementById('nomal');
	const block = document.createElement('div');
	block.setAttribute('class', "block");
	mainf.insertBefore(block, mainf.firstElementChild);

	const date = document.createElement('div');
	date.className = 'date';
	const adddate = document.getElementById('date');
	date.innerHTML = adddate.value;
	const inputDate = document.getElementById('date');
	const fullDate = new Date(inputDate.value);
	const getYear = fullDate.getFullYear();
	const getMonth = fullDate.getMonth()+1;
	const getDate = fullDate.getDate();

	const formattedDate = `${getMonth}/${getDate}`;
	date.innerHTML = formattedDate;
	block.appendChild(date);

	const about = document.createElement('div');
	about.className = 'about';
	const addabout = document.getElementById('about');
	about.innerHTML = addabout.value;
	block.appendChild(about);

	const text = document.createElement('div');
	text.className = 'text';
	const addtext = document.getElementById('text');
	text.innerHTML = addtext.value;
	block.appendChild(text);

	const url = document.createElement('div');
	url.className = 'url';
	const addurl = document.getElementById('url');
	url.innerHTML =  addurl.value;
	block.appendChild(url);
}else{
	alert("パスワードが違います");
}

}
// [新規追加]おわり

// [トップに追加]はじめ
function pinned(){
let passchk = prompt("パスワードを入力してください");
if(passchk === pass){
	const block = document.createElement('div');
	block.setAttribute('class', "block");
	const pinned = document.getElementById('pinned');
	pinned.appendChild(block);

	const date = document.createElement('div');
	date.className = 'date';
	const adddate = document.getElementById('date');
	date.innerHTML = adddate.value;
	const inputDate = document.getElementById('date');

	const fullDate = new Date(inputDate.value);
	const getYear = fullDate.getFullYear();
	const getMonth = fullDate.getMonth()+1;
	const getDate = fullDate.getDate();

	const formattedDate = `${getMonth}/${getDate}`;
	date.innerHTML = formattedDate;
	block.appendChild(date);
	const about = document.createElement('div');
	about.className = 'about';
	const addabout = document.getElementById('about');
	about.innerHTML = addabout.value;
	block.appendChild(about);

	const text = document.createElement('div');
	text.className = 'text';
	const addtext = document.getElementById('text');
	text.innerHTML = addtext.value;
	block.appendChild(text);

	const url = document.createElement('div');
	url.className = 'url';
	const addurl = document.getElementById('url');
	url.innerHTML = addurl.value;
	block.appendChild(url);
}else{
	alert("パスワードが違います");
}
}
// [トップに追加]おわり