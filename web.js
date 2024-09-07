//navbar button mRGIN ADJUSTMENT
document.addEventListener('DOMContentLoaded', function() {
    const bgTertiary = document.querySelector('.bg-body-tertiary');
    const navbarSupportedContent = document.querySelector('#navbarSupportedContent');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Check if elements are selected correctly
    if (!bgTertiary || !navbarSupportedContent || !navbarToggler) {
      console.error('Elements not found');
      return;
    }

    // Function to set the margin based on the visibility of the navbar-toggler button
    function updateMargin() {
      console.log('Updating margin');
      if (navbarToggler.offsetParent !== null) {
        // Button is visible, check if the collapse is active
        if (navbarSupportedContent.classList.contains('show')) {
          bgTertiary.style.margin = '0'; // Margin for collapsed state
        } else {
          bgTertiary.style.margin = '0'; // Margin should be zero when button is visible
        }
      } else {
        // Button is not visible
        bgTertiary.style.margin = '34px 34px 0px 34px'; // Default margin
      }
    }

    // Initial check
    updateMargin();

    // Event listeners for Bootstrap collapse events
    navbarSupportedContent.addEventListener('show.bs.collapse', function () {
      console.log('Collapse shown');
      updateMargin();
    });
    navbarSupportedContent.addEventListener('hide.bs.collapse', function () {
      console.log('Collapse hidden');
      updateMargin();
    });
    
    // Handle window resize
    window.addEventListener('resize', function () {
      console.log('Window resized');
      updateMargin();
    });
  
    // Also add event listener when the navbar-toggler button is clicked
    navbarToggler.addEventListener('click', function() {
      setTimeout(updateMargin, 300); // Small delay to allow the collapse animation to complete
    });
});
