export function getDayOfWeek(dateString) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dateString);
  return daysOfWeek[date.getDay()];
}

export function fetchUserData(accessToken) {
  fetch("https://www.googleapis.com/oauth2/v1/userinfo", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      return response.json();
    })
    .then((data) => {
      console.log("User data:", data);
      // Здесь вы можете обработать полученные данные пользователя
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
}
