// Przypisanie dźwięków do klawiszy.
document.body.addEventListener('keypress', (e)=>{
    
    path1 = RecordPath1(e.charCode);
    path2 = RecordPath2(e.charCode);
    path3 = RecordPath3(e.charCode);
    path4 = RecordPath4(e.charCode);
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
// Keyup używa innych znaków (keyCode zamiast charCode) więc musi być takie coś żeby zasygnalizować naciśnięcie.
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
//Odtwarzanie wszystkiego na raz
    let playAll = document.querySelector("#playAll");
    playAll.addEventListener('click' ,  function(){
        Reader1(path1);
        Reader2(path2);
        Reader3(path3);
        Reader4(path4);
    });  
// Stworzenie zmiennych potrzebnych do nagrywania dźwięków i przypisanie ich do przycisków.
    
    let record1 = document.querySelector("#record1");
    let play1 = document.querySelector("#play1");
    let d1 = new Date();
    let time1;
    let tab1 = new Array();
    let path1 = new Array();

// Zaznaczenie boxa nagrywanie.

    record1.addEventListener( 'change', function() {
        if(this.checked) {
            d1 = new Date();
            time1 = d1.getTime();
            tab1 = new Array();
        }
    });

// Przycisk play, po prostu, odtwarzanie ścieżki numer 1

    play1.addEventListener('click' ,  function(){
        Reader1(path1);
    });  

//Nagrywanie ścieżki dźwiękowej, bardzo ważne jest żeby else zwracało tab1 bo inaczej przy nagrywaniu innej ścieżki, ta się zresetuje.
    
function RecordPath1(charCode)
     {
         d1 = new Date();
         if(document.querySelector("#record1").checked == true)
         {
            tab1.push(d1.getTime() - time1 , charCode);
            return tab1;
         }
         else
         {
            return tab1;
         }
     }

//Odtwarzanie ściezki dźwiękowej, tablica dwuwymiarowa gdzie na 1 miejscu jest odstęp czasowy, a na 2 jest dźwięk którego numer pobierany jest z funkcji PlayPath (Jest ona na końcu kodu).
    
    function Reader1(tab1)
    {
        for(let i = 0 ; i< tab1.length ; i+=2)
        {
            setTimeout(function(){PlayPath(tab1[i+1])} , tab1[i] );
        }
    }

// Nagrywanie drugiej ściezki

    let record2 = document.querySelector("#record2");
    let play2 = document.querySelector("#play2");
    let d2 = new Date();
    let time2;
    let tab2 = new Array();
    let path2 = new Array();

    record2.addEventListener( 'change', function() {
        if(this.checked) {
            d2 = new Date();
            time2 = d2.getTime();
            tab2 = new Array();
        }
    });

    play2.addEventListener('click' ,  function(){
        Reader2(path2);
    });  

    function RecordPath2(charCode)
     {
         d2 = new Date();
         if(document.querySelector("#record2").checked == true)
         {
            tab2.push(d2.getTime() - time2 , charCode);
            return tab2;
         }
         else
         {
            return tab2;
         }
     }

    function Reader2(tab2)
    {
        for(let i = 0 ; i< tab2.length ; i+=2)
        {
            setTimeout(function(){PlayPath(tab2[i+1])} , tab2[i] );
        }
    }

// Nagrywanie trzeciej ścieżki

    let record3 = document.querySelector("#record3");
    let play3 = document.querySelector("#play3");
    let d3 = new Date();
    let time3;
    let tab3 = new Array();
    let path3 = new Array();

    record3.addEventListener( 'change', function() {
        if(this.checked) {
            d3 = new Date();
            time3 = d3.getTime();
            tab3 = new Array();
        }
    });

    play3.addEventListener('click' ,  function(){
        Reader3(path3);
    });  

    function RecordPath3(charCode)
     {
         d3 = new Date();
         if(document.querySelector("#record3").checked == true)
         {
            tab3.push(d3.getTime() - time3 , charCode);
            return tab3;
         }
         else
         {
            return tab3;
         }
     }

    function Reader3(tab3)
    {
        for(let i = 0 ; i< tab3.length ; i+=2)
        {
            setTimeout(function(){PlayPath(tab3[i+1])} , tab3[i] );
        }
    }

// Nagrywanie Czwartej

    let record4 = document.querySelector("#record4");
    let play4 = document.querySelector("#play4");
    let d4 = new Date();
    let time4;
    let tab4 = new Array();
    let path4 = new Array();

    record4.addEventListener( 'change', function() {
        if(this.checked) {
            d4 = new Date();
            time4 = d4.getTime();
            tab4 = new Array();
        }
    });

    play4.addEventListener('click' ,  function(){
        Reader4(path4);
    });  

    function RecordPath4(charCode)
     {
         d4 = new Date();
         if(document.querySelector("#record4").checked == true)
         {
            tab4.push(d4.getTime() - time4 , charCode);
            return tab4;
         }
         else
         {
            return tab4;
         }
     }

    function Reader4(tab4)
    {
        for(let i = 0 ; i< tab4.length ; i+=2)
        {
            setTimeout(function(){PlayPath(tab4[i+1])} , tab4[i] );
        }
    }
// Przypisanie dźwięków do charCode'ów, ważne aby było currentTime = 0 inaczej dźwięk nie zapisze się w tablicy w chwili naciśnięcia przycisku tylko dopiero jak skończy się odtwarzać.
    function PlayPath(charCode )
    {
        switch(charCode)
        {
            case 113: 
            sBoom.currentTime = 0;
            sBoom.play();
            break;
            case 119:
            sClap.currentTime = 0;
            sClap.play();
            break;
            case 101:
            sHiHat.currentTime = 0;
            sHiHat.play();
            break;
            case 114:
            sKick.currentTime = 0;
            sKick.play();
            break;
            case 97:
            sMyMan.currentTime = 0;
            sMyMan.play();
            break;
            case 115:
            sOpenHat.currentTime = 0;
            sOpenHat.play();
            break;
            case 100:
            sPickleRick.currentTime = 0;
            sPickleRick.play();
            break;
            case 102:
            sRide.currentTime = 0;
            sRide.play();
            break;
            case 122:
            sSnap.currentTime = 0;
            sSnap.play();
            break;
            case 120:
            sSnare.currentTime = 0;
            sSnare.play();
            break;
            case 99:
            sTink.currentTime = 0;
            sTink.play();
            break;
            case 118:
            sTom.currentTime = 0;
            sTom.play();
            break;
        }
    }

    





