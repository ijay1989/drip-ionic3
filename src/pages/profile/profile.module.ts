import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ProfilePage} from './profile';
import {MultiPickerModule} from 'ion-multi-picker';
import {AppProvider} from '../../providers/AppProvider';


@NgModule({
    declarations: [
        ProfilePage,
    ],
    imports: [
        IonicPageModule.forChild(ProfilePage),
        MultiPickerModule
    ],
    providers: [
        AppProvider.getImagePickerProvider(),
        AppProvider.getFileProvider(),
        AppProvider.getFileTransferProvider(),
        AppProvider.getCropProvider(),
    ]
})
export class ProfilePageModule {
}
