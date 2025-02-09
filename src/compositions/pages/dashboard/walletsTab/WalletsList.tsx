import cn from "classnames";
import styles from "./walletsTab.module.css";
import { Checkbox } from "primereact/checkbox";
import { IWalletList } from "../../../../interfaces";
import Button from "../../../../components/button/button";
import { ButtonAppearance } from "../../../../enums";

function WalletsList({
  data,
  checkedItems,
  onToggleItem,
}: IWalletList): JSX.Element {
  return (
    <>
      {data.map(({ id, address, balance }, rowIndex) => (
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
          <td>{address}</td>
          <td>{Number(balance)}$</td>
          <td>
            {<Button appearance={ButtonAppearance.grey} text="Details" />}
          </td>
        </tr>
      ))}
    </>
  );
}

export default WalletsList;
