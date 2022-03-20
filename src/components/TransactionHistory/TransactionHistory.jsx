import PropTypes from 'prop-types';
import './TransactionHistory.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead className="header">
        <tr>
          <th className="thead">Type</th>
          <th className="thead">Amount</th>
          <th className="thead">Currency</th>
        </tr>
      </thead>

      <tbody className="tbody">
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionHistory;
