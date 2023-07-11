import Stack from "react-bootstrap/Stack";
const AppointmentList = () => {
  return (
    <Stack
      direction="horizontal"
      className="d-flex justify-content-around bg-secondary"
      gap={3}
    >
      <div>
        <div className="p-2">Patient Name</div>
        <div className="p-2">Doctor Name</div>
      </div>
      <div>
        <div className="p-2 ms-auto">Consulted</div>
        <div className="p-2">Date</div>
      </div>
      <div className="p-2">Delete Icon</div>
    </Stack>
  );
};

export default AppointmentList;
