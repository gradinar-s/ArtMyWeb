import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Switch,
  TextField,
  FormControl,
  FormControlLabel,
  Snackbar,
  Alert,
  Box,
} from "@mui/material";
import { Button, Skeleton } from "../../components/ui";
import { updateUserInfo, fetchUser } from "../../api/api";
import { GenderChoice } from "../../components/application";
import { setSelectedUser, updateUser } from "../../store/userReducer";

const UserPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const [isSnackbarVisible, setSnackbarVisible] = useState(null);

  const user = useSelector((state) => state.users.selectedUser);

  const isUserActive = user?.status && user?.status === "active";

  const fetchData = async () => {
    setLoading(true);

    try {
      const data = await fetchUser(id);
      dispatch(setSelectedUser(data.data));
    } catch (error) {
      // display error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user === null) {
      fetchData();
    }
  }, []);

  const onChange = (key, value) => {
    const updatedValue = { [key]: value };
    dispatch(updateUser(updatedValue));
  };

  const onSave = async () => {
    setDisabled(true);
    try {
      await updateUserInfo(user);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setSnackbarVisible(true);
      setDisabled(false);
    }
  };

  const onCloseSnackbar = () => {
    setSnackbarVisible(false);
  };

  if (isLoading) {
    return (
      <Skeleton
        width={500}
        height={300}
        sx={{ justifyContent: "center", display: "flex" }}
      />
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <FormControl sx={{ width: "100%", maxWidth: 500 }}>
        <TextField
          label="Name"
          variant="standard"
          value={user?.name}
          sx={{ mb: "1rem" }}
          onChange={(e) => onChange("name", e.target.value)}
        />

        <TextField
          type="email"
          label="Email"
          variant="standard"
          value={user?.email}
          sx={{ mb: "1rem" }}
          onChange={(e) => onChange("email", e.target.value)}
        />

        <GenderChoice
          sx={{ mb: "1rem" }}
          gender={user?.gender}
          onChange={(gender) => onChange("gender", gender)}
        />

        <FormControlLabel
          sx={{ mb: "1rem", mr: "0" }}
          label={`Status (${user?.status})`}
          control={
            <Switch
              checked={isUserActive}
              onChange={() =>
                onChange("status", isUserActive ? "inactive" : "active")
              }
            />
          }
        />

        <Button
          onClick={onSave}
          variant="contained"
          sx={{ mb: "1rem" }}
          disabled={isDisabled}
        >
          Save
        </Button>
      </FormControl>

      <Snackbar open={isSnackbarVisible} onClose={onCloseSnackbar}>
        <Alert severity={error ? "error" : "success"} onClose={onCloseSnackbar}>
          {error ? "Ooops..." : "The user was updated successfully!"}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default UserPage;
