import { Navigation } from "../../ui";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

const items = [
  { label: "Male", value: "male", icon: <MaleIcon /> }, // 0
  { label: "Female", value: "female", icon: <FemaleIcon /> }, // 1
];

const GenderChoice = ({ gender, onChange, ...props }) => {
  const indexValue = items.findIndex((item) => item.value === gender);

  const handleChange = (value) => {
    onChange(value === 0 ? "male" : "female");
  };

  return (
    <Navigation
      {...props}
      items={items}
      value={indexValue}
      onChange={handleChange}
    />
  );
};

export default GenderChoice;
