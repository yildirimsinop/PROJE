import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";

const Home = () => {
  return (
    <>
      <h1 form control text-align-center>
        HOSPITAL
      </h1>
      <h3>OUR DOCTORS</h3>
      <Doctors />;
      <AppointmentList />
    </>
  );
};

export default Home;
