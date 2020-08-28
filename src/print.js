function calculateOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
}

function printTitle() {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function printOwing (invoice) {
  printTitle();

  // calculate outstanding
  let outstanding = calculateOutstanding(invoice);

  // record due date
  recordDueDate(invoice);

  // print details
  printDetails(invoice, outstanding);
}
