import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
    { path: '', component: TasksComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ]
})
export class TasksModule { }
