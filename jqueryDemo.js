$(document).ready( () => {
    const $jquery = $('#Jquery');
    const $resume = $('#resume');
    const $validation = $('#validation');
    const $php = $('#php');
    const $linkedin = $('#linkedin');
    const $blog = $('#blog');
    const $forms = $('#forms');

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
    
    $resume.on('mouseenter', () => {
        $resume.animate({height: '+=20px',
                       width: '+=20px',
                       fontSize: '+=3px'});
    })
    $resume.on('mouseleave', () =>{
        $resume.animate({height: '-=20px',
                       width: '-=20px',
                       fontSize: '-=3px'});
    })

    $validation.on('mouseenter', () => {
        $validation.animate({height: '+=20px',
                       width: '+=20px',
                       fontSize: '+=3px'});
    })
    $validation.on('mouseleave', () =>{
        $validation.animate({height: '-=20px',
                       width: '-=20px',
                       fontSize: '-=3px'});
    })

    $php.on('mouseenter', () => {
        $php.animate({height: '+=20px',
                       width: '+=20px',
                       fontSize: '+=3px'});
    })
    $php.on('mouseleave', () =>{
        $php.animate({height: '-=20px',
                       width: '-=20px',
                       fontSize: '-=3px'});
    })

    $forms.on('mouseenter', () => {
        $forms.animate({height: '+=20px',
                       width: '+=20px',
                       fontSize: '+=3px'});
    })
    $forms.on('mouseleave', () =>{
        $forms.animate({height: '-=20px',
                       width: '-=20px',
                       fontSize: '-=3px'});
    })

    $linkedin.on('mouseenter', () => {
        $linkedin.animate({height: '+=20px',
                       width: '+=20px',
                       fontSize: '+=3px'});
    })
    $linkedin.on('mouseleave', () =>{
        $linkedin.animate({height: '-=20px',
                       width: '-=20px',
                       fontSize: '-=3px'});
    })
    $blog.on('mouseenter', () => {
        $blog.animate({height: '+=20px',
                       width: '+=20px',
                       fontSize: '+=3px'});
    })
    $blog.on('mouseleave', () =>{
        $blog.animate({height: '-=20px',
                       width: '-=20px',
                       fontSize: '-=3px'});
    })
})


function loadDoc(){
    const rq = new XMLHttpRequest();
    rq.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let shown;
                if(document.getElementById('hiddenBlock').innerHTML != ""){
                    shown = true;
                }
                else{
                    shown = false;
                }
                
                if(!shown){
                    document.getElementById("hiddenBlock").innerHTML = this.responseText;
                }
                else{
                    document.getElementById("hiddenBlock").innerHTML = "";
                }  
            }
        }
    rq.open('GET', 'something.txt', true);
    rq.send();
};
