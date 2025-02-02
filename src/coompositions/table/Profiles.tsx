import { ITableComposition } from "../../interfaces";
import cn from "classnames";
import styles from "./TableComposition.module.css";
import { ButtonAppearance } from "../../enums";
import Button from "../../components/button/Button";
import { Checkbox } from "primereact/checkbox";
import "primereact/resources/themes/saga-blue/theme.css";

function Profiles({
  data,
  checkedItems,
  onToggleItem,
}: ITableComposition): JSX.Element {
  return (
    <>
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
          <tr
            key={rowIndex}
            className={cn(styles.row, {
              [styles.light]: rowIndex % 2 !== 0,
              [styles.dark]: rowIndex % 2 === 0,
            })}
          >
            <td>
              {
                <Checkbox
                  checked={checkedItems[id] || false}
                  onChange={() => onToggleItem(id)}
                />
              }
            </td>
            <td>{id}</td>
            <td>{profileName || ""}</td>
            <td>{email || ""}</td>
            <td>{twitter || ""}</td>
            <td>{discord || ""}</td>
            <td>{telegram || ""}</td>
            <td>{telephone || ""}</td>
            <td>{github || ""}</td>
            <td>{Number(balance)}$</td>
            <td>
              {<Button appearance={ButtonAppearance.grey} text="Details" />}
            </td>
          </tr>
        )
      )}
    </>
  );
}
export default Profiles;
