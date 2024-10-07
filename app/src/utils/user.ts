export const setToken=(token='')=>{
  localStorage.setItem('Token_Hosptial',token)
}
export const setName=(name='')=>{
  localStorage.setItem('Name_Hosptial',name)
}

export const getToken=()=>{
  return localStorage.getItem('Token_Hosptial')

}
export const getName=()=>{
  return localStorage.getItem('Name_Hosptial')
}