import { Directive, Input, OnInit } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { domainEmail } from './custom-validators';

@Directive({
  selector: '[validateCustomDomain]',
  providers: [
    {
      provide: NG_VALIDATORS, 
      useExisting:CustomDomainDirective,
      multi:true,
    }
  ]
})
export class CustomDomainDirective implements OnInit, Validator {

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    //console.log('validating', control.value);
    var _validator = domainEmail(...this._domains);
    return _validator(control);
  }


  @Input('validateCustomDomain') _domains:string[]=[];

  constructor() {
    console.log('custom domain directive created');

   }
  registerOnValidatorChange?(fn: () => void): void {
    
  }

  ngOnInit(): void {
    console.log('validating domains', this._domains);
  }

}
