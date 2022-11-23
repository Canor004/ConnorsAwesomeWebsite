/*$(document).ready( () => {
    const $showpicture = $('#showMe');
    const $showButton = $('#showButton');
    $showpicture.hide();
    $showButton.on('click', () => {
        $showpicture.slideDown();
    })
})

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