// Get necessary elements
const modeButton = document.getElementById('mode-btn');
const modeIcon = document.getElementById('mode-icon');
const body = document.getElementById('body');
const tooltip = document.getElementById('modeTool-tip');
const closeBtn = document.getElementById('close-btn');

// Set default to dark mode
let isDarkMode = true;

// Function to toggle between dark and light mode
function toggleMode() {
  if (isDarkMode) {
    // Switch to light mode
    body.classList.remove('bg-[#181818]', 'text-white');
    body.classList.add('bg-[#ffffff]', 'text-black');
    closeBtn.classList.remove('text-white');
    closeBtn.classList.add('text-[#181818]');

    // Change icon to sun (light mode)
    modeIcon.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-sun"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>`;

    // Update tooltip for light mode
    tooltip.textContent = 'Toggle to Dark Mode';
    tooltip.classList.remove('bg-[#ffffff]', 'text-black');
    tooltip.classList.add('bg-[#181818]', 'text-white');

    // Change button background to be visible in light mode
    modeButton.classList.remove('bg-[#181818]');
    modeButton.classList.add('bg-[#ffffff');
  } else {
    // Switch back to dark mode
    body.classList.remove('bg-[#ffffff]', 'text-black');
    body.classList.add('bg-[#181818]', 'text-white');
    closeBtn.classList.remove('text-[#181818]');
    closeBtn.classList.add('text-white');

    // Change icon to moon (dark mode)
    modeIcon.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-moon"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>`;

    // Update tooltip for dark mode
    tooltip.textContent = 'Toggle to Light Mode';
    tooltip.classList.remove('bg-[#181818]', 'text-white');
    tooltip.classList.add('bg-[#ffffff]', 'text-black');

    // Change button background to be visible in dark mode
    modeButton.classList.remove('bg-[#ffffff]');
    modeButton.classList.add('bg-[#181818]');
  }

  // Toggle the mode state
  isDarkMode = !isDarkMode;
}

// Event listener for hover to show tooltip
modeButton.addEventListener('mouseover', () => {
  tooltip.classList.remove('opacity-0');
  tooltip.classList.add('opacity-100');
});

// Event listener for mouse out to hide tooltip
modeButton.addEventListener('mouseout', () => {
  tooltip.classList.remove('opacity-100');
  tooltip.classList.add('opacity-0');
});

// Event listener to toggle mode on button click
modeButton.addEventListener('click', toggleMode);


const disableScroll = () => {
  document.body.style.overflowY = 'hidden';
}

const enableScroll = () => {
  document.body.style.overflowY = 'auto'; // Or 'scroll' to restore default scrolling behavior
}



const html = document.getElementsByTagName('html');
const aboutSection = document.getElementById('about-section');
const iPadImg = document.getElementById('iPad-img');
let isVisible = false;
document.getElementById('about-btn').addEventListener('click', function () {
  aboutSection.classList.remove('hidden');
  aboutSection.classList.add('show');
  aboutSection.scrollIntoView({ behavior: 'smooth' });

  setTimeout(() => {
    html.style.overflowY = 'hidden';
  },1000);

  if (!isVisible) {
    setTimeout(() => {
      iPadImg.classList.remove('opacity-0', 'translate-x-[-100%]');
      iPadImg.classList.add('animate-slide-in-left', 'opacity-100');
      isVisible = true;
    }, 1000);
  }
  body.classList.add('overflow-hidden');
});


closeBtn.addEventListener('click', function () {
  aboutSection.classList.remove('show');
  aboutSection.classList.add('hidden');
  iPadImg.classList.remove('animate-slide-in-left', 'opacity-100');
  iPadImg.classList.add('opacity-0', 'translate-x-[-100%]');
  isVisible = false;
  body.classList.remove('overflow-y-hidden');
});



document.addEventListener('DOMContentLoaded', function () {
  const GoToHome = document.getElementById('go-to-home');
  const ResumeBtn = document.getElementById('resume-button');

  GoToHome.addEventListener('click', function (event) {
    event.preventDefault();
    const homeSection = document.getElementById('home');
    homeSection.scrollIntoView({ behavior: 'smooth' });

    let blinkDuration = 7000;
    let intervalDuration = 200;
    let isColor = true;
    let blinkInterval = setInterval(() => {
      if (isColor) {
        ResumeBtn.classList.remove('bg-gray-100', 'text-gray-800');
        ResumeBtn.classList.add('bg-gray-950', 'text-gray-100');
        isColor = false;
      }
      else {
        ResumeBtn.classList.remove('bg-gray-950', 'text-gray-100');
        ResumeBtn.classList.add('bg-gray-100', 'text-gray-800');
        isColor = true;
      }
    }, intervalDuration);

    setTimeout(() => {
      clearInterval(blinkInterval);
      if (!isColor) {
        ResumeBtn.classList.remove('bg-gray-950', 'text-gray-100');
        ResumeBtn.classList.add('bg-gray-100', 'text-gray-800');
      }
    }, blinkDuration);
  });
});



