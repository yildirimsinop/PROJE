import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

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

// const getSales = async () => {
//   dispatch(fetchStart());
//   try {
//     const { data } = await axios(
//       `${import.meta.env.VITE_BASE_URL}/stock/sales/`,
//       {
//         headers: { Authorization: `Token ${token} ` },
//       }
//     );
//     dispatch(getSalesSuccess(data));
//     console.log(data);
//   } catch (error) {
//     dispatch(fetchFail());
//     console.log(error);
//   }
// };
const useStockCall = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/stock/${url}/`,
        {
          headers: { Authorization: `Token ${token} ` },
        }
      );

      dispatch(getStockSuccess({ data, url }));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axios(`${import.meta.env.VITE_BASE_URL}/stock/${url}/{id}/`, {
        headers: { Authorization: `Token ${token} ` },
      });
      toastSuccessNotify(`${url}succesfuly deleted`);

      getStockData(url);
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url}can not be deleted`);
      console.log(error);
    }
  };
  return { getStockData, deleteStockData };
};

export default useStockCall;
