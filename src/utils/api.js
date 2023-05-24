import { Navigate } from "react-router-dom";

export const register = async (data) => {
  const res = await fetch(
    "https://sevayu-server.onrender.com/api/auth/hospital/register",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(res);
  return <Navigate replace to="/login" />;
 
};

export const login = async (data) => {
  const res = await fetch(
    "https://sevayu-server.onrender.com/api/auth/hospital/login",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const token = await res.json();
  return token.accessToken;
};

export const getHospitalData = async (hospitalId) => {
  const res = await fetch(
    `https://sevayu-server.onrender.com/api/hospital/hospital/${hospitalId}`
  );
  const data = await res.json();
  return data;
};

export const getDoctors = async (hospitalId) => {
  const res = await fetch(
    `https://sevayu-server.onrender.com/api/doctor/getAll/${hospitalId}`
  );
  const data = await res.json();
  return data;
};

export const registerDoctor = async (doctorData) => {
  try {
    const res = await fetch(
      `https://sevayu-server.onrender.com/api/doctor/register`,
      {
        method: "POST",
        body: JSON.stringify(doctorData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
