import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams, ruRU } from '@mui/x-data-grid';

import { H1 } from "../../ui";
import styled from "@emotion/styled";

export const StudentsList: React.FC = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID карты', width: 90 },
    {
      field: 'fio',
      headerName: 'ФИО',
      editable: true,
      width: 290
    },
    {
      field: 'class',
      headerName: 'Класс',
      editable: true,
      width: 290
    },
    {
      field: 'phoneNumber',
      headerName: 'Номер телефона ',
      type: 'number',
      editable: true,
      width: 290


    },
    {
      field: 'classroomTeacher',
      headerName: 'Клас. Рук.',
      editable: true,
      width: 290
    },
    {
      field: 'actions',
      headerName: 'Действия',
      editable: true,
      width: 290


    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  return (
    <Wrapper>
      <div className="title">
        <H1 title="Список учеников" />
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        autoHeight
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        sx={{
          background: "linear-gradient(0deg, rgba(64, 105, 39, 0.05), rgba(64, 105, 39, 0.05)), #FDFCF6"
        }}
        rowsPerPageOptions={[25,50,100]}
        showCellRightBorder
        showColumnRightBorder
      />
    </Wrapper>

  )
}
const Wrapper = styled.div`
  .title {
    margin-top: 2rem;
    font-style: normal;
    font-family: 'Golos';
  }  
`