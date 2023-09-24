import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableContainer,
  TablePagination,
  Table as TableDefault,
} from "@mui/material";
import { setSelectedUser } from "../../../store/userReducer";

const columns = [
  { label: "Name" },
  { label: "Email" },
  { label: "Gender" },
  { label: "Status" },
];

const UsersTable = ({
  page,
  data,
  total,
  pageRowsCount,
  setCurrentPage,
  setPageRowsCount,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const onPageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const onRowsPerPageChange = (event) => {
    setPageRowsCount(event.target.value);
  };

  const onClickRow = (user) => {
    dispatch(setSelectedUser(user));

    navigation(`/user/${user?.id}`);
  };

  return (
    <Paper>
      <TableContainer>
        <TableDefault>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column?.label}>{column?.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                hover
                key={row?.id}
                sx={{ cursor: "pointer" }}
                onClick={() => onClickRow(row)}
              >
                <TableCell>{row?.name}</TableCell>
                <TableCell>{row?.email}</TableCell>
                <TableCell>{row?.gender}</TableCell>
                <TableCell>{row?.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableDefault>
      </TableContainer>

      <TablePagination
        page={page}
        count={total}
        component="div"
        rowsPerPage={pageRowsCount}
        onPageChange={onPageChange}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </Paper>
  );
};

export default UsersTable;
