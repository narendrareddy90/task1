// Page Navigation
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
  document.getElementById(pageId).classList.remove("hidden");
}

// Signup & Login
function signup() {
  let user = document.getElementById("signupUser").value;
  let pass = document.getElementById("signupPass").value;
  if (user && pass) {
    localStorage.setItem(user, pass);
    alert("Signup Successful!");
    showPage('loginPage');
  } else {
    alert("Please fill all fields!");
  }
}

function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;
  let storedPass = localStorage.getItem(user);
  if (storedPass && storedPass === pass) {
    alert("Login Successful!");
    showPage('coursePage');
  } else {
    alert("Invalid Credentials!");
  }
}

// Quiz
function checkAnswer(button, answer) {
  if (answer === 'correct') {
    document.getElementById("quizResult").innerText = "✅ Correct!";
    markProgress("Quiz Completed");
  } else {
    document.getElementById("quizResult").innerText = "❌ Wrong Answer. Try again!";
  }
}

// Progress Tracking
function markProgress(task) {
  let progress = JSON.parse(localStorage.getItem("progress")) || [];
  if (!progress.includes(task)) {
    progress.push(task);
    localStorage.setItem("progress", JSON.stringify(progress));
  }
  showProgress();
}

function showProgress() {
  let progress = JSON.parse(localStorage.getItem("progress")) || [];
  let list = document.getElementById("progressList");
  list.innerHTML = "";
  progress.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

// Load Progress on Page Load
window.onload = showProgress;