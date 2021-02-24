/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "./http"

// export const post = (postData) => {
//   return HTTPREQUEST.post('/wxarticle/chapters/json', postData)
// }

export const getWxarticleChaptersJson = (getData) => {
  return HTTPREQUEST.get({url:'/wxarticle/chapters/json', data:getData}) 
}
