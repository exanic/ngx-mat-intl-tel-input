import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NgxMatIntlTelInputComponent } from "./../../../ngx-mat-intl-tel-input/src/lib/ngx-mat-intl-tel-input.component";

interface PhoneForm {
  phone: FormControl<string | null>;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    NgxMatIntlTelInputComponent,
  ],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(NgxMatIntlTelInputComponent) phoneInput:
    | NgxMatIntlTelInputComponent
    | undefined;

  phoneForm = new FormGroup<PhoneForm>({
    phone: new FormControl(null, [Validators.required]),
  });

  constructor() {}

  onSubmit() {
    console.log("onSubmit", this.phoneForm);
  }

  onReset() {
    this.phoneForm.reset();
  }

  ngAfterViewInit() {
    if (this.phoneInput && this.phoneInput.matMenu) {
      this.phoneInput.matMenu.panelClass = "custom-panel";
    }
  }
}
