function calculateBudget() {
    const income = document.getElementById("income").value;
    const expense = document.getElementById("expense").value;
    const budget = income - expense;
    document.getElementById("budget").innerHTML = `Available Budget: $${budget}`;
}