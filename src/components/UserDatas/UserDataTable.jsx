import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const UserDataTable = ({userData}) => (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>name</TableCell>
                    <TableCell>contact</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell>grading</TableCell>
                    <TableCell>position1</TableCell>
                    <TableCell>position2</TableCell>
                    <TableCell>summary</TableCell>
                    <TableCell>View More</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {userData?.map((user) => (
                    <TableRow key={user.ID}> 
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.contact}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.grading}</TableCell>
                        <TableCell>{user.position1}</TableCell>
                        <TableCell>{user.position2}</TableCell>
                        <TableCell>{user.summmary}</TableCell>
                        <TableCell><button>hi</button></TableCell>
                    </TableRow> 
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
export default UserDataTable;