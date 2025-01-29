import { Checkbox } from "primereact/checkbox";

const CH = () => {
  return (
    <Checkbox
      onChange={(e) => setChecked(e.checked)}
      checked={checked}
    ></Checkbox>
  );
};
