
var win = Ti.UI.createWindow({
		backgroundColor:'#fff',	
	    navBarHidden:true,
	    url:'SplashView.js',
	    exitOnClose: true	
});

win.orientationModes = [Ti.UI.PORTRAIT];

//win.add(webview);

win.open();

/*
var win = Ti.UI.createWindow({
				backgroundColor:'#fff',	
				navBarHidden:true	
});
	
var interVal1;
var interVal2;   	
var flag=31;
var readingSpeed;	
		
// Create a view to animate
var Sliderview = Titanium.UI.createView({ 
  top: 30,
  left:0,                                                 
  borderRadius:10,                            
  backgroundColor:'blue',         
  width:320,                       
  height:'60'                         
});

var display_lbl =  Titanium.UI.createLabel({
	text:"5:",
	height:'auto',
	width:'auto',
	top:5,
	left:200,                                                               
	color:'#fff',
	borderRadius:10,
	backgroundColor:'#000',
	font:{                   
		fontSize:20,
		fontWeight:'bold'                                                       
	},                                 
	textAlign:'center'                          
});      

var play =Titanium.UI.createButton({
    backgroundImage:'images/play_new1_iphone.png',
    width:'20',
    left:0,                               
    height:'20',
});
    	          
var pause =Titanium.UI.createButton({
    backgroundImage:'images/pause_new1_iphone.png',
    width:'20',
    left:10,
    height:'20',
});
   
var TimeBarView = Titanium.UI.createView({
  top: 40,
  left:40,
  right:'20',                                                
  borderRadius:8,                            
  backgroundColor:'white',         
  width:'270',
  height:'15'
});    
  
var one = Titanium.UI.createLabel({
	color:'#000',
	text:'10',
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'28',
	width:'auto',
	top:'0',
    height:'auto'	
});

var two = Titanium.UI.createLabel({
	color:'#000',
	text:'20',
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'56',
	width:'auto',
	top:'0',
    height:'auto'	
});

var three = Titanium.UI.createLabel({
	color:'#000',
	text:'30',
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'84',
	width:'auto',
	top:'0',
    height:'auto'	
});

var four = Titanium.UI.createLabel({
	color:'#000',
	text:'40',
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'112',
	width:'auto',
	top:'0',
    height:'auto'	
});

var five = Titanium.UI.createLabel({
	color:'#000',
	text:'50',
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'140',
	width:'auto',
	top:'0',
    height:'auto'	
});

var six = Titanium.UI.createLabel({
	color:'#000',
	text:'60',
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'168',
	width:'auto',
	top:'0',
    height:'auto'	
});

var seven = Titanium.UI.createLabel({
	color:'#000',
	text:'70',
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'196',
	width:'auto',
	top:'0',
    height:'auto'	
});  

var eight = Titanium.UI.createLabel({
	color:'#000',
	text:'80',                                              
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'224',
	width:'auto',
	top:'0',
    height:'auto'	
});   
          
var nine = Titanium.UI.createLabel({                             
	color:'#000',
	text:'90',                              
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'252',
	width:'auto',
	top:'0',                                                                                               
    height:'auto'	                              
});
 
var ten = Titanium.UI.createLabel({                 
	color:'#000',                         
	text:'100',                               
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'280',
	width:'auto',                                                        
	top:'0',
    height:'auto'	
});      	
	
var slider = Titanium.UI.createSlider({
    top: 8,
    min: 0,
    left:'45',
    right:'20',
    max: 100,
    width: '87%',                                  
    value:'30'                                               
});    	


Sliderview.add(play);
Sliderview.add(pause);
pause.hide();

TimeBarView.add(one);
TimeBarView.add(two);
TimeBarView.add(three);
TimeBarView.add(four);
TimeBarView.add(five);
TimeBarView.add(six);
TimeBarView.add(seven);
TimeBarView.add(eight);
TimeBarView.add(nine);
TimeBarView.add(ten);

Sliderview.add(slider);
Sliderview.add(TimeBarView);  
win.add(display_lbl);

slider.addEventListener('change', function(e){                                       
    readingSpeed = e.value;
    Ti.API.info('reading speed value'+readingSpeed);   
});  

        var counter=0;                                       

        var pauseTime=display_lbl.text;
      
        Ti.API.info('display time'+pauseTime);
      
        var str=pauseTime.replace(':',',');
                          
	    //Create time counter object
		var countDown =  function( m , s, fn_tick, fn_end  ) {
		
				return {
					
					total_sec:m*60+s,
					timer:this.timer,
					set: function(m,s) {
						
						this.total_sec = parseInt(m)*60+parseInt(s);
						this.time = {m:m,s:s};
						return this;
					},
					start: function() {                 
						var self = this;
						this.timer = setInterval( function() {
							
							if (self.total_sec) {
								//alert("self.total_sec"+self.total_sec);
								self.total_sec--;
								self.time = { m : parseInt(self.total_sec/60), s: (self.total_sec%60) };
								fn_tick();
							}
							else {                 
								self.stop();
								fn_end();
							}
							}, 1000 );                                                                                   
						return this;                                       
					},                                                 
					stop: function() {
						clearInterval(this.timer);
						this.time = {m:0,s:0};
						this.total_sec = 0;
						return this;
					}
				};
			};

         //.......... timer set
         
         var my_timer;
         
         function timer (minute,second) {
         
         //alert('minute'+minute+'second'+second);
         
         my_timer = new countDown(minute,second,                                                
          function() {     
          	  display_lbl.text =my_timer.time.m+" : "+my_timer.time.s;
          	  Ti.API.info('display text'+display_lbl.text);
          	 // my_timer.set(my_timer.time.m,my_timer.time.s);
          	  
          });                                          
       }      
 
play.addEventListener('click',function(){
    		
    		play.hide();
    		pause.show();
    		
    		//....speed counter
    		
    		//alert('reading speed'+readingSpeed);
    		
		   if (readingSpeed<=10) {
		    	
		    var duration=300;
		    counting(duration);
		    var str=display_lbl.text;
		    var str2=str.split(':');
		    timer (str2[0],00); 
		    my_timer.start(); 
		  
		    }else if (readingSpeed>10 && readingSpeed <=20){
		   
		    var duration=250;
		    counting(duration);
		    var str=display_lbl.text;
		    var str2=str.split(':');
		    timer (str2[0],00);
		    my_timer.start();  
// 		    
		    } else if (readingSpeed>20 && readingSpeed <=30) {
		   
		     //alert('in the 30 block');
		     var duration=200;
		     counting(duration);
		     var str=display_lbl.text;
		     var str2=str.split(':');
		     
		     //alert('main str'+str2);
		     
		     //alert('0 index str'+str2[0]);
		     
		     //alert('0 index str'+str2[1]);
		     
		     Ti.App.Properties.setString('string',str2[1]);
		     
		     timer (Math.round(str2[0]),Math.round(str2[1]));
		     
		     my_timer.start();
		     
// 		                                                                
		    }else if (readingSpeed>30 && readingSpeed<=40){
		    
		    var duration=150;
		    counting(duration);
		    var str=display_lbl.text;
		    var str2=str.split(':');
		    timer(str2[0],00);
		    my_timer.start();  
// 		   
		    }else if (readingSpeed>40 && readingSpeed<=50){
		      
		     var duration=100;
		     counting(duration);
		     // var str=display_lbl.text;
		     // var str2=str.split(':');
		     // timer (str2[0],00);
		     // my_timer.start();  
// 		   
		    }else if (readingSpeed>50 && readingSpeed<=60){
		  
		    var duration=50;
		    counting(duration);
		    // var str=display_lbl.text;
		    // var str2=str.split(':');
		    // timer (str2[0],00);
		    // my_timer.start();  
// 		   
		    }else if (readingSpeed>60 && readingSpeed<=70){
		   
		    var duration=40;
		    counting(duration);
		    // var str=display_lbl.text;
		    // var str2=str.split(':');
		    // timer (str2[0],00);
		    // my_timer.start();  
// 		  
		    }else if (readingSpeed>70 && readingSpeed<=80){
		  
		    var duration=30;
		    counting(duration);
		    // var str=display_lbl.text;
		    // var str2=str.split(':');
		    // timer (str2[0],00);
		    // my_timer.start();  
// 		  
		     }else if (readingSpeed>80 && readingSpeed<=90){
		  
		    var duration=20;
		    counting(duration);
		    // var str=display_lbl.text;
		    // var str2=str.split(':');
		    // timer (str2[0],00);
		    // my_timer.start();  
// 		    
		    }else if (readingSpeed>90){                 
		    
		    var duration=10;
		    counting(duration);
		    // var str=display_lbl.text;
		    // var str2=str.split(':');
		    // timer (str2[0],00);           
		    // my_timer.start();  
// 		 		
		   }  
		    
    		//end speed counter
    		 
    	    slider.animate({
			left:650, 
			backgroundColor:'#00f', 
			duration:150, 
			curve:Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
		    });
		  
		    TimeBarView.animate(                                                                                                                         
		    {                                                                                                                                                                                                                 
		    left:650,                                                                                                                                     
		    duration:500,                 
			curve:Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
		    });
		    
});
    
pause.addEventListener('click',function(e){
  	        pause.hide();
    		play.show();
    		my_timer.stop();
            clearTimeout(interVal1);
            //clearTimeout(interVal2);
            //alert('flag val'+flag);
            Ti.API.info('flag Val pause'+flag);
            
            Sliderview.setTop(flag);

		     slider.animate(                                                                                                       
		    {                                                                                                                  
		    left:55,                                    
		    duration:150,                                           
			curve:Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
		    }); 
		    
		    TimeBarView.animate(                                                                                                               
		    {                                                                        
		    left:55,                                                                                             
		    duration:150,                 
			curve:Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
		    });
            
});
     
 var f=0;    
     
function counting(duration){

var min = duration;

var timeOut = function(){
 
Stundensignal(min); // Stundensignal means "hour signal"
 
}
 interVal1=setTimeout (timeOut, min);
};
 
function Stundensignal(min1){
	
if(flag>350){
	flag=31;
	f=1;
	var min =min1;
	Sliderview.setTop(flag);
	
	//clearTimeout(interVal1);
	//clearTimeout(interVal2);

 var pageChange=function(){
		counting(min1);
		
	}
	
 interVal2=setTimeout (pageChange, min1);
	
}else{
	    Sliderview.setTop(flag);
        flag=flag+.9;
	    clearTimeout(interVal1);
        
        if(f==1)
        {
        	clearTimeout(interVal2);
        }
        //clearTimeout(interVal2);
		counting(min1);
}
 
} 
   
win.add(Sliderview);

win.open();
*/
/*
 
var imgPath = Titanium.Filesystem.resourcesDirectory+"images/";
var imageView = Ti.UI.createImageView({
    top: 0,
    left: 0,
    image: imgPath+'actionbar/actionbar_bg.png',
    height: 70,
    width: '100%',
    zIndex: 1000
});
 
*/

