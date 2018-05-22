import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule } from '@angular/router';

// Widget 
import { WidgetAdsComponent } from './widget-ads/widget-ads.component';
import { WidgetBannerComponent } from './widget-banner/widget-banner.component';
import { WidgetSocialComponent } from './widget-social/widget-social.component';
import { WidgetMenuTopComponent } from './widget-menu-top/widget-menu-top.component';
import { WidgetMenuMainComponent } from './widget-menu-main/widget-menu-main.component';
import { WidgetPlaylistComponent } from './widget-playlist/widget-playlist.component';
import { WidgetFeaturedVideoComponent } from './widget-featured-video/widget-featured-video.component';
import { WidgetPopularVideoComponent } from './widget-popular-video/widget-popular-video.component';
import { WidgetContactComponent } from './widget-contact/widget-contact.component';
import { WidgetFacebookComponent } from './widget-facebook/widget-facebook.component';
import { WidgetCopyrightComponent } from './widget-copyright/widget-copyright.component';
import { WidgetMenuBottomComponent } from './widget-menu-bottom/widget-menu-bottom.component';

// Element
import { ElmHeaderComponent } from './elm-header/elm-header.component';
import { ElmFooterTopComponent } from './elm-footer-top/elm-footer-top.component';
import { ElmFooterBottomComponent } from './elm-footer-bottom/elm-footer-bottom.component';
import { ElmFooterComponent } from './elm-footer/elm-footer.component';
import { ElmPlaylistComponent } from './elm-playlist/elm-playlist.component';
import { ElmVideoComponent } from './elm-video/elm-video.component';
import { ElmPanelTitleComponent } from './elm-panel-title/elm-panel-title.component';
import { ElmYoutubeIframeComponent } from './elm-youtube-iframe/elm-youtube-iframe.component';
import { ElmLoaderComponent } from './elm-loader/elm-loader.component';

import { ElmPlaylistPaginationComponent } from './elm-playlist-pagination/elm-playlist-pagination.component';
import { ElmPagerComponent } from './elm-pager/elm-pager.component';

import { ElmPlaylistLoadMoreComponent } from './elm-playlist-load-more/elm-playlist-load-more.component';

// Module
import { SharedModule }  from './../shared/shared.module';

@NgModule({
	imports: [
		CommonModule, 
		RouterModule,
		SharedModule
	],
	declarations: [
		WidgetAdsComponent,
		WidgetBannerComponent,
		WidgetSocialComponent,
		WidgetMenuTopComponent,
		WidgetMenuMainComponent,
		WidgetPlaylistComponent,
		WidgetFeaturedVideoComponent,
		WidgetPopularVideoComponent,
		WidgetContactComponent,
		WidgetFacebookComponent,
		WidgetCopyrightComponent,
		WidgetMenuBottomComponent,

		ElmHeaderComponent,
		ElmFooterTopComponent,
		ElmFooterBottomComponent,
		ElmFooterComponent,
		ElmPlaylistComponent,
		ElmVideoComponent,
		ElmPanelTitleComponent,
		ElmYoutubeIframeComponent,
		ElmLoaderComponent,
		ElmPlaylistPaginationComponent,
		ElmPagerComponent,
		ElmPlaylistLoadMoreComponent
  	],
  	exports: [
  		WidgetAdsComponent,
  		WidgetBannerComponent,
  		WidgetSocialComponent,
  		WidgetMenuTopComponent,
  		WidgetMenuMainComponent,
  		WidgetPlaylistComponent,
  		WidgetFeaturedVideoComponent,
  		WidgetPopularVideoComponent,
  		WidgetContactComponent,
  		WidgetFacebookComponent,
  		WidgetCopyrightComponent,
  		WidgetMenuBottomComponent,

  		ElmHeaderComponent,
  		ElmFooterTopComponent,
  		ElmFooterBottomComponent,
  		ElmFooterComponent,
  		ElmPlaylistComponent,
  		ElmVideoComponent,
  		ElmPanelTitleComponent,
  		ElmYoutubeIframeComponent,
  		ElmLoaderComponent,
  		ElmPlaylistPaginationComponent,
  		ElmPagerComponent,
  		ElmPlaylistLoadMoreComponent
  	]
})
export class ElementsModule { }
