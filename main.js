/*setInterval(function(){
    var s = 1 
    var d = s + s
    console.log(d)
}, 1000);*/


s = document.getElementById('seconds')
m = document.getElementById('minutes')
h = document.getElementById('hour')
d = document.getElementById('day')



var a = 60
var minutes = 60
var hour = 60
var day = 31

setInterval(function(){
    cont = a-=1
    s.innerText = cont
    if(a==0){
        m.innerText = minutes -1 
        minutes = minutes -1   
    }
    
    if(minutes == 0){

        h.innerText = hour -1
        hour = hour -1

        
    }
    if(hour == 0){
        d.innerText = day -1
        day = day -1
    }
    
    /// verificaçao de zeramento
    if(a<=0){
        a = 60
    }
    if(minutes <= 0){
        minutes = 60
    }
    if(hour <= 0){
        hour = 60
    }
    if(day <= 0){
        day = 31
    }
    
    
}, 0)




    


