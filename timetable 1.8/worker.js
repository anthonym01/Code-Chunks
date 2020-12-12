//Live clock
window.addEventListener('load',function(){
	setInterval(live_clock, 1000);//initializer is blank. it just does some time stuff
})
var d;
var hr;
var min;
var day;

function live_clock(){
	d = new Date();
	document.getElementById("liveclock").innerHTML = d.toLocaleTimeString();
	/*	hr =Math.floor(Math.random() * 24);
	if(hr<7 || hr>16){definedates();}
	min =Math.floor(Math.random() * 60);
	day =Math.floor(Math.random() * 5);*/
	hr =d.getHours();
	min =d.getMinutes();
	day =d.getDay();
	cell.hilights();
}

//UI - updates
hoverdetail = {//hover details object
	hide:function(){document.getElementById("display_pannel").style='display:none;';},
	show:function(){document.getElementById("display_pannel").style='display:block;';},
	DataStructuresB24:function(){
		this.show();
		document.getElementById("detailsubject").innerHTML='<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
	},
	Physics:function(){
		this.show();
		document.getElementById("detailsubject").innerHTML='<b><a href="#">Physics<br>Room: C25<br>Teacher: Mr Stewart<br>Email: rgstewart@mbcc.edu.jm</a></b><br>';
	},
	EthicsC12:function(){
		this.show();
		document.getElementById("detailsubject").innerHTML='<b><a href="#">Ethics<br>Room: C12<br>Teacher: </a></b>';
	},
	EthicsC13:function(){
		this.show();
		document.getElementById("detailsubject").innerHTML='<b><a href="#">Ethics<br>Room: C13<br>Teacher: </a></b>';
	},
	SREA21:function(){
		this.show();
		document.getElementById("detailsubject").innerHTML='<b><a href="#">S.R.E.<br>Room: A21<br>Teacher: Miss Dabuon</a></b>';
	},
	SREA22:function(){
		this.show();
		document.getElementById("detailsubject").innerHTML='<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
	},
	CLDDC8:function(){
		this.show();
		document.getElementById("detailsubject").innerHTML='<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
	},
	CLDDB26:function(){
		this.show();
		document.getElementById("detailsubject").innerHTML='<b><a href="#">C.L.D.D.<br>Room: B26<br>Teacher: Miss Mighty</a></b>';
	},
	ASSEMBLY:function(){
		this.show();
		document.getElementById("detailsubject").innerHTML='<b><a href="#">ASSEMBLY<br>Room: N.A.<br>Teacher: N.A.</a></b>';
	},
	PhysicsLab:function(){
		this.show();
		document.getElementById("detailsubject").innerHTML='<b><a href="#">Physics Lab<br>Room: B17<br>Teacher: Mr Stewart<br>Email:  rgstewart@mbcc.edu.jm</a></b>';
	},
	Academicadvisory:function(){
		this.show();
		document.getElementById("detailsubject").innerHTML='<b><a href="#">Academic Advisory<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
	},
	DiscreteMaths:function(){
		this.show();
		document.getElementById("detailsubject").innerHTML='<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr palmer</a></b>';
	},
	AcademicWriting:function(){
		this.show();
		document.getElementById("detailsubject").innerHTML='<b><a href="#">Academic Writing<br>Room: B26<br>Teacher: keith Samms</a></b>';
	},
	NOCLASS:function(){
		this.show();
		document.getElementById("detailsubject").innerHTML='<b><a href="#">NO CLASS<br>Room: N.A.<br>Teacher: None</a></b>';
	},
	LUNCH:function(){
		this.show();
		document.getElementById("detailsubject").innerHTML='<b><a href="#">LUNCH<br>Room: N.A.<br>Teacher: N.A.</a></b>';
	},
	ACTIVITY:function(){
		this.show();
		document.getElementById("detailsubject").innerHTML='<b><a href="#">ACTIVITY<br>Room: N.A.<br>Teacher: N.A.</a></b>';
	},
}

