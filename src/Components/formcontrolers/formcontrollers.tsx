 import React from "react";
 import { Controller, useFormContext } from "react-hook-form";
 import FormFields from "./formfields/formfields";
import 'rsuite/dist/rsuite.min.css';



 type  BaseControllerProps = {
    name: string;
    labelText: React.ReactNode;
    required?: boolean;
 };
type PolyMorphicProps < T extends React.ElementType>= BaseControllerProps & {
as?: T;

} & Omit<React.ComponentPropsWithoutRef<T>, keyof BaseControllerProps | 'as'>

const FormController = < T extends React.ElementType>(props: PolyMorphicProps<T> ) =>{
   const {as, name, labelText, required, ...rest} = props;

   const{
    control,
    formState: {errors}
   } = useFormContext();
   
    return (
    <Controller 
    name={name}
     control={control} 
     render= {({ field }) => (

      <FormFields
      className="form-field"
      as={as}
      {... rest}
      labelText={labelText}
      required={required}
      field={field} 
     errors={errors?.[field.name]?.message as  string  }
    
      
      /> 
    )}

     />

    );
};
export default FormController;