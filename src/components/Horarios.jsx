import React from "react";
import { Tabs, Tab, Table } from "react-bootstrap";

function Horarios() {
  return (
    <div className="horarios-section">
      <h2>HORARIOS</h2>
      <Tabs defaultActiveKey="presencial" id="horarios">
        <Tab
          eventKey="presencial"
          title="PRESENCIAL"
          className="horario-tab"
          autofocus="true"
        >
          <Table responsive>
            <thead>
              <tr>
                <th></th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miércoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
                <th>Sábado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h4>06H30 - 07H30</h4>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <h4>08H00 - 09H00</h4>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <h4>09H00 - 10H00</h4>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="inverted-colors">
                  <p>TÉCNICA</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>10H00 - 11H00</h4>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <p>CROSSFIT</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>11H00 - 12H00</h4>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <p>CROSSFIT</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>16H00 - 17H00</h4>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td className="inverted-colors">
                  <p>TÉCNICA</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <h4>17H00 - 18H00</h4>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td className="inverted-colors">
                  <p>TÉCNICA</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <h4>18H30 - 19H30</h4>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <h4>19H30 - 20H30</h4>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="online" title="ONLINE">
          <Table responsive>
            <thead>
              <tr>
                <th></th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miércoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h4>07H30 - 08H30</h4>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>18H00 - 19H00</h4>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>20H00 - 21H00</h4>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
                <td>
                  <p>CROSSFIT</p>
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Horarios;
