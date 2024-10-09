let sec1 = document.getElementById('1');
let sec2 = document.getElementById('2');
let sec3 = document.getElementById('3');
let sec4 = document.getElementById('4');

sec1.onclick = function(){
    scroll({
        top: 100000,
        behavior: 'smooth',
    })
    console.log('1');
}

sec2.onclick = function(){
    scroll({
        left: 100000,
        behavior: 'smooth',
    })
    console.log('2');
}

sec3.onclick = function(){
    scroll({
        left: 0,
        behavior: 'smooth',
    })
    console.log('3');
}

sec4.onclick = function(){
    scroll({
        top: 0,
        behavior: 'smooth',
    })
    console.log('4');
}