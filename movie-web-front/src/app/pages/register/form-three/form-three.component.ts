import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormServicesService } from 'src/app/core/auth-services/form-services.service';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styleUrls: ['./form-three.component.scss']
})
export class FormThreeComponent implements OnInit {
  registerForm3: FormGroup;
  
  
  constructor(private fb: FormBuilder, private formService: FormServicesService) { }
  
  ngOnInit(): void {
    this.registerForm3 = this.fb.group ({
      tmdbKey: new FormControl('', [ Validators.required ]),
  
      userName: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    });    
  }


  transferInfo(userName: string, tmdbKey: string, role: string){
     this.formService.transferForm3(userName,tmdbKey,role);
  }

}
