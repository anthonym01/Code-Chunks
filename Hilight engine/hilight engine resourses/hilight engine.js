window.addEventListener('load',function(){//window loads, hilight initialize
    hilight.initialize();
});

var hilight = {
    hilight_query:document.querySelectorAll(".light_block"),
    initialize:function(){
        var i=0;
        while(this.hilight_query[i]!=null || this.hilight_query[i]!=undefined){
            this.hilight_query[i].addEventListener('mouseover',this.engine);
            i++;
            console.log('Added event listener for hilight_query: ',i);
        }
    },
    engine:function(event){
        console.log('Hilight Engine trigger fired on :',event);
        event.target.style.color='white';
        event.target.style.backgroundColor='hsl('+ hilight.hue(360,0) +',100%,40%)';//color the target
        setTimeout(()=>{event.target.style.backgroundColor='';event.target.style.color='';},1000);//un-color the target
    },
    hue(max,min){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}