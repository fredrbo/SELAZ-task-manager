import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { provideFirebaseApp } from "@angular/fire/app";
import { initializeApp } from "firebase/app";
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
    
];

@NgModule({
    imports: [
        // AngularFirestoreModule,
        // AngularFireModule.initializeApp(environment.firebaseConfig),
        ...ModulesImportExportAngular,
    ],
    declarations: [
        ...ComponentsDeclarationExport
    ],
    exports: [
        ...ModulesImportExportAngular,
        ...ComponentsDeclarationExport,
    ],
    providers: [
        // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        // provideFirestore(() => getFirestore()),
    ]

})
export class SharedModule { }