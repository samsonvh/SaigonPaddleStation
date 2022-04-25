const bannerImages = ['1.JPG', '2.JPG', '3.JPG'];
const promotionImages = ['1.JPG', '2.JPG', '3.JPG', '4.JPG'];
const groupImages = ['1.JPG', '2.JPG', '3.JPG', '4.JPG'];
const homieImages = ['1.JPG', '2.JPG', '3.JPG', '4.JPG'];
const pmhImages = ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG', '6.JPG', '7.JPG'];
const hatcoImages = ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG', '6.JPG'];

function changeImage(sectionName, type, isNext) {
    switch (sectionName) {
        case "banner":
            var count = sessionStorage.getItem('bannerCount');
            if (count == null) {
                count = 1;
            } else {
                if (isNext) {
                    count++;
                } else {
                    count--;
                }
                if (count < 0) {
                    count = bannerImages.length - 1;
                } else if (count >= bannerImages.length) {
                    count = 0;
                }
            }
            sessionStorage.setItem('bannerCount', count);
            var bannerContainer = document.getElementById('banner-image');
            bannerContainer.setAttribute('src', 'img/banner/' + bannerImages[count]);
            break;
        case "1":
            var count = sessionStorage.getItem('promotionCount');
            if (count == null) {
                count = 1;
            } else {
                if (isNext) {
                    count++;
                } else {
                    count--;
                }
                if (count < 0) {
                    count = promotionImages.length - 1;
                } else if (count >= promotionImages.length) {
                    count = 0;
                }
            }
            sessionStorage.setItem('promotionCount', count);
            var promotionContainer = document.getElementById('promotion-image');
            promotionContainer.setAttribute('src', 'img/promotion/' + promotionImages[count]);
            break;
        case "2":
            var count = sessionStorage.getItem('groupCount');
            if (count == null) {
                count = 1;
            } else {
                if (isNext) {
                    count++;
                } else {
                    count--;
                }
                if (count < 0) {
                    count = groupImages.length - 1;
                } else if (count >= groupImages.length) {
                    count = 0;
                }
            }
            sessionStorage.setItem('groupCount', count);
            var groupContainer = document.getElementById('group-image');
            groupContainer.setAttribute('src', 'img/group/' + groupImages[count]);
            break;
        case "3":
            var count = sessionStorage.getItem('stationCount');
            if (count == null) {
                count = 1;
            } else {
                if (isNext) {
                    count++;
                } else {
                    count--;
                }
            }
            switch (type) {
                case 'pmh':
                    if (count < 0) {
                        count = pmhImages.length - 1;
                    } else if (count >= pmhImages.length) {
                        count = 0;
                    }
                    sessionStorage.setItem('stationCount', count);
                    var stationContainer = document.getElementById('station-image');
                    stationContainer.setAttribute('src', 'img/station/pmh/' + pmhImages[count]);
                    break;
                case 'homie':
                    if (count < 0) {
                        count = homieImages.length - 1;
                    } else if (count >= homieImages.length) {
                        count = 0;
                    }
                    sessionStorage.setItem('stationCount', count);
                    var stationContainer = document.getElementById('station-image');
                    stationContainer.setAttribute('src', 'img/station/homie/' + homieImages[count]);
                    break;
                case 'hatco':
                    if (count < 0) {
                        count = hatcoImages.length - 1;
                    } else if (count >= hatcoImages.length) {
                        count = 0;
                    }
                    sessionStorage.setItem('stationCount', count);
                    var stationContainer = document.getElementById('station-image');
                    stationContainer.setAttribute('src', 'img/station/hatco/' + hatcoImages[count]);
                    break;
            }
            break;
        case "4":
            break;
        case "5":
            break;
    }
}

function changeStation(stationName) {
    var stationLeftButton = document.getElementsByClassName('station-left-button');
    var stationRightButton = document.getElementsByClassName('station-right-button');
    stationLeftButton[0].setAttribute('onclick', "changeOnButton('3', '" + stationName + "', false)");
    stationRightButton[0].setAttribute('onclick', "changeOnButton('3', '" + stationName + "', true)");
    var currentStation = document.getElementsByClassName('current-station');
    currentStation[0].setAttribute('onclick', "changeStation('" + currentStation[0].getAttribute('id') + "')");
    currentStation[0].classList.remove('current-station');
    var chosenStation = document.getElementById(stationName);
    chosenStation.classList.add('current-station');
    chosenStation.removeAttribute('onclick');
    clearInterval(intervals[3]);
    changeImage('3', stationName, true);
    intervals[3] = setInterval(() => {
        changeImage('3', stationName, true);
    }, 1500);
}

function changeOnButton(sectionName, type, isNext) {
    switch (sectionName) {
        case 'banner':
            clearInterval(intervals[0]);
            changeImage(sectionName, type, isNext);
            intervals[0] = setInterval(() => {
                changeImage(sectionName, type, isNext);
            }, 1500);
            break;
        case '2':
            clearInterval(intervals[2]);
            changeImage(sectionName, type, isNext);
            intervals[2] = setInterval(() => {
                changeImage(sectionName, type, isNext);
            }, 1500);
            break;
        case '3':
            clearInterval(intervals[3]);
            changeImage(sectionName, type, isNext);
            intervals[3] = setInterval(() => {
                changeImage(sectionName, type, isNext);
            }, 1500);
            break;
    }
}