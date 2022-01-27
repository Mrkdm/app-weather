export default function (state, action) {
     const GET_WEATHERFORECAST_NAMECITY = "GET_WEATHERFORECAST_NAMECITY";
     const GET_WEATHERFORECAST_GEOLOCATION = "GET_WEATHERFORECAST_GEOLOCATION"

     const {payload, type} = action;

     switch (type) {
         case GET_WEATHERFORECAST_NAMECITY:
             return{
                 ...state,
                 weatherForecast: payload
             }

        case GET_WEATHERFORECAST_GEOLOCATION:
            return{
                ...state,
                weatherForecast:payload
            }
     
         default:
             return state
             
     }
}