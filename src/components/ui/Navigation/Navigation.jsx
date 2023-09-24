import { BottomNavigation, BottomNavigationAction } from "@mui/material";

const Navigation = ({ value, items, onChange, ...props }) => {
  return (
    <BottomNavigation
      {...props}
      showLabels
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
    >
      {items.map((item) => (
        <BottomNavigationAction
          key={item?.label}
          icon={item?.icon}
          label={item?.label}
        />
      ))}
    </BottomNavigation>
  );
};

export default Navigation;
