var textarea=document.getElementById("text");
var fontAdjustVar=document.getElementById("range");
var saveButton=document.getElementById("save");
var cnt=0;
    // code in this if-block will be executed for one time //
        if(localStorage.getItem("first_use")==null)
        { 
            localStorage.setItem("cnt",cnt);
            localStorage.setItem("fontAdjust",20);
        }   
    // close                                               //
       
    // app usage counter //
        var cnt2=localStorage.getItem("cnt");
        cnt=cnt2;
        ++cnt;
        localStorage.setItem("cnt",cnt);
    // close             //

    // app configuration //
    
    textarea.style.height=innerHeight/1.3+'px';
    textarea.style.width=innerWidth/1.2+'px';
    textarea.style.fontSize=localStorage.getItem("fontAdjust")+"px";
    fontAdjustVar.value=localStorage.getItem("fontAdjust");
    //alert(localStorage.getItem("fontAdjust"));
    //close              //

textarea.textContent=localStorage.getItem("notes");
// save //
 function save()
    { 
        //var a=textarea.textContent;
        var a=textarea.value;
        localStorage.setItem("notes",a)
        var sav=localStorage.getItem("notes");
        saveButton.style.backgroundColor="lightgreen";
        //alert(a);
    }

    // font adjust //   
    
    fontAdjustVar.addEventListener("input",fontAdjust);
      
    function fontAdjust()
        {

            textarea.style.fontSize=fontAdjustVar.value+"px";
            localStorage.setItem("fontAdjust",fontAdjustVar.value);
        }



    // save button colorization //
     
    textarea.addEventListener("input",saveButtonColor);
    function saveButtonColor(){
          saveButton.style.backgroundColor="red";
    }
    
    var nightenable=false;

    function night()
    {
      if(nightenable==false){
        textarea.style.backgroundColor="rgb(36,36,36)";
        textarea.style.color="white";
        nightenable=true;
        document.getElementById("night").style.backgroundColor="white";
        document.getElementById("night").style.color="black";
      }
      else{
        textarea.style.backgroundColor="white";
        textarea.style.color="black";
        nightenable=false;
       
        document.getElementById("night").style.backgroundColor="black";
        document.getElementById("night").style.color="white";
      }

    }
localStorage.setItem("first_use",0);
//localStorage.clear();
