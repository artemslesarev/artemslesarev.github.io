  function randomColor() {
    let halfrand = Math.random()*0.5+0.5;
    let color = [];
    for (let i = 0; i < 4; i++) {
        if (i==3)
        color.push(halfrand);
        else
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgba(' + color.join(', ') + ')';
  } 
  
const links = document.querySelectorAll('.link');

for (let i = 0; i < links.length; i++) {
    const href = links[i].getAttribute('href');
    const currentPage = window.location.pathname;
    
    if (currentPage === href) 
    links[i].style.color = 'blue';

    links[i].addEventListener('mouseover', function() {
            if (currentPage === href)
            this.style.color = this.style.color;
            else 
            this.style.color = randomColor();
    });

    links[i].addEventListener('mouseout', function() {
            if (currentPage === href) 
            this.style.color = this.style.color;  
            else 
            this.style.color = 'black';
    });

    

}


  