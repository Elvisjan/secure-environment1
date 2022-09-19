import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import React from "react";
import { SideBar } from "./subpages/sidebar/page";
import { StudentsList } from "./subpages/students-list";

export const MainPage: React.FC = () => {
  return (
    <Wrapper>
      <SideBar />
      <StudentsList />
    </Wrapper>

  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FDFCF6;
  display:grid;
  gap: 2rem;
  grid-template-columns: 1fr 5fr;
  ;
`
