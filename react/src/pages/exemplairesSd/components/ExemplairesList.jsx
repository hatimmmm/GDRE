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
import { remExemplaire } from '../../../store/slices/dossiersSlice';



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
export default function ExemplairesList({ setExId }) {
  const dispatch = useDispatch()


  const { exemplaires } = useSelector((state) => state.dossiers)
  const onDelete = (id) => {
    axiosClient.delete(`/exemplairesSd/${id}`).then(({ response }) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
    dispatch(remExemplaire(id))

  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">ID exemplaire</StyledTableCell>
            <StyledTableCell align="left">ID sous dissier</StyledTableCell>
            <StyledTableCell align="left">Cote topographique</StyledTableCell>
            <StyledTableCell align="left">Exclu du pret</StyledTableCell>
            <StyledTableCell align="left">Disponibilite</StyledTableCell>
            <StyledTableCell align="left">Observation</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exemplaires && exemplaires.map((exemplaire) => (
            <StyledTableRow key={exemplaire.id_exemplaire}>
              <StyledTableCell component="th" scope="row">
                {exemplaire.id_exemplaire}
              </StyledTableCell>
              <StyledTableCell align="left">{exemplaire.id_sous_dossier}</StyledTableCell>
              <StyledTableCell align="left">{exemplaire.cote_topo}</StyledTableCell>
              <StyledTableCell align="left">{exemplaire.exclu_du_pret}</StyledTableCell>
              <StyledTableCell align="left">{exemplaire.disponibilite}</StyledTableCell>
              <StyledTableCell align="left">{exemplaire.observation}</StyledTableCell>
              <StyledTableCell align="left"><IconButton color='primary' onClick={() => setExId(exemplaire.id_exemplaire)}><ManageAccountsIcon /></IconButton></StyledTableCell>
              <StyledTableCell align="left"><IconButton onClick={() => { onDelete(exemplaire.id_exemplaire) }} color='error'><PersonRemoveIcon /></IconButton></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}