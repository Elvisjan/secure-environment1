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
    { id: 1648, fio: 'Валеев Рамзан Тагирович', firstName: 'Jon', age: 35,class:'5б',phoneNumber:"+7-111-1111",classroomTeacher:'Ненашев Сергей петрович' },
    { id: 1847, fio: 'Тагиров Альберт Валерьевич', firstName: 'Cersei', age: 42,class:'5б',phoneNumber:"+7-111-1111",classroomTeacher:'Ненашев Сергей петрович' },
    { id: 2108, fio: 'Мишкин Владимир Сергеевич', firstName: 'Jaime', age: 45,class:'5б',phoneNumber:"+7-111-1111",classroomTeacher:'Ненашев Сергей петрович' },
    { id: 1542, fio: 'Старков Андрей Дамирович', firstName: 'Arya', age: 16,class:'5б',phoneNumber:"+7-111-1111",classroomTeacher:'Ненашев Сергей петрович' },
    { id: 2103, fio: 'Микаэлян Даниил Арутюнович', firstName: 'Daenerys', age: null,class:'5б',phoneNumber:"+7-111-1111",classroomTeacher:'Ненашев Сергей петрович' },
    { id: 2513, fio: 'Зеркалин Сергей Петрович', firstName: null, age: 150,class:'5б',phoneNumber:"+7-111-1111",classroomTeacher:'Ненашев Сергей петрович' },
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