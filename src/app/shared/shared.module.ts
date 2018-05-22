import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

// Service
import { AdsService } from './services/ads.service';
import { PlaylistService } from './services/playlist.service';
import { VideoService } from './services/video.service';
import { PagerService } from './services/pager.service';

// Pipe
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        // Pipe
        SafePipe,
    ],
    exports: [
        SafePipe
    ],
    providers: [
        AdsService,
        PlaylistService,
        VideoService,
        PagerService
    ]
})
export class SharedModule { }
