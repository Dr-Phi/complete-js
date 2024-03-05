'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnCloseAcc = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


/////////// Functions

// this function takes an array of transaction amounts, optionally sorts them, generates HTML for each transaction, and inserts it into an HTML container element
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
}

// This function provides a comprehensive summary of the account's movements: total income, total outcome, and total interest earned on deposits.
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

function createUsername(acc){
  acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
};

// Creates usernames by using the initials
const createUsernames = accs => accs.forEach(createUsername);

createUsernames(accounts);


const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

////// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
   
    inputLoginPin.blur();  // blur() method is a built-in method that can be called on most HTML elements, it removes the focus from that element, meaning that it's no longer actively selected for user input.

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnCloseAcc.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// Create Account Functionality

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpenAcc = document.querySelector(".create__button");
const inputFname = document.querySelector("#fname");
const inputPin = document.querySelector("#pin");
const inputConfirm = document.querySelector("#confirm");
const btnSaveAcc = document.querySelector(".save__btn");

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnOpenAcc.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (ev) {
  if (ev.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

btnSaveAcc.addEventListener('click', function(e){
  e.preventDefault();
  const fName = inputFname.value;
  console.log(fName)
  const pin = Number(inputPin.value);
  const confirm = Number(inputConfirm.value);

  //Validations
  const insertedContent = document.querySelector(".insertedContent");
  if(insertedContent) {
    insertedContent.parentNode.removeChild(insertedContent);
  }
  if(accounts.find( acc => acc.owner === fName)){
    const existHTML= `
    <div class="insertedContent"> ${fName} already has an account
    </div>
    `;
    inputFname.insertAdjacentHTML('afterend',existHTML);
  }
  if(pin !== confirm){
    const existHTML= `
    <div class="insertedContent">PIN does not match</div>
    `;
    inputConfirm.insertAdjacentHTML('afterend',existHTML);
  }
  const validPin = pin.toString()
  if(validPin.length != 4){
    const existHTML= `
    <div class="insertedContent">must have 4 digits</div>
    `;
    inputConfirm.insertAdjacentHTML('afterend',existHTML);
  }
  if(!accounts.find( acc => acc.owner === fName)&& pin===confirm){
    const newAccount = {
      owner: fName,
      movements: [5000],
      interestRate: (Math.floor(Math.random() * 41) + 10) /10,
      pin: confirm,
    }
    createUsername(newAccount);
    accounts.push(newAccount);
    currentAccount = newAccount;
    const escapeKeyEvent = new KeyboardEvent('keydown', {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      which: 27,
  });
    document.dispatchEvent(escapeKeyEvent);
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    updateUI(currentAccount)
    showAlert('We have processed your initial deposit of 5000€');
  }

});

function showAlert(message) {
  const alertDiv = document.createElement('div');
  alertDiv.textContent = message;
  alertDiv.className = 'alert-message';
  containerMovements.appendChild(alertDiv);

  // fading in
  setTimeout(function() {
      alertDiv.style.opacity = '1';
  }, 100);
  // Ocultar el mensaje después de 5 segundos
  setTimeout(function() {
      alertDiv.style.opacity = '0';
      setTimeout(function() {
          alertDiv.remove(); 
      }, 1000);
  }, 5000);
}