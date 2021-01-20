import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UsersView from "../Components/UsersView";
import { API_URL } from "../constants";

export default ({ history, ...props }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/users`).then(resp => resp.json()).then(resp => { setData(resp) });
  }, [])
  return (<div className="vw-100 vh-100 primary-color d-flex justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Users profiles</h1>
        <hr className="my-4" />
        <UsersView data={data} history={history} />
      </div>
    </div>
  </div>
  )
};