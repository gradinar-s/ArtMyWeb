import { Button as ButtonDefault } from "@mui/material";

const Button = ({ children, variant, onClick, ...props }) => {
  return (
    <ButtonDefault onClick={onClick} variant={variant} {...props}>
      {children}
    </ButtonDefault>
  );
};

export default Button;
