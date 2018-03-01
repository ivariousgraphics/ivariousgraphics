    
    var htp = new XMLHttpRequest();
    var jsonText;
    var img_length;
    var nameGalary;
    var listall; 
    var btn_close;
    
    htp.open('GET','script/json.json', false);
    htp.send();
    jsonText   = htp.responseText;
    nameGalary = JSON.parse(jsonText);
 
var name_image;
var img_arr;
    
var status;

function galary_open(names){

    listall = document.getElementById("illus");
    
    
    if((listall.children[0]==null)&(status!=names))
    {
    status = names;
    switch (names){
    case "modelling" : img_length = JSON.parse(jsonText).modelling.length;
break;
    case "illustrator" : img_length = JSON.parse(jsonText).illustrator.length;
break;
   case "media" : img_length = JSON.parse(jsonText).media.length;
break;
   case "ivarious" : img_length = JSON.parse(jsonText).ivarious.length;
break;

}

 img_arr =  [img_length];

 
    listall.style.backgroundColor = "black";    
  listall.innerHTML = "<h3>- "+names+" -</h3>";
    
   for(var i=0; i<img_length; i++){
       
       img_arr[i] = document.createElement('li');
       listall.appendChild(img_arr[i]);
       
       
       switch(names){
    case   "modelling" : name_image = nameGalary.modelling[i]; break;
    case   "illustrator" : name_image = nameGalary.illustrator[i]; break;
    case   "media" : name_image = nameGalary.media[i]; break;
    case   "ivarious" : name_image = nameGalary.ivarious[i]; break;
   }
       
    img_arr[i].innerHTML = "<img src='images640x480/"+name_image+" ' width='200'>";
   }

        
       listall.innerHTML += "<p><img src='style/close.png' width='50' onclick='closebtn()' ></p>";      
        
    
    }
    }



function closebtn(){
    
    listall.innerHTML = '';
    listall.style.backgroundColor = null;
    listall.style.height="auto";


}