import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tempForm: FormGroup;
  fileObj: any;
  constructor(private fb: FormBuilder, private mainServicve: MainService) { }

  ngOnInit(): void {
    this.tempForm = this.fb.group({
      email: [''],
    })
  }
  setFileObj(event) {
    this.fileObj = event.target.files[0]
  }

  get email() {
    return this.tempForm.get('email').value
  }

  async handleSubmit() {
    alert("asd")
    let formData = new FormData()
    formData.append('email', this.email);
    formData.append('file', this.fileObj)
    const res: any = await this.mainServicve.submit(formData)
    if (res.success) {
      alert(res.message)
    }
  }

}
