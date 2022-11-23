$(document).ready( () => {
    const $showpicture = $('#showMe');
    const $showButton = $('#showButton');
    $showButton.on('click', () => {
        $showpicture.show();
    })
})