import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, typography, useTheme } from "@mui/system";
import FlexBetween from "@/components/FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      Hey
    </FlexBetween>
  );
};

export default Navbar;
