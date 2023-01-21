document.addEventListener('DOMContentLoaded', function() {
    //Listening the click on the header menu on the desktop
    document.querySelectorAll('.header_button').forEach((element, index) => {
        element.addEventListener('click',() => {
            document.querySelectorAll('.header_button').forEach(element => {
                element.classList.remove('active')
            })
            document.querySelectorAll('.header_button')[index].classList.toggle('active')
        })
    })
    //Listening the click on the 'View all features row' on the mobile
    document.querySelectorAll('.all_features').forEach((element, index) => {
        element.addEventListener('click',() => {
            if (element.children[0].innerHTML.includes('View')) {
                element.children[0].innerHTML = element.children[0].innerHTML.replace('View', 'Hide')
                element.children[1].style='transform: rotate(90deg)';
            }

            else {
                element.children[0].innerHTML = element.children[0].innerHTML.replace('Hide', 'View')
                element.children[1].style='transform: none';
            }
            for ( i=3; i<element.parentElement.children.length; i++ ) {
                element.parentElement.children[i].classList.toggle('mobile_hide')
            }
        })
    })
    //Listening the click of the expand menu on the mobile
    document.getElementById('expand_list').addEventListener('click',() => {
        //
    })
}, false);