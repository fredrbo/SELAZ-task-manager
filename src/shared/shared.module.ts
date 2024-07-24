import { NgModule } from "@angular/core";

const ModulesImportExportAngular: any[] = [

];
const ComponentsDeclarationExport: any[] = [
    
];

@NgModule({
    declarations: [
        ...ComponentsDeclarationExport
    ],

    imports: [
        ...ModulesImportExportAngular,
    ],
    exports: [
        ...ModulesImportExportAngular,
        ...ComponentsDeclarationExport,
    ]
})
export class SharedModule { }