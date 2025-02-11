import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  @Input() title:string = "";
  @Input() description:string = "";
  @Input() primaryBtnText:string = "";
  @Input() secondaryBtnText:string = "";

  @Output("submit") onSubmit = new EventEmitter();
  @Output("submit") onNavigate = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit();
  }

}