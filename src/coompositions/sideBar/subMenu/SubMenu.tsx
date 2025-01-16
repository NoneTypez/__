import Button from "../../../components/button/Button";
import styles from "./SubMenu.module.css";
import cn from "classnames";
import SubMenuProps from "./SubMenu.props";
import { ButtonAppearance } from "../../../enums";

const SubMenu: React.FC<SubMenuProps> = ({ data }) => {
  return (
    <>
      {Object.keys(data).map((category) => (
        <li key={category} className={cn(styles.submenu)}>
          <span>{category.toUpperCase()}</span>
          <ul>
            {data[category].map((item, index) => (
              <li key={index}>
                <Button
                  text={item.text}
                  appearance={ButtonAppearance.base} // Или другой вид
                  onClick={item.onclick} // Обработчик клика
                />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </>
  );
};

export default SubMenu;
