import { useRouteError } from "react-router-dom"

const Error =() => {
  const err = useRouteError();
console.warn(err);
  return (
    <>
     <h1>OOPS..!! Something went Wrong</h1>
     <h2> {err.status} : {err.statusText} - {err.data}</h2>
    </>
  )

}
export default Error;