import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/userSlice";

function UserInfo() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);




 useEffect(() => {
  if (data !== null) {
    console.log("Updated data:", data);
  }
}, [data]);


  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux API Example</h1>

      <button onClick={()=>dispatch(fetchUser()) }>
        Fetch User
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div style={{ marginTop: "20px" }}>
          <h3>User Data</h3>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Username:</strong> {data.username}</p>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
