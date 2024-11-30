import {
  Box,
  Slide,
  Button,
  Dialog,
  TextField,
  FormControl,
  DialogTitle,
  Autocomplete,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { toast } from "react-toastify";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useMutation, useQuery } from "@apollo/client";
import { TransitionProps } from "@mui/material/transitions";
import { Controller, FieldValues, useForm } from "react-hook-form";

import { pxToRem } from "../../constants";
import { CourierStyle } from "./Courier.style";
import { formatPhoneNumber } from "../../helpers";
import CouriersTable from "./components/DataGrid";
import PageTitle from "../../components/PageTitle";
import { GET_ALL_USERS } from "../../graphql/Query/Users";
import { CREATE_COURIER } from "../../graphql/Mutation/Couriers";
import { GET_ALL_COURIERS } from "../../graphql/Query/Couriers";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Courier = () => {
  const [open, setOpen] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createCourier] = useMutation(CREATE_COURIER, {
    refetchQueries: [{ query: GET_ALL_COURIERS }],
  });
  const { data: getUsersData } = useQuery(GET_ALL_USERS);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateCourier = (values: FieldValues) => {
    const { userId } = values || {};

    createCourier({
      variables: {
        userId,
      },
    })
      .then(() => {
        setOpen(false);
        toast.success("Courier created successfully!");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const users =
    getUsersData?.getUsers?.payload?.map((user: any) => ({
      name: user.name,
      label: user.phone,
      value: user._id || null,
    })) || [];

  return (
    <CourierStyle>
      <PageTitle title="Couriers">
        <Button
          color="primary"
          variant="contained"
          onClick={handleOpen}
          startIcon={<AddIcon />}
        >
          Add New Courier
        </Button>
      </PageTitle>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Create New Courier</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: `${pxToRem(24)} 0`,
            }}
          >
            <Controller
              name="userId"
              rules={{
                required: true,
              }}
              control={control}
              render={({ field }) => (
                <FormControl fullWidth>
                  <Autocomplete
                    fullWidth
                    autoFocus
                    size="medium"
                    options={users}
                    sx={{
                      width: pxToRem(500),
                      minWidth: pxToRem(400),
                      maxWidth: pxToRem(700),
                    }}
                    className="searchable-select"
                    getOptionLabel={(option) =>
                      `${option.name} (${formatPhoneNumber(option.label)})`
                    }
                    defaultValue={users.find(
                      (user: any) => user.value === field.value
                    )}
                    onChange={(_, newValue) => field.onChange(newValue?.value)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Phone"
                        variant="outlined"
                        className="select-input"
                        error={!!errors[field.name]}
                        helperText={
                          !!errors[field.name] && "Please input courier phone!"
                        }
                        inputProps={{ ...params.inputProps, maxLength: 19 }}
                      />
                    )}
                    renderOption={(props, option) => (
                      <li
                        {...props}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>{option.name}</span>
                        <span>{formatPhoneNumber(option.label)}</span>
                      </li>
                    )}
                  />
                </FormControl>
              )}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit(handleCreateCourier)}>Create</Button>
        </DialogActions>
      </Dialog>
      <div className="couriers-container">
        <CouriersTable />
      </div>
    </CourierStyle>
  );
};

export default Courier;
