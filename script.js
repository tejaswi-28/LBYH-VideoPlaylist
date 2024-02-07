document.querySelectorAll('.dropdown-menu a.dropdown-toggle').forEach(function (element) {
    element.addEventListener('click', function (e) {
        var parentDropdown = this.closest('.dropdown-submenu');
        if (parentDropdown) {
            e.preventDefault();
            parentDropdown.querySelector('.dropdown-menu').classList.toggle('show');
        }
    });
});

const videosList = [
    {
        video: 'videos/vid1.mp4',
        title: 'Thief- An animated short film'
    },
    {
        video: 'videos/vid2.mp4',
        title: 'Family Trip- 3D Animated short film'
    },
    {
        video: 'videos/vid3.mp4',
        title: 'Animation Short Film'
    },
    {
        video: 'videos/vid4.mp4',
        title: 'Birds Animated Short Film'
    },
    {
        video: 'videos/vid5.mp4',
        title: 'Fugu- Animated Short Film'
    },
    {
        video: 'videos/vid6.mp4',
        title: 'Morning- Animated Short Film'
    },
    {
        video: 'videos/vid7.mp4',
        title: 'Funny- Animated Short Film'
    },
    {
        video: 'videos/vid8.mp4',
        title: 'Cocotte- Animated Short Film'
    },
    {
        video: 'videos/vid9.mp4',
        title: 'Alert- Animated Short Film'
    },
    {
        video: 'videos/vid10.mp4',
        title: 'Stone- Animated Short Film'
    },
]

const categories = [...new Set(videosList.map((item) => {return item}))]
document.getElementById('videosList').innerHTML = categories.map((item) => {
    var { video, title } = item;
    return(
        `<div class="list active">
        <video src=${video} class="list-video"></video>
        <h3 class="list-title">${title}</h3>
        </div>`
    )
}).join('')

let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(remove => { remove.classList.remove('active') });
videoList.forEach(vid => {
    vid.onclick = () => {
        videoList.forEach(remove => { remove.classList.remove('active') });
        vid.classList.add('active');
        let src = vid.querySelector('.list-video').src;
        let title = vid.querySelector('.list-title').innerHTML;
        document.querySelector('.main-video-container .main-video').src = src;
        document.querySelector('.main-video-container .main-video').play();
        document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
    };
});