import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./components/expenses";
import Invoices from "./components/invoices";
import NotFound from "./components/notFound";
import reportWebVitals from './reportWebVitals';
import InvoiceDetail from "./components/invoiceDetail";
import Index from "./components";
import './index.css';

/**
 * Main(index) Component
 *
 * @return {JSX.Element}
 */
const Main = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='expenses' element={<Expenses />} />
            <Route path='invoices' element={<Invoices />} >
              <Route index element={<Index />} />
              <Route path=':invoiceId' element={<InvoiceDetail />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
