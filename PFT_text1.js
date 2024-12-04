const sampleData = {
    balance: 0,
    income: [
      { date: '2024-01-01', source: 'Salary', amount: 300 },
      { date: '2024-01-15', source: 'Other', amount: 540 }
    ],
    expenses: [
      { date: '2024-01-05', category: 'Personal', amount: 185 },
      { date: '2024-01-10', category: 'Rent', amount: 435 }
    ],
    budgets: [
      { category: 'Groceries', budget: 300 },
      { category: 'Rent', budget: 200 }
    ]
  };
  function loadContent(page) {
    const main = document.querySelector('main');
    main.innerHTML = '';

    // Reset the styles of .grid elements if they exist
    const gridElements = document.querySelectorAll('.grid');
    if (gridElements.length > 0) {
        gridElements.forEach((element) => {
            console.log('Resetting styles for element:', element);
            element.style.position = 'static'; // Reset to the default position
            element.style.margin = '0'; // Reset margin
        });
    }

    switch (page) {
        case 'home':
            loadDashboard();
            break;
        case 'income':
            loadIncomeManagement();
            break;
        case 'expenses':
            loadExpenseManagement();
            break;
        case 'budgets':
            loadBudgeting();
            break;
        case 'reports':
            loadReports();
            break;
        case 'about':
            loadAbout();
            break;
        default:
            console.error('Invalid page:', page);
    }
}

  function loadDashboard() {
    const main = document.querySelector('main');
    const totalIncome = calculateTotal(sampleData.income);
    const totalExpenses = calculateTotal(sampleData.expenses);

    // Calculate the balance
    const balance = sampleData.balance + totalIncome - totalExpenses;
    const dashboardContent = `
    <head>
    
    </head>
    <!--<h2 class="h2">Dashboardhjgkfhgkgkfjhergj</h2>-->
    <div style="display: flex; justify-content: space-between; ">
      <div class="grid"style="margin-right: 5px;margin-top:-472px;">
        <div class="col-12">
          <div class="col-12 md:col-12">
            <div class="card m-3 border-1 surface-border ">
              <div class="flex align-items-center justify-content-between">
                <div class="flex align-items-center">
                <!-- <h2>Dashboard</h2> -->
                  <p>&emsp;Balance:$${balance}</p>
                  <div style="text-align: center;">
                  <i class="fa fa-balance-scale" style="font-size: 50px; color: black;"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      <div class="grid"style="margin-left:240px;margin-top:-232px;">
        <div class="col-12">
          <div class="col-12 md:col-12">
            <div class="card m-3 border-1 surface-border">
              <div class="flex align-items-center justify-content-between">
                <div class="flex align-items-center">
                <!-- <h2>Dashboard</h2> -->
                  <p>&emsp;Income: $${calculateTotal(sampleData.income)}</p>
                  <div style="text-align: center;">
                  <i class="fas fa-donate" style="font-size: 50px; color: black;"></i>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
   
      <div class="grid" style="margin-left:240px;margin-top:-234px;">
      <div class="col-12">
        <div class="col-12 md:col-12">
          <div class="card m-3 border-1 surface-border">
            <div class="flex align-items-center justify-content-between">
              <div class="flex align-items-center">
                <ul>
                  <li class="li" style="display: flex;"><i class="fa fa-house" style="font-size:18px; margin-left: -40px;color: black;"></i>&emsp;Rental&emsp;$150</li>
                  <br>
                  <li class="li"style="display: flex;"><i class="fa fa-user-alt" style="font-size:20px; margin-left: -40px;color: black;"></i>&emsp;Personal&emsp;$185</li>
                  <br>
                  <li class="li"style="display: flex;"><i class="fa fa-heartbeat" style="font-size:20px; margin-left: -40px;color: black;"></i>&emsp;Medical&emsp;$160</li>
                  <br>
                  <li class="li" style="display: flex;"><i class="fas fa-file-invoice-dollar" style="font-size:23px; margin-left: -38px;color: black;"></i>&emsp;Bills&emsp;$125</li>
                </ul>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    
    
    </div>
  
      <br>
      <div style="display: flex; justify-content: space-between; ">
      <div class="grid" style="margin-left:0px;margin-top:-28px;" >
        <div class="col-12 md:col-12">
          <div class="card m-3 border-1 surface-border">
            <div class="flex align-items-center justify-content-between">
              <div class="flex align-items-center">
              <!-- <h2>Dashboard</h2> -->
                <p>Expenses: $${calculateTotal(sampleData.expenses)}</p>
                <div style="text-align: center;">
                <i class="fas fa-money-bill-alt" style="font-size: 50px; color: black;"></i>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="grid"style="margin-right: 515px;margin-left:240px;margin-top:-26px">
    <div class="col-12">
      <div class="col-12 md:col-12">
        <div class="card m-3 border-1 surface-border">
          <div class="flex align-items-center justify-content-between">
            <div class="flex align-items-center">
            <!-- <h2>Dashboard</h2> -->
            <p>Budget : ${calculateBudgetAdherence(sampleData.expenses, sampleData.budgets)}</p>
            <div style="text-align: center;">
                  <i class="fas fa-coins" style="font-size: 50px; color: black;"></i>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="grid" style="margin-left: 478px; margin-top: -26px;">
  <div class="col-12">
    <div class="col-12 md:col-12">
      <div class="card m-3 border-1 surface-border">
        <div class="flex align-items-center justify-content-between">
          <div class="flex align-items-center">
            <ul>
              <li class="li" style="display: flex;">&emsp;&emsp;50%</li>
              <br>
              <li class="li" style="display: flex;">Income Goals</li>
              <br>
            </ul>  
          </div>
          <div class="progress-bar" style="width: 150px; height: 20px; background-color: lightgray; border-radius: 10px; margin-left: 18px;">
            <div class="progress" style="width: 67%; height: 100%; background-color: black; border-radius: 10px;">&emsp;&emsp;</div>
          </div>
          <!-- End of Progress bar -->
        </div>
      </div>
    </div>
  </div>
</div>

</div>`;
  const homeElement = document.getElementById('homePage');
  homeElement.innerHTML = dashboardContent;
  loadDashboard();
  
   }
  
  function changeColor(element) {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abincomeFormc9c'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.backgroundColor = randomColor;
  }

  function resetColor(element) {
      element.style.backgroundColor = ''; // Reset to the original color or use a default color
  }
 
  

  function loadIncomeManagement() {
    const main = document.querySelector('main');
    main.innerHTML = '';

    const incomeContent = `
    <div id="incomePage">
    <br><br><br><br>
        <h2 class="h2_1" style="color:white;">Income Management &emsp;<i class="fas fa-donate" style="font-size: 25px; color: white;"></i></h2>
        <form id="incomeForm">
        <br>
            <label for="incomeDate" style="font-size:20px">Date:&emsp;&emsp;</label>&emsp;&emsp;
            <input type="date" id="incomeDate" required style="font-size:20px">
            <br><br><br>
            <label for="incomeSource" style="font-size:20px">Source:&emsp;</label>&emsp;&emsp;
            <input type="text" id="incomeSource" required style="font-size:20px">
            <br><br><br>
            <label for="incomeAmount" style="font-size:20px">Amount:&emsp;</label>&emsp;&emsp;
            <input type="number" id="incomeAmount" required style="font-size:20px">&emsp;
            <button type="button" onclick="addIncome()" style="font-size:20px">Add Income</button>
            <br><br>
        </form>
        <ul id="incomeList"></ul>
    </div>`;

    main.insertAdjacentHTML('beforeend', incomeContent);
    displayIncomeList();
}

