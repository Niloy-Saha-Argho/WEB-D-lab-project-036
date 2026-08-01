/* CollabCore — script.js (simplified)
   The browser already checks "required" fields and valid emails for us
   (since the forms no longer have novalidate), so this file only needs
   to handle: the mobile menu, showing success messages, and the modal. */

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Post Internship form (post.html)
const postForm = document.getElementById('postForm');
if (postForm) {
  const postSuccess = document.getElementById('postSuccess');
  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    postSuccess.hidden = false;
    postForm.reset();
    setTimeout(() => postSuccess.hidden = true, 3000);
  });
}


