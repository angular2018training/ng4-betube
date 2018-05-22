import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Module
import { SharedModule }  from './shared/shared.module';
import { ElementsModule }  from './elements/elements.module';
import { ZVideoModule }  from './zvideo/zvideo.module';
import { AdminModule }  from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';

// AngularFireModule
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // Angular Module
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule, // imports firebase/database, only needed for database features

        // Custom Module
        SharedModule,
        ZVideoModule,
        ElementsModule,
        AdminModule,
        

        // Routing
        AppRoutingModule
    ],
    providers: [
    
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
