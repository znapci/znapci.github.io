const load = () => {
    if (document.readyState === 'complete') {
        document.getElementById('loader').classList.add('loader-done');
        document.getElementById('first-box-itm').classList.add('load-complete-pic');
        document.getElementById('disp-card').classList.add('card');
        //document.getElementById('right-eye').classList.add('load-complete-eyes');
        //document.getElementById('left-eye').classList.add('load-complete-eyes');
    }
}
window.onload = load;