detailpannel = {//detail panel object
	show:function(){document.getElementById("fulldetail").style='display:block';},
	hide:function(){document.getElementById("fulldetail").style='';},
	//pullawaydropdown:function(){document.getElementById("fulldetail").style='display:block;width:70%;';},
	debug:function(){
		this.show();
		document.getElementById("detailtitle").innerHTML='Debug variables';
		document.getElementById("detaildisplay").innerHTML='Current theme: ' + theme.themecheck();
	},
	setting:function(){
		this.show();
		document.getElementById("detailtitle").innerHTML='settings';
		document.getElementById("detaildisplay").innerHTML=' Change theme:<div class="btnholder" style="width:auto;"><button class="nicebtn" style="width:auto;" onclick="theme.themechange();"> <span id="themerpt">'+ theme.themecheck() +' </span> </button></div><br>';
	},
	about:function(){
		this.show();
		document.getElementById("detailtitle").innerHTML='About';
		document.getElementById("detaildisplay").innerHTML='<p align="center">					<img src="images/samuel.jpg" alt="image not found :/"><br>					Name: Samuel A. Matheson<br>					Email: <a style="text-decoration: underline;" href="mailto:samuelmatheson15@gmail.com">samuelmatheson15@gmail.com</a>						<button class="contextbtn" onclick="copy.email1()">Copy to clipboard</button><br>					Email: <a style="text-decoration: underline;" href="mailto:smatheson17h@mymbcc.edu.jm">smatheson17h@mymbcc.edu.jm</a>						<button class="contextbtn" onclick="copy.email2();">Copy to clipboard</button><br>						Phone #: (876)574-4801<button class="contextbtn" onclick="copy.phone();">Copy to clipboard</button><br>						Currently studying computers.<br>						Wants to be a software engineer<br>						Despite the fact that he is not very creative<br>				</p>';
	},
	hoveron:function(){//style button hovered
		document.getElementById("xbtn").src="images/redx-invert.png";
	},
	hoverout:function(){//restore button to un-hovered
		document.getElementById("xbtn").src="images/redx.png";
	},
	DataStructures:function(){
		this.show();
		document.getElementById("detailtitle").innerHTML='Data Structures';
		document.getElementById("detaildisplay").innerHTML='Data structures overwite<br>but not complete<br><br>';
	},
	Physics:function(){
		this.show();
		document.getElementById("detailtitle").innerHTML='Physics';
		document.getElementById("detaildisplay").innerHTML='Physics overwrite<br>but not complete<br>';
	},
	Ethics:function(){
		this.show();
		document.getElementById("detailtitle").innerHTML='Ethics';
		document.getElementById("detaildisplay").innerHTML='Ethics overwrite<br>but not complete<br>';
	},
	SRE:function(){
		this.show();
		document.getElementById("detailtitle").innerHTML='S.R.E.';
		document.getElementById("detaildisplay").innerHTML='S.R.E. overwrite<br>but not complete<br>';
	},
	CLDD:function(){
		this.show();
		document.getElementById("detailtitle").innerHTML='C.L.D.D.';
		document.getElementById("detaildisplay").innerHTML='C.L.D.D. overwrite<br>but not complete<br>';
	},
	ASSEMBLY:function(){
		this.show();
		document.getElementById("detailtitle").innerHTML='ASSEMBLY';
		document.getElementById("detaildisplay").innerHTML='ASSEMBLY overwrite<br>but not complete<br>';
	},
	PhysicsLab:function(){
		this.show();
		document.getElementById("detailtitle").innerHTML='Physics Lab';
		document.getElementById("detaildisplay").innerHTML='Physics Lab overwrite<br>but not complete<br>';
	},
	Academicadvisory:function(){
		this.show();
		document.getElementById("detailtitle").innerHTML='Academic advisory';
		document.getElementById("detaildisplay").innerHTML='Academic advisory overwrite<br>but not complete<br>';
	},
	DiscreteMaths:function(){
		this.show();
		document.getElementById("detailtitle").innerHTML='Discrete Maths';
		document.getElementById("detaildisplay").innerHTML='Discrete Maths overwrite<br>but not complete<br>';
	},
	AcademicWriting:function(){
		this.show();
		document.getElementById("detailtitle").innerHTML='Academic Writing';
		document.getElementById("detaildisplay").innerHTML='Academic Writing overwrite<br>but not complete<br>';
	},
	NOCLASS:function(){
		this.show();
		document.getElementById("detailtitle").innerHTML='NO CLASS';
		document.getElementById("detaildisplay").innerHTML='NO CLASS overwrite<br>but not complete<br>';
	},
	isims:function(){
		this.show();
		document.getElementById("detailtitle").innerHTML='i-sims';
		document.getElementById("detaildisplay").innerHTML='<iframe style="width:100%;height:800px;" src="https://mymbcc.edu.jm/default.aspx">';
	},
}

