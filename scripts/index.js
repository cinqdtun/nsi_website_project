window.addEventListener('DOMContentLoaded', function() {
    history.pushState(null, "", location.href.split("#")[0]);

    document.querySelector("#github-project-1-btn").addEventListener('click', () =>{
        window.open('https://github.com/cinqdtun/youtube_music_app', "_blank");
    });
    document.querySelector("#github-project-2-btn").addEventListener('click', () =>{
        window.open('https://github.com/cinqdtun/nsi_website_project', "_blank");
    });
    document.querySelector("#github-project-3-btn").addEventListener('click', () =>{
        window.open('https://github.com/cinqdtun/thetitanbot', "_blank");
    });
    document.querySelector("#github-project-4-btn").addEventListener('click', () =>{
        window.open('https://5dt1.com', "_blank");
    });

    setTimeout(async () => {
        const elementsToFade = document.querySelectorAll('.left-container, .right-container');
        for (let i = 0; i < elementsToFade.length; i++) {
            elementsToFade[i].classList.add('show');
            await sleep(1000)
        }
    }, 500);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});