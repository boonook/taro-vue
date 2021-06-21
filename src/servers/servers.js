import HTTPREQUEST from "./http";

export const getWxarticleChaptersJson = (getData) => {
  return HTTPREQUEST.baseOptions(
    {
      url:'/api/music/search',
      data:getData,
      method:'GET'
    }
  )
}
