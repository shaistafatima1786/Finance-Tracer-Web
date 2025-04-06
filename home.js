let incomeSources = [{ source: "Job", amount: 1000 }, { source: "Freelancing", amount: 500 }, { source: "Selling Art", amount: 250 }];
let expenses = [{ item: "Rent", cost: 300 }, { item: "Groceries", cost: 150 }, { item: "Utilities", cost: 100 }, { item: "Subscription Services", cost: 50 }];

function addIncome() {
  let source = prompt("Enter income source:");
  let amount = parseFloat(prompt("Enter amount:"));
  incomeSources.push({ source: source, amount: amount });
  updateIncomeTable();
  calculateSavings();
}

function addExpense() {
  let item = prompt("Enter expense item:");
  let cost = parseFloat(prompt("Enter cost:"));
  expenses.push({ item: item, cost: cost });
  updateExpensesTable();
  calculateSavings();
}

function updateIncomeTable() {
  let incomeBody = document.getElementById("incomeBody");
  incomeBody.innerHTML = "";
  incomeSources.forEach((income) => {
    let row = incomeBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.textContent = income.source;
    cell2.textContent = "$" + income.amount.toFixed(2);
  });
}

function updateExpensesTable() {
  let expensesBody = document.getElementById("expensesBody");
  expensesBody.innerHTML = "";
  expenses.forEach((expense) => {
    let row = expensesBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.textContent = expense.item;
    cell2.textContent = "$" + expense.cost.toFixed(2);
  });
}

function calculateSavings() {
  let totalIncome = incomeSources.reduce((acc, income) => acc + income.amount, 0);
  let totalExpenses = expenses.reduce((acc, expense) => acc + expense.cost, 0);
  let totalSavings = totalIncome - totalExpenses;
  document.getElementById("savings").textContent = "$" + totalSavings.toFixed(2);
}

updateIncomeTable();
updateExpensesTable();
calculateSavings();
