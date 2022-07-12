import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';
import { deleteInvoice, getInvoiceByNumber } from "../data/invoiceData";
import lo from 'lodash';

/**
 * InvoiceDetail Component
 *
 * @return {JSX.Element}
 */
const InvoiceDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const invoiceId = lo.isUndefined(params.invoiceId) ? 0 : parseInt(params.invoiceId, 10);
  const invoice = getInvoiceByNumber(invoiceId);

  /**
   * delete button action
   *
   * delete selected invoice and call useNavigate Hook
   */
  const onDeleteButtonClick = () => {
    deleteInvoice(invoice?.number);
    navigate('/invoices' + location.search);
  };

  return (
    <main className='invoice-detail'>
      <h2>Total Due: {invoice?.amount}</h2>
      <h3>{invoice?.name}: {invoice?.number}</h3>
      <h3>Due Date: {invoice?.due}</h3>
      <h3>
        <FaTrash
          className='delete-invoice-button'
          onClick={onDeleteButtonClick}
        >
        </FaTrash>
      </h3>
    </main>
  );
};

export default InvoiceDetail;
