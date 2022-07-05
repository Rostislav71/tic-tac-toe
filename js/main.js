const area = document.getElementById('area');

let winnersTitle = document.getElementById('winners__title'),
    winnersBody = document.querySelector('.winners__body'),
    winnersSubtitle = document.getElementById('winners__subtitle'),
    walks = document.getElementById('walk');
    

let move = 0; 

area.addEventListener('click' , e => {
    if(e.target.className == 'box'){
        if(move % 2 === 0){
            e.target.classList.add('click');
            e.target.innerHTML = 'X';
            e.target.style.color = 'black';

           
            if(e.target.className == 'click'){
                move;
            }
            
        }
        else{
            e.target.innerHTML = '0';
            e.target.style.color = 'white';
            e.target.classList.add('click');
            
            if(e.target.className == 'click'){
                move;
            }
        }
        move++;
        check();
    }
})


function check(){
    let boxs = document.getElementsByClassName('box');
   

    const arrResults = [
        [0 , 1 , 2],
        [3 , 4 , 5],
        [6 , 7 , 8],
        [0 , 3 , 6],
        [1 , 4 , 7],
        [2 , 5 , 8],
        [0 , 4 , 8],
        [2 , 4 , 6],
    ];
    for(let i = 0 ; i < arrResults.length ; i++){
        if(
            boxs[arrResults[i][0]].innerHTML == 'X' && boxs[arrResults[i][1]].innerHTML == 'X' && boxs[arrResults[i][2]].innerHTML == 'X'
        )
        {
           winnersTitle.innerHTML = "crosses";
           winnersSubtitle.innerHTML = "winner";
           setTimeout( () => { window.location.reload(1)},1300);
        }
        else if(
            boxs[arrResults[i][0]].innerHTML == '0' && boxs[arrResults[i][1]].innerHTML == '0' && boxs[arrResults[i][2]].innerHTML == '0'
        ) {
            winnersTitle.innerHTML = "zeros";
            winnersSubtitle.innerHTML = "winner";
            winnersBody.classList.add('zeros__stile');

            setTimeout( () => { window.location.reload(1)},1300);
           
        }
    }  
    if(boxs[0].classList.contains('click') && boxs[1].classList.contains('click') && boxs[2].classList.contains('click')&&
       boxs[3].classList.contains('click') && boxs[4].classList.contains('click') && boxs[5].classList.contains('click')&&
       boxs[6].classList.contains('click') && boxs[7].classList.contains('click') && boxs[8].classList.contains('click')
    ){
        winnersTitle.innerHTML = "draw";
        setTimeout( () => { window.location.reload(1)},1300);
    }
   
}
