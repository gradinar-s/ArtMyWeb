import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "../../components/ui";

const NonExistentPage = () => {
  return (
    <Typography sx={{ textAlign: "center" }}>
      The page doesn't exist. Go <Link to={"/users"}>home</Link>
    </Typography>
  );
};

export default NonExistentPage;