/*
var win = Ti.UI.createWindow({
				backgroundColor:'#fff',	
				navBarHidden:true	
});
	
var interVal1;
var interVal2;   	
var flag=31;
var readingSpeed;	
		
// Create a view to animate
var Sliderview = Titanium.UI.createView({ 
  top: 30,
  left:0,                                                 
  borderRadius:10,                            
  backgroundColor:'blue',         
  width:320,                       
  height:'60'                         
});

var display_lbl =  Titanium.UI.createLabel({
	text:"5:",
	height:'auto',
	width:'auto',
	top:5,
	left:200,                                                               
	color:'#fff',
	borderRadius:10,
	backgroundColor:'#000',
	font:{                   
		fontSize:20,
		fontWeight:'bold'                                                       
	},                                 
	textAlign:'center'                          
});      

var play =Titanium.UI.createButton({
    backgroundImage:'images/play_new1_iphone.png',
    width:'20',
    left:0,                               
    height:'20',
});
    	          
var pause =Titanium.UI.createButton({
   backgroundImage:'images/pause_new1_iphone.png',
    width:'20',
    left:10,
    height:'20',
});
   
var TimeBarView = Titanium.UI.createView({
  top: 40,
  left:40,
  right:'20',                                                
  borderRadius:8,                            
  backgroundColor:'white',         
  width:'270',
  height:'15'
});    
  
var one = Titanium.UI.createLabel({
	color:'#000',
	text:'10',
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'28',
	width:'auto',
	top:'0',
    height:'auto'	
});

var two = Titanium.UI.createLabel({
	color:'#000',
	text:'20',
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'56',
	width:'auto',
	top:'0',
    height:'auto'	
});

var three = Titanium.UI.createLabel({
	color:'#000',
	text:'30',
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'84',
	width:'auto',
	top:'0',
    height:'auto'	
});

var four = Titanium.UI.createLabel({
	color:'#000',
	text:'40',
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'112',
	width:'auto',
	top:'0',
    height:'auto'	
});

var five = Titanium.UI.createLabel({
	color:'#000',
	text:'50',
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'140',
	width:'auto',
	top:'0',
    height:'auto'	
});

var six = Titanium.UI.createLabel({
	color:'#000',
	text:'60',
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'168',
	width:'auto',
	top:'0',
    height:'auto'	
});

var seven = Titanium.UI.createLabel({
	color:'#000',
	text:'70',
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'196',
	width:'auto',
	top:'0',
    height:'auto'	
});  

var eight = Titanium.UI.createLabel({
	color:'#000',
	text:'80',                                              
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'224',
	width:'auto',
	top:'0',
    height:'auto'	
});   
          
var nine = Titanium.UI.createLabel({                             
	color:'#000',
	text:'90',                              
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'252',
	width:'auto',
	top:'0',                                                                                               
    height:'auto'	                              
});
 
var ten = Titanium.UI.createLabel({                 
	color:'#000',                         
	text:'100',                               
	font:{fontSize:'10dp',fontFamily:"Rollout"},
	left:'280',
	width:'auto',                                                        
	top:'0',
    height:'auto'	
});      	
	
var slider = Titanium.UI.createSlider({
    top: 8,
    min: 0,
    left:'45',
    right:'20',
    max: 100,
    width: '87%',                                  
    value:'30'                                               
});    	


Sliderview.add(play);
Sliderview.add(pause);
pause.hide();

TimeBarView.add(one);
TimeBarView.add(two);
TimeBarView.add(three);
TimeBarView.add(four);
TimeBarView.add(five);
TimeBarView.add(six);
TimeBarView.add(seven);
TimeBarView.add(eight);
TimeBarView.add(nine);
TimeBarView.add(ten);

Sliderview.add(slider);
Sliderview.add(TimeBarView);  
win.add(display_lbl);

slider.addEventListener('change', function(e){                                       
    readingSpeed = e.value;
    Ti.API.info('reading speed value'+readingSpeed);   
});  

        var counter=0;                                       

        var pauseTime=display_lbl.text;
      
        Ti.API.info('display time'+pauseTime);
      
        var str=pauseTime.replace(':',',');
                          
	    //Create time counter object
		var countDown =  function( m , s, fn_tick, fn_end  ) {
		
				return {
					
					total_sec:m*60+s,
					timer:this.timer,
					set: function(m,s) {
						
						this.total_sec = parseInt(m)*60+parseInt(s);
						this.time = {m:m,s:s};
						return this;
					},
					start: function() {                 
						var self = this;
						this.timer = setInterval( function() {
							
							if (self.total_sec) {
								//alert("self.total_sec"+self.total_sec);
								self.total_sec--;
								self.time = { m : parseInt(self.total_sec/60), s: (self.total_sec%60) };
								fn_tick();
							}
							else {                 
								self.stop();
								fn_end();
							}
							}, 1000 );                                                                                   
						return this;                                       
					},                                                 
					stop: function() {
						clearInterval(this.timer);
						this.time = {m:0,s:0};
						this.total_sec = 0;
						return this;
					}
				};
			};

         //.......... timer set
         
         var my_timer;
         
         function timer (minute,second) {
         
         //alert('minute'+minute+'second'+second);
         
         my_timer = new countDown(minute,second,                                                
          function() {     
          	  display_lbl.text =my_timer.time.m+" : "+my_timer.time.s;
          	  Ti.API.info('display text'+display_lbl.text);
          	 // my_timer.set(my_timer.time.m,my_timer.time.s);
          	  
          });                                          
       }      
 
play.addEventListener('click',function(){
    		
    		play.hide();
    		pause.show();
    		
    		
		    if (readingSpeed<=10) {
		    var duration=300;
		    counting(duration);
		    var str=display_lbl.text;
		    var str2=str.split(':');
		    timer (str2[0],00); 
		    my_timer.start(); 
		    }else if (readingSpeed>10 && readingSpeed <=20){
		    var duration=250;
		    counting(duration);
		    var str=display_lbl.text;
		    var str2=str.split(':');
		    timer (str2[0],00);
		    my_timer.start();  
// 		  
            } else if (readingSpeed>20 && readingSpeed <=30) {
		   
		    // alert('in the 30 block');
		     var duration=200;
		     counting(duration);
		     var str=display_lbl.text;
		     var str2=str.split(':');
		     
		     //alert('main str'+str2);
		     
		     //alert('0 index str'+str2[0]);
		     
		     //alert('0 index str'+str2[1]);
		     
		     Ti.App.Properties.setString('string',str2[1]);
		     
		     timer (Math.round(str2[0]),Math.round(str2[1]));
		     
		     my_timer.start();
		     
// 		                                                                
		    }else if (readingSpeed>30 && readingSpeed<=40){
		    
		    var duration=150;
		    counting(duration);
		    var str=display_lbl.text;
		    var str2=str.split(':');
		    timer(str2[0],00);
		    my_timer.start();  
// 		   
		    }else if (readingSpeed>40 && readingSpeed<=50){
		      
		     var duration=100;
		     counting(duration);
		     // var str=display_lbl.text;
		     // var str2=str.split(':');
		     // timer (str2[0],00);
		     // my_timer.start();  
// 		   
		    }else if (readingSpeed>50 && readingSpeed<=60){
		  
		    var duration=50;
		    counting(duration);
		    // var str=display_lbl.text;
		    // var str2=str.split(':');
		    // timer (str2[0],00);
		    // my_timer.start();  
// 		   
		    }else if (readingSpeed>60 && readingSpeed<=70){
		   
		    var duration=40;
		    counting(duration);
		    // var str=display_lbl.text;
		    // var str2=str.split(':');
		    // timer (str2[0],00);
		    // my_timer.start();  
// 		  
		    }else if (readingSpeed>70 && readingSpeed<=80){
		  
		    var duration=30;
		    counting(duration);
		    // var str=display_lbl.text;
		    // var str2=str.split(':');
		    // timer (str2[0],00);
		    // my_timer.start();  
// 		  
		     }else if (readingSpeed>80 && readingSpeed<=90){
		  
		    clearTimeout(interVal1);
            clearTimeout(interVal2);
		    var duration=20;
		    counting(duration);
		    var str=display_lbl.text;
		    var str2=str.split(':');
		    //timer (Math.round(str2[0]),Math.round(str2[1]));
		    timer(str2[0],00);
		    my_timer.start();
		  
		    }else if (readingSpeed>90){                 
		    
		    clearTimeout(interVal1);
            clearTimeout(interVal2); 	
		    var duration=10;
		    counting(duration);
		    var str=display_lbl.text;
		    var str2=str.split(':');
		    //timer (Math.round(str2[0]),Math.round(str2[1]));
		    timer(str2[0],00);
		    my_timer.start();
		    	
		   }  
		    
    		//end speed counter
    		 
    	    slider.animate({
			left:650, 
			backgroundColor:'#00f', 
			duration:150, 
			curve:Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
		    });
		  
		    TimeBarView.animate(                                                                                                                         
		    {                                                                                                                                                                                                                 
		    left:650,                                                                                                                                     
		    duration:500,                 
			curve:Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
		    });
		    
});
    
pause.addEventListener('click',function(e){
  	        pause.hide();
    		play.show();
    		my_timer.stop();
            //clearTimeout(interVal1);
            //clearTimeout(interVal2);
            
            clockStop();
            
            Sliderview.setTop(flag);

		     slider.animate(                                                                                                       
		    {                                                                                                                  
		    left:55,                                    
		    duration:150,                                           
			curve:Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
		    }); 
		    
		    TimeBarView.animate(                                                                                                               
		    {                                                                        
		    left:55,                                                                                             
		    duration:150,                 
			curve:Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
		    });
            
});
     
     
var timerId; 

function counting(duration) { 
	  
	  if (timerId) return
	 
	  timerId = setInterval(update, duration)
	  update()  // (*)
	
}
	 
function clockStop() {

    clearInterval(timerId)
	timerId = null

}    
    
function update(){

    Sliderview.setTop(flag);
    flag=flag+.9;
    
    if(flag>350){
	
	flag=31;
	
	Sliderview.setTop(flag);
	
    }
   
}  

     
     
 /*    
function counting(duration){
	
var min = duration;

function timeOut(){

clearTimeout(interVal2);
 
Stundensignal(min); // Stundensignal means "hour signal"
 
};

interVal1=setTimeout (timeOut, min);

};

function Stundensignal(min1){
	


if(flag>350){
	flag=31;
	timeFlag=1;
	var min =min1;
	Sliderview.setTop(flag);
	//clearTimeout(interVal2);
	
	function  pageChange(){
		counting(min1);
	}
 
 interVal2=setTimeout(pageChange, min1);
	
}else{
	Sliderview.setTop(flag);
    flag=flag+.9;
	clearTimeout(interVal1);
	counting(min1);
}
 
} 


win.add(Sliderview);

win.open();

*/