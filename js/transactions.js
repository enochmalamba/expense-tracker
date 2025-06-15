// initialization of arrays
const accounts = [];
const expenses = [];
const earnings = [];

// class object constructors
class NewAccount {
  constructor(name, balance) {
    this.account_id = generateID();
    this.account_name = name;
    this.account_balance = balance;
  }
}

class NewTransaction {
  constructor(amount, cause, account_name) {
    const timestamp = Date.now();
    this.trans_id = generateID();
    this.amount = amount;
    this.cause = cause;
    this.account = account_name;
    this.datetime = new Date(timestamp).toLocaleString();
  }
}

//functions
function displayMessage(type, element, message) {}
function generateID() {
  const newId = Date.now() + Math.floor(Math.random() * 1000);
  if (checkID(newId)) {
    return generateID();
  } else {
    return newId;
  }
}
function checkID(id) {
  const expensesIds = expenses.map((expense) => expense.id);
  const earningsIds = earnings.map((earning) => earning.id);
  const accountIds = accounts.map((account) => account.account_id);
  const allIds = [...expensesIds, ...earningsIds, ...accountIds];
  return allIds.includes(id);
}

function editTransaction(type, id, amount, cause, account) {
  try {
    if (type === "earning") {
      const index = earnings.findIndex((trans) => trans.trans_id === id);
      earnings[index].amount = amount;
      earnings[index].cause = cause;
      earnings[index].account_name = account;
    } else if (type === "expense") {
      const index = earnings.findIndex((trans) => trans.trans_id === id);
      expenses[index].amount = amount;
      expenses[index].cause = cause;
      expenses[index].account_name = account;
    }
    displayMessage("success", "element_name_here", "message to display");
  } catch (error) {
    displayMessage("warning", "element_name_here", "message to display");
  }
}

function updateAccount(id, name, balance) {
  const index = accounts.findIndex((account) => account.account_id === id);
  accounts[index].name = name;
  accounts[index].balance = balance;
}
