import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          fontSize: "20px",
          color: "red",
          fontStyle: "oblique",
        }}
      >
        {err.status} : {err.statusText}
      </div>
      <img
        style={{
          height: "400px",
          width: "500px",
        }}
        src="https://t4.ftcdn.net/jpg/05/24/04/51/360_F_524045110_UXnCx4GEDapddDi5tdlY96s4g0MxHRvt.jpg"
      ></img>
    </div>
  );
};

export default Error;
