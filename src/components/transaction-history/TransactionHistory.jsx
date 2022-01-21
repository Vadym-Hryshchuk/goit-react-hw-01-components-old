import { Section, Table } from "./TransactionHistory.styled";

const TransactionHistory = ({ items }) => {
    return (
<Section>
  <Table className="transaction-history">
  <thead>
    <tr>
      <th >Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    {items.map(item => (   
    <tr key = {item.id}>
      <td style={{ textTransform:"capitalize" }}>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
    ))}
  </tbody>
</Table>
</Section>         
    )
}

export default TransactionHistory;