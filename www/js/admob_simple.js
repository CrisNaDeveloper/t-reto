var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    banner: 'ca-app-pub-2512504278709047/6740739104',
    interstitial: 'ca-app-pub-2512504278709047/6740739104',
    rewardvideo: 'ca-app-pub-2512504278709047/6740739104',
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-2512504278709047/6740739104',
    interstitial: 'ca-app-pub-2512504278709047/6740739104',
    rewardvideo: 'ca-app-pub-2512504278709047/6740739104',
  };
} else {
  admobid = { // for Windows Phone, deprecated
    banner: '',
    interstitial: '',
    rewardvideo: '',
  };
}



  // this will create a banner on startup
  AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black'
  } );

  // this will load a full screen ad on startup
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    isTesting: true, // TODO: remove this line when release
    autoShow: true
  });


if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}
