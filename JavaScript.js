function generateQR() {
    document.querySelector("#qr-image").style.display = "block";
    let QRtext = document.querySelector("#text").value;
    if(QRtext.trim().length = 0) {
        document.querySelector("#qr-image .error").innerHTML = "Please enter text";
        document.querySelector("#img").style.display = "none";
    }else{
        document.querySelector("#img").style.display ="block";
        document.querySelector("#qr-image .error").innerHTML = " ";
        document.querySelector("#img").src = "https://api.qrserver.com/v1/create-qr-code/?size=240×240&data=" + QRtext

    }  
 }
 function save() {
     save()
 }
 
 document.addEventListener('mousemove' , function(e){
 let body = document.querySelector ('body');
 let particles = document .createElement ('span');
 let x = e.offsetX;
 let y = e.offsetY;

 particles.style.left = x + 'px';
 particles.style.top  = y + 'px';

 let size =Math.random() * 8;
 particles.style.width = 2 + size + 'px' //للتحكم بحجم الشياء المنتشرة
 particles.style.height = 2+ size + 'px'

 let transformValue= Math.random() * 360;  //الانتشار يكون 360 درجة 
 particles.style.transform= 'rotate('+transformValue+'deg)';

 body.appendChild (particles);

 setTimeout(function(){    
 particles.remove()
 },2000)
})

