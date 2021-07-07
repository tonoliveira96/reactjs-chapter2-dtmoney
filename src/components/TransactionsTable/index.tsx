import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransctionsTable() {
  useEffect(() => {
    api.get("transactions")
      .then((response) => console.log(response.data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolviemento</td>
            <td className="deposity">10.000</td>
            <td>Desenvolviemento</td>
            <td>01/01/2021</td>
          </tr>
          <tr>
            <td>Desenvolviemento</td>
            <td className="withdraw">10.000</td>
            <td>Desenvolviemento</td>
            <td>01/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
