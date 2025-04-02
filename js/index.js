// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const currentHour = new Date().getHours();

  // Get references to the greeting message and icon elements
  const greetingMessage = document.getElementById("greeting-message");
  const greetingIcon = document.getElementById("greeting-icon");

  if (greetingMessage && greetingIcon) {
    let emoji;

    // Set greeting based on the hour and assign the emoji
    if (currentHour >= 0 && currentHour < 4) {
      greetingMessage.textContent = "Hi! ";
      emoji = "🌃"; // Night emoji
    } else if (currentHour >= 4 && currentHour < 12) {
      greetingMessage.textContent = "Good Morning! ";
      emoji = "🌅"; // Morning emoji
    } else if (currentHour >= 12 && currentHour < 18) {
      greetingMessage.textContent = "Good Afternoon! ";
      emoji = "☀️"; // Afternoon emoji
    } else {
      greetingMessage.textContent = "Good Evening! ";
      emoji = "🌙"; // Evening emoji
    }

    // Place the emoji in the #greeting-icon span
    greetingIcon.textContent = emoji;

    // Apply the bounce animation to the emoji after a small delay
    setTimeout(() => {
      greetingIcon.classList.add("bounce");
    }, 0); // Ensure it runs after the DOM has updated
  } else {
    console.error("Elements not found: Ensure your HTML has the correct IDs.");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const experienceSection = document.getElementById('experience');
  const experiencePin = document.getElementById('experience-pin');
  
  // Create the IntersectionObserver instance
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the active class to trigger the animation when in view
        if (experiencePin) {
          experiencePin.classList.add('pin-stab-active');
        }
      } else {
        // Remove the animation class if the element is not in view
        if (experiencePin) {
          experiencePin.classList.remove('pin-stab-active');
        }
      }
    });
  }, { threshold: 0.5 });  // 50% of the element must be in view for the animation to trigger
  
  // Start observing the #experience section
  if (experienceSection) {
    observer.observe(experienceSection);
  }
});


