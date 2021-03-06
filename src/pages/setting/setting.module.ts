import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SettingPage} from './setting';
import {AppProvider} from "../../providers/AppProvider";

@NgModule({
    declarations: [
        SettingPage,
    ],
    imports: [
        IonicPageModule.forChild(SettingPage),
    ],
    providers: [
        AppProvider.getAppRateProvider()
    ]
})
export class SettingPageModule {
}
