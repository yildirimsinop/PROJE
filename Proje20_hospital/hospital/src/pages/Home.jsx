import AddModal from "../components/AddModal";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { appointmentData, doctorData } from "../helpers/data";

const Home = () => {
  return (
    <>
      <h1 form control text-align-center>
        HOSPITAL
      </h1>
      <h3>OUR DOCTORS</h3>
      <Doctors />
      <AddModal />
      <AppointmentList />

      <h3>Doctors List</h3>
      {doctorData.map((item) => (
        <Doctors key={item.id} {...item} />
      ))}

      <h3>Appointment List</h3>
      {appointmentData.map((item) => (
        <AppointmentList key={item.id} {...item} />
      ))}
    </>
  );
};

export default Home;
