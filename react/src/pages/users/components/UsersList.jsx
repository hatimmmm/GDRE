import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axiosClient from '../../../setup/API/axios-client';
import { useEffect, useState } from 'react';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { remUser } from '../../../store/slices/usersSlice';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export default function UsersList({ setUserId }) {
  const dispatch = useDispatch()


  const { users } = useSelector((state) => state.users)
  const onDelete = (id) => {
    axiosClient.delete(`/users/${id}`).then(({ response }) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
    dispatch(remUser(id))

  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Nom</StyledTableCell>
            <StyledTableCell align="left">Prenom</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Telephone</StyledTableCell>
            <StyledTableCell align="left">Role</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.id}
              </StyledTableCell>
              <StyledTableCell align="left">{user.nom}</StyledTableCell>
              <StyledTableCell align="left">{user.prenom}</StyledTableCell>
              <StyledTableCell align="left">{user.email}</StyledTableCell>
              <StyledTableCell align="left">{user.tel}</StyledTableCell>
              <StyledTableCell align="left">{user.roles[0].display_name}</StyledTableCell>
              <StyledTableCell align="left"><IconButton color='primary' onClick={() => setUserId(user.id)}><ManageAccountsIcon /></IconButton></StyledTableCell>
              <StyledTableCell align="left"><IconButton onClick={() => { onDelete(user.id) }} color='error'><PersonRemoveIcon /></IconButton></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}