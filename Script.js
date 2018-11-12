
document.body.addEventListener('keypress', (e)=>{

    path1 = RecordPath(e.charCode);
    switch (e.charCode)
    {
    case 113:
    {
        let sBoom = document.querySelector('#sBoom')
        sBoom.currentTime = 0
        sBoom.play()
        document.getElementById('bBoom').style.backgroundColor = "rgb(44, 54, 64)";
        break; 
    }
    case 119:
    {
        let sClap = document.querySelector('#sClap')
        sClap.currentTime = 0
        sClap.play()
        document.getElementById('bClap').style.backgroundColor = 'rgba(44, 54, 64)';
        break;
    }
    case 101:
    {
        let sHiHat = document.querySelector('#sHiHat')
        sHiHat.currentTime = 0
        sHiHat.play()
        document.getElementById('bHiHat').style.backgroundColor = 'rgba(44, 54, 64)';
        break;
    }
    case 114:
    {
        let sKick = document.querySelector('#sKick')
        sKick.currentTime = 0
        sKick.play()
        document.getElementById('bKick').style.backgroundColor = 'rgba(44, 54, 64)';
        break;
    }
    case 97:
    {
        let sMyMan = document.querySelector('#sMyMan')
        sMyMan.currentTime = 0
        sMyMan.play()
        document.getElementById('bMyMan').style.backgroundColor = 'rgba(44, 54, 64)';
        break;
    }
    case 115:
    {
        let sOpenHat = document.querySelector('#sOpenHat')
        sOpenHat.currentTime = 0
        sOpenHat.play()
        document.getElementById('bOpenHat').style.backgroundColor = 'rgba(44, 54, 64)';
        break;
    }
    case 100:
    {
        let sPickleRick = document.querySelector('#sPickleRick')
        sPickleRick.currentTime = 0
        sPickleRick.play()
        document.getElementById('bPickleRick').style.backgroundColor = 'rgba(44, 54, 64)';
        break;
    }
    case 102:
    {
        let sRide = document.querySelector('#sRide')
        sRide.currentTime = 0
        sRide.play()
        document.getElementById('bRide').style.backgroundColor = 'rgba(44, 54, 64)';
        break;
    }
    case 122:
    {
        let sSnap = document.querySelector('#sSnap')
        sSnap.currentTime = 0
        sSnap.play()
        document.getElementById('bSnap').style.backgroundColor = 'rgba(44, 54, 64)';
        break;
    }
    case 120:
    {
        let sSnare = document.querySelector('#sSnare')
        sSnare.currentTime = 0
        sSnare.play()
        document.getElementById('bSnare').style.backgroundColor = 'rgba(44, 54, 64)';
        break;
    }
    case 99:
    {
        let sTink = document.querySelector('#sTink')
        sTink.currentTime = 0
        sTink.play()
        document.getElementById('bTink').style.backgroundColor = 'rgba(44, 54, 64)';
        break;
    }
    case 118:
    {
        let sTom = document.querySelector('#sTom')
        sTom.currentTime = 0
        sTom.play()
        document.getElementById('bTom').style.backgroundColor = 'rgba(44, 54, 64)';
        break;
    }
    }
})
document.body.addEventListener('keyup', (t)=>{
    
    switch (t.keyCode)
    {
    case 81:
    {
        document.getElementById('bBoom').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
        break;
    }
    case 87:
    {
        document.getElementById('bClap').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
        break;
    }
    case 69:
    {
        document.getElementById('bHiHat').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
        break;
    }
    case 82:
    {
        document.getElementById('bKick').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
        break;
    }
    case 65:
    {
        document.getElementById('bMyMan').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
        break;
    }
    case 83:
    {
        document.getElementById('bOpenHat').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
        break;
    }
    case 68:
    {
        document.getElementById('bPickleRick').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
        break;
    }
    case 70:
    {
        document.getElementById('bRide').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
        break;
    }
    case 90:
    {
        document.getElementById('bSnap').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
        break;
    }
    case 88:
    {
        document.getElementById('bSnare').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
        break;
    }
    case 67:
    {
        document.getElementById('bTink').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
        break;
    }
    case 86:
    {
        document.getElementById('bTom').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
        break;
    }
    }
})

let record = document.querySelector("#record");
    let play = document.querySelector("#play");
    let d = new Date();
    let time;
    let tab = new Array();
    let path1 = new Array();;

    record.addEventListener( 'change', function() {
        if(this.checked) {
            d = new Date();
            time = d.getTime();
            tab = new Array();
        }
    });

    play.addEventListener('click' ,  function(){
        Reader(path1);
    });  

     function RecordPath(charCode)
     {
        
         d = new Date();
         
         if(document.querySelector("#record").checked == true)
         {
            
             tab.push(d.getTime() - time , charCode);
             return tab;
            
         }
     }

    function Reader(tab)
    {
       
        for(let i = 0 ; i< tab.length ; i+=2)
               {
             
                setTimeout(function(){PlayPath(tab[i+1])} , tab[i] );
               }
       
    }
    function PlayPath(_charCode )
    {
        switch(_charCode)
        {
            case 113: sBoom.play();
            break;
            case 119: sClap.play();
            break;
            case 101: sHiHat.play();
            break;
            case 114: sKick.play();
            break;
            case 97: sMyMan.play();
            break;
            case 115: sOpenHat.play();
            break;
            case 100: sPickleRick.play();
            break;
            case 102: sRide.play();
            break;
            case 122: sSnap.play();
            break;
            case 120: sSnare.play();
            break;
            case 99: sTink.play();
            break;
            case 118: sTom.play();
            break;
        }
    }






