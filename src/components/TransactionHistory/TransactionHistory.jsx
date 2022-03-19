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
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
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
