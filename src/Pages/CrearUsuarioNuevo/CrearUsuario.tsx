import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchemas, defaultValues, type UserSchemasType } from "../../schemas/shemasPasiente/userSchemas";


const UserForms = () => {
    const methods = useForm<UserSchemasType>({
        resolver: zodResolver(UserSchemas),
        defaultValues: defaultValues
    });
   const onsubmit = (data: UserSchemasType) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("form submit", data);
        resolve(true);
      }, 1000);
    });
  };

 

    return (
        <FormProvider {... methods}>
        <form onSubmit={methods.handleSubmit(onsubmit)}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input  id = 'name' {... methods.register('name')} />
                {methods.formState.errors.name && <span>{methods.formState.errors.name.message}</span>}


            </div>
               <label htmlFor="lastname" >apellido</label>
               <input id="lastname" {... methods.register('lastname')}/>
               {methods.formState.errors.lastname && <span>{methods.formState.errors.lastname.message}</span>}
            <div>
                <label>Apellido</label>
            </div>

            <div>
                <label >sexo</label>
                <label htmlFor="">
                    <input type="radio" 
                    value="true"
                    {... methods.register("sex")}
                    />
                    <span>masculino</span>
                </label>

                <label htmlFor="">
                    <input type="radio" 
                    value="false"
                    {... methods.register("sex")}
                    
                    />
                    <span>Femenino</span>
                </label>
                 {methods.formState.errors.sex && <span>{methods.formState.errors.sex.message}</span>}
            </div>

            <div>
                <label htmlFor="password">contraseña</label>
                <input id="password" {... methods.register('password')} />
                {methods.formState.errors.password && <span>{methods.formState.errors.password.message}</span>}
            </div>

             <div>
                <label htmlFor="confirmPassword">contraseña</label>
                <input id="confirmPassword" {... methods.register('confirmPassword')} />
                {methods.formState.errors.confirmPassword && <span>{methods.formState.errors.confirmPassword.message}</span>}
            </div>

             <div>
                <label htmlFor="email">email</label>
                <input id="email" {... methods.register('email')}/>
                {methods.formState.errors.email && <span>{methods.formState.errors.email.message}</span>}
             </div>
            
        <button type="submit" >Guardar</button>
        </form>

        
        </FormProvider>
    )
};
export default UserForms;