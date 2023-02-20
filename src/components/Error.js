import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!!</h1>
      <p>
        <b>{err.status + ": " + err.statusText}</b>
      </p>
      <p>
        <b>{err.data}</b>
      </p>
    </div>
  );
};

export default Error;
