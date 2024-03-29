import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsRoutingModule } from './components-routing.module';

import { BindingComponent } from './bindings/binding.component';
import { SizerComponent } from './bindings/sizer.component';
import { SharedModule } from '../shared/shared.module';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleDummyComponent } from './lifecycle/lifecycle-dummy.component';

@NgModule({
  declarations: [
    SizerComponent,
    BindingComponent,
    LifecycleComponent,
    LifecycleDummyComponent,
  ],
  imports: [CommonModule, FormsModule, ComponentsRoutingModule, SharedModule],
})
export class ComponentsModule {}
