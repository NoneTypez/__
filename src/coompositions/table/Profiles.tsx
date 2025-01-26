import { ITableComposition } from "../../interfaces";
import cn from "classnames";
import styles from "./TableComposition.module.css";
import { ButtonAppearance, CheckboxAppearance } from "../../enums";
import Checkbox from "../../components/checkbox/CheckBox";
import Button from "../../components/button/button";

function Profiles({ data }: ITableComposition): JSX.Element {
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
              <Checkbox appearance={CheckboxAppearance.tableCheckbox} />
            </td>
            <td>{id}</td>
            <td>{profileName || ""}</td>
            <td>{email || ""}</td>
            <td>{twitter || ""}</td>
            <td>{discord || ""}</td>
            <td>{telegram || ""}</td>
            <td>{telephone || ""}</td>
            <td>{github || ""}</td>
            <td>{balance}</td>
            <td>
              {
                <Button
                  appearance={ButtonAppearance.profileDetails}
                  text="Details"
                />
              }
            </td>
          </tr>
        )
      )}
    </>
  );
}
export default Profiles;
