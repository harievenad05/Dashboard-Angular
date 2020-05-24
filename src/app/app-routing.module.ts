import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionSalesComponent } from './sections/section-Dashboard/section-sales.component';
import { SectionProjectComponent } from './sections/section-project/section-project.component';
import { SectionBoqComponent } from './sections/section-Boq/section-boq.component';

const routes: Routes = [
  { path: 'sales', component: SectionSalesComponent },
  { path: 'orders', component: SectionBoqComponent },
  { path: 'health', component: SectionProjectComponent },
  { path: '', redirectTo: 'sales', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