headbar = {//Controls Head-bar
	
}

theme = {//Changes theme
	themeset:"dark",
	themecheck:function(){
		return String(this.themeset);
	},
	themechange:function(){
		if(this.themeset=="light"){//set theme dark
			document.getElementById("theme").href="dark_theme.css";
			document.getElementById("favicon").href='images/favicon_black.png';
			this.themeset="dark";
			document.getElementById("themerpt").innerHTML= this.themeset;
		}
		else if(this.themeset=="dark"){//set theme light
			document.getElementById("theme").href="light_theme.css";
			document.getElementById("favicon").href='images/favicon.png';
			this.themeset="light";
			document.getElementById("themerpt").innerHTML= this.themeset;
		}
		else
		{
		//throw error
		}
	},
}

//Cell time updates
cell={
	hilights:function(){
		this.resettime();
		this.resetday();
		this.resetsubcell();
		if(day==1)//Monday
		{
			document.getElementById("monday").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';//hilight monday 
			if(hr==0 && min<30)//0:00-0:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==0 && min>=30)//0:30-0:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==1 && min<30)//1:00-1:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==1 && min>=30)//1:30-1:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==2 && min<30)//2:00-2:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==2 && min>=30)//2:30-2:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==3 && min<30)//3:00-3:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==3 && min>=30)//3:30-3:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==4 && min<30)//4:00-4:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==4 && min>=30)//4:30-4:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==5 && min<30)//5:00-5:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==5 && min>=30)//5:30-5:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==6 && min<30)//6:00-6:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==6 && min>=30)//6:30-6:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==7 && min<30)//7:00-7:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==7 && min>=30)//7:30-7:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==8 && min<30)//8:00-8:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==8 && min>=30)//8:30-8:59
			{
				document.getElementById("cell1").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Physics<br>Room: C25<br>Teacher: </a></b>';
				document.getElementById("830930").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==9 && min<30)//9:00-9:30
			{
				document.getElementById("cell1").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Physics<br>Room: C25<br>Teacher: </a></b>';
				document.getElementById("830930").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==9 && min>=30)//9:30-9:59
			{
				document.getElementById("cell1").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Physics<br>Room: C25<br>Teacher: </a></b>';
				document.getElementById("9301030").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==10 && min<30)//10:00-10:30
			{
				document.getElementById("cell1").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Physics<br>Room: C25<br>Teacher: </a></b>';
				document.getElementById("9301030").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==10 && min>=30)//10:30-10:59
			{
				document.getElementById("cell6").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Physics<br>Room: C25<br>Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("10301130").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==11 && min<30)//11:00-11:30
			{
				document.getElementById("cell6").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Physics<br>Room: C25<br>Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("10301130").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==11 && min>=30)//11:30-11:59
			{
				document.getElementById("cell6").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Physics<br>Room: C25<br>Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("11301230").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==12 && min<30)//12:00-12:30
			{
				document.getElementById("cell6").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Physics<br>Room: C25<br>Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("11301230").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==12 && min>=30)//12:30-12:59
			{
				document.getElementById("cell26").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("12301330").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==13 && min<30)//13:00-13:30
			{
				document.getElementById("cell26").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("12301330").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==13 && min>=30)//13:30-13:59
			{
				document.getElementById("cell13").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Ethics<br> Room: C12<br> Teacher: </a></b>';
				document.getElementById("13301430").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==14 && min<30)//14:00-14:30
			{
				document.getElementById("cell13").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Ethics<br> Room: C12<br> Teacher: </a></b>';
				document.getElementById("13301430").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==14 && min>=30)//14:30-14:59
			{
				document.getElementById("cell18").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Ethics<br> Room: C12<br> Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("14301530").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==15 && min<30)//15:00-15:30
			{
				document.getElementById("cell18").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Ethics<br> Room: C12<br> Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("14301530").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==15 && min>=30)//15:30-15:59
			{
				document.getElementById("cell19").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E. <br>Room: A23<br>Miss Dabuon</a></b>';
				document.getElementById("15301630").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==16 && min<30)//16:00-16:30
			{
				document.getElementById("cell19").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E. <br>Room: A23<br>Miss Dabuon</a></b>';
				document.getElementById("15301630").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==16 && min>=30)//16:30-16:59
			{
				document.getElementById("cell23").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">S.R.E. <br>Room: A23<br>Miss Dabuon</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("16301730").style = 'background-color:#26ff26;border-style:solid;border-width:2px;'; 
			}
			else if(hr==17 && min<30)//17:00-17:30
			{
				document.getElementById("cell23").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">S.R.E. <br>Room: A23<br>Miss Dabuon</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("16301730").style = 'background-color:#26ff26;border-style:solid;border-width:2px;'; 
			}
			else if(hr==17 && min>=30)//17:30-17:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==18 && min<30)//18:00-18:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==18 && min>=30)//18:30-18:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==19 && min<30)//19:00-19:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==19 && min>=30)//19:30-19:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==20 && min<30)//20:00-20:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==20 && min>=30)//20:30-20:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==21 && min<30)//21:00-21:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==21 && min>=30)//21:30-21:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==22 && min<30)//22:00-22:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==22 && min>=30)//22:30-22:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==23 && min<30)//23:00-23:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==23 && min>=30)//23:30-23:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else
			{
				//indicate non school hour
			}
		}
		else if(day==2)//Tuesday
		{
			document.getElementById("tuesday").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';//hilight tuesday 
			if(hr==0 && min<30)//0:00-0:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==0 && min>=30)//0:30-0:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==1 && min<30)//1:00-1:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==1 && min>=30)//1:30-1:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==2 && min<30)//2:00-2:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==2 && min>=30)//2:30-2:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==3 && min<30)//3:00-3:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==3 && min>=30)//3:30-3:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==4 && min<30)//4:00-4:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==4 && min>=30)//4:30-4:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==5 && min<30)//5:00-5:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==5 && min>=30)//5:30-5:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==6 && min<30)//6:00-6:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==6 && min>=30)//6:30-6:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==7 && min<30)//7:00-7:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==7 && min>=30)//7:30-7:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==8 && min<30)//8:00-8:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==8 && min>=30)//8:30-8:59
			{
				document.getElementById("cell2").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("830930").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==9 && min<30)//9:00-9:30
			{
				document.getElementById("cell2").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("830930").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==9 && min>=30)//9:30-9:59
			{
				document.getElementById("cell2").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("9301030").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==10 && min<30)//10:00-10:30
			{
				document.getElementById("cell2").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("9301030").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==10 && min>=30)//10:30-10:59
			{
				document.getElementById("cell7").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("10301130").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==11 && min<30)//11:00-11:30
			{
				document.getElementById("cell7").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("10301130").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==11 && min>=30)//11:30-11:59
			{
				document.getElementById("cell7").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("11301230").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==12 && min<30)//12:00-12:30
			{
				document.getElementById("cell7").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room: C8<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("11301230").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==12 && min>=30)//12:30-12:59
			{
				document.getElementById("cell26").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures <br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("12301330").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==13 && min<30)//13:00-13:30
			{
				document.getElementById("cell26").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures <br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("12301330").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==13 && min>=30)//13:30-13:59
			{
				document.getElementById("cell14").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Data Structures <br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("13301430").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==14 && min<30)//14:00-14:30
			{
				document.getElementById("cell14").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Data Structures <br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("13301430").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==14 && min>=30)//14:30-14:59
			{
				document.getElementById("cell14").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Data Structures <br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("14301530").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==15 && min<30)//15:00-15:30
			{
				document.getElementById("cell14").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Data Structures <br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("14301530").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==15 && min>=30)//15:30-15:59
			{
				document.getElementById("cell20").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("15301630").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==16 && min<30)//16:00-16:30
			{
				document.getElementById("cell20").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("15301630").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==16 && min>=30)//16:30-16:59
			{
				document.getElementById("cell20").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("16301730").style = 'background-color:#26ff26;border-style:solid;border-width:2px;'; 
			}
			else if(hr==17 && min<30)//17:00-17:30
			{
				document.getElementById("cell20").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("16301730").style = 'background-color:#26ff26;border-style:solid;border-width:2px;'; 
			}
			else if(hr==17 && min>=30)//17:30-17:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==18 && min<30)//18:00-18:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==18 && min>=30)//18:30-18:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==19 && min<30)//19:00-19:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==19 && min>=30)//19:30-19:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==20 && min<30)//20:00-20:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==20 && min>=30)//20:30-20:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==21 && min<30)//21:00-21:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==21 && min>=30)//21:30-21:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==22 && min<30)//22:00-22:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==22 && min>=30)//22:30-22:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==23 && min<30)//23:00-23:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==23 && min>=30)//23:30-23:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else
			{
				//indicate non school hour
			}
		}
		else if(day==3)//Wednesday
		{
			document.getElementById("wednsday").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';//hilight wednsday
			if(hr==0 && min<30)//0:00-0:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==0 && min>=30)//0:30-0:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==1 && min<30)//1:00-1:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==1 && min>=30)//1:30-1:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==2 && min<30)//2:00-2:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==2 && min>=30)//2:30-2:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==3 && min<30)//3:00-3:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==3 && min>=30)//3:30-3:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==4 && min<30)//4:00-4:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==4 && min>=30)//4:30-4:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==5 && min<30)//5:00-5:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==5 && min>=30)//5:30-5:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==6 && min<30)//6:00-6:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==6 && min>=30)//6:30-6:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==7 && min<30)//7:00-7:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==7 && min>=30)//7:30-7:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==8 && min<30)//8:00-8:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==8 && min>=30)//8:30-8:59
			{
				document.getElementById("cell3").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">ASSEMBLY</a></b>';
				document.getElementById("830930").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==9 && min<30)//9:00-9:30
			{
				document.getElementById("cell3").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">ASSEMBLY</a></b>';
				document.getElementById("830930").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==9 && min>=30)//9:30-9:59
			{
				document.getElementById("cell3").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">ASSEMBLY</a></b>';
				document.getElementById("9301030").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==10 && min<30)//10:00-10:30
			{
				document.getElementById("cell3").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">S.R.E.<br>Room: A22<br>Teacher: Miss Dabuon</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">ASSEMBLY</a></b>';
				document.getElementById("9301030").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==10 && min>=30)//10:30-10:59
			{
				document.getElementById("cell8").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">ASSEMBLY</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("10301130").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==11 && min<30)//11:00-11:30
			{
				document.getElementById("cell8").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">ASSEMBLY</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("10301130").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==11 && min>=30)//11:30-11:59
			{
				document.getElementById("cell10").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("11301230").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==12 && min<30)//12:00-12:30
			{
				document.getElementById("cell10").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("11301230").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==12 && min>=30)//12:30-12:59
			{
				document.getElementById("cell26").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Writing<br>Room: B26<br>Teacher: keith Samms</a></b>';
				document.getElementById("12301330").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==13 && min<30)//13:00-13:30
			{
				document.getElementById("cell26").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Writing<br>Room: B26<br>Teacher: keith Samms</a></b>';
				document.getElementById("12301330").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==13 && min>=30)//13:30-13:59
			{
				document.getElementById("cell15").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Physics<br>Room: B17<br>Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("13301430").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==14 && min<30)//14:00-14:30
			{
				document.getElementById("cell15").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Physics<br>Room: B17<br>Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("13301430").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==14 && min>=30)//14:30-14:59
			{
				document.getElementById("cell15").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Physics<br>Room: B17<br>Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("14301530").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==15 && min<30)//15:00-15:30
			{
				document.getElementById("cell15").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Physics<br>Room: B17<br>Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("14301530").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==15 && min>=30)//15:30-15:59
			{
				document.getElementById("cell15").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Physics<br>Room: B17<br>Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("15301630").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==16 && min<30)//16:00-16:30
			{
				document.getElementById("cell15").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Physics<br>Room: B17<br>Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("15301630").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==16 && min>=30)//16:30-16:59
			{
				document.getElementById("cell15").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Physics<br>Room: B17<br>Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("16301730").style = 'background-color:#26ff26;border-style:solid;border-width:2px;'; 
			}
			else if(hr==17 && min<30)//17:00-17:30
			{
				document.getElementById("cell15").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Physics<br>Room: B17<br>Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("16301730").style = 'background-color:#26ff26;border-style:solid;border-width:2px;'; 
			}
			else if(hr==17 && min>=30)//17:30-17:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==18 && min<30)//18:00-18:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==18 && min>=30)//18:30-18:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==19 && min<30)//19:00-19:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==19 && min>=30)//19:30-19:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==20 && min<30)//20:00-20:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==20 && min>=30)//20:30-20:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==21 && min<30)//21:00-21:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==21 && min>=30)//21:30-21:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==22 && min<30)//22:00-22:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==22 && min>=30)//22:30-22:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==23 && min<30)//23:00-23:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==23 && min>=30)//23:30-23:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else
			{
				//indicate non school hour
			}
		}
		else if(day==4)//Thursday
		{
			document.getElementById("thursday").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';//hilight thursday 
			if(hr==0 && min<30)//0:00-0:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==0 && min>=30)//0:30-0:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==1 && min<30)//1:00-1:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==1 && min>=30)//1:30-1:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==2 && min<30)//2:00-2:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==2 && min>=30)//2:30-2:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==3 && min<30)//3:00-3:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==3 && min>=30)//3:30-3:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==4 && min<30)//4:00-4:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==4 && min>=30)//4:30-4:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==5 && min<30)//5:00-5:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==5 && min>=30)//5:30-5:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==6 && min<30)//6:00-6:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==6 && min>=30)//6:30-6:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==7 && min<30)//7:00-7:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==7 && min>=30)//7:30-7:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==8 && min<30)//8:00-8:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==8 && min>=30)//8:30-8:59
			{
				document.getElementById("cell4").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("830930").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==9 && min<30)//9:00-9:30
			{
				document.getElementById("cell4").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("830930").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==9 && min>=30)//9:30-9:59
			{
				document.getElementById("cell4").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("9301030").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==10 && min<30)//10:00-10:30
			{
				document.getElementById("cell4").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("9301030").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==10 && min>=30)//10:30-10:59
			{
				document.getElementById("cell4").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("10301130").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==11 && min<30)//11:00-11:30
			{
				document.getElementById("cell4").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("10301130").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==11 && min>=30)//11:30-11:59
			{
				document.getElementById("cell11").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("11301230").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==12 && min<30)//12:00-12:30
			{
				document.getElementById("cell11").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Academic Advisery<br>Room: C25<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("11301230").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==12 && min>=30)//12:30-12:59
			{
				document.getElementById("cell26").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Ethics<br>Room: C13<br>Teacher: </a></b>';
				document.getElementById("12301330").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==13 && min<30)//13:00-13:30
			{
				document.getElementById("cell26").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Ethics<br>Room: C13<br>Teacher: </a></b>';
				document.getElementById("12301330").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==13 && min>=30)//13:30-13:59
			{
				document.getElementById("cell16").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Ethics<br>Room: C13<br>Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room :B26<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("13301430").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==14 && min<30)//14:00-14:30
			{
				document.getElementById("cell16").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Ethics<br>Room: C13<br>Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room :B26<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("13301430").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==14 && min>=30)//14:30-14:59
			{
				document.getElementById("cell16").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Ethics<br>Room: C13<br>Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room :B26<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("14301530").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==15 && min<30)//15:00-15:30
			{
				document.getElementById("cell16").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Ethics<br>Room: C13<br>Teacher: </a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room :B26<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("14301530").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==15 && min>=30)//15:30-15:59
			{
				document.getElementById("cell21").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room :B26<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("15301630").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==16 && min<30)//16:00-16:30
			{
				document.getElementById("cell21").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room :B26<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("15301630").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==16 && min>=30)//16:30-16:59
			{
				document.getElementById("cell21").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room :B26<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("16301730").style = 'background-color:#26ff26;border-style:solid;border-width:2px;'; 
			}
			else if(hr==17 && min<30)//17:00-17:30
			{
				document.getElementById("cell21").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">C.L.D.D.<br>Room :B26<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("16301730").style = 'background-color:#26ff26;border-style:solid;border-width:2px;'; 
			}
			else if(hr==17 && min>=30)//17:30-17:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==18 && min<30)//18:00-18:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==18 && min>=30)//18:30-18:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==19 && min<30)//19:00-19:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==19 && min>=30)//19:30-19:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==20 && min<30)//20:00-20:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==20 && min>=30)//20:30-20:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==21 && min<30)//21:00-21:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==21 && min>=30)//21:30-21:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==22 && min<30)//22:00-22:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==22 && min>=30)//22:30-22:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==23 && min<30)//23:00-23:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==23 && min>=30)//23:30-23:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else
			{
				//indicate non school hour
			}
		}
		else if(day==5)//Friday
		{
			document.getElementById("friday").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';//hilight friday 
			if(hr==0 && min<30)//0:00-0:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==0 && min>=30)//0:30-0:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==1 && min<30)//1:00-1:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==1 && min>=30)//1:30-1:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==2 && min<30)//2:00-2:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==2 && min>=30)//2:30-2:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==3 && min<30)//3:00-3:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==3 && min>=30)//3:30-3:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==4 && min<30)//4:00-4:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==4 && min>=30)//4:30-4:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==5 && min<30)//5:00-5:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==5 && min>=30)//5:30-5:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==6 && min<30)//6:00-6:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==6 && min>=30)//6:30-6:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==7 && min<30)//7:00-7:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==7 && min>=30)//7:30-7:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==8 && min<30)//8:00-8:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==8 && min>=30)//8:30-8:59
			{
				document.getElementById("cell5").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("830930").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==9 && min<30)//9:00-9:30
			{
				document.getElementById("cell5").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("830930").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==9 && min>=30)//9:30-9:59
			{
				document.getElementById("cell24").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("9301030").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==10 && min<30)//10:00-10:30
			{
				document.getElementById("cell24").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("9301030").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==10 && min>=30)//10:30-10:59
			{
				document.getElementById("cell24").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("10301130").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==11 && min<30)//11:00-11:30
			{
				document.getElementById("cell24").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Discrete Maths<br>Room: B26<br>Teacher: Mr. Palmer</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("10301130").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==11 && min>=30)//11:30-11:59
			{
				document.getElementById("cell25").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("11301230").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==12 && min<30)//12:00-12:30
			{
				document.getElementById("cell25").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">NO CLASS</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("11301230").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==12 && min>=30)//12:30-12:59
			{
				document.getElementById("cell26").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Writing<br>Room: B26<br>Teacher: keith Samms</a></b>';
				document.getElementById("12301330").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==13 && min<30)//13:00-13:30
			{
				document.getElementById("cell26").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">LUNCH</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Academic Writing<br>Room: B26<br>Teacher: keith Samms</a></b>';
				document.getElementById("12301330").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==13 && min>=30)//13:30-13:59
			{
				document.getElementById("cell17").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Academic Writing<br>Room: B26<br>Teacher: keith Samms</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Activity</a></b>';
				document.getElementById("13301430").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==14 && min<30)//14:00-14:30
			{
				document.getElementById("cell17").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Academic Writing<br>Room: B26<br>Teacher: keith Samms</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Activity</a></b>';
				document.getElementById("13301430").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==14 && min>=30)//14:30-14:59
			{
				document.getElementById("cell17").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Academic Writing<br>Room: B26<br>Teacher: keith Samms</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Activity</a></b>';
				document.getElementById("14301530").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==15 && min<30)//15:00-15:30
			{
				document.getElementById("cell17").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Academic Writing<br>Room: B26<br>Teacher: keith Samms</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Activity</a></b>';
				document.getElementById("14301530").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==15 && min>=30)//15:30-15:59
			{
				document.getElementById("cell22").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Activity</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("15301630").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==16 && min<30)//16:00-16:30
			{
				document.getElementById("cell22").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Activity</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("15301630").style = 'background-color:#26ff26;border-style:solid;border-width:2px;';
			}
			else if(hr==16 && min>=30)//16:30-16:59
			{
				document.getElementById("cell22").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Activity</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("16301730").style = 'background-color:#26ff26;border-style:solid;border-width:2px;'; 
			}
			else if(hr==17 && min<30)//17:00-17:30
			{
				document.getElementById("cell22").style = 'background-color:#37d7ff;border-style:solid;border-width:2px;';
				document.getElementById("current_class").innerHTML = '<b><a href="#">Activity</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("16301730").style = 'background-color:#26ff26;border-style:solid;border-width:2px;'; 
			}
			else if(hr==17 && min>=30)//17:30-17:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==18 && min<30)//18:00-18:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==18 && min>=30)//18:30-18:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==19 && min<30)//19:00-19:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==19 && min>=30)//19:30-19:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==20 && min<30)//20:00-20:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==20 && min>=30)//20:30-20:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==21 && min<30)//21:00-21:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==21 && min>=30)//21:30-21:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==22 && min<30)//22:00-22:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==22 && min>=30)//22:30-22:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==23 && min<30)//23:00-23:30
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else if(hr==23 && min>=30)//23:30-23:59
			{
				document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
				document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty</a></b>';
				document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
			}
			else
			{
				//indicate non school hour
			}
		}
		else if(day==6)//Saturday
		{
			document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
			document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty</a></b>';
			document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
		}
		else if(day==0)//Sunday
		{
			document.getElementById("current_class").innerHTML = '<b><a href="#">NON SCHOOL HOUR</a></b>';
			document.getElementById("next_class").innerHTML = '<b><a href="#">Data Structures<br>Room: B24<br>Teacher: Miss Mighty</a></b>';
			document.getElementById("nonschoolhour").style = 'background-color:#ff5226;border-style:solid;border-width:2px;';
		}
		else//throw error
		{
		//throw error here
		}
	},
	resetday:function(){
		document.getElementById("monday").style = '';//reset monday
		document.getElementById("tuesday").style = '';//reset tuesday
		document.getElementById("wednsday").style = '';//reset wednsday
		document.getElementById("thursday").style = '';//reset thursday
		document.getElementById("friday").style = '';//reset friday 
		document.getElementById("nonschoolhour").style = '';//reset non school hour when defined by date
	},
	resetsubcell:function(){
		document.getElementById("cell1").style='';
		document.getElementById("cell2").style='';
		document.getElementById("cell3").style='';
		document.getElementById("cell4").style='';
		document.getElementById("cell5").style='';
		document.getElementById("cell6").style='';
		document.getElementById("cell7").style='';
		document.getElementById("cell8").style='';
		document.getElementById("cell10").style='';
		document.getElementById("cell11").style='';
		document.getElementById("cell13").style='';
		document.getElementById("cell14").style='';
		document.getElementById("cell15").style='';
		document.getElementById("cell16").style='';
		document.getElementById("cell17").style='';
		document.getElementById("cell18").style='';
		document.getElementById("cell19").style='';
		document.getElementById("cell20").style='';
		document.getElementById("cell21").style='';
		document.getElementById("cell22").style='';
		document.getElementById("cell23").style='';
		document.getElementById("cell24").style='';
		document.getElementById("cell25").style='';
		document.getElementById("cell26").style='';
		document.getElementById("current_class").innerHTML = 'Reset';
		document.getElementById("next_class").innerHTML = 'Reset';
	},
	resettime:function(){
		document.getElementById("830930").style = '';
		document.getElementById("9301030").style = '';
		document.getElementById("10301130").style = ''; 
		document.getElementById("11301230").style = ''; 
		document.getElementById("12301330").style = '';
		document.getElementById("13301430").style = '';
		document.getElementById("14301530").style = ''; 
		document.getElementById("15301630").style = '';
		document.getElementById("16301730").style = '';
		document.getElementById("nonschoolhour").style = '';//reset non school hour when defined by time
	},	
}

//misc functions
copy={
	copyText:"", //The stuff u want to copy
	email1:function(){
		this.copyText='samuelmatheson15@gmail.com';
		this.push();
	},
	email2:function(){
		this.copyText='smatheson17h@mymbcc.edu.jm';
		this.push();
	},
	phone:function(){
		this.copyText='876-5744-801';
		this.push();
	},
	push:function(){
			this.copyText.toString(); //Makes it a string so the clipboard will accept it
			var temptxtbox = document.createElement("input"); //creates an 'input' element and assigns it to 'temptxtbox'
			document.body.appendChild(temptxtbox); //Puts the input element into the document
			temptxtbox.setAttribute("id", "temp_copy"); //Assigns an id to the input element
			document.getElementById("temp_copy").value = this.copyText; //Puts the txt u want to copy into the input element
			temptxtbox.select(); //Makes the curser select the text that's in the input element
			document.execCommand("copy"); //Commands the document to copy the selected text
			document.body.removeChild(temptxtbox); //Removes the input element from the document
	},
}

