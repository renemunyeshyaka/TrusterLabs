let currentIndex = 0;
  const track = document.getElementById('team-carousel');
  const profiles = document.querySelectorAll('#team-carousel .profile');
  const totalProfiles = profiles.length;

  function moveCarousel(direction) {
    const containerWidth = document.querySelector('.carousel-container').offsetWidth;
    const profileWidth = profiles[0].offsetWidth + 30; // margin in px
    const maxIndex = Math.max(0, totalProfiles - Math.floor(containerWidth / profileWidth));
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    const translateX = -currentIndex * profileWidth;
    track.style.transform = `translateX(${translateX}px)`;
  }