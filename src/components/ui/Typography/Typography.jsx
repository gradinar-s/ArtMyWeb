import { Typography as TypographyDefault } from "@mui/material";

const Typography = ({ children, ...props }) => {
  return <TypographyDefault {...props}>{children}</TypographyDefault>;
};

export default Typography;
