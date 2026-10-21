const users = [
  { id: "user1", pass: "123", balance: 0 },
  { id: "user2", pass: "123", balance: 0 }
];

let currentUser = null;

function login() {
  const id = document.getElementById("userId").value;
  const pass = document.getElementById("password").value;

  // Yahan Arrow function use ho raha hai (u => ...)
  currentUser = users.find(u => u.id === id && u.pass === pass);

  if (currentUser) {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("atm-box").style.display = "block";
    document.getElementById("welcomeMsg").innerText = `Welcome, ${currentUser.id}!`;
    updateUI();
  } else {
    alert("Wrong ID or Password!");
  }
}

function updateUI() {
  document.getElementById("balance").innerText = currentUser.balance;
  document.getElementById("amount").value = "";
}

function deposit() {
  let amt = Number(document.getElementById("amount").value);
  if (amt > 0) {
    currentUser.balance += amt;
    updateUI();
  } else {
    alert("Enter a valid amount!");
  }
}

function withdraw() {
  let amt = Number(document.getElementById("amount").value);
  if (amt > 0 && amt <= currentUser.balance) {
    currentUser.balance -= amt;
    updateUI();
  } else {
    alert("Insufficient Balance ya Invalid Amount!");
  }
}

function logout() {
  currentUser = null;
  document.getElementById("userId").value = "";
  document.getElementById("password").value = "";
  document.getElementById("atm-box").style.display = "none";
  document.getElementById("login-box").style.display = "block";
}