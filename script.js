document.querySelectorAll('.dropdown-menu a.dropdown-toggle').forEach(function (element) {
    element.addEventListener('click', function (e) {
        var parentDropdown = this.closest('.dropdown-submenu');
        if (parentDropdown) {
            e.preventDefault();
            parentDropdown.querySelector('.dropdown-menu').classList.toggle('show');
        }
    });
});

// main-content
const videosList = [
    {
        video: 'videos/vid1.mp4',
        title: 'Lesson 1: Thief- An animated short film',
        parag: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, iure illo earum doloremque eos ut non alias asperiores ipsa quos harum et assumenda quaerat animi!'
    },
    {
        video: 'videos/vid2.mp4',
        title: 'Lesson 2: Family Trip- 3D Animated short film',
        parag: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, iure illo earum doloremque eos ut non alias asperiores ipsa quos harum et assumenda quaerat animi!'
    },
    {
        video: 'videos/vid3.mp4',
        title: 'Lesson 3: Animation Short Film',
        parag: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, iure illo earum doloremque eos ut non alias asperiores ipsa quos harum et assumenda quaerat animi!'
    },
    {
        video: 'videos/vid4.mp4',
        title: 'Lesson 4: Birds Animated Short Film',
        parag: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, iure illo earum doloremque eos ut non alias asperiores ipsa quos harum et assumenda quaerat animi!'
    },
    {
        video: 'videos/vid5.mp4',
        title: 'Lesson 5: Fugu- Animated Short Film',
        parag: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, iure illo earum doloremque eos ut non alias asperiores ipsa quos harum et assumenda quaerat animi!'
    },
    {
        video: 'videos/vid6.mp4',
        title: 'Lesson 6: Morning- Animated Short Film',
        parag: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, iure illo earum doloremque eos ut non alias asperiores ipsa quos harum et assumenda quaerat animi!'
    },
    {
        video: 'videos/vid7.mp4',
        title: 'Lesson 7: Funny- Animated Short Film',
        parag: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, iure illo earum doloremque eos ut non alias asperiores ipsa quos harum et assumenda quaerat animi!'
    },
    {
        video: 'videos/vid8.mp4',
        title: 'Lesson 8: Cocotte- Animated Short Film',
        parag: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, iure illo earum doloremque eos ut non alias asperiores ipsa quos harum et assumenda quaerat animi!'
    },
    {
        video: 'videos/vid9.mp4',
        title: 'Lesson 9: Alert- Animated Short Film',
        parag: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, iure illo earum doloremque eos ut non alias asperiores ipsa quos harum et assumenda quaerat animi!'
    },
    {
        video: 'videos/vid10.mp4',
        title: 'Lesson 10: Stone- Animated Short Film',
        parag: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, iure illo earum doloremque eos ut non alias asperiores ipsa quos harum et assumenda quaerat animi!'
    },
]

const categories = [...new Set(videosList.map((item) => {return item}))]
document.getElementById('videosList').innerHTML = categories.map((item) => {
    var { video, title, parag } = item;
    return(
        `<div class="list active">
        <video src=${video} class="list-video"></video>
        <div class="list-container">
        <h3 class="list-title">${title}</h3>
        <p class="list-para">${parag}</p>

        <div class="activity">
        <p class="symbols"><span class="material-symbols-outlined">schedule</span>20min</p>
        <p class="symbols"><span class="material-symbols-outlined">visibility</span>1M </p>
        <p class="symbols"><span class="material-symbols-outlined">group</span>1 year ago</p>
        </div>
        </div>
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



// footer
function subscribe() {
    var email = document.getElementById('emailInput').value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(email  && emailRegex.test(email)) {
        document.getElementById('success').style.display = 'block';
        setTimeout(function() {
            success.style.display = 'none';
        }, 3000);
    }
}


function subscribe() {
  var email = document.getElementById('emailInput').value;
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if(email  && emailRegex.test(email)) {
      document.getElementById('success').style.display = 'block';
      setTimeout(function() {
          success.style.display = 'none';
      }, 3000);
  }
}


function updateButtonContent() {
  // Get the width of the screen
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Define the breakpoint for mobile
  const mobileBreakpoint = 768;

  // Select the button element
  const button = document.querySelector('.cus_input-container button');

  // Check if the screen width is less than the mobile breakpoint
  if (screenWidth < mobileBreakpoint) {
    // Change the button content to use the bell icon
    button.innerHTML = '<i class="fas fa-bell"></i>';
  } else {
    // Restore the original button content
    button.innerHTML = '<i class="fas fa-bell px-2"></i>Subscribe';
  }
}

// Call the function on page load and resize events
window.onload = window.onresize = updateButtonContent;

document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the class "cus_col"
  const cusCols = document.querySelectorAll(".cus_col");

  // Add click event listener to each "cus_col" element
  cusCols.forEach((col) => {
    const heading = col.querySelector("h3");
    const content = col.querySelector(".links");

    // Check if both heading and content elements exist
    if (heading && content) {
      heading.addEventListener("click", function () {
        // Toggle the "active" class on the clicked element
        col.classList.toggle("active");

        // Toggle the "active" class on the content element
        content.classList.toggle("active");
      });
    }
  });
});