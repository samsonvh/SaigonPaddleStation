var intervals = [];

window.onload = function() {
    changeContent();
    intervals[0] = setInterval(() => {
        changeImage('banner', null, true);
    }, 1500);
    intervals[1] = setInterval(() => {
        changeImage('1', null, true);
    }, 1500);
    intervals[2] = setInterval(() => {
        changeImage('2', null, true);
    }, 1500);
    intervals[3] = setInterval(() => {
        changeImage('3', 'pmh', true);
    }, 1500);
}