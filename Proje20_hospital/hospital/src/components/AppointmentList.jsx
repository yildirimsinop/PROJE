import Stack from "react-bootstrap/Stack";

const AppointmentList = ({ id, day, patient, consulted, doctor }) => {
  // Verify if day is a Date object and not null
  const isValidDate =
    Object.prototype.toString.call(day) === "[object Date]" && !isNaN(day);

  return (
    <Stack
      key={id}
      direction="horizontal"
      className="d-flex justify-content-around bg-secondary text-light my-1 mx-2"
      gap={3}
    >
      <div>
        <div className="p-2">{patient}</div>
        <div className="p-2">{doctor}</div>
      </div>

      <div>
        <div className="p-2 ms-auto">{consulted}</div>
        <div className="p-2">
          {isValidDate ? day.toDateString() : "Invalid Date"}
        </div>
      </div>

      <div className="p-2">Delete Icon</div>
    </Stack>
  );
};

export default AppointmentList;
