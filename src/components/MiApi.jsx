import { Table } from "react-bootstrap";
import { format } from "date-fns";

function ValorDolar({ valores }) {
  return (
    <Table className="text-center">
      <thead>
        <tr>
          <th>Valor</th>
          <th>Fecha</th>

        </tr>
      </thead>
      <tbody>
        {valores.map((v) => (
          <tr>
            <td>{v.valor}</td>
            <td>{format(Date.parse(v.fecha), "dd/MM/yyyy")}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ValorDolar;
