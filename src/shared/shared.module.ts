import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import {MatIconModule} from '@angular/material/icon';

const ModulesImportExportAngular: any[] = [
    CommonModule,
    MatMenuModule,
    MatIconModule,
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