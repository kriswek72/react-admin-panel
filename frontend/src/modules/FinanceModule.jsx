import { useState } from 'react';

const defaultFinanceModule = () => {
    // Placeholder for default finance module data
    return {
        invoices: [],
        payments: [],
        budgets: [],
    };
};

const FinanceModule = () => {
  const [financeData, setFinanceData] = useState(defaultFinanceModule());
  const [newInvoice, setNewInvoice] = useState({
    id: '',
    amount: '',
    date: '',
    status: '',
  }); 
  const [newPayment, setNewPayment] = useState({
    id: '',
    amount: '',
    date: '',
    method: '',
  });
  const [newBudget, setNewBudget] = useState({
    id: '',
    amount: '',
    category: '',
    date: '',
  });
  const handleAddInvoice = () => {
    const invoiceWithId = { id: Date.now(), ...newInvoice };
    setFinanceData(prev => ({
      ...prev,
      invoices: [...prev.invoices, invoiceWithId],
    }));
    localStorage.setItem('financeData', JSON.stringify(financeData));
    setNewInvoice({ id: '', amount: '', date: '', status: '' });
  };
  const handleAddPayment = () => {
    const paymentWithId = { id: Date.now(), ...newPayment };
    setFinanceData(prev => ({
      ...prev,
      payments: [...prev.payments, paymentWithId],
    }));
    localStorage.setItem('financeData', JSON.stringify(financeData));
    setNewPayment({ id: '', amount: '', date: '', method: '' });
  };
  const handleAddBudget = () => {
    const budgetWithId = { id: Date.now(), ...newBudget };
    setFinanceData(prev => ({
      ...prev,
      budgets: [...prev.budgets, budgetWithId],
    }));
    localStorage.setItem('financeData', JSON.stringify(financeData));
    setNewBudget({ id: '', amount: '', category: '', date: '' });
  };
  const handleDeleteInvoice = (id) => {
    setFinanceData(prev => ({
      ...prev,
      invoices: prev.invoices.filter(invoice => invoice.id !== id),
    }));
    localStorage.setItem('financeData', JSON.stringify(financeData));
  };
  const handleDeletePayment = (id) => {
    setFinanceData(prev => ({
      ...prev,
      payments: prev.payments.filter(payment => payment.id !== id),
    }));
    localStorage.setItem('financeData', JSON.stringify(financeData));
  };
  const handleDeleteBudget = (id) => {
    setFinanceData(prev => ({
      ...prev,
      budgets: prev.budgets.filter(budget => budget.id !== id),
    }));
    localStorage.setItem('financeData', JSON.stringify(financeData));
  };
  // Render the finance module
  return (
    <div>
      <h2>💰 Moduł Finansowy</h2>
      <p>Tu będą funkcje związane z finansami.</p>

      <div>
        <h3>Dodaj fakturę</h3>
        <input
          type="text"
          placeholder="ID faktury"
          value={newInvoice.id}
          onChange={(e) => setNewInvoice({ ...newInvoice, id: e.target.value })}
        />
        <input
          type="number"
          placeholder="Kwota"
          value={newInvoice.amount}
          onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })}
        />
        <input
          type="date"
          placeholder="Data"
          value={newInvoice.date}
          onChange={(e) => setNewInvoice({ ...newInvoice, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Status"
          value={newInvoice.status}
          onChange={(e) => setNewInvoice({ ...newInvoice, status: e.target.value })}
        />
        <button onClick={handleAddInvoice}>➕ Dodaj fakturę</button>
      </div>

      <div>
        <h3>Dodaj płatność</h3>
        <input
          type="text"
          placeholder="ID płatności"
          value={newPayment.id}
          onChange={(e) => setNewPayment({ ...newPayment, id: e.target.value })}
        />
        <input
          type="number"
          placeholder="Kwota"
          value={newPayment.amount}
          onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
        />
        <input
          type="date"
          placeholder="Data"
          value={newPayment.date}
          onChange={(e) => setNewPayment({ ...newPayment, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Metoda płatności"
          value={newPayment.method}
          onChange={(e) => setNewPayment({ ...newPayment, method: e.target.value })}
        />
        <button onClick={handleAddPayment}>➕ Dodaj płatność</button>
      </div>

      <div>
        <h3>Dodaj budżet</h3>
        <input
          type="text"
          placeholder="ID budżetu"
          value={newBudget.id}
          onChange={(e) => setNewBudget({ ...newBudget, id: e.target.value })}
        />
        <input
          type="number"
          placeholder="Kwota"
          value={newBudget.amount}
          onChange={(e) => setNewBudget({ ...newBudget, amount: e.target.value })}
        />
        <input
          type="text"
          placeholder="Kategoria"
          value={newBudget.category}
          onChange={(e) => setNewBudget({ ...newBudget, category: e.target.value })}
        />
        <input
          type="date"
          placeholder="Data"
          value={newBudget.date}
          onChange={(e) => setNewBudget({ ...newBudget, date: e.target.value })}
        />
        <button onClick={handleAddBudget}>➕ Dodaj budżet</button>
      </div>

      <div>
        <h3>Lista faktur</h3>
        <ul>
          {financeData.invoices.map(invoice => (
            <li key={invoice.id}>
              {invoice.id} - {invoice.amount} - {invoice.date} - {invoice.status}
              <button onClick={() => handleDeleteInvoice(invoice.id)}>🗑️ Usuń</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Lista płatności</h3>
        <ul>
          {financeData.payments.map(payment => (
            <li key={payment.id}>
              {payment.id} - {payment.amount} - {payment.date} - {payment.method}
              <button onClick={() => handleDeletePayment(payment.id)}>🗑️ Usuń</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Lista budżetów</h3>
        <ul>
          {financeData.budgets.map(budget => (
            <li key={budget.id}>
              {budget.id} - {budget.amount} - {budget.category} - {budget.date}
              <button onClick={() => handleDeleteBudget(budget.id)}>🗑️ Usuń</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FinanceModule;
// This module is a placeholder for financial management features.
// It can be expanded with components for managing invoices, payments, and financial reports.   
// You can add more functionality as needed, such as charts, tables, and forms for financial data.