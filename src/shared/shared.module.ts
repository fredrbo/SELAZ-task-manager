import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

const ModulesImportExportAngular: any[] = [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
];
const ComponentsDeclarationExport: any[] = [
    // CustomTableComponent
    
];

@NgModule({
    imports: [
        ...ModulesImportExportAngular,
    ],
    declarations: [
        ...ComponentsDeclarationExport
    ],
    exports: [
        ...ModulesImportExportAngular,
        ...ComponentsDeclarationExport,
    ],

})
export class SharedModule { }