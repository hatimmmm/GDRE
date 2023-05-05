import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

export default function ListeEntites() {
    const { entitesVersantes } = useSelector((state) => state.versements)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, maxHeight: 400 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID entités versantes</TableCell>
                        <TableCell align="left">entités versantes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {entitesVersantes.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="left">{row.entite_versante}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}