import { Button, Typography, Grid } from "@mui/material";
//import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";

const Firms = () => {
  // const { token } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios(
  //       `${import.meta.env.VITE_BASE_URL}/stock/firms/`,
  //       {
  //         headers: { Authorization: `Token ${token} ` },
  //       }
  //     );

  //     dispatch(getFirmsSuccess(data));
  //     console.log(data);
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // getFirms();
    getStockData("firms");
  }, []);

  // console.log(firms);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        NEW FIRM
      </Button>
      <Button onClick={handleOpen}></Button>

      <FirmModal open={open} handleClose={handleClose} />
      <Grid container justifyContent={"center"} spacing={2}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} handleOpen={handleOpen} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
