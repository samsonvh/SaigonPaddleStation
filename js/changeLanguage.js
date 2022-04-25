const vi = {
    promotionHeading: 'Chương trình ưu đãi',
    registerButton: 'Đăng kí ngay',
    formButton: 'Đăng kí cho nhóm',
    stationHeading: 'Trạm chèo',
    tourHeading: 'Cung chèo',
    reviewHeading: 'Đánh giá & Cảm nhận'
}

const en = {
    promotionHeading: 'Promotion',
    registerButton: 'Register Now',
    formButton: 'Form Group',
    stationHeading: 'Stations',
    tourHeading: 'Tours',
    reviewHeading: 'Reviews'
}

function changeLanguage() {
    sessionStorage.removeItem('language');
    changeContent();
}

function changeContent() {
    var language = sessionStorage.getItem('language');
    if (language == null) {
        language = document.getElementById('language-select').value;
    }
    document.getElementById('language-select').value = language;
    var headings = document.getElementsByClassName('sub-heading');
    var registerButton = document.getElementById('register-button');
    var formButton = document.getElementById('form-button');
    if (language == 'vi') {
        headings[0].innerHTML = vi.promotionHeading;
        headings[1].innerHTML = vi.stationHeading;
        headings[2].innerHTML = vi.tourHeading;
        headings[4].innerHTML = vi.reviewHeading;
        registerButton.innerHTML = vi.registerButton;
        formButton.innerHTML = vi.formButton;
    } else if (language == 'en') {
        headings[0].innerHTML = en.promotionHeading;
        headings[1].innerHTML = en.stationHeading;
        headings[2].innerHTML = en.tourHeading;
        headings[4].innerHTML = en.reviewHeading;
        registerButton.innerHTML = en.registerButton;
        formButton.innerHTML = en.formButton;
    }
    sessionStorage.setItem('language', language);
}