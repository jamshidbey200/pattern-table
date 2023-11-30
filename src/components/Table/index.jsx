const Table = ({ children }) => {
    return <table>{children}</table>
}
const THead = ({ children }) => {
    return <thead>{children}</thead>
}
const TBody = ({ children }) => {
    return <tbody>{children}</tbody>
}
const TFooter = ({ children }) => {
    return <tfoot>{children}</tfoot>
}
const Th = ({ children }) => {
    return <th>{children}</th>
}
const Tr = ({ children }) => {
    return <tr>{children}</tr>
}
const Td = ({ children }) => {
    return <td>{children}</td>
}

Table.Head = THead;
Table.Body = TBody;
Table.Footer = TFooter;
Table.Th = Th;
Table.Tr = Tr;
Table.Td = Td;

export default Table;