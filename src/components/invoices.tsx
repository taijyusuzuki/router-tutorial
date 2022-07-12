import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from '../data/invoiceData';
import QueryNavLink from "./queryNavLink";
import { Invoice } from "@/interface/invoice";
import { getLinkStyle } from "../utils/linkUtils";

/**
 * Invoices Component
 *
 * @return {JSX.Element}
 */
const Invoices = () => {
  const invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();

  /**
   * search params change event handler
   *
   * set input params as filter param
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleChangeSearchParams = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value;
    if (filter) {
      setSearchParams({filter});
    } else {
      setSearchParams({});
    }
  };

  /**
   * return true if the invoice.name includes filter param
   *
   * @param {Invoice} invoice
   * @return {boolean} predicate
   */
  const filterPredicate = (invoice: Invoice) => {
    const filter = searchParams.get('filter');
    if (!filter) {
      return true;
    }
    const name = invoice.name.toLowerCase();
    return name.includes(filter.toLowerCase());
  };

  return (
    <div className='invoice-list'>
      <nav className='invoice-list-nav'>
        <text>filter: </text>
        <input
          className='invoice-search-condition'
          value={searchParams.get('filter') || ''}
          onChange={handleChangeSearchParams}
        />
        {invoices
          .filter(filterPredicate)
          .map((invoice) => {
            return (
              <QueryNavLink
                to={`/invoices/${invoice.number}`}
                style={getLinkStyle}
                key={invoice.number}
              >
                {invoice.name}
              </QueryNavLink>
            );
          })}
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;
