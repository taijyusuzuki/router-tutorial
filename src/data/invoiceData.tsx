import { Invoice } from "@/interface/invoice";

let invoices: Invoice[] = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
  },
];

/**
 * get all invoices
 * @return {Invoice[]} invoices
 */
export const getInvoices = () => {
  return invoices;
};

/**
 * get invoice by specified number
 * @param {number} number
 * @return {Invoice} invoice
 */
export const getInvoiceByNumber = (number: number) => {
  return invoices.find(
    (invoice) => invoice.number === number
  );
};

/**
 * remove invoice by specified number and return removed list
 * @param {number} number
 * @return {Invoice[]} invoice
 */
export const deleteInvoice = (number: number | undefined) => {
  if (typeof number === 'undefined') {
    return
  }
  invoices = invoices.filter(
    (invoice) => invoice.number !== number
  );
};
