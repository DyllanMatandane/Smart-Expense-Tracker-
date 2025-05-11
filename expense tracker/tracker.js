function updateTracker() {
    let total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    document.getElementById("totalExpenses").innerText = `$${total}`;
    document.getElementById("remainingBudget").innerText = `$${budgetLimit - total}`;

    const expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";

    expenses.forEach((exp, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${exp.description} - $${exp.amount} 
            <button onclick="editExpense(${index})">✏ Edit</button> 
            <button onclick="deleteExpense(${index})">🗑 Delete</button>`;
        
        // Apply fade-in animation
        setTimeout(() => listItem.classList.add("show"), 100);

        expenseList.appendChild(listItem);
    });
}const ctx = document.getElementById("expenseChart").getContext("2d");
const expenseChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: [],
        datasets: [{
            label: "Expenses ($)",
            data: [],
            backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        size: 16,
                        family: "Arial"
                    }
                }
            }
        },
        scales: { 
            y: { beginAtZero: true }
        }
    }
});document.getElementById("toggleDarkMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Load dark mode preference
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}