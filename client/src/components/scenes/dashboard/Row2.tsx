import DashboardBox from "@/components/DashboardBox";
import React from "react";
import { useGetProductsQuery } from "@/components/state/api";

type Props = {};

const Row2 = (props: Props) => {
  const { data } = useGetProductsQuery();
  console.log("data:", data);
  return (
    <>
      <DashboardBox gridArea="d"></DashboardBox>
      <DashboardBox gridArea="e"></DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
    </>
  );
};

export default Row2;
