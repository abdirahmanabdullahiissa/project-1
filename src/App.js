
import './App.css';
import Transaction from './component/Transaction';
import Form from './component/Form';
import SearchBar from './component/Search';
import Header from './component/Header';
import { useState,useEffect } from 'react';


function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);

  function addTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);}


    const filteredTransactions = transactions
    ? transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  
  return ( 
  <div className="App">
  <Header />
  <Transaction transactions={filteredTransactions} />
  <SearchBar onSearch={setSearchTerm} />
  <Form onSubmit={addTransaction} />
</div>

  );
  
  }
export default App ;
