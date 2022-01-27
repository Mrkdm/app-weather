export default function (state, action)  {
    const GET_WEATHERCURRENT_NAMECITY = "GET_WEATHERCURRENT_NAMECITY"
    const GET_WEATHERCURRENT_GEOLOCATION = "GET_WEATHERCURRENT_GEOLOCATION"
    const { payload, type } = action;
    switch (type) {
        case GET_WEATHERCURRENT_NAMECITY:
            return {
                ...state,
                weather: payload
            }
        case GET_WEATHERCURRENT_GEOLOCATION: 
            return{
                ...state,
                weather: payload
            }
        default:
            return state;
    }
}