
  const typedText = document.querySelector(".typed-text");
  const roles = ["Frontend Developer", "Web Designer", "Database Interactor"];
  let roleIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeEffect() {
    if (typing) {
      if (charIndex < roles[roleIndex].length) {
        typedText.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
      } else {
        typing = false;
        setTimeout(typeEffect, 2000);
      }
    } else {
      if (charIndex > 0) {
        typedText.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, 50);
      } else {
        typing = true;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 100);
      }
    }
  }

  typeEffect();
