const validation= (data) => {
    let errors = {}

    if(!data.email){
        errors.e1= 'Ingresa un Email'
    }
    
    if(!data.email.includes('@')){
        errors.e2 = 'Ingresa un Email valido'
    }


    if(data.email.length >35){
        errors.e3= 'No debe ser mayor a 35 caracteres'
    }

    if(!/\d+/.test(data.password)){
        errors.p1= 'La contraseña debe tener un #'
    }
    
    if(data.password.length <6 || data.password.length >10){
        errors.p2= 'Debe ser entre 6 a 10 caracters'
}
return errors
}
export default validation;