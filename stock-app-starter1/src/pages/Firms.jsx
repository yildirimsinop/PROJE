import { Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getFirmsSuccess } from "../features/stockSlice";

const Firms = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { firms } = useSelector((state) => state.stock);

  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/stock/firms/`,
        {
          headers: { Authorization: `Token ${token} ` },
        }
      );

      dispatch(getFirmsSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  useEffect(() => {
    getFirms();
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>
        Firms
      </Typography>
      <Button variant="contained">NEW FIRM</Button>
    </div>
  );
};

export default Firms;
