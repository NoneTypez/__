import { ITableComposition } from "./TableComposition.props";
import Checkbox from "../checkbox/CheckBox";
import ColumnHeader from "../columnHeader/ColumnHeader";
import Button from "../../button/Button";
import TableHeaders from "./TableHeaders";

function TableComposition({ data }: ITableComposition): JSX.Element {
  return (
    <table>
      <thead>
        <TableHeaders />
      </thead>
      <tbody>
        {data.map(
          (
            {
              id,
              profileName,
              email,
              twitter,
              discord,
              telegram,
              telephone,
              github,
              balance,
            },
            rowIndex
          ) => (
            <tr key={rowIndex}>
              <td>{<Checkbox />}</td>
              <td>{<ColumnHeader text={id} />}</td>
              <td>{<ColumnHeader text={profileName || ""} />}</td>
              <td>{<ColumnHeader text={email || ""} />}</td>
              <td>{<ColumnHeader text={twitter || ""} />}</td>
              <td>{<ColumnHeader text={discord || ""} />}</td>
              <td>{<ColumnHeader text={telegram || ""} />}</td>
              <td>{<ColumnHeader text={telephone || ""} />}</td>
              <td>{<ColumnHeader text={github || ""} />}</td>
              <td>{<ColumnHeader text={balance} />}</td>
              <td>{<Button appearance="profile-details" text="Details" />}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default TableComposition;
