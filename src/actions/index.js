export const getCite = (city) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e48362abd5e9b07f7cf686e9795f9388`
      );

      if (response.ok) {
        const data = await response.json();

        dispatch({
          type: "FETCH_CITY",
          payload: data,
        });
      } else {
        console.log("not fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