function loadExpenseManagement() {
    const main = document.querySelector('main');
    main.innerHTML = '';

    const expenseContent = `
    <div id="expensesPage">
    <br><br><br><br><br><br>
        <h2 class="h2_2">Expense Management&emsp;<i class="fas fa-money-bill-alt" style="font-size: 25px; color: white;"></i></h2>
        <form id="expenseForm"><br>
            <label for="expenseDate" style="font-size:20px">Date:</label>&emsp;&emsp;&emsp;&emsp;
            <input type="date" id="expenseDate" required style="font-size:20px">
            <br><br><br>
            <label for="expenseCategory" style="font-size:20px">Category:</label>&emsp;&emsp;
            <input type="text" id="expenseCategory" required style="font-size:20px">
            <br><br><br>
            <label for="expenseAmount" style="font-size:20px">Amount:</label>&emsp;&emsp;&emsp;
            <input type="number" id="expenseAmount" required style="font-size:20px">&emsp;
            <button type="button" onclick="addExpense()" style="font-size:20px">Add Expense</button>
            <br><br>
        </form>
        <ul id="expenseList"></ul>
    </div>`;

    main.insertAdjacentHTML('beforeend', expenseContent);
    displayExpenseList();
}

  
  function loadBudgeting() {
    const main = document.querySelector('main');
    const budgetingContent = `
  
    <br><br><br><br><br><br><br><br>
      <h2 class ="h2_3">Budgeting&emsp;<i class="fas fa-coins" style="font-size: 25px; color: white;"></i></h2>
      <form id="budgetForm"><br>
        <label for="budgetCategory" style="font-size:20px">Category:</label>&emsp;&emsp;&emsp;&emsp;
        <input type="text" id="budgetCategory" required style="font-size:20px">
        <br><br><br>
        <label for="budgetAmount" style="font-size:20px">Budget Amount:</label>&emsp;
        <input type="number" id="budgetAmount" required style="font-size:20px">&emsp;
        <button type="button" onclick="setBudget()" style="font-size:20px">Set Budget</button>
        <br><br><br>
      </form>
      <div id="budgetChart"></div>
    `;
    main.insertAdjacentHTML('beforeend', budgetingContent);
    displayBudgetChart();
    }
    
  
  function loadReports() {
    const main = document.querySelector('main');
    const reportsContent = `

    <br> <br><br><br><br><br><br><br><br><br>
      <h2 class ="h2_4">Reports&emsp;<i class="fa fa-file-text" style="font-size: 25px; color: white;"></i></h2><br>
      <label for="reportType" style="font-size:24px">Select Report Type:</label>&emsp;
      <select id="reportType" onchange="generateReport()">
        <option value="incomeVsExpense" style="font-size:15px">Income vs. Expenses</option>
        <option value="budgetAdherence" style="font-size:15px">Budget Adherence</option>
      </select>
      <div id="reportContent"></div>
    `;
    main.insertAdjacentHTML('beforeend', reportsContent);
    generateReport();
    }
    
  
  function loadAbout() {
    const main = document.querySelector('main');
    const aboutContent = `
   
    <br>
    <br><br><br><br><br><br><br><br><br><br>
      <h2 class ="h2_5">About / Contact&emsp;<i class="fa fa-bank" style="font-size: 25px; color: white;"></i></h2>
      <p style="font-size:20px">Stying on Your Top of Money With Personal Financial Tracker.<br>We are here for you.Feel Free to connect with us for  getting the more benifits from us.<br>Our Personal Financial Tracker is Financially Competitive Organization than Other.<br>You are lucky to here with us.</p>
      <p style="font-size:20px">Contact us at: finance.tracker@example.com</p>
      <p style="font-size:20px">Facebook: Fianancial_Tracker/facebook/profile<p>
      <p style="font-size:20px">Linked in: https://www.linkedin.com/in/financial_tracker-ab974a255/<p>
      <p style="font-size:20px">Telephone No: 0912738478 / 0916473847<p>
      <p style="font-size:20px">Other: 0703948768/0712637678</p>
    `;
    main.insertAdjacentHTML('beforeend', aboutContent);
    AboutElement.innerHTML = aboutContent;
    
    }
   
  
  function displayIncomeList() {
    const incomeList = document.getElementById('incomeList');
    incomeList.innerHTML = sampleData.income.map(entry => `<li>${entry.date} - ${entry.source} - $${entry.amount}</li>`).join('');
  }
  
  function displayExpenseList() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = sampleData.expenses.map(entry => `<li>${entry.date} - ${entry.category} - $${entry.amount}</li>`).join('');
  }
  
  function displayBudgetChart() {
    const budgetChart = document.getElementById('budgetChart');
    budgetChart.innerHTML = sampleData.budgets.map(entry => `<li> ${entry.category} - $${entry.budget}</li>`).join('');
  }
  
  function generateReport() {
    const reportType = document.getElementById('reportType').value;
    const reportContent = document.getElementById('reportContent');
  
    switch (reportType) {
      case 'incomeVsExpense':
        reportContent.innerHTML = `<br>
          <h3>Income vs. Expenses</h3>
          <p>Total Income: $${calculateTotal(sampleData.income)}</p>
          <p>Total Expenses: $${calculateTotal(sampleData.expenses)}</p>
        `;
        break;
      case 'budgetAdherence':
        reportContent.innerHTML = `
          <h3>Budget Adherence</h3>
          <p>Budget Adherence: ${calculateBudgetAdherence(sampleData.expenses, sampleData.budgets)}</p>
        `;
        break;
      default:
        console.error('Invalid report type:', reportType);
    }
  }
  
  function addIncome() {
    const incomeForm = document.getElementById('incomeForm');
    const date = incomeForm.querySelector('#incomeDate').value;
    const source = incomeForm.querySelector('#incomeSource').value;
    const amount = parseFloat(incomeForm.querySelector('#incomeAmount').value);
  
    if (!isNaN(amount)) {
      sampleData.income.push({ date, source, amount });
      displayIncomeList();
    } else {
      alert('Please enter a valid amount for income.');
    }
  }
  
  function addExpense() {
    const expenseForm = document.getElementById('expenseForm');
    const date = expenseForm.querySelector('#expenseDate').value;
    const category = expenseForm.querySelector('#expenseCategory').value;
    const amount = parseFloat(expenseForm.querySelector('#expenseAmount').value);
  
    if (!isNaN(amount)) {
      sampleData.expenses.push({ date, category, amount });
      displayExpenseList();
    } else {
      alert('Please enter a valid amount for expenses.');
    }
  }
  
  function setBudget() {
    const budgetForm = document.getElementById('budgetForm');
    const category = budgetForm.querySelector('#budgetCategory').value;
    const budgetAmount = parseFloat(budgetForm.querySelector('#budgetAmount').value);
  
    if (!isNaN(budgetAmount)) {
      sampleData.budgets.push({ category, budget: budgetAmount });
      displayBudgetChart();
    } else {
      alert('Please enter a valid budget amount.');
    }
  }
  
  function calculateTotal(entries) {
    return entries.reduce((total, entry) => total + entry.amount, 0);
}

function calculateTotal1(entries) {
    return entries.reduce((total, entry) => total + entry.budget, 0);
}

function calculateBudgetAdherence(expenses, budgets) {
    const totalExpenses = calculateTotal(expenses);
    const totalBudgets = calculateTotal1(budgets);
    const budgetAdherence = (((totalExpenses-totalBudgets) / totalBudgets) ).toFixed(2); // Calculate budget adherence as a percentage
    return budgetAdherence + '%'; // Concatenate the percentage sign to the result
}


function showPopup(){
  alert("All Settings are Up to Date");
}

function showPopup1(){
  alert("All Notifications are Up to Date");
}

function showPopup2(){
  alert("Your Profile is Here");
}

  
  loadContent('home');
  