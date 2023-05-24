window.addEventListener('DOMContentLoaded', function() {
    Object.defineProperty(window, 'IlOvEeAtPoTaToEs', {
        get: function () {
            console.log('You had been tricked !')
            window.open('https://5dt1.com?repopage=1', "_blank");
        }
    });

    Object.defineProperty(window, 'Iamanidiot', {
        get: function () {
            console.log('Ok, you are an idiot...');
            window.open('https://youareanidiot.cc/', "_blank");
        }
    });

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});