const menu ={
  state:{
    menu:[]
  },
  mutations:{
    setMenu(state,menu){
      state.menu=menu
    }
  },
  actions:{
    handleMenu({commit,dispatch},menu){
      return new Promise((resolve,reject)=>{
        commit('setMenu',menu);
        resolve(true)
      })
    }
  },
};
export default menu
