import PropTypes from 'prop-types';
import { Table, Td, Th, Tr } from "./TransactionHistory.styled";



export const TransactionHistory = ({ items }) => {
    return (
        <Table>
           <thead>
                <tr>
                <Th>Type</Th>
                <Th>Amount</Th>
                <Th>Currency</Th>
                </tr>
            </thead>

            <tbody>
                {items.map(items => (
                    <Tr key={items.id}>
                        <Td>{items.type}</Td>
                        <Td>{items.amount}</Td>
                        <Td>{items.currency}</Td>
                    </Tr>
             ))}
            </tbody>
        </Table>
        )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
}