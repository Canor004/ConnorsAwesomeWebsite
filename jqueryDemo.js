$(document).ready( () => {
    const $jquery = $('#Jquery');
    $jquery.on('mouseenter', () => {
        $jquery.animate({height: '+=20px',
                       width: '+=20px',
                       fontSize: '+=3px'});
    })
    $jquery.on('mouseleave', () =>{
        $jquery.animate({height: '-=20px',
                       width: '-=20px',
                       fontSize: '-=3px'});
    })

    
})

/*
function loadDoc(){
    console.log(document.getElementById("ajaxTest"));
    const rq = new XMLHttpRequest();
    rq.onreadystatechange = function() {
        console.log(this.readyState);
            if (this.readyState == 4 && this.status == 200) {
            document.getElementById("ajaxTest").innerHTML = this.responseText;
            }
        }
    rq.open('GET', 'something.txt', true);
    rq.send();
};
*/