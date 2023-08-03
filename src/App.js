import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ListExpenses from './components/ListExpenses/ListExpenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  return (
    <div className="App">
      <h1>Example</h1>
      <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/new">New Expense</Link></li>
        <li><Link to="/list">List Expenses</Link></li>
      </ul> 
      <Route exact path="/" component={Home} />
      <Route path="/new" component={NewExpense} />
      <Route path="/list" component={ListExpenses} />
      </BrowserRouter>
      </div>
  );
}

export default App;
