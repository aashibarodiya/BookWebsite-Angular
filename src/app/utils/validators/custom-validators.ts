import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export const booksOrgEmail : ValidatorFn  = (control):ValidationErrors|null =>{
    
    if(!control.value)
        return null; //I don't care if value is not there

    if(control.value.endsWith("@books.org"))
        return null;

    return {booksOrgEmail:{message:'email must belong to @books.org domain'}}; //this is an error
}

export const domainEmail=(...domains:string[]): ValidatorFn =>{

        return (control):ValidationErrors|null =>{
            var value=control.value;
            if(!value) return null;

            for(let domain of domains){
                if(value.endsWith(domain)) return null;
            }
            
            return {domainEmail:{message:`Email must belong to one of these domains: ${domains}`}};
        }

};