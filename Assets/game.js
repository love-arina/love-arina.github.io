document.addEventListener("DOMContentLoaded", () => {
  const question = document.querySelector(".question");
  const gif = document.querySelector(".gif");
  const yesBtn = document.querySelector(".yes-btn");
  const noBtn = document.querySelector(".no-btn");
  const backBtn = document.querySelector(".back-btn");

  // Initially hide the Back button
  backBtn.style.display = "none";

  yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yipee! <br> (I love you too! 😘)";
    gif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExanN1bXI1bWNmOTdla2NwYmJ4cm8zdDh6cTBmYXZ1YXJrZThjcjRydiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QAn6JoVuABBEapYyX2/giphy.gif";
    noBtn.style.display = "none"; // Hide the No button
    backBtn.style.display = "inline-block"; // Show the Back button
  });

  // Check if the device is a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    let buttonSize = 100; // Initial button size

    noBtn.addEventListener("click", () => {
      const noBtnRect = noBtn.getBoundingClientRect();
      const maxX = window.innerWidth - noBtnRect.width;
      const maxY = window.innerHeight - noBtnRect.height;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      noBtn.style.left = randomX + "px";
      noBtn.style.top = randomY + "px";

      // Reduce button size by 10% of its current size each time it's clicked
      buttonSize *= 0.9;
      noBtn.style.width = `${buttonSize}px`;
      noBtn.style.height = `${buttonSize}px`;
    });
  } else {
    noBtn.addEventListener("mouseover", () => {
      const noBtnRect = noBtn.getBoundingClientRect();
      const maxX = window.innerWidth - noBtnRect.width;
      const maxY = window.innerHeight - noBtnRect.height;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      noBtn.style.left = randomX + "px";
      noBtn.style.top = randomY + "px";
    });
  }
});
