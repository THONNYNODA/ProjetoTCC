

const useGetUsuarioPermissao = (permission) => {

  const roles = localStorage.sistemPermisson

  switch (roles) {
    case 'ADMIN':
      return ['Admin']
    case 'PRESTADOR':
      return ['Prestador']  
    default:
    return ['Usuario']
      
  }
}

const PermissaoComponent = ({children, permissoes}) => {
  const userPermissao = useGetUsuarioPermissao()

  if(
    permissoes.some(permissao => userPermissao.includes(permissao))
  ){
    return children
  }
  return null
}


export default PermissaoComponent

