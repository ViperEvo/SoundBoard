document.body.addEventListener('keyup', (t)=>{
    console.log(t)
    if (t.keyCode == 81) 
    {
        document.getElementById('bBoom').style.backgroundColor = "red";
        console.log("ee");
    }
    if (t.keyCode == 119) 
    {
        document.getElementById('bClap').style.backgroundColor = "red";
    }
    if (t.keyCode == 101) 
    {
        document.getElementById('bHiHat').style.backgroundColor = "red";
    }
    if (t.keyCode == 114) 
    {
        document.getElementById('bKick').style.backgroundColor = "red";
    }
    if (t.keyCode == 97) 
    {
        document.getElementById('bBoom').style.backgroundColor = "red";
    }
    if (t.keyCode == 115) 
    {
        document.getElementById('bBoom').style.backgroundColor = "red";
    }
    if (t.keyCode == 100) 
    {
        document.getElementById('bBoom').style.backgroundColor = "red";
    }
    if (t.keyCode == 102) 
    {
        document.getElementById('bBoom').style.backgroundColor = "red";
    }
    if (t.keyCode == 122) 
    {
        document.getElementById('bBoom').style.backgroundColor = "red";
    }
    if (t.keyCode == 120) 
    {
        document.getElementById('bBoom').style.backgroundColor = "red";
    }
    if (t.keyCode == 99) 
    {
        document.getElementById('bBoom').style.backgroundColor = "red";
    }
    if (t.keyCode == 118) 
    {
        document.getElementById('bBoom').style.backgroundColor = "red";
    }
})
document.body.addEventListener('keypress', (e)=>{
    
    
    if (e.charCode == 113) 
    {
        let sClap = document.querySelector('#sBoom')
        sClap.currentTime = 0
        sClap.play()
        
    }
    if (e.charCode == 119) 
    {
        let sClap = document.querySelector('#sClap')
        sClap.currentTime = 0
        sClap.play()
    }
    if (e.charCode == 101) 
    {
        let sClap = document.querySelector('#sHiHat')
        sClap.currentTime = 0
        sClap.play()
    }
    if (e.charCode == 114) 
    {
        let sClap = document.querySelector('#sKick')
        sClap.currentTime = 0
        sClap.play()
    }
    if (e.charCode == 97) 
    {
        let sClap = document.querySelector('#sMyMan')
        sClap.currentTime = 0
        sClap.play()
    }
    if (e.charCode == 115) 
    {
        let sClap = document.querySelector('#sOpenHat')
        sClap.currentTime = 0
        sClap.play()
    }
    if (e.charCode == 100) 
    {
        let sClap = document.querySelector('#sPickleRick')
        sClap.currentTime = 0
        sClap.play()
    }
    if (e.charCode == 102) 
    {
        let sClap = document.querySelector('#sRide')
        sClap.currentTime = 0
        sClap.play()
    }
    if (e.charCode == 122) 
    {
        let sClap = document.querySelector('#sSnap')
        sClap.currentTime = 0
        sClap.play()
    }
    if (e.charCode == 120) 
    {
        let sClap = document.querySelector('#sSnare')
        sClap.currentTime = 0
        sClap.play()
    }
    if (e.charCode == 99) 
    {
        let sClap = document.querySelector('#sTink')
        sClap.currentTime = 0
        sClap.play()
    }
    if (e.charCode == 118) 
    {
        let sClap = document.querySelector('#sTom')
        sClap.currentTime = 0
        sClap.play()
    }
    
})


