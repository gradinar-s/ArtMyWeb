import React from "react";
import { Box, Skeleton as SkeletonDefault } from "@mui/material";

const Skeleton = ({ sx, ...props }) => {
  return (
    <Box sx={sx}>
      <SkeletonDefault variant="rounded" animation="wave" {...props} />
    </Box>
  );
};

export default Skeleton;
