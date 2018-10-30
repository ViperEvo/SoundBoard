document.body.addEventListener('keyup', (t)=>{
    console.log(t)
    if (t.keyCode == 81) 
    {
        document.getElementById('bBoom').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
    }
    if (t.keyCode == 87) 
    {
        document.getElementById('bClap').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
    }
    if (t.keyCode == 69) 
    {
        document.getElementById('bHiHat').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
    }
    if (t.keyCode == 82) 
    {
        document.getElementById('bKick').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
    }
    if (t.keyCode == 65) 
    {
        document.getElementById('bMyMan').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
    }
    if (t.keyCode == 83) 
    {
        document.getElementById('bOpenHat').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
    }
    if (t.keyCode == 68) 
    {
        document.getElementById('bPickleRick').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
    }
    if (t.keyCode == 70) 
    {
        document.getElementById('bRide').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
    }
    if (t.keyCode == 90) 
    {
        document.getElementById('bSnap').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
    }
    if (t.keyCode == 88) 
    {
        document.getElementById('bSnare').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
    }
    if (t.keyCode == 67) 
    {
        document.getElementById('bTink').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
    }
    if (t.keyCode == 86) 
    {
        document.getElementById('bTom').style.backgroundColor = 'rgba(44, 54, 64, 0.9)';
    }
})
document.body.addEventListener('keypress', (e)=>{
    
    
    if (e.charCode == 113) 
    {
        let sClap = document.querySelector('#sBoom')
        sClap.currentTime = 0
        sClap.play()
        document.getElementById('bBoom').style.backgroundColor = "rgb(44, 54, 64)";
    }
    if (e.charCode == 119) 
    {
        let sClap = document.querySelector('#sClap')
        sClap.currentTime = 0
        sClap.play()
        document.getElementById('bClap').style.backgroundColor = 'rgba(44, 54, 64)';
    }
    if (e.charCode == 101) 
    {
        let sClap = document.querySelector('#sHiHat')
        sClap.currentTime = 0
        sClap.play()
        document.getElementById('bHiHat').style.backgroundColor = 'rgba(44, 54, 64)';
    }
    if (e.charCode == 114) 
    {
        let sClap = document.querySelector('#sKick')
        sClap.currentTime = 0
        sClap.play()
        document.getElementById('bKick').style.backgroundColor = 'rgba(44, 54, 64)';
    }
    if (e.charCode == 97) 
    {
        let sClap = document.querySelector('#sMyMan')
        sClap.currentTime = 0
        sClap.play()
        document.getElementById('bMyMan').style.backgroundColor = 'rgba(44, 54, 64)';
    }
    if (e.charCode == 115) 
    {
        let sClap = document.querySelector('#sOpenHat')
        sClap.currentTime = 0
        sClap.play()
        document.getElementById('bOpenHat').style.backgroundColor = 'rgba(44, 54, 64)';
    }
    if (e.charCode == 100) 
    {
        let sClap = document.querySelector('#sPickleRick')
        sClap.currentTime = 0
        sClap.play()
        document.getElementById('bPickleRick').style.backgroundColor = 'rgba(44, 54, 64)';
    }
    if (e.charCode == 102) 
    {
        let sClap = document.querySelector('#sRide')
        sClap.currentTime = 0
        sClap.play()
        document.getElementById('bRide').style.backgroundColor = 'rgba(44, 54, 64)';
    }
    if (e.charCode == 122) 
    {
        let sClap = document.querySelector('#sSnap')
        sClap.currentTime = 0
        sClap.play()
        document.getElementById('bSnap').style.backgroundColor = 'rgba(44, 54, 64)';
    }
    if (e.charCode == 120) 
    {
        let sClap = document.querySelector('#sSnare')
        sClap.currentTime = 0
        sClap.play()
        document.getElementById('bSnare').style.backgroundColor = 'rgba(44, 54, 64)';
    }
    if (e.charCode == 99) 
    {
        let sClap = document.querySelector('#sTink')
        sClap.currentTime = 0
        sClap.play()
        document.getElementById('bTink').style.backgroundColor = 'rgba(44, 54, 64)';
    }
    if (e.charCode == 118) 
    {
        let sClap = document.querySelector('#sTom')
        sClap.currentTime = 0
        sClap.play()
        document.getElementById('bTom').style.backgroundColor = 'rgba(44, 54, 64)';
    }
    
})


