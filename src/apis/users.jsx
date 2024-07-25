async function GetUser() {
  const userId = localStorage.getItem("userId"),
    token = localStorage.getItem("token");

  try {
    const response = await fetch(
      `https://mymovies-api-d8738180d851.herokuapp.com/users/${userId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data[0])); //Update local storage user data
      return data[0]; //Return user as object
    } else {
      console.error("Failed to retrieve user data:", response);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
}

async function UpdateUser(values) {
  const userId = localStorage.getItem("userId"),
    token = localStorage.getItem("token"),
    
    //build result message
    result = {
      success: "Update Successful",
      fail: "Update Failed",
    },
    payload = {};

  //build the payload
  if (!values.Username) {
    payload.Email = values.Email;
  } else if (!values.Email) {
    payload.Username = values.Username;
  } else if (values.Email && values.Username) {
    payload.Email = values.Email;
    payload.Username = values.Username;
  }

  try {
    const response = await fetch(
      `https://mymovies-api-d8738180d851.herokuapp.com/users/${userId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    //response handling
    if (response.ok) {
      console.log(result.success);
      return result.success, response;
    } else {
      console.log(result.fail);
      return result.fail, response;
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  GetUser,
  UpdateUser,
};
