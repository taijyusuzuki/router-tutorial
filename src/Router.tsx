import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Index from "./components";
import Expenses from "./components/expenses";
import InvoiceDetail from "./components/invoiceDetail";
import Invoices from "./components/invoices";
import NotFound from "./components/notFound";

/**
 * Router Component
 * @return {JSX.Element}
 */
const Router = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
};

export default Router;
