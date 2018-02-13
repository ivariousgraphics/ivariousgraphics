var state = false;

        var li_home;
        var li_one;
        var li_two;
        var li_three;

function menu_open(){

     var elem_ul = document.getElementById("menu_ul");
    
    if(state)
    {  
        li_home.parentNode.removeChild(li_home);
        li_one.parentNode.removeChild(li_one);
        li_two.parentNode.removeChild(li_two);
        li_three.parentNode.removeChild(li_three);
        state = false;
    }
    else
    {
        li_home = document.createElement('li');
        li_one = document.createElement('li');
        li_two = document.createElement('li');
        li_three = document.createElement('li');
        
        li_home.className="menu";
        li_one.className="menu";
        li_two.className="menu";
        li_three.className="menu";
        
        elem_ul.appendChild(li_home);
        elem_ul.appendChild(li_one);
        elem_ul.appendChild(li_two);
        elem_ul.appendChild(li_three);
        
        
        li_home.innerHTML="<a href='index.html'><p>Главная</p></a>";
        li_one.innerHTML="<a href='modelling.html'><p>3D Моделирование</p></a>";
        li_two.innerHTML="<a href='illustrator.html'><p>Иллюстрации</p></a>";
        li_three.innerHTML="<a href='media.html'><p>Медиа дизайн</p></a>";
        

        state = true;
    }
    
    
}