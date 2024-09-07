import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err);

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
    </div>
  );
};

export default Error;
