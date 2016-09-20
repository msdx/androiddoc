window.METADATA = window.METADATA || {};
METADATA[''] = {};

METADATA[''].about = [];
METADATA[''].design = [];
METADATA[''].develop = [];
METADATA[''].distribute = [];
METADATA[''].extras = [];

var _RESOURCES = [
      {
        "title":"Important Safety Instructions for ADT-1",
        "summary":"Safety information for the ADT-1 device. WARNING: Read all safety information below before using this device to avoid injury. Do not install near heat sources, such as heaters and other devices. Use in a well-ventilated area and plug power adapter into\u2026",
        "url":"tv/adt-1/safety.html",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Regulatory Disclosures for ADT-1",
        "summary":"Disclosures for the ADT-1 device. Model: W2 FCC ID: A4R-W2 IC: 10395A-W2 U.S. Federal Communications Commission Notices To satisfy FCC and IC exposure requirements, a separation distance of at least 20 cm should be maintained between the antenna of this\u2026",
        "url":"tv/adt-1/regulatory.html",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"ADT-1 Developer Kit",
        "summary":"The ADT-1 Developer Kit is a streaming media player and game controller designed for running and testing apps built for Android TV. Supplies of ADT-1 are limited and it is intended for developers who are interested in building new apps or extending their\u2026",
        "url":"tv/adt-1/index.html",
        "image":"tv/images/android-tv-remote.png",
        "keywords": ["emote","e-mote","adt"],
        "tags": ["emote","e-mote","adt"],
        "lang":"en"
      }
];

var ABOUT_RESOURCES = [
      {
        "title":"Android Wear",
        "summary":"Small, powerful devices, worn on the body. Useful information when you need it most. Intelligent answers to spoken questions. Tools to help reach fitness goals. Your key to a multiscreen world. Before you start building, check out the Android Wear Design\u2026",
        "url":"wear/index.html",
        "image":"images/cards/android-wear_2x.png",
        "type":"about",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Android Wear Preview Program Overview",
        "summary":"Welcome to the Android Wear 2.0 Developer Preview! This program gives you everything you need to get started with the next version of Android Wear. It\u2019s free, and you can get started right away by downloading the Developer Preview resources. Run and test\u2026",
        "url":"wear/preview/program.html",
        "image":"images/cards/card-n-sdk_2x.png",
        "category":"wear preview",
        "type":"about",
        "keywords": ["wear-preview"],
        "tags": ["wear-preview"],
        "lang":"en"
      }, 
      {
        "title":"Get Started with the Preview",
        "summary":"If you want an environment for basic compatibility testing of your app, you can use your current APK and a supported watch or an emulator. You don&#39;t necessarily need to update your full development environment to do basic testing. To simply test your\u2026",
        "url":"wear/preview/start.html",
        "image":"images/cards/card-n-sdk_2x.png",
        "category":"wear preview",
        "type":"about",
        "keywords": ["wear-preview"],
        "tags": ["wear-preview"],
        "lang":"en"
      }, 
      {
        "title":"Preview API Overview",
        "summary":"The Android Wear Preview API is still in active development, but you can try it now as part of the Wear 2.0 Developer Preview. The sections below highlight some of the new features for Android Wear developers. The preview introduces powerful additions\u2026",
        "url":"wear/preview/api-overview.html",
        "image":"images/cards/card-n-apis_2x.png",
        "category":"wear preview",
        "type":"about",
        "keywords": ["wear"],
        "tags": ["wear","wear-preview"],
        "lang":"en"
      }, 
      {
        "title":"Download and Test with a Device",
        "summary":"I have read and agree with the above terms and conditions You can run and test your app with the Android Wear 2.0 Developer Preview in either of these ways: If you want an environment for basic compatibility testing of your app, you can use your current\u2026",
        "url":"wear/preview/downloads.html",
        "image":"images/cards/card-n-downloads_2x.png",
        "category":"wear preview",
        "type":"about",
        "keywords": ["wear-preview"],
        "tags": ["wear-preview"],
        "lang":"en"
      }, 
      {
        "title":"Support and Release Notes",
        "summary":"If you experience problems when developing and testing with the Wear 2.0 Developer Preview, please file bugs at https:&#47;&#47;g.co&#47;wearpreviewbug . To discuss issues or ideas with other developers working with Android Wear, join the Wear Developer\u2026",
        "url":"wear/preview/support.html",
        "category":"wear preview",
        "type":"about",
        "keywords": ["preview","developer preview"],
        "tags": ["preview","developerpreview"],
        "lang":"en"
      }, 
      {
        "title":"Wear Input Method Framework",
        "summary":"Wear 2.0 supports input methods beyond voice by extending the Android Input Method Framework (IMF) to Android Wear. IMF allows for virtual, on-screen keyboards and other input methods to be used for text entry. The IMF APIs used for Wear devices are the\u2026",
        "url":"wear/preview/features/ime.html",
        "image":"wear/preview/images/new_input_methods.png",
        "category":"wear preview",
        "type":"about",
        "keywords": ["wear"],
        "tags": ["wear","wear-preview","input-method","ime"],
        "lang":"en"
      }, 
      {
        "title":"Notification Changes in Android Wear 2.0",
        "summary":"Android Wear 2.0 updates the visual style and interaction paradigm of notifications as well as introduces expanded notifications, which provide substantial additional content and actions in an app-like experience. The visual and interaction changes make\u2026",
        "url":"wear/preview/features/notifications.html",
        "image":"wear/preview/images/expanded_diagram.png",
        "category":"wear preview",
        "type":"about",
        "keywords": ["wear"],
        "tags": ["wear","wear-preview","notifications"],
        "lang":"en"
      }, 
      {
        "title":"Wrist Gestures",
        "summary":"Wrist gestures can enable quick, one-handed interactions with your app when use of a touch screen is inconvenient. For example, a user can scroll through notifications with one hand while holding a cup of water with the other. Other examples of using \u2026",
        "url":"wear/preview/features/gestures.html",
        "image":"images/cards/card-n-sdk_2x.png",
        "category":"wear preview",
        "type":"about",
        "keywords": ["wear-preview"],
        "tags": ["wear-preview"],
        "lang":"en"
      }, 
      {
        "title":"Wear Navigation and Actions",
        "summary":"As part of the Material Design for Android Wear, Wear 2.0 adds interactive navigation and action drawers. The navigation drawer appears at the top of the screen and lets users jump to different views within the app, similar to the navigation drawer on\u2026",
        "url":"wear/preview/features/ui-nav-actions.html",
        "image":"wear/preview/images/card_drawer.png",
        "category":"wear preview",
        "type":"about",
        "keywords": ["wear"],
        "tags": ["wear","wear-preview","navigation","action"],
        "lang":"en"
      }, 
      {
        "title":"Bridging Mode for Notifications",
        "summary":"By default, notifications are bridged (shared) from an app on a companion phone to the watch. If you build a standalone watch app and have a companion phone app, they may duplicate notifications. The Android Wear 2.0 Preview includes a Bridging mode feature\u2026",
        "url":"wear/preview/features/bridger.html",
        "category":"wear preview",
        "type":"about",
        "keywords": ["wear-preview"],
        "tags": ["wear-preview"],
        "lang":"en"
      }, 
      {
        "title":"Watch Face Complications",
        "summary":"A complication is any feature in a watch face that displays more than hours and minutes . For example, a battery indicator is a complication. The Complications API is for both watch faces and data provider apps. Watch faces can display extra information\u2026",
        "url":"wear/preview/features/complications.html",
        "image":"wear/preview/images/complications-main-image.png",
        "category":"wear preview",
        "type":"about",
        "keywords": ["wear-preview"],
        "tags": ["wear-preview"],
        "lang":"en"
      }, 
      {
        "title":"License Agreement",
        "summary":"To get started with the Android Wear SDK Preview, you must agree to the following terms and conditions. As described below, please note that this is a preview version of the Android Wear SDK, subject to change, that you use at your own risk. The Android\u2026",
        "url":"wear/preview/license.html",
        "category":"wear preview",
        "type":"about",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Behavior Changes",
        "summary":"Along with new features, Android Wear 2.0 includes a variety of behavior changes. This document highlights some of the key changes to account for in your apps. If you have previously published an app for Android Wear, be aware that your app might be affected\u2026",
        "url":"wear/preview/behavior-changes.html",
        "category":"wear preview",
        "type":"about",
        "keywords": ["preview","developer preview"],
        "tags": ["preview","developerpreview"],
        "lang":"en"
      }, 
      {
        "title":"Android Wear 2.0 Developer Preview",
        "summary":"",
        "url":"wear/preview/index.html",
        "image":"wear/preview/images/hero-1x.png",
        "category":"wear preview",
        "type":"about",
        "keywords": ["wear","wear-preview"],
        "tags": ["wear","preview"],
        "lang":"en"
      }, 
      {
        "title":"About Android TV",
        "summary":"Bring your apps, games, and content to the biggest screen in the house.",
        "url":"tv/index.html",
        "image":"images/cards/android-tv_2x.png",
        "type":"about",
        "keywords": ["tv","leanback"],
        "tags": ["tv","leanback"],
        "lang":"en"
      }, 
      {
        "title":"Android Auto",
        "summary":"Let drivers listen to and control content in your music and other audio apps. Allow drivers to hear and respond to your messaging service via the car&#39;s controls and screen. Write your apps without having to worry about vehicle-specific hardware differences\u2026",
        "url":"auto/index.html",
        "image":"images/cards/android-auto_2x.png",
        "type":"about",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Legal Notice",
        "summary":"Android is an open platform that&#39;s freely available to you as an app developer. You can immediately download the Android SDK, develop apps, and distribute them to the world without any registration or fees. Android is developed by Google Inc. and \u2026",
        "url":"legal.html",
        "type":"about",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Android KitKat",
        "summary":"Welcome to Android 4.4 KitKat! Android KitKat brings all of Android&#39;s most innovative, most beautiful, and most useful features to more devices everywhere. This document provides a glimpse of what&#39;s new for developers. Find out more about KitKat\u2026",
        "url":"about/versions/kitkat.html",
        "image":"images/kk-devices.png",
        "type":"about",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Android 7.0 APIs",
        "summary":"Android 7.0 ( N ) offers new features for users and app developers. This document provides an introduction to the most notable APIs. Make sure, also, to check out the Behavior Changes to learn about areas where platform changes may affect your apps. In\u2026",
        "url":"about/versions/nougat/android-7.0.html",
        "image":"images/cards/card-n-apis_2x.png",
        "type":"about",
        "keywords": ["android 7.0","nougat","android n","developer preview"],
        "tags": ["android7.0","androidn","nougat"],
        "lang":"en"
      }, 
      {
        "title":"Android 7.0 Changes",
        "summary":"Along with new features and capabilities, Android 7.0 includes a variety of system and API behavior changes. This document highlights some of the key changes that you should understand and account for in your apps. If you have previously published an \u2026",
        "url":"about/versions/nougat/android-7.0-changes.html",
        "image":"images/cards/card-n-changes_2x.png",
        "type":"about",
        "keywords": ["android 7.0","nougat","android n","developer preview"],
        "tags": ["android7.0","nougat","androidn","compatibility"],
        "lang":"en"
      }, 
      {
        "title":"Android N Developer Preview",
        "summary":"",
        "url":"about/versions/nougat/index.html",
        "image":"images/home/n-preview-hero.png",
        "type":"about",
        "keywords": ["preview","developer"],
        "tags": ["preview","android"],
        "lang":"en"
      }, 
      {
        "title":"Android 7.0 Samples",
        "summary":"The following code samples are provided for Android 7.0. To download the samples in Android Studio, select the File &gt; Import Samples menu option. This sample demonstrates how to take advantage of multiple window user interfaces with your app. Get it\u2026",
        "url":"about/versions/nougat/android-7.0-samples.html",
        "image":"images/cards/card-n-samples_2x.png",
        "type":"about",
        "keywords": ["android 7.0","nougat","samples","android"],
        "tags": ["android7.0","nougat","samples","android"],
        "lang":"en"
      }, 
      {
        "title":"Android 7.0 Testing Guide",
        "summary":"Android 7.0 gives you an opportunity to ensure your apps work with the next version of the platform. This preview includes a number of APIs and behavior changes that can impact your app, as described in the API Overview and Behavior Changes . In testing\u2026",
        "url":"about/versions/nougat/android-7.0-testing.html",
        "image":"images/cards/card-n-guide_2x.png",
        "type":"about",
        "keywords": ["preview","developer preview"],
        "tags": ["preview","testing"],
        "lang":"en"
      }, 
      {
        "title":"Honeycomb MR1",
        "summary":"Welcome to Android 3.1! Android 3.1 is an incremental platform release that refines many of the features introduced in Android 3.0. It builds on the same tablet-optimized UI and features offered in Android 3.0 and adds several new capabilities for users\u2026",
        "url":"about/versions/android-3.1-highlights.html",
        "image":"sdk/images/3.1/home.png",
        "type":"about",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Gingerbread",
        "summary":"The Android 2.3 platform introduces many new and exciting features for users and developers. This document provides a glimpse at some of the new features and technologies in Android 2.3. For detailed information about the new developer APIs, see the Android\u2026",
        "url":"about/versions/android-2.3-highlights.html",
        "image":"sdk/images/2.3/home-menu.png",
        "type":"about",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Ice Cream Sandwich",
        "summary":"Welcome to Android 4.0! Android 4.0 delivers a refined, unified UI for phones and tablets and introduces innovative features for users and developers. This document provides a glimpse of the many new features and technologies that make Android 4.0 simple\u2026",
        "url":"about/versions/android-4.0-highlights.html",
        "image":"sdk/images/4.0/home.png",
        "type":"about",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Android 6.0 Changes",
        "summary":"Along with new features and capabilities, Android 6.0 (API level 23) includes a variety of system changes and API behavior changes. This document highlights some of the key changes that you should understand and account for in your apps. If you have previously\u2026",
        "url":"about/versions/marshmallow/android-6.0-changes.html",
        "image":"images/cards/samples-new_2x.png",
        "type":"about",
        "keywords": [],
        "tags": ["marshmallow","api23","android60","androidm"],
        "lang":"en"
      }, 
      {
        "title":"Android 6.0 Testing Guide",
        "summary":"Android 6.0 gives you an opportunity to ensure your apps work with the next version of the platform. This preview includes a number of APIs and behavior changes that can impact your app, as described in the API Overview and Behavior Changes . In testing\u2026",
        "url":"about/versions/marshmallow/android-6.0-testing.html",
        "image":"images/cards/card-n-guide_2x.png",
        "type":"about",
        "keywords": ["preview","developer preview"],
        "tags": ["preview","testing"],
        "lang":"en"
      }, 
      {
        "title":"Android 6.0 APIs",
        "summary":"Get to know the new developer features in Android 6.0 Marshmallow.",
        "url":"about/versions/marshmallow/android-6.0.html",
        "image":"images/cards/card-api-overview_16-9_2x.png",
        "type":"about",
        "keywords": ["androidm","marshmallow"],
        "tags": ["androidm","marshmallow"],
        "lang":"en"
      }, 
      {
        "title":"Android 6.0 Marshmallow",
        "summary":"",
        "url":"about/versions/marshmallow/index.html",
        "image":"images/home/devices-hero_620px_2x.png",
        "type":"about",
        "keywords": ["marshmallow"],
        "tags": ["marshamallow","android60"],
        "lang":"en"
      }, 
      {
        "title":"Android 6.0 Samples",
        "summary":"Code to get your started with Android 6.0 APIs.",
        "url":"about/versions/marshmallow/android-6.0-samples.html",
        "image":"images/cards/card-build_16x9_2x.png",
        "type":"about",
        "keywords": ["marshmallow","samples"],
        "tags": ["marshmallow","androidm","samples"],
        "lang":"en"
      }, 
      {
        "title":"Jelly Bean",
        "summary":"Welcome to Android 4.3, a sweeter version of Jelly Bean! Android 4.3 includes performance optimizations and great new features for users and developers. This document provides a glimpse of what&#39;s new for developers. See the Android 4.3 APIs document\u2026",
        "url":"about/versions/jelly-bean.html",
        "image":"images/jb-android-43.jpg",
        "type":"about",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Android Lollipop",
        "summary":"Welcome to Android 5.0 Lollipop\u2014the largest and most ambitious release for Android yet! This release is packed with new features for users and thousands of new APIs for developers. It extends Android even further, from phones, tablets, and wearables, \u2026",
        "url":"about/versions/lollipop.html",
        "image":"images/home/l-hero_2x.png",
        "type":"about",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Honeycomb",
        "summary":"Welcome to Android 3.0! The Android 3.0 platform introduces many new and exciting features for users and developers. This document provides a glimpse of some of the new features and technologies, as delivered in Android 3.0. For a more detailed look at\u2026",
        "url":"about/versions/android-3.0-highlights.html",
        "image":"sdk/images/3.0/home_hero1.png",
        "type":"about",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Dashboards",
        "summary":"An overview of device characteristics and platform versions that are active in the Android ecosystem.",
        "url":"about/dashboards/index.html",
        "image":"https://chart.googleapis.com/chart?chl=GL%202.0%7CGL%203.0%7CGL%203.1&chf=bg%2Cs%2C00000000&chd=t%3A51.6%2C40.7%2C7.7&chco=c4df9b%2C6fad0c&cht=p&chs=400x250",
        "type":"about",
        "keywords": ["android","dashboard","platforms","versions"],
        "tags": ["ecosystem","versions","whatsnew","dashboards"],
        "lang":"en"
      }, 
      {
        "title":"Developer Support Resources",
        "summary":"Links to community and support resources for Android developers.",
        "url":"support.html",
        "type":"about",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Android for Work Developer Overview",
        "summary":"Learn how to build Android apps for the enterprise and take advantage of Google's Android for Work program.",
        "url":"work/overview.html",
        "image":"images/work/cards/briefcase_600px.png",
        "category":"work",
        "type":"about",
        "keywords": ["android for work","work","enterprise","corporate"],
        "tags": ["androidforwork","work","enterprise","corporate"],
        "lang":"en"
      }, 
      {
        "title":"Set up Managed Configurations",
        "summary":"Learn how to implement managed configurations that can be changed by other apps on the same device.",
        "url":"work/managed-configurations.html",
        "image":"images/work/cards/briefcase_600px.png",
        "category":"work",
        "type":"about",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Set up Managed Profiles",
        "summary":"Learn how to make sure your apps operate smoothly in a corporate environment by following some best practices.",
        "url":"work/managed-profiles.html",
        "image":"images/work/cards/briefcase_600px.png",
        "category":"work",
        "type":"about",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Enhancing Security with Device Management Policies",
        "summary":"Since Android 2.2 (API level 8), the Android platform offers system-level device management capabilities through the Device Administration APIs. In this lesson, you will learn how to create a security-aware application that manages access to its content\u2026",
        "url":"work/device-management-policy.html",
        "image":"images/training/device-mgmt-activate-device-admin.png",
        "category":"work",
        "type":"about",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Set up Single-Purpose Devices",
        "summary":"Learn how to develop single-use solutions for Android devices.",
        "url":"work/cosu.html",
        "image":"images/work/cards/briefcase_600px.png",
        "category":"work",
        "type":"about",
        "keywords": ["work","cosu"],
        "tags": ["work","cosu"],
        "lang":"en"
      }, 
      {
        "title":"Android for Work Developer Guide",
        "summary":"Android for Work provides organizations with a secure, flexible, and unified Android mobility platform combining devices, applications, and management.",
        "url":"work/guide.html",
        "image":"images/work/cards/android-studio_600px.png",
        "category":"work",
        "type":"about",
        "keywords": ["work","android for work","afw","developer","android"],
        "tags": ["work","androidforwork","afw","developer","android"],
        "lang":"en"
      }, 
      {
        "title":"Android for Work",
        "summary":"",
        "url":"work/index.html",
        "image":"images/work/hero_650px_2x.png",
        "category":"work",
        "type":"about",
        "keywords": ["android for work","work"],
        "tags": ["androidforwork","work"],
        "lang":"en"
      }
];

var DESIGN_RESOURCES = [
      {
        "title":"Creative Vision for Android Wear",
        "summary":"Android Wear devices provide just the right information at just the right time, allowing users to be more connected to both the virtual world and the real world. Great Android Wear experiences are: Most people are used to launching apps by clicking an\u2026",
        "url":"design/wear/creative-vision.html",
        "image":"design/media/wear/vision_traffic.png",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Watch Faces for Android Wear",
        "summary":"Creating Watch Faces Android Wear supports custom watch faces with designs that can show contextually relevant information to users. Designing a watch face requires a careful blending of data and visual elements that informs users without requiring close\u2026",
        "url":"design/wear/watchfaces.html",
        "image":"design/media/wear/Render_Next.png",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"App Structure for Android Wear",
        "summary":"Users are used to tapping icons to launch apps. Android Wear is different. A typical Wear app adds a card to the stream at a contextually relevant moment. It might have a button that opens a full screen view for a fast micro interaction, but it just as\u2026",
        "url":"design/wear/structure.html",
        "image":"design/media/wear/bridgednotifications.jpg",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Design Principles for Android Wear",
        "summary":"These design principles provide some simple heuristics about how you should plan and assess your Android Wear app design. A watch is a perfect form factor for a device that you can use while doing something else, such as cooking, eating, walking, running\u2026",
        "url":"design/wear/principles.html",
        "image":"design/media/wear/five_seconds.gif",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Style for Android Wear",
        "summary":"Here are a number of design considerations to bear in mind that are particular to Android Wear. Be mindful of different device sizes and shapes. Wearable devices are a form of fashion and expression for their owners, and so Android Wear supports a variety\u2026",
        "url":"design/wear/style.html",
        "image":"design/media/wear/circle_message2.png",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Context Awareness on Android Wear",
        "summary":"Some of the most powerful user experiences with Android Wear are based on context-aware notifications and actions. By using device sensors and other contextual cues, your app can reveal information and functionality precisely when the user needs it, at\u2026",
        "url":"design/wear/context.html",
        "image":"design/media/wear/ContextualExample.005.png",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"UI Patterns for Android Wear",
        "summary":"Android Wear is used for micro-interactions, and so adhering to consistent design patterns that users are already accustomed to is paramount. Cards in the stream can take slightly different forms: App icons appear in a fixed position overhanging the edge\u2026",
        "url":"design/wear/patterns.html",
        "image":"design/media/wear/Bluebird.png",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Android Wear",
        "summary":"Designing apps for wearable devices powered by Android Wear is substantially different than designing for phones or tablets: different strengths and weaknesses, different use cases, different ergonomics. To get started, you should understand the overall\u2026",
        "url":"design/wear/index.html",
        "image":"wear/images/screens/stream.gif",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creative Vision for TV",
        "summary":"Users bring a specific set of expectations when watching TV, versus interacting with a phone or tablet. The Android User Experience Team has developed the following guidelines for creation of the Android TV platform and the apps that run on it. The TV\u2026",
        "url":"design/tv/principles.html",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Style for TV",
        "summary":"Follow these style guidelines to create beautiful, functional apps for TV. The difference between a TV experience that feels right and one that does not greatly depends on the number, spacing, and size of on-screen elements. Although TV sizes and resolutions\u2026",
        "url":"design/tv/style.html",
        "image":"design/tv/images/overscan.png",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"UI Patterns for TV",
        "summary":"As a developer of apps for TV, you should follow certain patterns to enable users to quickly understand and operate your app. This section describes recommended design patterns for TV apps. Users typically navigate TV devices using a directional pad (\u2026",
        "url":"design/tv/patterns.html",
        "image":"design/tv/images/focus.png",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Designing for Android TV",
        "summary":"Guidelines to help you create a great leanback experience on Android TV.",
        "url":"design/tv/index.html",
        "image":"design/tv/images/apps-games-rows.jpg",
        "type":"design",
        "keywords": ["tv","leanback","designguidelines"],
        "tags": ["tv","leanback","designguidelines"],
        "lang":"en"
      }, 
      {
        "title":"Designing for Auto",
        "summary":"Building Apps for Auto Designing For Drivers Android Auto provide a standardized user interface and user interaction model that works across vehicles. As a designer, you do not need to worry about vehicle-specific hardware differences. This page describes\u2026",
        "url":"design/auto/index.html",
        "image":"auto/images/ui/gearhead_overview.png",
        "type":"design",
        "keywords": ["design","auto"],
        "tags": ["design","auto"],
        "lang":"en"
      }, 
      {
        "title":"Creative Vision",
        "summary":"Android design is shaped by three overarching goals for users that apply to apps as well as the system at large. As you work with Android, keep these goals in mind.\u2026",
        "url":"design/get-started/creative-vision.html",
        "image":"images/cards/design-creative-vision_2x.jpg",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Android Design Principles",
        "summary":"These design principles were developed by and for the Android User Experience Team to keep users&#39; best interests in mind. For Android developers and designers, they continue to underlie the more detailed design guidelines for different types of devices\u2026",
        "url":"design/get-started/principles.html",
        "image":"design/media/principles_delight.png",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Material Design for Android",
        "summary":"Material design is a comprehensive guide for visual, motion, and interaction design across platforms and devices. Android now includes support for material design apps. To use material design in your Android apps, follow the guidelines defined in the \u2026",
        "url":"design/material/index.html",
        "image":"images/cards/design-material-for-android_2x.jpg",
        "type":"design",
        "keywords": ["material","design"],
        "tags": ["material","design"],
        "lang":"en"
      }, 
      {
        "title":"App Structure",
        "summary":"App Structure Apps come in many varieties that address very different needs. For example: Your app&#39;s structure depends largely on the content and tasks you want to surface for your users. A typical Android app consists of top level and detail&#47;\u2026",
        "url":"design/patterns/app-structure.html",
        "image":"design/media/app_structure_overview.png",
        "type":"design",
        "keywords": ["navigation","layout","tablet"],
        "tags": ["navigation","layout","tablet"],
        "lang":"en"
      }, 
      {
        "title":"Backwards Compatibility",
        "summary":"Notes on how Android 4.x adapts UI designed for older hardware and OS versions.",
        "url":"design/patterns/compatibility.html",
        "image":"design/media/compatibility_virtual_nav.png",
        "type":"design",
        "keywords": ["support"],
        "tags": ["support"],
        "lang":"en"
      }, 
      {
        "title":"Swipe Views",
        "summary":"Efficient navigation is one of the cornerstones of a well-designed app. While apps are generally built in a hierarchical fashion, there are instances where horizontal navigation can flatten vertical hierarchies and make access to related data items faster\u2026",
        "url":"design/patterns/swipe-views.html",
        "image":"design/media/swipe_views.png",
        "type":"design",
        "keywords": ["viewpager","navigation","tabs"],
        "tags": ["viewpager","navigation","tabs"],
        "lang":"en"
      }, 
      {
        "title":"Buttons",
        "summary":"Some content is best experienced full screen, like videos, games, image galleries, books, and slides in a presentation. You can engage users more deeply with content in full screen by minimizing visual distraction from app controls and protecting users\u2026",
        "url":"design/patterns/buttons.html",
        "image":"design/media/fullscreen_landing.png",
        "type":"design",
        "keywords": ["buttons"],
        "tags": ["buttons"],
        "lang":"en"
      }, 
      {
        "title":"Help",
        "summary":"This page covers design patterns for making help accessible in your app and tips for creating help content for users who are eager for assistance.\u2026",
        "url":"design/patterns/help.html",
        "image":"design/media/help_cling.png",
        "type":"design",
        "keywords": ["settings","preferences"],
        "tags": ["settings","preferences"],
        "lang":"en"
      }, 
      {
        "title":"Pure Android",
        "summary":"Most developers want to distribute their apps on multiple platforms. As you plan your app for Android, keep in mind that different platforms play by different rules and conventions. Design decisions that make perfect sense on one platform will look and\u2026",
        "url":"design/patterns/pure-android.html",
        "image":"images/cards/design-pure-android_2x.png",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"New in Android",
        "summary":"A quick look at the new patterns and styles you can use to build beautiful Android apps\u2026 Material design is a comprehensive guide for visual, motion, and interaction design across platforms and devices. Android 5.0 provides a new theme, new widgets for\u2026",
        "url":"design/patterns/new.html",
        "image":"images/cards/design-new-in-android_2x.jpg",
        "type":"design",
        "keywords": ["kitkat","android 4.4"],
        "tags": ["kitkat","android4.4"],
        "lang":"en"
      }, 
      {
        "title":"Navigation with Back and Up",
        "summary":"Consistent navigation is an essential component of the overall user experience. Few things frustrate users more than basic navigation that behaves in inconsistent and unexpected ways. Thoughtfully following the guidelines for Back and Up will make your\u2026",
        "url":"design/patterns/navigation.html",
        "image":"design/media/navigation_between_siblings_gmail.png",
        "type":"design",
        "keywords": ["navigation","activity","task","up navigation","back navigation"],
        "tags": ["navigation","activity","task","upnavigation","backnavigation"],
        "lang":"en"
      }, 
      {
        "title":"Confirming &amp; Acknowledging",
        "summary":"In some situations, when a user invokes an action in your app, it&#39;s a good idea to confirm or acknowledge that action through text. Confirming is asking the user to verify that they truly want to proceed with an action they just invoked. In some cases\u2026",
        "url":"design/patterns/confirming-acknowledging.html",
        "image":"design/media/confirm_ack_confirming.png",
        "type":"design",
        "keywords": ["dialog","toast","notification"],
        "tags": ["dialog","toast","notification"],
        "lang":"en"
      }, 
      {
        "title":"Accessibility",
        "summary":"Design an app that's universally accessible to people with visual impairment, color deficiency, hearing loss, and limited dexterity.",
        "url":"design/patterns/accessibility.html",
        "image":"design/media/accessibility_contentdesc.png",
        "type":"design",
        "keywords": ["accessibility","navigation","input"],
        "tags": ["accessibility","navigation","input"],
        "lang":"en"
      }, 
      {
        "title":"Full Screen",
        "summary":"Some content is best experienced full screen, like videos, games, image galleries, books, and slides in a presentation. You can engage users more deeply with content in full screen by minimizing visual distraction from app controls and protecting users\u2026",
        "url":"design/patterns/fullscreen.html",
        "image":"design/media/fullscreen_landing.png",
        "type":"design",
        "keywords": ["full screen","immersive","leanback"],
        "tags": ["fullscreen","immersive","leanback"],
        "lang":"en"
      }, 
      {
        "title":"Action Bar",
        "summary":"The Action bar is an essential design element for all apps. Learn about what the action bar can do and how to use it in your apps.",
        "url":"design/patterns/actionbar.html",
        "image":"design/media/action_bar_pattern_overview.png",
        "type":"design",
        "keywords": ["actionbar","navigation"],
        "tags": ["actionbar","navigation"],
        "lang":"en"
      }, 
      {
        "title":"Notifications, Android 4.4 and Lower",
        "summary":"The notification system allows your app to keep the user informed about events, such as new chat messages or a calendar event. Think of notifications as a news channel that alerts the user to important events as they happen or a log that chronicles events\u2026",
        "url":"design/patterns/notifications_k.html",
        "image":"design/media/notifications_pattern_anatomy.png",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Widgets",
        "summary":"Design guide to creating widgets that are easy to use and look great.",
        "url":"design/patterns/widgets.html",
        "image":"design/media/widgets_info.png",
        "type":"design",
        "keywords": ["appwidget","home"],
        "tags": ["appwidget","home"],
        "lang":"en"
      }, 
      {
        "title":"Pure Android",
        "summary":"Build visually compelling apps that look great on any device.\u2026",
        "url":"design/patterns/index.html",
        "image":"design/media/design_elements_landing.png",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Style",
        "summary":"Build visually compelling apps that look great on any device.\u2026",
        "url":"design/style/index.html",
        "image":"design/media/design_elements_landing.png",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Devices and Displays",
        "summary":"Take advantage of Android's flexible layout system and create apps that gracefully scale from phones to tablets and beyond.",
        "url":"design/style/devices-displays.html",
        "image":"design/media/devices_displays_main.png",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Phones &amp; Tablets",
        "summary":"Android&#39;s system UI provides the framework on top of which you build your app, whether you&#39;re designing for phones, tablets, watches, or other form factors. Aspects of UI that are especially important for phones and tablets include the Home screen\u2026",
        "url":"design/handhelds/index.html",
        "image":"design/media/ui_overview_home_screen.png",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Downloads",
        "summary":"For icons, sticker sheets, and other downloadable resources, visit the Design site or use the links below. The toolkit contains detailed specs and measurements of all of the primary Android Wear UI components. Available in PDF and Illustrator formats.\u2026",
        "url":"design/downloads/index.html",
        "image":"design/media/downloads_wear_toolkit.png",
        "type":"design",
        "keywords": ["icons","stencils","colors","swatches"],
        "tags": ["downloads","design","tools"],
        "lang":"en"
      }, 
      {
        "title":"Android devices",
        "summary":"The device-centric UI principles, overviews, and detailed guidelines described here build on the core Android Design Principles to provide more specific design guidance for different form factors.\u2026",
        "url":"design/devices.html",
        "image":"images/cards/android-devices_2x.jpg",
        "type":"design",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Design",
        "summary":"Create beautiful experiences in your apps.",
        "url":"design/index.html",
        "image":"design/media/hero-material-design.png",
        "type":"design",
        "keywords": [],
        "tags": ["beautifulapps","design","ux","patterns","holo","appquality","landing"],
        "lang":"en"
      }
];

var DEVELOP_RESOURCES = [
      {
        "title":"Android Instant Apps: Frequently Asked Questions",
        "summary":"What devices are compatible with Android Instant Apps? Android Instant Apps is compatible with devices that are running Android 4.1 (API level 16) or higher and have Google Play services installed. Do developers need to build two different Android apps\u2026",
        "url":"topic/instant-apps/faqs.html",
        "category":"instant apps",
        "type":"develop",
        "keywords": ["material","design"],
        "tags": ["material","design"],
        "lang":"en"
      }, 
      {
        "title":"Support Library Features",
        "summary":"The Android Support Library package contains several libraries that can be included in your application. Each of these libraries supports a specific range of Android platform versions and set of features. This guide explains the important features and\u2026",
        "url":"topic/libraries/support-library/features.html",
        "category":"libraries",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Support Library Revision History",
        "summary":"This page provides details about the Support Library package releases.",
        "url":"topic/libraries/support-library/revisions.html",
        "image":"assets/images/styles/disclosure_up.png",
        "category":"libraries",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Support Library Setup",
        "summary":"How you setup the Android Support Libraries in your development project depends on what features you want to use and what range of Android platform versions you want to support with your application. This document guides you through downloading the Support\u2026",
        "url":"topic/libraries/support-library/setup.html",
        "image":"images/tools/sdk-manager-support-libs.png",
        "category":"libraries",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Support Library",
        "summary":"The Android Support Library offers backward-compatible versions of a number of features that are not built into the framework.",
        "url":"topic/libraries/support-library/index.html",
        "image":"images/tools/support-library/appbar-kitkat.png",
        "category":"libraries",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Testing Support Library",
        "summary":"The Android Testing Support Library provides an extensive framework for testing Android apps.",
        "url":"topic/libraries/testing-support-library/index.html",
        "image":"images/tools/studio-test-module.png",
        "category":"libraries",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Data Binding Library",
        "summary":"The Data Binding Library enables you to write declarative layouts.",
        "url":"topic/libraries/data-binding/index.html",
        "category":"libraries",
        "type":"develop",
        "keywords": ["databinding","layouts"],
        "tags": ["databinding","layouts"],
        "lang":"en"
      }, 
      {
        "title":"Android Libraries",
        "summary":"This section describes several useful Android libraries that are not included with the Android Framework.\u2026",
        "url":"topic/libraries/index.html",
        "category":"libraries",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Threading Performance",
        "summary":"Making adept use of threads on Android can help you boost your app\u2019s performance. This page discusses several aspects of working with threads: working with the UI, or main, thread; the relationship between app lifecycle and thread priority; and, methods\u2026",
        "url":"topic/performance/threads.html",
        "category":"performance",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Launch-Time Performance",
        "summary":"Users expect apps to be responsive and fast to load. An app with a slow startup time doesn\u2019t meet this expectation, and can be disappointing to users. This sort of poor experience may cause a user to rate your app poorly on the Play store, or even abandon\u2026",
        "url":"topic/performance/launch-time.html",
        "image":"topic/performance/images/cold-launch.png",
        "category":"performance",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Performance and View Hierarchies",
        "summary":"The way you manage the hierarchy of your View objects can have a substantial impact on your app\u2019s performance. This page describes how to assess whether your view hierarchy is slowing your app down, and offers some strategies for addressing issues that\u2026",
        "url":"topic/performance/optimizing-view-hierarchies.html",
        "image":"topic/performance/images/lint-inspect-code.png",
        "category":"performance",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Optimizing App-Initiated Network Use",
        "summary":"Network traffic initiated by your app can usually be significantly optimized, since you can plan for what network resources it needs and set a schedule for accessing them. By applying careful scheduling, you can create significant periods of rest for \u2026",
        "url":"topic/performance/power/network/action-app-traffic.html",
        "category":"performance",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Optimizing General Network Use",
        "summary":"In general, reducing the amount of network traffic helps reduce battery drain. In addition to the battery-optimization techniques of the previous lessons, you should look at these general-purpose techniques and see if you can apply them to your app. This\u2026",
        "url":"topic/performance/power/network/action-any-traffic.html",
        "category":"performance",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Analyzing Network Traffic Data",
        "summary":"In the previous section, you tagged your app code with traffic identifiers, ran tests, and collected data. This lesson teaches you how to look at the network traffic data you have collected and directs you to actions for improving your app&#39;s networking\u2026",
        "url":"topic/performance/power/network/analyze-data.html",
        "image":"images/training/performance/suboptimal_network_traffic_pattern.png",
        "category":"performance",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Optimizing Server-Initiated Network Use",
        "summary":"Network traffic sent by server programs to your app can be challenging to optimize. A solution to this problem is for your appp to periodically poll the server to check for updates. This approach can waste network connection and power when your app starts\u2026",
        "url":"topic/performance/power/network/action-server-traffic.html",
        "category":"performance",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Optimizing User-Initiated Network Use",
        "summary":"Quick handling of user requests helps ensure a good user experience, especially when it comes to user actions that require network access. You should prioritize low latency over power conservation to provide the fastest response when optimizing network\u2026",
        "url":"topic/performance/power/network/action-user-traffic.html",
        "category":"performance",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Collecting Network Traffic Data",
        "summary":"The network traffic generated by an app can have a significant impact on the battery life of the device where it is running. In order to optimize that traffic, you need to both measure it and identify its source. Network requests can come directly from\u2026",
        "url":"topic/performance/power/network/gather-data.html",
        "image":"images/training/performance/network_traffic_colors.png",
        "category":"performance",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Reducing Network Battery Drain",
        "summary":"Learn how to optimize your app to reduce battery drain and use network resources efficiently.",
        "url":"topic/performance/power/network/index.html",
        "category":"performance",
        "type":"develop",
        "keywords": ["battery"],
        "tags": ["battery"],
        "lang":"en"
      }, 
      {
        "title":"Intelligent Job-Scheduling",
        "summary":"Modern apps can perform many of their tasks asynchronously, outside the direct flow of user interaction. Some examples of these asynchronous tasks are: Scheduling this work intelligently can improve your app\u2019s performance, along with aspects of system\u2026",
        "url":"topic/performance/scheduling.html",
        "category":"performance",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Background Optimizations",
        "summary":"New restrictions to implicit broadcasts.",
        "url":"topic/performance/background-optimization.html",
        "image":"images/cards/card-nyc_2x.jpg",
        "category":"performance",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Reduce APK Size",
        "summary":"Users often avoid downloading apps that seem too large, particularly in emerging markets where devices connect to often-spotty 2G and 3G networks or work on pay-by-the-byte plans. This article describes how to reduce your app&#39;s APK size, which enables\u2026",
        "url":"topic/performance/reduce-apk-size.html",
        "image":"images/training/performance/animation-frames.png",
        "category":"performance",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Performance",
        "summary":"Improve your app's performance by learning how to optimize power consumption, launch times, and other important areas of performance.",
        "url":"topic/performance/index.html",
        "category":"performance",
        "type":"develop",
        "keywords": ["performance"],
        "tags": ["performance"],
        "lang":"en"
      }, 
      {
        "title":"Chrome OS Device Support for Apps",
        "summary":"You can use the Google Play Store to install Android apps on several Google Chromebooks. This document describes the Chromebooks, Chromeboxes, and Chromebases that can install Android apps, both currently and in upcoming releases of Chrome OS. The same\u2026",
        "url":"topic/arc/device-support.html",
        "category":"arc",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"App Manifest Compatibility for Chromebooks",
        "summary":"As you prepare your Android app to run on Chromebooks, you should consider the device features that your app uses. Chromebooks don&#39;t support all of the hardware and software features that are available on other devices running Android. If your app\u2026",
        "url":"topic/arc/manifest.html",
        "category":"arc",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Loading Apps on Chromebooks",
        "summary":"This document describes how to enter Developer mode and enable unknown resources so that you can load Android apps on your Google Chromebook. To load Android apps, you must enable unknown sources. Enabling unknown sources is available only when your device\u2026",
        "url":"topic/arc/sideload.html",
        "image":"images/topic/arc/sideload_figure_1.jpg",
        "category":"arc",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Optimizing Apps for Chromebooks",
        "summary":"Google Chromebooks now support the Google Play Store and Android apps. This document describes some ways that you can optimize your Android apps for Chromebooks. To begin optimizing your Android app for Chromebooks, update your manifest file ( AndroidManifest.xml\u2026",
        "url":"topic/arc/index.html",
        "category":"arc",
        "type":"develop",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }
];

var DISTRIBUTE_RESOURCES = [
      {
        "title":"Monetize with Subscriptions",
        "summary":"Sell subscriptions to your products to create continuing revenue streams.",
        "url":"distribute/monetize/subscriptions.html",
        "image":"images/cards/card-monetize_subscriptions_16-9_2x.png",
        "type":"distribute",
        "keywords": ["in-app","iap","monetizing","free","trials"],
        "tags": ["in-app","iap","monetizing","free","trials"],
        "lang":"en"
      }, 
      {
        "title":"Earn Revenue from AdMob Ads",
        "summary":"Gain insights about your users, drive more in-app purchases, and maximize your ad revenue.",
        "url":"distribute/monetize/ads.html",
        "image":"distribute/images/advertising.jpg",
        "type":"distribute",
        "keywords": ["monetizing","ads","admob","ads"],
        "tags": ["monetizing","ads","admob","ads"],
        "lang":"en"
      }, 
      {
        "title":"Drive Conversions",
        "summary":"Discover where your users are coming from, drive engagement, and surface your in-app products to maximize your conversions.",
        "url":"distribute/monetize/conversions.html",
        "image":"images/cards/card-drive-conversions_16-9_2x.png",
        "type":"distribute",
        "keywords": ["conversions"],
        "tags": ["conversions"],
        "lang":"en"
      }, 
      {
        "title":"E-commerce",
        "summary":"With Android Pay, you&#39;ve the added flexibility of selling physical goods and services, such as clothing or movie tickets, through your apps using the Android Pay API (US Only) . You can use this option where your app is the store-front for retail \u2026",
        "url":"distribute/monetize/ecommerce.html",
        "image":"images/cards/card-ecommerce_16-9_2x.png",
        "type":"distribute",
        "keywords": ["monetizing","physical goods","payments","androidpay"],
        "tags": ["monetizing","physicalgoods","payments","androidpay"],
        "lang":"en"
      }, 
      {
        "title":"Monetize Freemium Apps",
        "summary":"Use Google Play In-app Billing and other tools to monetize your free apps.",
        "url":"distribute/monetize/freemium.html",
        "image":"images/cards/card-monetize-freemium_16-9_2x.png",
        "type":"distribute",
        "keywords": ["in-app","billing","iap","monetizing"],
        "tags": ["in-app","billing","iap","monetizing"],
        "lang":"en"
      }, 
      {
        "title":"Convenient, Frictionless Purchasing",
        "summary":"Users can purchase instantly with a choice of payment methods.",
        "url":"distribute/monetize/payments.html",
        "image":"images/cards/card-frictionless-purchasing_16-9_2x.png",
        "type":"distribute",
        "keywords": ["google play","payments","gift card"],
        "tags": ["googleplay","payments","giftcard"],
        "lang":"en"
      }, 
      {
        "title":"Monetize Premium Apps",
        "summary":"Charging users to download your apps is a simple, convenient monetization model.",
        "url":"distribute/monetize/premium.html",
        "image":"images/cards/card-monetize-premium_16-9_2x.png",
        "type":"distribute",
        "keywords": ["monetizing","paid"],
        "tags": ["monetizing","paid"],
        "lang":"en"
      }, 
      {
        "title":"Earn",
        "summary":"There are many ways to make money with your apps on Google Play, and we offer a variety of tools to make it easy. Take advantage of Google Play\u2019s phenomenal growth by using one or more of the business models available. To get started, set up your Merchant\u2026",
        "url":"distribute/monetize/index.html",
        "type":"distribute",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Developer Stories: Apps",
        "summary":"How app developers are making use of localization, tablet features.",
        "url":"distribute/stories/apps.html",
        "image":"images/cards/distribute/stories/intuit-mint.png",
        "type":"distribute",
        "keywords": [],
        "tags": [],
        "timestamp":"1381449601",
        "lang":"en"
      }, 
      {
        "title":"Remember The Milk lifts installs with tablet design",
        "summary":"The team at Remember The Milk redesigned their app for tablets.",
        "url":"distribute/stories/apps/remember-the-milk.html",
        "image":"images/cards/distribute/stories/remember-the-milk.jpg",
        "type":"distribute",
        "keywords": ["developerstory","apps","googleplay"],
        "tags": ["developerstory","apps","googleplay"],
        "timestamp":"1456340902",
        "lang":"en"
      }, 
      {
        "title":"El Mundo Improves User Ratings and Engagement with Material Design",
        "summary":"El Mundo uses Material Design principles to enhance their app's user experience.",
        "url":"distribute/stories/apps/el-mundo.html",
        "image":"images/cards/distribute/stories/el-mundo.png",
        "type":"distribute",
        "keywords": ["developerstory","apps","googleplay"],
        "tags": ["developerstory","apps","googleplay"],
        "timestamp":"1468901833",
        "lang":"en"
      }, 
      {
        "title":"SayHi Chat grows installs and user engagement with App Translation Service",
        "summary":"The SayHi team used details from Google Analytics, the DAU and user growth numbers, to identify several candidate languages for new translations.",
        "url":"distribute/stories/apps/sayhi.html",
        "image":"images/cards/distribute/stories/sayhichat.jpg",
        "type":"distribute",
        "keywords": ["developerstory","apps","googleplay"],
        "tags": ["developerstory","apps","googleplay"],
        "timestamp":"1454440882",
        "lang":"en"
      }, 
      {
        "title":"Mint finds more screen real estate gives more engagement",
        "summary":"Intuit expands their Mint app to the tablet.",
        "url":"distribute/stories/apps/intuit-mint.html",
        "image":"images/cards/distribute/stories/intuit-mint.png",
        "type":"distribute",
        "keywords": ["developerstory","apps","googleplay"],
        "tags": ["developerstory","apps","googleplay"],
        "timestamp":"1456340902",
        "lang":"en"
      }, 
      {
        "title":"Segundamano Develops Android-First as Its Fastest Channel for Growth",
        "summary":"Segundamano developed Android app to increase potential for growth.",
        "url":"distribute/stories/apps/segundamano.html",
        "image":"images/cards/distribute/stories/segundamano.png",
        "type":"distribute",
        "keywords": ["developerstory","apps","googleplay"],
        "tags": ["developerstory","apps","googleplay"],
        "timestamp":"1468901832",
        "lang":"en"
      }, 
      {
        "title":"Aftenposten Improves Retention by Allowing Readers to Customize Notifications",
        "summary":"Aftenposten upgraded their app and improved user retention.",
        "url":"distribute/stories/apps/aftenposten.html",
        "image":"images/cards/distribute/stories/aftenposten.png",
        "type":"distribute",
        "keywords": ["developerstory","apps","googleplay"],
        "tags": ["developerstory","apps","googleplay"],
        "timestamp":"1468901834",
        "lang":"en"
      }, 
      {
        "title":"Saved games help bring players back to Leo\u2019s Fortune",
        "summary":"1337 & Senri implemented Google Play games services saved games in their game Leo\u2019s Fortune.",
        "url":"distribute/stories/games/leos-fortune.html",
        "image":"images/cards/distribute/stories/leos-fortune.jpg",
        "type":"distribute",
        "keywords": ["developerstory","games","googleplay"],
        "tags": ["developerstory","games","googleplay"],
        "timestamp":"1456431511",
        "lang":"en"
      }, 
      {
        "title":"Noodlecake engages players with multiplayer in Super Stickman Golf 2",
        "summary":"For the update to Super Stickman Golf, Noodlecake made extensive use of Google Play games services.",
        "url":"distribute/stories/games/noodlecake-super-stickman.html",
        "image":"images/cards/distribute/stories/noodlecake-super-stickman.jpg",
        "type":"distribute",
        "keywords": ["developerstory","games","googleplay"],
        "tags": ["developerstory","games","googleplay"],
        "timestamp":"1456431511",
        "lang":"en"
      }, 
      {
        "title":"Glu increased their conversion rate over 2% with Store Listing Experiments",
        "summary":"Glu Mobile decided to use Store Listing Experiments to see if different background colors in the game\u2019s icon would affect installs. They found that a lighter background resulted in more installs.",
        "url":"distribute/stories/games/glu-tap-baseball.html",
        "image":"images/cards/distribute/stories/glu-tap-baseball.jpg",
        "type":"distribute",
        "keywords": ["developerstory","games","googleplay"],
        "tags": ["developerstory","games","googleplay"],
        "timestamp":"1456431511",
        "lang":"en"
      }, 
      {
        "title":"Tapps Games Increases Installs by More Than 20% with Store Listing Experiments",
        "summary":"Tapps Games increased their use of store listing experiments in the Developer Console, with impressive results.",
        "url":"distribute/stories/games/tapps.html",
        "image":"images/cards/distribute/stories/tapps.png",
        "type":"distribute",
        "keywords": ["developerstory","games","googleplay"],
        "tags": ["developerstory","games","googleplay"],
        "timestamp":"1468901831",
        "lang":"en"
      }, 
      {
        "title":"Gameloft drives viral distribution with friend invitations",
        "summary":"Gameloft makes extensive use of Google Play games services.",
        "url":"distribute/stories/games/gameloft-asphalt8.html",
        "image":"images/cards/distribute/stories/gameloft-asphalt8.jpg",
        "type":"distribute",
        "keywords": ["developerstory","games","googleplay"],
        "tags": ["developerstory","games","googleplay"],
        "timestamp":"1454440882",
        "lang":"en"
      }, 
      {
        "title":"Achievements drive engagement in Doctor Who: Legacy",
        "summary":"The Tiny Rebel Games integrated achievements and cloud services from Google Play games services into the award-winning Doctor Who: Legacy game, under license from BBC Worldwide.",
        "url":"distribute/stories/games/doctor-who-legacy.html",
        "image":"images/cards/distribute/stories/doctor-who-legacy.jpg",
        "type":"distribute",
        "keywords": ["developerstory","games","googleplay"],
        "tags": ["developerstory","games","googleplay"],
        "timestamp":"1456431511",
        "lang":"en"
      }, 
      {
        "title":"Ease-of-use and fast turnaround time benefits Indian Rummy.",
        "summary":"Games4All localized their apps based upon popularity.",
        "url":"distribute/stories/games/g4a-indian-rummy.html",
        "image":"images/cards/distribute/stories/g4a-indian-rummy.jpg",
        "type":"distribute",
        "keywords": ["developerstory","games","googleplay"],
        "tags": ["developerstory","games","googleplay"],
        "timestamp":"1456340902",
        "lang":"en"
      }, 
      {
        "title":"Kongregate increases AdVenture Capitalist conversions by 5% with Store Listing Experiments",
        "summary":"AdVenture Capitalist, a builder game from games developers HyperHippo and Kongregate, was originally built for the web and released as a mobile version in May 2015. Kongregate decided to use Store Listing Experiments to see if different graphics could impact their installs.",
        "url":"distribute/stories/games/kongregate-adv-cap.html",
        "image":"images/cards/distribute/stories/kongregate-adv-cap.jpg",
        "type":"distribute",
        "keywords": ["developerstory","games","googleplay"],
        "tags": ["developerstory","games","googleplay"],
        "timestamp":"1456431511",
        "lang":"en"
      }, 
      {
        "title":"Localization improves Zombie Ragdoll engagement at launch",
        "summary":"Zombie Ragdoll is a physics based zombie shooting game launched by RV AppStudios in August 2013. Having attended Google I/O talks, the team at RV AppStudios was inspired to go global with Zombie Ragdoll at launch.",
        "url":"distribute/stories/games/rvappstudios-zombie.html",
        "image":"images/cards/distribute/stories/rvappstudios-zombie.jpg",
        "type":"distribute",
        "keywords": ["developerstory","games","googleplay"],
        "tags": ["developerstory","games","googleplay"],
        "timestamp":"1454440882",
        "lang":"en"
      }, 
      {
        "title":"Concrete Software increases engagement with quests",
        "summary":"Concrete Software makes use of Google Play games services in its 10-pin bowling game, PBA Bowling Challenge.",
        "url":"distribute/stories/games/concrete-bowling.html",
        "image":"images/cards/distribute/stories/concrete-bowling.jpg",
        "type":"distribute",
        "keywords": ["developerstory","games","googleplay"],
        "tags": ["developerstory","games","googleplay"],
        "timestamp":"1454440882",
        "lang":"en"
      }, 
      {
        "title":"Witch Puzzle Achieves 98% of International Installs on Android",
        "summary":"Witch Puzzle localized their app into 12 languages.",
        "url":"distribute/stories/games/upbeat-games.html",
        "image":"images/cards/distribute/stories/witch-puzzle.png",
        "type":"distribute",
        "keywords": ["developerstory","games","googleplay"],
        "tags": ["developerstory","games","googleplay"],
        "timestamp":"1468901832",
        "lang":"en"
      }, 
      {
        "title":"TinyCo finds monetization opportunities on tablets",
        "summary":"TinyCo launches their line of apps across multiple form factors.",
        "url":"distribute/stories/games/tiny-co.html",
        "image":"images/cards/distribute/stories/tiny-co.jpg",
        "type":"distribute",
        "keywords": ["developerstory","games","googleplay"],
        "tags": ["developerstory","games","googleplay"],
        "timestamp":"1456340902",
        "lang":"en"
      }, 
      {
        "title":"Glu adds games gifts to Eternity Warriors 3 to driver player engagement",
        "summary":"Glu Mobile makes extensive use of Google Play games in Eternity Warriors 3 this including sign-in, leaderboards, achievements, and multiplayer games features.",
        "url":"distribute/stories/games/glu-eternity-warriors.html",
        "image":"images/cards/distribute/stories/glu-eternity-warriors.jpg",
        "type":"distribute",
        "keywords": ["developerstory","games","googleplay"],
        "tags": ["developerstory","games","googleplay"],
        "timestamp":"1454440882",
        "lang":"en"
      }, 
      {
        "title":"Glu improves player lifetime value with Google Play games services sign-in",
        "summary":"With the release of their game Deer Hunter 2014, leading developer and publisher Glu Mobile found that Google Play games services helped improve the user experience leading to increased player happiness.",
        "url":"distribute/stories/games/glu-dh.html",
        "image":"images/cards/distribute/stories/glu-dh.jpg",
        "type":"distribute",
        "keywords": ["developerstory","games","googleplay"],
        "tags": ["developerstory","games","googleplay"],
        "lang":"en"
      }, 
      {
        "title":"Dots increased installs by over 6% using Store Listing Experiments",
        "summary":"Game developer Playdots decided to use Store Listing Experiments to see if different game screenshots could impact installs for their game Two Dots. They found that game screenshots showing gameplay mechanics drove more installs from the store listing page than their existing non-gameplay screenshots.",
        "url":"distribute/stories/games/dots.html",
        "image":"images/cards/distribute/stories/dots.png",
        "type":"distribute",
        "keywords": ["developerstory","games","googleplay"],
        "tags": ["developerstory","games","googleplay"],
        "timestamp":"1456431511",
        "lang":"en"
      }, 
      {
        "title":"Kongregate increases Global Assault installs by 92 percent with Store Listing Experiments",
        "summary":"Kongregate decided to use Store Listing Experiments to see if different artwork could impact the installs of their game Global Assault. They found that icons illustrating dynamic game play drove more installs from the store listing page than their existing icon.",
        "url":"distribute/stories/games/kongregate-global-assault.html",
        "image":"images/cards/distribute/stories/kongregate-global-assault.jpg",
        "type":"distribute",
        "keywords": ["developerstory","games","googleplay"],
        "tags": ["developerstory","games","googleplay"],
        "timestamp":"1456431511",
        "lang":"en"
      }, 
      {
        "title":"Hothead Games grows retention and revenues with leaderboards and achievements",
        "summary":"Following their experience with Google Play games services in Rivals at War: Firefight, Hothead Games includes its features in all their games.",
        "url":"distribute/stories/games/hotheadgames-firefight.html",
        "image":"images/cards/distribute/stories/hotheadgames-firefight.jpg",
        "type":"distribute",
        "keywords": ["developerstory","games","googleplay"],
        "tags": ["developerstory","games","googleplay"],
        "timestamp":"1454440882",
        "lang":"en"
      }, 
      {
        "title":"Developer Stories: Games",
        "summary":"How game studios are using Google Play game services to deliver new gaming experiences for their users.",
        "url":"distribute/stories/games.html",
        "image":"images/distribute/glu-ew-gpgames.jpg",
        "type":"distribute",
        "keywords": [],
        "tags": [],
        "timestamp":"1381449601",
        "lang":"en"
      }, 
      {
        "title":"Offer Over-the-air Installs",
        "summary":"Let users send your app directly to their devices when they sign in with Google.",
        "url":"distribute/users/ota-installs.html",
        "image":"images/cards/google-sign-in_2x.png",
        "type":"distribute",
        "keywords": ["google","identity","installs"],
        "tags": ["google","identity","installs"],
        "lang":"en"
      }, 
      {
        "title":"Build Buzz",
        "summary":"Generate interest and demand for your app. Here are some ways to help users find, download, and install your apps.",
        "url":"distribute/users/build-buzz.html",
        "image":"distribute/images/build-buzz.jpg",
        "type":"distribute",
        "keywords": ["users","growth","promotion"],
        "tags": ["users","growth","promotion"],
        "lang":"en"
      }, 
      {
        "title":"Promote Your App with Ads",
        "summary":"Promote your app with AdWords to find new users at the right moment.",
        "url":"distribute/users/promote-with-ads.html",
        "image":"images/cards/adwords_2x.jpg",
        "type":"distribute",
        "keywords": ["users","ads","adwords"],
        "tags": ["users","ads","adwords"],
        "lang":"en"
      }, 
      {
        "title":"Know Your User",
        "summary":"It\u005c's essential to understand your users and listen to their input. Here are some ideas.",
        "url":"distribute/users/know-your-user.html",
        "image":"distribute/images/know-your-user.jpg",
        "type":"distribute",
        "keywords": ["users","growth","global"],
        "tags": ["users","growth","global"],
        "lang":"en"
      }, 
      {
        "title":"Increase installs with Store Listing Experiments",
        "summary":"Run experiments to find the best possible Play Store listing page.",
        "url":"distribute/users/experiments.html",
        "image":"images/cards/distribute/users/experiments.png",
        "type":"distribute",
        "keywords": ["ab testing","experiments","testing"],
        "tags": ["abtesting","experiments","testing"],
        "lang":"en"
      }, 
      {
        "title":"Expand Into New Markets",
        "summary":"Tap fast-growing markets in Japan, Korea, India, Brazil, and many other countries around the world.",
        "url":"distribute/users/expand-to-new-markets.html",
        "image":"distribute/images/expand-into-new-markets.jpg",
        "type":"distribute",
        "keywords": ["users","growth","global"],
        "tags": ["users","growth","global"],
        "lang":"en"
      }, 
      {
        "title":"Smarter App Invites",
        "summary":"Tap into your existing user base to increase downloads and increase conversions.",
        "url":"distribute/users/app-invites.html",
        "image":"images/cards/card-app-invites_16-9_2x.png",
        "type":"distribute",
        "keywords": ["google","identity","signin"],
        "tags": ["google","identity","signin"],
        "lang":"en"
      }, 
      {
        "title":"Add An App Install Banner On Your Mobile Website",
        "summary":"Add a native app install banner to your mobile website and allow visitors to install your app straight from your site.",
        "url":"distribute/users/banners.html",
        "image":"images/cards/card-install-banners_16x9_2x.png",
        "type":"distribute",
        "keywords": ["banner","chrome","web"],
        "tags": ["banner","chrome","web"],
        "lang":"en"
      }, 
      {
        "title":"Understand Where Your Users Come From",
        "summary":"Use the Developer Console to identify the channels that bring the greatest volume of high-value users.",
        "url":"distribute/users/user-acquisition.html",
        "image":"images/cards/distribute/users/user-acquisition.jpg",
        "type":"distribute",
        "keywords": ["user acquisition","reports","cohorts"],
        "tags": ["useracquisition","reports","cohorts"],
        "lang":"en"
      }, 
      {
        "title":"Cross-Sell with House Ads",
        "summary":"Tap into your existing user base to increase downloads and increase conversions.",
        "url":"distribute/users/house-ads.html",
        "image":"distribute/images/advertising.jpg",
        "type":"distribute",
        "keywords": ["google","identity","signin"],
        "tags": ["google","identity","signin"],
        "lang":"en"
      }, 
      {
        "title":"Create a Great Listing",
        "summary":"Make your listing page compelling and integrate it into your marketing campaigns.",
        "url":"distribute/users/your-listing.html",
        "image":"distribute/images/create-listing.jpg",
        "type":"distribute",
        "keywords": ["listing","google play","users","growth"],
        "tags": ["listing","googleplay","users","growth"],
        "lang":"en"
      }, 
      {
        "title":"Drive installs from YouTube",
        "summary":"Bring users from videos to your store listing with a merchandise card available on YouTube.",
        "url":"distribute/users/youtube.html",
        "image":"images/cards/card-instals-from-youtube_16-9_2x.png",
        "type":"distribute",
        "keywords": ["users","youtube","cards","videos"],
        "tags": ["users","youtube","cards","videos"],
        "lang":"en"
      }, 
      {
        "title":"Get Users",
        "summary":"You\u2019ve published your app, now how do you acquire users? Every app and game is different, but there are some common themes from successful Google Play developers. These best practices are critical to your app or game\u2019s success.\u2026",
        "url":"distribute/users/index.html",
        "type":"distribute",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Update Your Apps Regularly",
        "summary":"Keeping your content fresh gives users a reason to come back.",
        "url":"distribute/engage/app-updates.html",
        "image":"images/gp-your-user-0.jpg",
        "type":"distribute",
        "keywords": ["updates"],
        "tags": ["updates"],
        "lang":"en"
      }, 
      {
        "title":"Use Rich Notifications to Keep Users Informed",
        "summary":"Use Android's notifications to keep users in touch with your content and services &mdash; even when the app is not in use.",
        "url":"distribute/engage/notifications.html",
        "image":"design/media/notifications_pattern_anatomy.png",
        "type":"distribute",
        "keywords": [""],
        "tags": [""],
        "lang":"en"
      }, 
      {
        "title":"Increase Usage with Android Intents",
        "summary":"Use Android Intents to make your app available to users as they perform tasks in other apps.",
        "url":"distribute/engage/intents.html",
        "image":"images/distribute/engage-intents.png",
        "type":"distribute",
        "keywords": ["engagement","intents"],
        "tags": ["engagement","intents"],
        "lang":"en"
      }, 
      {
        "title":"Encourage Competition",
        "summary":" Bring out the competitor in your users with cloud save, multiplayer game play, and more.",
        "url":"distribute/engage/game-services.html",
        "image":"images/cards/distribute/engage/card-game-services.png",
        "type":"distribute",
        "keywords": ["games","games services","play games"],
        "tags": ["games","gamesservices","playgames"],
        "lang":"en"
      }, 
      {
        "title":"Engage Your Community",
        "summary":"Building a community has many benefits, including improving your app and bringing users back to it.",
        "url":"distribute/engage/community.html",
        "image":"images/gp-engage-9.jpg",
        "type":"distribute",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Get real user feedback with beta tests",
        "summary":"Run alpha and beta tests from the developer console, and make improvements and correct issues before you release.",
        "url":"distribute/engage/beta.html",
        "image":"images/cards/distribute/engage/beta.jpg",
        "type":"distribute",
        "keywords": ["beta","alpha","release channels"],
        "tags": ["beta","alpha","releasechannels"],
        "lang":"en"
      }, 
      {
        "title":"Interact with Nearby Users",
        "summary":"Use the Nearby feature to interact with nearby people, devices, and beacons.",
        "url":"distribute/engage/nearby.html",
        "image":"images/distribute/nearby_connections.png",
        "type":"distribute",
        "keywords": ["users","nearby","engage"],
        "tags": ["users","nearby","engage"],
        "lang":"en"
      }, 
      {
        "title":"Engage Users in Their Language",
        "summary":"Use the App Translation Service to maximize the amount of people who can install and engage with your app.",
        "url":"distribute/engage/translate.html",
        "image":"images/gp-listing-3.jpg",
        "type":"distribute",
        "keywords": ["app translation service","translation","localization"],
        "tags": ["apptranslationservice","translation","localization"],
        "lang":"en"
      }, 
      {
        "title":"Integrate Google Cloud Messaging",
        "summary":"Keep your users in sync with your latest content by delivering lightweight messages over Google's infrastructure.",
        "url":"distribute/engage/gcm.html",
        "image":"images/cards/card-google-cloud-messaging_16-9_2x.png",
        "type":"distribute",
        "keywords": ["gcm"],
        "tags": ["gcm"],
        "lang":"en"
      }, 
      {
        "title":"Drive engagement with AdWords Ads",
        "summary":"Keep users coming back. AdWords offers re-engagement tools to help your app stay top of mind with users.",
        "url":"distribute/engage/ads.html",
        "image":"images/cards/adwords_2x.jpg",
        "type":"distribute",
        "keywords": ["engagement","adwords"],
        "tags": ["engagement","adwords"],
        "lang":"en"
      }, 
      {
        "title":"Understand User Behavior",
        "summary":"Use Google Analytics to learn what your users like and what keeps them coming back.",
        "url":"distribute/engage/analytics.html",
        "image":"images/gp-analytics.jpg",
        "type":"distribute",
        "keywords": ["analytics","user behavior"],
        "tags": ["analytics","userbehavior"],
        "lang":"en"
      }, 
      {
        "title":"Increase Usage with Search",
        "summary":"Use search to bring your existing users back into your app.",
        "url":"distribute/engage/deep-linking.html",
        "image":"images/cards/google-search_2x.png",
        "type":"distribute",
        "keywords": ["engagement","app indexing","search","deep linking"],
        "tags": ["engagement","appindexing","search","deeplinking"],
        "lang":"en"
      }, 
      {
        "title":"Add Quick and Secure Google Sign-In",
        "summary":"Increase conversion rates while helping users minimize typing by letting users sign in with Google+.",
        "url":"distribute/engage/easy-signin.html",
        "image":"images/cards/google-sign-in_2x.png",
        "type":"distribute",
        "keywords": ["google","identity","signin"],
        "tags": ["google","identity","signin"],
        "lang":"en"
      }, 
      {
        "title":"Build Useful Widgets",
        "summary":"Use home screen widgets to remind users about important information in your apps and games, even when your apps are closed.",
        "url":"distribute/engage/widgets.html",
        "image":"images/gp-engage-0.jpg",
        "type":"distribute",
        "keywords": [""],
        "tags": [""],
        "lang":"en"
      }, 
      {
        "title":"Delight Users with Videos",
        "summary":"Videos are one of the most effective ways to get users excited about your apps.",
        "url":"distribute/engage/video.html",
        "image":"images/gp-engage-smule.jpg",
        "type":"distribute",
        "keywords": ["engagement"],
        "tags": ["engagement"],
        "lang":"en"
      }, 
      {
        "title":"Engage & Retain Users",
        "summary":"Engaging and retaining active users are the keys to success. Here are some resources to help you build an active user base.",
        "url":"distribute/engage/index.html",
        "type":"distribute",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Improve Your Marketing ROI",
        "summary":"Combine the power of Analytics with other data sources to understand the performance of each of your marketing channels.",
        "url":"distribute/analyze/improve-roi.html",
        "image":"distribute/analyze/images/adwords_reporting.png",
        "type":"distribute",
        "keywords": ["analytics","user behavior"],
        "tags": ["analytics","userbehavior"],
        "lang":"en"
      }, 
      {
        "title":"Act Across Google Services",
        "summary":"Find your Analytics reports where you need them within Google Play, AdMob, and AdWords.",
        "url":"distribute/analyze/google-services.html",
        "image":"distribute/analyze/images/admob_integration.png",
        "type":"distribute",
        "keywords": ["analytics","user behavior"],
        "tags": ["analytics","userbehavior"],
        "lang":"en"
      }, 
      {
        "title":"Get Started with Analytics",
        "summary":"Get advanced insight into how players discover and play your games.",
        "url":"distribute/analyze/start.html",
        "image":"images/cards/card-analytics_2x.png",
        "type":"distribute",
        "keywords": ["analytics","user behavior"],
        "tags": ["analytics","userbehavior"],
        "lang":"en"
      }, 
      {
        "title":"Understand the Value of Your Users",
        "summary":"Understand what makes users come back to your app and improve retention.",
        "url":"distribute/analyze/understand-user-value.html",
        "image":"distribute/analyze/images/active_users.png",
        "type":"distribute",
        "keywords": ["analytics","user behavior"],
        "tags": ["analytics","userbehavior"],
        "lang":"en"
      }, 
      {
        "title":"Build Better Apps",
        "summary":"Get actionable insights to optimize your app and learn what works best for your business.",
        "url":"distribute/analyze/build-better-apps.html",
        "image":"distribute/analyze/images/flows.png",
        "type":"distribute",
        "keywords": ["analytics","user behavior"],
        "tags": ["analytics","userbehavior"],
        "lang":"en"
      }, 
      {
        "title":"Analyze",
        "summary":"Understanding what your users do inside your app is the key to engaging and monetizing them.",
        "url":"distribute/analyze/index.html",
        "image":"images/cards/analytics-mobile_2x.jpg",
        "type":"distribute",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Measure What Matters",
        "summary":"Customize Analytics to meet your business needs and get meaningful data on your app's performance.",
        "url":"distribute/analyze/measure.html",
        "image":"distribute/analyze/images/realtime.png",
        "type":"distribute",
        "keywords": ["analytics","user behavior"],
        "tags": ["analytics","userbehavior"],
        "lang":"en"
      }, 
      {
        "title":"Optimize Your App",
        "summary":"A look at how to get the most visibility and the highest ratings possible for your app or game. Optimizing the quality of your apps is a key strategy.",
        "url":"distribute/essentials/optimizing-your-app.html",
        "image":"distribute/images/gp-optimize-card.jpg",
        "type":"distribute",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Auto App Quality",
        "summary":"Auto apps integrate with the vehicle's input controls and display and minimize driver distraction to create a great experience.",
        "url":"distribute/essentials/quality/auto.html",
        "image":"distribute/images/gp-auto-quality.png",
        "type":"distribute",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Core App Quality",
        "summary":"App quality directly influences the long-term success of your app\u2014in terms of installs, user rating and reviews, engagement, and user retention.",
        "url":"distribute/essentials/quality/core.html",
        "image":"distribute/images/core-quality-guidelines.jpg",
        "type":"distribute",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"TV App Quality",
        "summary":"TV is a growing segment of Android devices that requires specific attention to app design and functionality in order to create a great experience.",
        "url":"distribute/essentials/quality/tv.html",
        "image":"distribute/images/gp-tv-quality.png",
        "type":"distribute",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Wear App Quality",
        "summary":"Wearables are smaller devices that are built for glanceability and require unique apps to provide just the right information at the the right time.",
        "url":"distribute/essentials/quality/wear.html",
        "image":"distribute/images/gp-wear-quality.png",
        "type":"distribute",
        "keywords": ["wear","wearables","quality","guidelines"],
        "tags": ["wear","wearables","quality","guidelines"],
        "lang":"en"
      }, 
      {
        "title":"Building for Billions",
        "summary":"Best practices on how to optimize Android apps for low- and no-bandwidth and low-cost devices.",
        "url":"distribute/essentials/quality/billions.html",
        "image":"distribute/images/billions-guidelines.png",
        "type":"distribute",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Tablet App Quality",
        "summary":"Tablets are a fast-growing part of the Android installed base that offers new opportunities for your apps.",
        "url":"distribute/essentials/quality/tablets.html",
        "image":"distribute/images/tablet-guidelines-color.jpg",
        "type":"distribute",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Essentials for a Successful App",
        "summary":"A focus on quality should be part of your entire app delivery process: from initial concept through app and UI design, coding and testing and onto a process of monitoring feedback and making improvement after launch.\u2026",
        "url":"distribute/essentials/index.html",
        "type":"distribute",
        "keywords": ["guidelines","tablet","quality"],
        "tags": ["guidelines","quality"],
        "lang":"en"
      }, 
      {
        "title":"Brand Guidelines",
        "summary":"Guidelines and downloads for the Android and Google Play brands.",
        "url":"distribute/tools/promote/brand.html",
        "image":"assets/images/resource-card-default-android.jpg",
        "type":"distribute",
        "keywords": ["brand","bugdroid","assets"],
        "tags": ["brand","bugdroid","assets"],
        "lang":"en"
      }, 
      {
        "title":"Linking to Your Products",
        "summary":"Learn how to build links that take users to your published apps in Google Play from browse or search.",
        "url":"distribute/tools/promote/linking.html",
        "image":"images/gp-linking-ex-crop.png",
        "type":"distribute",
        "keywords": ["linking"],
        "tags": ["promoting"],
        "lang":"en"
      }, 
      {
        "title":"Device Art Generator",
        "summary":"Drag and drop screenshots of your app into device artwork, for better looking promotional images and improved visual context.",
        "url":"distribute/tools/promote/device-art.html",
        "image":"images/device-art-ex-crop.jpg",
        "type":"distribute",
        "keywords": ["device","deviceart","nexus","assets"],
        "tags": ["disttools","promoting","deviceart","marketing"],
        "lang":"en"
      }, 
      {
        "title":"Alternative Distribution Options",
        "summary":"With Android you can distribute apps to users in any way you want, using any store or distribution approach.",
        "url":"distribute/tools/open-distribution.html",
        "image":"distribute/images/alt-distribution.jpg",
        "type":"distribute",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Localization Checklist",
        "summary":"Take advantage of the worldwide audience offered by Android and Google Play. Read this checklist to get an overview of how to deliver your product to markets around the world.",
        "url":"distribute/tools/localization-checklist.html",
        "image":"distribute/images/localization-checklist.jpg",
        "type":"distribute",
        "keywords": ["local","l10n","translation","language"],
        "tags": ["localizing","publishing","disttools"],
        "lang":"en"
      }, 
      {
        "title":"Launch Checklist",
        "summary":"Essential overview of the complete process of delivering your app to users. Read this checklist early in development to help you plan for a successful launch on Google Play.",
        "url":"distribute/tools/launch-checklist.html",
        "image":"distribute/images/launch-checklist.jpg",
        "type":"distribute",
        "keywords": ["launch","publishing","google play"],
        "tags": ["localizing","publishing","disttools"],
        "lang":"en"
      }, 
      {
        "title":"Tools &amp; Reference",
        "summary":"Here you\u2019ll find resources to help you publish your apps and games, acquire users, and monetize your investment.\u2026",
        "url":"distribute/tools/index.html",
        "type":"distribute",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Distribute to Android Auto",
        "summary":"Distribute your apps and content to Android Auto.",
        "url":"distribute/googleplay/auto.html",
        "image":"design/auto/images/auto-overview.png",
        "type":"distribute",
        "keywords": ["auto","publish","googleplay"],
        "tags": ["auto","publish","quality"],
        "lang":"en"
      }, 
      {
        "title":"Distribute to Android TV",
        "summary":"Distribute your apps, games, and content to Android TV.",
        "url":"distribute/googleplay/tv.html",
        "image":"design/tv/images/atv-home.jpg",
        "type":"distribute",
        "keywords": ["tv","publish","googleplay"],
        "tags": ["tv","publish","quality"],
        "lang":"en"
      }, 
      {
        "title":"Publish Education Apps",
        "summary":"Join Google Play for Education in just a few simple steps.",
        "url":"distribute/googleplay/edu/start.html",
        "image":"distribute/images/play-education.jpg",
        "type":"distribute",
        "keywords": ["education","addendum"],
        "tags": ["education","guidelines","quality"],
        "lang":"en"
      }, 
      {
        "title":"Google Play for Education",
        "summary":"Distribute your educational app directly to educators and schools.",
        "url":"distribute/googleplay/edu/about.html",
        "image":"distribute/images/about-play-education.jpg",
        "type":"distribute",
        "keywords": ["education"],
        "tags": ["gpfe","googleplay","distribution","edu"],
        "lang":"en"
      }, 
      {
        "title":"Video Resources",
        "summary":"Watch video resources from Google and successful educational developers.",
        "url":"distribute/googleplay/edu/videos.html",
        "image":"http://i1.ytimg.com/vi/vzvpcEffvaE/maxresdefault.jpg",
        "type":"distribute",
        "keywords": ["education"],
        "tags": ["education"],
        "lang":"en"
      }, 
      {
        "title":"Get Started with Publishing",
        "summary":"Start publishing on Google Play in minutes by registering for a developer account.",
        "url":"distribute/googleplay/start.html",
        "image":"distribute/images/getting-started.jpg",
        "type":"distribute",
        "keywords": ["google play","publishing","register","signup"],
        "tags": ["publishing"],
        "lang":"en"
      }, 
      {
        "title":"The Google Play Opportunity",
        "summary":"Billions of downloads a month and growing. Get your apps in front of users at Google's scale.",
        "url":"distribute/googleplay/about.html",
        "image":"images/cards/google-play_2x.png",
        "type":"distribute",
        "keywords": ["play","apps","distributing","publishing"],
        "tags": ["visibility","growth","distributing"],
        "lang":"en"
      }, 
      {
        "title":"Distribute to Android Wear",
        "summary":"Distribute your apps, games, and content to Android Wear.",
        "url":"distribute/googleplay/wear.html",
        "image":"design/media/wear/ContextualExample.008_2x.png",
        "type":"distribute",
        "keywords": ["wear","publish","googleplay"],
        "tags": ["wear","publish","quality"],
        "lang":"en"
      }, 
      {
        "title":"Opt-In to Designed for Families",
        "summary":"Join Designed for Families in just a few simple steps.",
        "url":"distribute/googleplay/families/start.html",
        "image":"images/gp-dff-optin.png",
        "type":"distribute",
        "keywords": ["families","addendum"],
        "tags": ["families","guidelines","quality"],
        "lang":"en"
      }, 
      {
        "title":"Designed for Families",
        "summary":"Designed for Families helps you make your apps and games more discoverable to families.",
        "url":"distribute/googleplay/families/about.html",
        "image":"distribute/images/about-dff-sm.jpg",
        "type":"distribute",
        "keywords": ["families"],
        "tags": ["families","googleplay","distribution"],
        "lang":"en"
      }, 
      {
        "title":"Google Play for Families FAQ",
        "summary":"Questions and answers about Designed for Families",
        "url":"distribute/googleplay/families/faq.html",
        "type":"distribute",
        "keywords": ["families","addendum"],
        "tags": ["families","guidelines","quality"],
        "lang":"en"
      }, 
      {
        "title":"Stream Your Content with Google Cast",
        "summary":"Let users stream your video and audio content to their TVs and speakers.",
        "url":"distribute/googleplay/cast.html",
        "image":"images/distribute/cast.jpg",
        "type":"distribute",
        "keywords": ["cast","video","chromecast"],
        "tags": ["cast","video","chromecast"],
        "lang":"en"
      }, 
      {
        "title":"Build VR with Google Cardboard",
        "summary":"Build apps and games with VR, for a viewer anyone can buy.",
        "url":"distribute/googleplay/cardboard.html",
        "image":"images/cards/card-cardboard_2x.png",
        "type":"distribute",
        "keywords": ["vr","cardboard","games"],
        "tags": ["vr","cardboard","games"],
        "lang":"en"
      }, 
      {
        "title":"Google Play for Work",
        "summary":"Distribute your apps directly to enterprises and business users.",
        "url":"distribute/googleplay/work/about.html",
        "image":"images/distribute/gpfw.jpg",
        "type":"distribute",
        "keywords": ["enterprise","emm","business","administrator","profile"],
        "tags": ["enterprise","emm","business","administrator","profile"],
        "lang":"en"
      }, 
      {
        "title":"Find Success on Google Play",
        "summary":"Stay up to date with features, best practices, and strategies to help you grow your business and find success on Google Play.",
        "url":"distribute/googleplay/guide.html",
        "image":"images/cards/card-secrets-playbook_2x.jpg",
        "type":"distribute",
        "keywords": ["playbook","play","protips"],
        "tags": ["playbook","play","google"],
        "timestamp":"1466793455",
        "lang":"en"
      }, 
      {
        "title":"Google Play",
        "summary":"The premier store for distributing Android apps and games, with global reach and tools to help you gain traction in the marketplace.\u2026",
        "url":"distribute/googleplay/index.html",
        "image":"images/cards/program-edu_2x.jpg",
        "type":"distribute",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Developer Console",
        "summary":"Learn about the Developer Console, your home for app publishing on Google Play.",
        "url":"distribute/googleplay/developer-console.html",
        "image":"images/cards/dev-console_2x.jpg",
        "type":"distribute",
        "keywords": ["play","publish","google","google play"],
        "tags": ["play","publish","google","googleplay"],
        "lang":"en"
      }, 
      {
        "title":"Distribute Your Apps",
        "summary":"The most visited store in the world for Android apps. Cloud-connected and always synced, it's never been easier for users to find and download your apps.",
        "url":"distribute/index.html",
        "image":"images/distribute/google-play-bg.jpg",
        "type":"distribute",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }
];

var GOOGLE_RESOURCES = [
      {
        "title":"Setting Up for Licensing",
        "summary":"Before you start adding license verification to your application, you need to set up your Google Play publishing account, your development environment, and any test accounts required to verify your implementation. If you don&#39;t already have a publisher\u2026",
        "url":"google/play/licensing/setting-up.html",
        "image":"images/licensing_public_key.png",
        "type":"google",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Licensing Reference",
        "summary":"Table 1 lists all of the source files in the License Verification Library (LVL) available through the Android SDK. All of the files are part of the com.android.vending.licensing package. Table 2 lists all of the license response codes supported by the\u2026",
        "url":"google/play/licensing/licensing-reference.html",
        "type":"google",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Licensing Overview",
        "summary":"Google Play Licensing is a network-based service that lets an application query a trusted Google Play licensing server to determine whether the application is licensed to the current device user. The licensing service is based on the capability of the\u2026",
        "url":"google/play/licensing/overview.html",
        "image":"images/licensing_arch.png",
        "type":"google",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Adding Licensing to Your App",
        "summary":"After you&#39;ve set up a publisher account and development environment (see Setting Up for Licensing ), you are ready to add license verification to your app with the License Verification Library (LVL). Adding license verification with the LVL involves\u2026",
        "url":"google/play/licensing/adding-licensing.html",
        "image":"images/licensing_flow.png",
        "type":"google",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"App Licensing",
        "summary":"Information on using the licensing feature of Google Play to protect your apps.",
        "url":"google/play/licensing/index.html",
        "image":"assets/images/resource-card-default-android.jpg",
        "type":"google",
        "keywords": [],
        "tags": ["licensing","drm"],
        "lang":"en"
      }, 
      {
        "title":"APK Expansion Files",
        "summary":"If your app needs more than the 100MB APK max, use free APK expansion files from Google Play.",
        "url":"google/play/expansion-files.html",
        "type":"google",
        "keywords": ["apk size","apk max","large assets"],
        "tags": ["apksize","apkmax","largeassets"],
        "lang":"en"
      }, 
      {
        "title":"Google Play Developer API",
        "summary":"A REST-based web service for remote app publishing and catalog management through Google Play.",
        "url":"google/play/developer-api.html",
        "image":"images/play_dev.jpg",
        "type":"google",
        "keywords": ["in-app billing","google play","inapp billing","in app billing","iab","billing","publishing"],
        "tags": ["in-appbilling","googleplay","inappbilling","inappbilling","iab","billing","publishing"],
        "lang":"en"
      }, 
      {
        "title":"Implementing In-app Billing",
        "summary":"In-app Billing on Google Play provides a straightforward, simple interface for sending In-app Billing requests and managing In-app Billing transactions using Google Play. The information below covers the basics of how to make calls from your application\u2026",
        "url":"google/play/billing/billing_integrate.html",
        "type":"google",
        "keywords": ["inapp","billing","iap"],
        "tags": ["inapp","billing","iap"],
        "lang":"en"
      }, 
      {
        "title":"Security and Design",
        "summary":"As you design your In-app Billing implementation, be sure to follow the security and design guidelines that are discussed in this document. These guidelines are recommended best practices for anyone who is using Google Play&#39;s In-app Billing service\u2026",
        "url":"google/play/billing/billing_best_practices.html",
        "type":"google",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Testing In-app Billing",
        "summary":"The Google Play Developer Console provides several tools that help you test your In-app Billing implementation: To test in-app billing, you need to publish your app to an alpha or beta channel in Google Play. After you publish an app to an alpha or beta\u2026",
        "url":"google/play/billing/billing_testing.html",
        "image":"images/billing_test_flow.png",
        "type":"google",
        "keywords": ["inapp","billing","iap"],
        "tags": ["inapp","billing","iap"],
        "lang":"en"
      }, 
      {
        "title":"In-app Billing Overview",
        "summary":"This document describes the fundamental In-app Billing components and features that you need to understand in order to add In-app Billing features into your application. Your application accesses the In-app Billing service using an API that is exposed\u2026",
        "url":"google/play/billing/billing_overview.html",
        "type":"google",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"In-app Billing Reference",
        "summary":"This documentation provides technical reference information for using the In-app Billing Version 3 API. The following table lists all of the server response codes that are sent from Google Play to your application. Google Play sends the response code \u2026",
        "url":"google/play/billing/billing_reference.html",
        "type":"google",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"In-app Billing API",
        "summary":"The In-app Billing Version 3 API makes it easier for you to integrate In-app Billing into your applications. The features in this version include improved synchronous purchase flow, APIs to let you easily track ownership of consumable goods, and local\u2026",
        "url":"google/play/billing/api.html",
        "image":"images/in-app-billing/v3/iab_v3_purchase_flow.png",
        "type":"google",
        "keywords": ["billing","inapp","iap"],
        "tags": ["billing","inapp","iap"],
        "lang":"en"
      }, 
      {
        "title":"In-app Promotions",
        "summary":"Support promo codes in your app, which lets you give content or features away to a limited number of users free of charge.",
        "url":"google/play/billing/billing_promotions.html",
        "image":"images/play_dev.jpg",
        "type":"google",
        "keywords": ["promotions","billing","promo codes"],
        "tags": ["monetization","inappbilling","promotions"],
        "lang":"en"
      }, 
      {
        "title":"In-app Subscriptions",
        "summary":"Create a steady revenue stream by selling subscriptions to your content.",
        "url":"google/play/billing/billing_subscriptions.html",
        "image":"images/play_dev.jpg",
        "type":"google",
        "keywords": ["subscriptions","billing","inapp","iap"],
        "tags": ["monetization","inappbilling","subscriptions"],
        "lang":"en"
      }, 
      {
        "title":"In-app Billing",
        "summary":"Sell digital content as one-time purchases inside your app.",
        "url":"google/play/billing/index.html",
        "image":"images/play_dev.jpg",
        "type":"google",
        "keywords": ["billing","inapp","iap"],
        "tags": ["monetizing","inappbilling","subscriptions"],
        "lang":"en"
      }, 
      {
        "title":"Administering In-app Billing",
        "summary":"In-app billing frees you from processing financial transactions, but you still need to perform a few administrative tasks. These tasks include the following: To register a test account, you must have a Google Play publisher account. If you already have\u2026",
        "url":"google/play/billing/billing_admin.html",
        "image":"images/in-app-billing/edit_local_prices.png",
        "type":"google",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Multiple APK Support",
        "summary":"Multiple APK support is a feature on Google Play that allows you to publish different APKs for your application that are each targeted to different device configurations. Each APK is a complete and independent version of your application, but they share\u2026",
        "url":"google/play/publishing/multiple-apks.html",
        "image":"images/market/version-codes.png",
        "type":"google",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Filters on Google Play",
        "summary":"When a user searches or browses for apps to download on Google Play, the results are filtered based on which applications are compatible with the device. For example, if an app requires a camera, Google Play would not show the app to devices that do not\u2026",
        "url":"google/play/filters.html",
        "type":"google",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Google Play Distribution",
        "summary":"Google Play allows you to manage your app distribution with features that let you control which users can download your app as well as deliver separate versions of your app based on certain characteristics like platform version. Make sure your app gets\u2026",
        "url":"google/play/dist.html",
        "type":"google",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Android Backup Service",
        "summary":"Android Backup Service provides a backup transport for Android&#39;s data backup framework, which allows you to copy a user&#39;s persistent app data to remote &quot;cloud&quot; storage. Backing up persistent data this way provides a restore point for\u2026",
        "url":"google/backup/index.html",
        "type":"google",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Google Services",
        "summary":"",
        "url":"google/index.html",
        "image":"images/google/hero-play-services_2x.png",
        "type":"google",
        "keywords": [],
        "tags": ["google","play","services","maps","location","gcm","messaging","places"],
        "lang":"en"
      }
];

var GUIDE_RESOURCES = [
      {
        "title":"Use Java 8 Language Features",
        "summary":"Android supports all Java 7 language features and a subset of Java 8 language features that vary by platform version. This page describes the new language features you can use, how to properly configure your project to use them, and any known issues you\u2026",
        "url":"guide/platform/j8-jack.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Platform Architecture",
        "summary":"Android is an open source, Linux-based software stack created for a wide array of devices and form factors. The following diagram shows the major components of the Android platform. The foundation of the Android platform is the Linux kernel. For example\u2026",
        "url":"guide/platform/index.html",
        "image":"guide/platform/images/android-stack_2x.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please follow this link .\u2026",
        "url":"guide/appendix/faq/licensingandoss.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please follow this link .\u2026",
        "url":"guide/appendix/faq/commontasks.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please follow this link .\u2026",
        "url":"guide/appendix/faq/troubleshooting.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please follow this link .\u2026",
        "url":"guide/appendix/faq/security.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please follow this link .\u2026",
        "url":"guide/appendix/faq/framework.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please follow this link .\u2026",
        "url":"guide/appendix/faq/index.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Supported Media Formats",
        "summary":"This document describes the media codec, container, and network protocol support provided by the Android platform. As an application developer, you are free to make use of any media codec that is available on any Android-powered device, including those\u2026",
        "url":"guide/appendix/media-formats.html",
        "type":"guide",
        "keywords": ["video","audio","mpeg","mp4","m4a","mp3","3gp","3gpp","flac","wave","wav"],
        "tags": ["video","audio","mpeg","mp4","m4a","mp3","3gp","3gpp","flac","wave","wav"],
        "lang":"en"
      }, 
      {
        "title":"Appendix",
        "summary":"",
        "url":"guide/appendix/index.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Building Web Apps in WebView",
        "summary":"If you want to deliver a web application (or just a web page) as a part of a client application, you can do it using WebView. The WebView class is an extension of Android&#39;s View class that allows you to display web pages as a part of your activity\u2026",
        "url":"guide/webapps/webview.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Best Practices for Web Apps",
        "summary":"Developing web pages and web applications for mobile devices presents a different set of challenges compared to developing a web page for the typical desktop web browser. To help you get started, the following is a list of practices you should follow \u2026",
        "url":"guide/webapps/best-practices.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Migrating to WebView in Android 4.4",
        "summary":"Android 4.4 (API level 19) introduces a new version of WebView that is based on Chromium . This change upgrades WebView performance and standards support for HTML5, CSS3, and JavaScript to match the latest web browsers. Any apps using WebView will inherit\u2026",
        "url":"guide/webapps/migrating.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Supporting Different Screens in Web Apps",
        "summary":"Because Android is available on devices with a variety of screen sizes and pixel densities, you should account for these factors in your web design so your web pages always appear at the appropriate size. When targeting your web pages for Android devices\u2026",
        "url":"guide/webapps/targeting.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Debugging Web Apps",
        "summary":"If you are testing your web app with a device running Android 4.4 or higher, you can remotely debug your web pages in WebView with Chrome Developer Tools, while continuing to support older versions of Android. For more information, see Remote Debugging\u2026",
        "url":"guide/webapps/debugging.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Web Apps",
        "summary":"There are essentially two ways to deliver an application on Android: as a client-side application (developed using the Android SDK and installed on user devices in an APK) or as a web application (developed using web standards and accessed through a web\u2026",
        "url":"guide/webapps/index.html",
        "image":"images/webapps/webapps.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Searchable Configuration",
        "summary":"In order to implement search with assistance from the Android system (to deliver search queries to an activity and provide search suggestions), your application must provide a search configuration in the form of an XML file. This page describes the search\u2026",
        "url":"guide/topics/search/searchable-config.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Adding Custom Suggestions",
        "summary":"When using the Android search dialog or search widget, you can provide custom search suggestions that are created from data in your application. For example, if your application is a word dictionary, you can suggest words from the dictionary that match\u2026",
        "url":"guide/topics/search/adding-custom-suggestions.html",
        "image":"images/search/search-suggest-custom.png",
        "type":"guide",
        "keywords": ["searchrecentsuggestionsprovider"],
        "tags": ["searchrecentsuggestionsprovider"],
        "lang":"en"
      }, 
      {
        "title":"Creating a Search Interface",
        "summary":"When you&#39;re ready to add search functionality to your application, Android helps you implement the user interface with either a search dialog that appears at the top of the activity window or a search widget that you can insert in your layout. Both\u2026",
        "url":"guide/topics/search/search-dialog.html",
        "image":"images/search/search-ui.png",
        "type":"guide",
        "keywords": ["searchview"],
        "tags": ["searchview"],
        "lang":"en"
      }, 
      {
        "title":"Adding Recent Query Suggestions",
        "summary":"When using the Android search dialog or search widget, you can provide search suggestions based on recent search queries. For example, if a user previously searched for &quot;puppies,&quot; then that query appears as a suggestion once he or she begins\u2026",
        "url":"guide/topics/search/adding-recent-query-suggestions.html",
        "image":"images/search/search-suggest-recent-queries.png",
        "type":"guide",
        "keywords": ["searchrecentsuggestions","searchrecentsuggestionsprovider"],
        "tags": ["searchrecentsuggestions","searchrecentsuggestionsprovider"],
        "lang":"en"
      }, 
      {
        "title":"Search Overview",
        "summary":"Search is a core user feature on Android. Users should be able to search any data that is available to them, whether the content is located on the device or the Internet. To help create a consistent search experience for users, Android provides a search\u2026",
        "url":"guide/topics/search/index.html",
        "image":"images/search/search-suggest-custom.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Processes and Application Life Cycle",
        "summary":"In most cases, every Android application runs in its own Linux process. This process is created for the application when some of its code needs to be run, and will remain running until it is no longer needed and the system needs to reclaim its memory \u2026",
        "url":"guide/topics/processes/process-lifecycle.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Media Router",
        "summary":"As users connect their televisions, home theater systems and music players with wireless technologies, they want to be able to play content from Android apps on these larger, louder devices. Enabling this kind of playback can turn your one-device, one-user\u2026",
        "url":"guide/topics/media/mediarouter.html",
        "image":"images/mediarouter/mediarouter-framework.png",
        "type":"guide",
        "keywords": ["mediarouter","cast","chromecast","wireless display","miracast"],
        "tags": ["mediarouter","cast","chromecast","wirelessdisplay","miracast"],
        "lang":"en"
      }, 
      {
        "title":"JetPlayer",
        "summary":"The Android platform includes a JET engine that lets you add interactive playback of JET audio content in your applications. You can create JET content for interactive playback using the JetCreator authoring application that ships with the SDK. To play\u2026",
        "url":"guide/topics/media/jetplayer.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Camera",
        "summary":"The Android framework includes support for various cameras and camera features available on devices, allowing you to capture pictures and videos in your applications. This document discusses a quick, simple approach to image and video capture and outlines\u2026",
        "url":"guide/topics/media/camera.html",
        "image":"images/camera-area-coordinates.png",
        "type":"guide",
        "keywords": ["photo","video","picture","mediarecorder"],
        "tags": ["photo","video","picture","mediarecorder"],
        "lang":"en"
      }, 
      {
        "title":"ExoPlayer",
        "summary":"Playing videos and music is a popular activity on Android devices. The Android framework provides MediaPlayer as a quick solution for playing media with minimal code, and the MediaCodec and MediaExtractor classes are provided for building custom media\u2026",
        "url":"guide/topics/media/exoplayer.html",
        "type":"guide",
        "keywords": ["audio","video","adaptive","streaming","dash","smoothstreaming"],
        "tags": ["audio","video","adaptive","streaming","dash","smoothstreaming"],
        "lang":"en"
      }, 
      {
        "title":"Audio Capture",
        "summary":"The Android multimedia framework includes support for capturing and encoding a variety of common audio formats, so that you can easily integrate audio into your applications. You can record audio using the MediaRecorder APIs if supported by the device\u2026",
        "url":"guide/topics/media/audio-capture.html",
        "type":"guide",
        "keywords": ["mediarecorder"],
        "tags": ["mediarecorder"],
        "lang":"en"
      }, 
      {
        "title":"SONiVOX JETCreator User Manual",
        "summary":"Content Authoring Application for the JET Interactive Music Engine This document contains the user guidelines for the SONiVOX JET Creator, an authoring application for creating and auditioning JET files. JET is an interactive music player for small embedded\u2026",
        "url":"guide/topics/media/jet/jetcreator_manual.html",
        "image":"images/jet/linear_music.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Media Playback",
        "summary":"The Android multimedia framework includes support for playing variety of common media types, so that you can easily integrate audio, video and images into your applications. You can play audio or video from media files stored in your application&#39;s\u2026",
        "url":"guide/topics/media/mediaplayer.html",
        "image":"images/notification1.png",
        "type":"guide",
        "keywords": ["mediaplayer","soundpool","audiomanager"],
        "tags": ["mediaplayer","soundpool","audiomanager"],
        "lang":"en"
      }, 
      {
        "title":"Media and Camera",
        "summary":"If your media playback application creates a media playback service, just like Music, that responds to the media button events, how will the user know where those events are going to? Music, or your new application? Making a game on Android is easy. Making\u2026",
        "url":"guide/topics/media/index.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Media Route Provider",
        "summary":"Users want to play media content from their Android devices bigger, brighter, and louder on connected playback devices such as televisions, stereos, and home theater equipment. As a manufacturer of these devices, allowing Android users to instantly show\u2026",
        "url":"guide/topics/media/mediarouteprovider.html",
        "image":"images/mediarouter/media-route-provider-framework.png",
        "type":"guide",
        "keywords": ["mediarouteprovider","mediacontrolintent"],
        "tags": ["mediarouteprovider","mediacontrolintent"],
        "lang":"en"
      }, 
      {
        "title":"Storage Options",
        "summary":"Android provides several options for you to save persistent application data. The solution you choose depends on your specific needs, such as whether the data should be private to your application or accessible to other applications (and the user) and\u2026",
        "url":"guide/topics/data/data-storage.html",
        "type":"guide",
        "keywords": ["database","sharedpreferences","sdcard"],
        "tags": ["database","sharedpreferences","sdcard"],
        "lang":"en"
      }, 
      {
        "title":"Data Backup",
        "summary":"Android&#39;s backup service allows you to copy your persistent application data to remote &quot;cloud&quot; storage, in order to provide a restore point for the application data and settings. If a user performs a factory reset or converts to a new Android-powered\u2026",
        "url":"guide/topics/data/backup.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"App Install Location",
        "summary":"Beginning with API Level 8, you can allow your application to be installed on the external storage (for example, the device&#39;s SD card). This is an optional feature you can declare for your application with the preferExternal&quot; or &quot;auto&quot\u2026",
        "url":"guide/topics/data/install-location.html",
        "type":"guide",
        "keywords": ["sdcard","external"],
        "tags": ["sdcard","external"],
        "lang":"en"
      }, 
      {
        "title":"Data Storage",
        "summary":"This class covers techniques for backing up data to the cloud so that users can restore their data when recovering from a data loss (such as a factory reset) or installing your application on a new device.\u2026",
        "url":"guide/topics/data/index.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Application Resources",
        "summary":"This document has moved. Please see Application Resources .\u2026",
        "url":"guide/topics/resources/resources-i18n.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Accessing Resources",
        "summary":"Once you provide a resource in your application (discussed in Providing Resources ), you can apply it by referencing its resource ID. All resource IDs are defined in your project&#39;s R class, which the aapt tool automatically generates. When your application\u2026",
        "url":"guide/topics/resources/accessing-resources.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"String Resources",
        "summary":"Explains how to use string resources in your UI.",
        "url":"guide/topics/resources/string-resource.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Style Resource",
        "summary":"A style resource defines the format and look for a UI. A style can be applied to an individual View (from within a layout file) or to an entire Activity or application (from within the manifest file). For more information about creating and applying styles\u2026",
        "url":"guide/topics/resources/style-resource.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"ICU4J Android Framework APIs",
        "summary":"ICU4J is an open-source, widely used set of Java libraries providing Unicode and globalization support for software applications. Starting in Android 7.0 (API level 24), Android exposes a subset of the ICU4J APIs for app developers to use under the icu\u2026",
        "url":"guide/topics/resources/icu4j-framework.html",
        "image":"images/cards/card-nyc_2x.jpg",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Localizing with Resources",
        "summary":"Android will run on many devices in many regions. To reach the most users, your application should handle text, audio files, numbers, currency, and graphics in ways appropriate to the locales where your application will be used. This document describes\u2026",
        "url":"guide/topics/resources/localization.html",
        "image":"../../../images/resources/right-arrow.png",
        "type":"guide",
        "keywords": ["localizing","localization","resources","formats","l10n"],
        "tags": ["localizing","localization","resources","formats","l10n"],
        "lang":"en"
      }, 
      {
        "title":"Providing Resources",
        "summary":"You should always externalize application resources such as images and strings from your code, so that you can maintain them independently. You should also provide alternative resources for specific device configurations, by grouping them in specially-named\u2026",
        "url":"guide/topics/resources/providing-resources.html",
        "image":"images/resources/resource_devices_diagram2.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Resources Overview",
        "summary":"You should always externalize resources such as images and strings from your application code, so that you can maintain them independently. Externalizing your resources also allows you to provide alternative resources that support specific device configurations\u2026",
        "url":"guide/topics/resources/overview.html",
        "image":"images/resources/resource_devices_diagram1.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Animation Resources",
        "summary":"An animation resource can define one of two types of animations: There are two types of animations that you can do with the view animation framework: An animation defined in XML that modifies properties of the target object, such as background color or\u2026",
        "url":"guide/topics/resources/animation-resource.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Menu Resource",
        "summary":"A menu resource defines an application menu (Options Menu, Context Menu, or submenu) that can be inflated with MenuInflater. For a guide to using menus, see the Menus developer guide. Introduced in API Level 11. See the Adding the App Bar training class\u2026",
        "url":"guide/topics/resources/menu-resource.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Drawable Resources",
        "summary":"A drawable resource is a general concept for a graphic that can be drawn to the screen and which you can retrieve with APIs such as getDrawable(int) or apply to another XML resource with attributes such as AnimationDrawable. A bitmap image. Android supports\u2026",
        "url":"guide/topics/resources/drawable-resource.html",
        "image":"images/resources/layers.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Language and Locale",
        "summary":"Starting in Android 7.0 (API level 24), Android provides enhanced support for multilingual users, allowing them to select multiple locales in settings. Android provides this capability by greatly expanding the number of locales supported and changing \u2026",
        "url":"guide/topics/resources/multilingual-support.html",
        "image":"images/cards/card-nyc_2x.jpg",
        "type":"guide",
        "keywords": ["androidn"],
        "tags": ["androidn"],
        "lang":"en"
      }, 
      {
        "title":"Inline Complex XML Resources",
        "summary":"Certain resource types are a composition of multiple complex resources represented by XML files. One example is an animated vector drawable, which is a drawable resource encapsulating a vector drawable and an animation. This requires the use of at least\u2026",
        "url":"guide/topics/resources/complex-xml-resources.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"More Resource Types",
        "summary":"This page defines more types of resources you can externalize, including: A boolean value defined in XML. No attributes. This application code retrieves the boolean: This layout XML uses the boolean for an attribute: A color value defined in XML. The \u2026",
        "url":"guide/topics/resources/more-resources.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Resource Types",
        "summary":"Each of the documents in this section describe the usage, format and syntax for a certain type of application resource that you can provide in your resources directory ({@code res&#47;}). Here&#39;s a brief summary of each resource type:\u2026",
        "url":"guide/topics/resources/available-resources.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Color State List Resource",
        "summary":"A ColorStateList is an object you can define in XML that you can apply as a color, but will actually change colors, depending on the state of the View object to which it is applied. For example, a Button widget can exist in one of several different states\u2026",
        "url":"guide/topics/resources/color-list-resource.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Handling Runtime Changes",
        "summary":"Some device configurations can change during runtime (such as screen orientation, keyboard availability, and language). When such a change occurs, Android restarts the running Activity (onDestroy() is called, followed by onCreate()). The restart behavior\u2026",
        "url":"guide/topics/resources/runtime-changes.html",
        "type":"guide",
        "keywords": ["activity","lifecycle"],
        "tags": ["activity","lifecycle"],
        "lang":"en"
      }, 
      {
        "title":"Layout Resource",
        "summary":"A layout resource defines the architecture for the UI in an Activity or a component of a UI. You should not assume that any derivation of ViewGroup will accept nested Views. Some ViewGroups are implementations of the AdapterView class, which determines\u2026",
        "url":"guide/topics/resources/layout-resource.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"App Resources",
        "summary":"Developer guide about how to use resources in your Android apps.",
        "url":"guide/topics/resources/index.html",
        "image":"images/develop/resources.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Layouts",
        "summary":"A layout defines the visual structure for a user interface, such as the UI for an activity or app widget . You can declare a layout in two ways: The Android framework gives you the flexibility to use either or both of these methods for declaring and managing\u2026",
        "url":"guide/topics/ui/declaring-layout.html",
        "image":"images/layoutparams.png",
        "type":"guide",
        "keywords": ["view","viewgroup"],
        "tags": ["view","viewgroup"],
        "lang":"en"
      }, 
      {
        "title":"Input Events",
        "summary":"On Android, there&#39;s more than one way to intercept the events from a user&#39;s interaction with your application. When considering events within your user interface, the approach is to capture the events from the specific View object that the user\u2026",
        "url":"guide/topics/ui/ui-events.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"How Android Draws Views",
        "summary":"When an Activity receives focus, it will be requested to draw its layout. The Android framework will handle the procedure for drawing, but the Activity must provide the root node of its layout hierarchy. Drawing begins with the root node of the layout\u2026",
        "url":"guide/topics/ui/how-android-draws.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Drag and Drop",
        "summary":"With the Android drag&#47;drop framework, you can allow your users to move data from one View to another View in the current layout using a graphical drag and drop gesture. The framework includes a drag event class, drag listeners, and helper methods \u2026",
        "url":"guide/topics/ui/drag-drop.html",
        "type":"guide",
        "keywords": ["clipdata","dragevent","onlongclicklistener"],
        "tags": ["clipdata","dragevent","onlongclicklistener"],
        "lang":"en"
      }, 
      {
        "title":"Menus",
        "summary":"Menus are a common user interface component in many types of applications. To provide a familiar and consistent user experience, you should use the Menu APIs to present user actions and other options in your activities. Beginning with Android 3.0 (API\u2026",
        "url":"guide/topics/ui/menus.html",
        "image":"images/options_menu.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Accessibility Developer Checklist",
        "summary":"Making an application accessible is about a deep commitment to usability, getting the details right and delighting your users. This document provides a checklist of accessibility requirements, recommendations and considerations to help you make sure your\u2026",
        "url":"guide/topics/ui/accessibility/checklist.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Making Applications Accessible",
        "summary":"Applications built for Android are more accessible to users with visual, physical or age-related limitations when those users activate accessibility services and features on a device. These services make your application more accessible even if you do\u2026",
        "url":"guide/topics/ui/accessibility/apps.html",
        "image":"calendar.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Accessibility",
        "summary":"How to make your apps accessible to users with visual, physical, or other limitations. Robust support will increase your app's user base.",
        "url":"guide/topics/ui/accessibility/index.html",
        "image":"design/media/accessibility_contentdesc.png",
        "type":"guide",
        "keywords": ["accessibility"],
        "tags": ["accessibility"],
        "lang":"en"
      }, 
      {
        "title":"Building Accessibility Services",
        "summary":"An accessibility service is an application that provides user interface enhancements to assist users with disabilities, or who may temporarily be unable to fully interact with a device. For example, users who are driving, taking care of a young child \u2026",
        "url":"guide/topics/ui/accessibility/services.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Input Controls",
        "summary":"Input controls are the interactive components in your app&#39;s user interface. Android provides a wide variety of controls you can use in your UI, such as buttons, text fields, seek bars, checkboxes, zoom buttons, toggle buttons, and many more. Adding\u2026",
        "url":"guide/topics/ui/controls.html",
        "image":"images/ui/ui-controls.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Styles and Themes",
        "summary":"A style is a collection of properties that specify the look and format for a View or window. A style can specify properties such as height, padding, font color, font size, background color, and much more. A style is defined in an XML resource that is \u2026",
        "url":"guide/topics/ui/themes.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"UI Overview",
        "summary":"All user interface elements in an Android app are built using View and ViewGroup objects. A View is an object that draws something on the screen that the user can interact with. A ViewGroup is an object that holds other View (and ViewGroup) objects in\u2026",
        "url":"guide/topics/ui/overview.html",
        "image":"images/viewgroup.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"AdapterView",
        "summary":"Note that it is necessary to have the People._ID column in projection used with CursorAdapter or else you will get an exception. If, during the course of your application&#39;s life, you change the underlying data that is read by your Adapter, you should\u2026",
        "url":"guide/topics/ui/binding.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Grid View",
        "summary":"GridView is a ViewGroup that displays items in a two-dimensional, scrollable grid. The grid items are automatically inserted to the layout using a ListAdapter. For an introduction to how you can dynamically insert views using an adapter, read Building\u2026",
        "url":"guide/topics/ui/layout/gridview.html",
        "image":"images/ui/gridview.png",
        "type":"guide",
        "keywords": ["gridview"],
        "tags": ["gridview"],
        "lang":"en"
      }, 
      {
        "title":"Linear Layout",
        "summary":"LinearLayout is a view group that aligns all children in a single direction, vertically or horizontally. You can specify the layout direction with the LinearLayout are stacked one after the other, so a vertical list will only have one child per row, no\u2026",
        "url":"guide/topics/ui/layout/linear.html",
        "image":"images/ui/linearlayout.png",
        "type":"guide",
        "keywords": ["linearlayout"],
        "tags": ["linearlayout"],
        "lang":"en"
      }, 
      {
        "title":"List View",
        "summary":"ListView is a view group that displays a list of scrollable items. The list items are automatically inserted to the list using an Adapter that pulls content from a source such as an array or database query and converts each item result into a view that\u2026",
        "url":"guide/topics/ui/layout/listview.html",
        "image":"images/ui/listview.png",
        "type":"guide",
        "keywords": ["listview"],
        "tags": ["listview"],
        "lang":"en"
      }, 
      {
        "title":"Table",
        "summary":"TableLayout is a ViewGroup that displays child View elements in rows and columns. TableLayout positions its children into rows and columns. TableLayout containers do not display border lines for their rows, columns, or cells. The table will have as many\u2026",
        "url":"guide/topics/ui/layout/grid.html",
        "image":"images/ui/gridlayout.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Relative Layout",
        "summary":"RelativeLayout is a view group that displays child views in relative positions. The position of each view can be specified as relative to sibling elements (such as to the left-of or below another view) or in positions relative to the parent RelativeLayout\u2026",
        "url":"guide/topics/ui/layout/relative.html",
        "image":"images/ui/relativelayout.png",
        "type":"guide",
        "keywords": ["relativelayout"],
        "tags": ["relativelayout"],
        "lang":"en"
      }, 
      {
        "title":"Dialogs",
        "summary":"A dialog is a small window that prompts the user to make a decision or enter additional information. A dialog does not fill the screen and is normally used for modal events that require users to take an action before they can proceed. Dialog Design For\u2026",
        "url":"guide/topics/ui/dialogs.html",
        "image":"images/ui/dialogs.png",
        "type":"guide",
        "keywords": ["alertdialog","dialogfragment"],
        "tags": ["alertdialog","dialogfragment"],
        "lang":"en"
      }, 
      {
        "title":"Multi-Window Support",
        "summary":"New support in Android N for showing more than one app at a time.",
        "url":"guide/topics/ui/multi-window.html",
        "image":"images/android-7.0/mw-splitscreen.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Settings",
        "summary":"Applications often include settings that allow users to modify app features and behaviors. For example, some apps allow users to specify whether notifications are enabled or specify how often the application syncs data with the cloud. If you want to provide\u2026",
        "url":"guide/topics/ui/settings.html",
        "image":"images/ui/settings/settings.png",
        "type":"guide",
        "keywords": ["preference","preferenceactivity","preferencefragment"],
        "tags": ["preference","preferenceactivity","preferencefragment"],
        "lang":"en"
      }, 
      {
        "title":"Checkboxes",
        "summary":"Checkboxes allow the user to select one or more options from a set. Typically, you should present each checkbox option in a vertical list. To create each checkbox option, create a CheckBox in your layout. Because a set of checkbox options allows the user\u2026",
        "url":"guide/topics/ui/controls/checkbox.html",
        "image":"images/ui/checkboxes.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Toggle Buttons",
        "summary":"A toggle button allows the user to change a setting between two states. You can add a basic toggle button to your layout with the ToggleButton object. Android 4.0 (API level 14) introduces another kind of toggle button called a switch that provides a \u2026",
        "url":"guide/topics/ui/controls/togglebutton.html",
        "image":"images/ui/togglebutton.png",
        "type":"guide",
        "keywords": ["switch","togglebutton"],
        "tags": ["switch","togglebutton"],
        "lang":"en"
      }, 
      {
        "title":"Radio Buttons",
        "summary":"Radio buttons allow the user to select one option from a set. You should use radio buttons for optional sets that are mutually exclusive if you think that the user needs to see all available options side-by-side. If it&#39;s not necessary to show all \u2026",
        "url":"guide/topics/ui/controls/radiobutton.html",
        "image":"images/ui/radiobuttons.png",
        "type":"guide",
        "keywords": ["radiobutton","radiogroup"],
        "tags": ["radiobutton","radiogroup"],
        "lang":"en"
      }, 
      {
        "title":"Text Fields",
        "summary":"A text field allows the user to type text into your app. It can be either single line or multi-line. Touching a text field places the cursor and automatically displays the keyboard. In addition to typing, text fields allow for a variety of other activities\u2026",
        "url":"guide/topics/ui/controls/text.html",
        "image":"images/ui/edittext-noextract.png",
        "type":"guide",
        "keywords": ["edittext","autocompletetextview"],
        "tags": ["edittext","autocompletetextview"],
        "lang":"en"
      }, 
      {
        "title":"Spinners",
        "summary":"Spinners provide a quick way to select one value from a set. In the default state, a spinner shows its currently selected value. Touching the spinner displays a dropdown menu with all other available values, from which the user can select a new one. You\u2026",
        "url":"guide/topics/ui/controls/spinner.html",
        "image":"images/ui/spinner.png",
        "type":"guide",
        "keywords": ["adapterview","spinneradapter"],
        "tags": ["adapterview","spinneradapter"],
        "lang":"en"
      }, 
      {
        "title":"Pickers",
        "summary":"Android provides controls for the user to pick a time or pick a date as ready-to-use dialogs. Each picker provides controls for selecting each part of the time (hour, minute, AM&#47;PM) or date (month, day, year). Using these pickers helps ensure that\u2026",
        "url":"guide/topics/ui/controls/pickers.html",
        "image":"images/ui/pickers.png",
        "type":"guide",
        "keywords": ["datepicker","timepicker"],
        "tags": ["datepicker","timepicker"],
        "lang":"en"
      }, 
      {
        "title":"Buttons",
        "summary":"A button consists of text or an icon (or both text and an icon) that communicates what action occurs when the user touches it. Depending on whether you want a button with text, an icon, or both, you can create the button in your layout in three ways: \u2026",
        "url":"guide/topics/ui/controls/button.html",
        "image":"images/ui/button-types.png",
        "type":"guide",
        "keywords": ["button","imagebutton"],
        "tags": ["button","imagebutton"],
        "lang":"en"
      }, 
      {
        "title":"Notifications",
        "summary":"A notification is a message you can display to the user outside of your application&#39;s normal UI. When you tell the system to issue a notification, it first appears as an icon in the notification area . To see the details of the notification, the user\u2026",
        "url":"guide/topics/ui/notifiers/notifications.html",
        "image":"images/ui/notifications/notification_area.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Toasts",
        "summary":"A toast provides simple feedback about an operation in a small popup. It only fills the amount of space required for the message and the current activity remains visible and interactive. For example, navigating away from an email before you send it triggers\u2026",
        "url":"guide/topics/ui/notifiers/toasts.html",
        "image":"images/toast.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"User Interface",
        "summary":"As Ice Cream Sandwich rolls out to more devices, it&#39;s important that you begin to migrate your designs to the action bar in order to promote a consistent Android user experience. Ice Cream Sandwich (ICS) sports two new widgets that have been designed\u2026",
        "url":"guide/topics/ui/index.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Custom Components",
        "summary":"Android offers a sophisticated and powerful componentized model for building your UI, based on the fundamental layout classes: View and ViewGroup. To start with, the platform includes a variety of prebuilt View and ViewGroup subclasses \u2014 called widgets\u2026",
        "url":"guide/topics/ui/custom-components.html",
        "type":"guide",
        "keywords": ["view","widget"],
        "tags": ["view","widget"],
        "lang":"en"
      }, 
      {
        "title":"App Widget Host",
        "summary":"The Android Home screen available on most Android devices allows the user to embed app widgets for quick access to content. If you&#39;re building a Home replacement or a similar app, you can also allow the user to embed app widgets by implementing an\u2026",
        "url":"guide/topics/appwidgets/host.html",
        "type":"guide",
        "keywords": ["appwidgethost","home screen","launcher"],
        "tags": ["appwidgethost","homescreen","launcher"],
        "lang":"en"
      }, 
      {
        "title":"App Widgets",
        "summary":"App Widgets are miniature application views that can be embedded in other applications (such as the Home screen) and receive periodic updates. These views are referred to as Widgets in the user interface, and you can publish one with an App Widget provider\u2026",
        "url":"guide/topics/appwidgets/index.html",
        "image":"images/appwidgets/appwidget.png",
        "type":"guide",
        "keywords": ["home","appwidgetprovider"],
        "tags": ["home","appwidgetprovider"],
        "lang":"en"
      }, 
      {
        "title":"Device Administration",
        "summary":"Android 2.2 introduces support for enterprise applications by offering the Android Device Administration API. The Device Administration API provides device administration features at the system level. These APIs allow you to create security-aware applications\u2026",
        "url":"guide/topics/admin/device-admin.html",
        "image":"images/admin/device-admin-app.png",
        "type":"guide",
        "keywords": ["devicepolicymanager","policy","security"],
        "tags": ["devicepolicymanager","policy","security"],
        "lang":"en"
      }, 
      {
        "title":"Administration",
        "summary":"Android 4.0 (ICS) comes with a number of enhancements that make it easier for people to bring their personal Android devices to work. In this post, we\u2019re going to have a look at the key store functionality.\u2026",
        "url":"guide/topics/admin/index.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript",
        "summary":"RenderScript is a framework for running computationally intensive tasks at high performance on Android. RenderScript is primarily oriented for use with data-parallel computation, although serial workloads can benefit as well. The RenderScript runtime \u2026",
        "url":"guide/topics/renderscript/compute.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Advanced RenderScript",
        "summary":"Because applications that utilize RenderScript still run inside of the Android VM, you have access to all of the framework APIs that you are familiar with, but can utilize RenderScript when appropriate. To facilitate this interaction between the framework\u2026",
        "url":"guide/topics/renderscript/advanced.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript Conversion Functions",
        "summary":"The functions below convert from a numerical vector type to another, or from one color representation to another. Converts a vector from one numerical type to another. The conversion are done entry per entry. E.g calling a = convert_short3(b); is equivalent\u2026",
        "url":"guide/topics/renderscript/reference/rs_convert.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript Time Functions and Types",
        "summary":"The functions below can be used to tell the current clock time and the current system up time. It is not recommended to call these functions inside of a kernel. A typedef of: int\u00a0\u00a0\u00a0\u00a0\u00a0When compiling for 32 bits. A typedef of: long\u00a0\u00a0\u00a0\u00a0\u00a0When compiling for\u2026",
        "url":"guide/topics/renderscript/reference/rs_time.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript Runtime API Reference",
        "summary":"RenderScript is a high-performance runtime that provides compute operations at the native level. RenderScript code is compiled on devices at runtime to allow platform-independence as well. This reference documentation describes the RenderScript runtime\u2026",
        "url":"guide/topics/renderscript/reference/overview.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript Numerical Types",
        "summary":"RenderScript supports the following scalar numerical types: 8 bits 16 bits 32 bits 64 bits Integer: char, int8_t short, int16_t int32_t long, long long, int64_t Unsigned integer: uchar, uint8_t ushort, uint16_t uint, uint32_t ulong, uint64_t Floating \u2026",
        "url":"guide/topics/renderscript/reference/rs_value_types.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript Object Characteristics Functions",
        "summary":"The functions below can be used to query the characteristics of an Allocation, Element, or Sampler object. These objects are created from Java. You can&#39;t create them from a script. Allocations are the primary method used to pass data to and from RenderScript\u2026",
        "url":"guide/topics/renderscript/reference/rs_object_info.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript Kernel Invocation Functions and Types",
        "summary":"The rsForEach () function can be used to invoke the root kernel of a script. The other functions are used to get the characteristics of the invocation of an executing kernel, like dimensions and current indices. These functions take a rs_kernel_context\u2026",
        "url":"guide/topics/renderscript/reference/rs_for_each.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript Atomic Update Functions",
        "summary":"To update values shared between multiple threads, use the functions below. They ensure that the values are atomically updated, i.e. that the memory reads, the updates, and the memory writes are done in the right order. These functions are slower than \u2026",
        "url":"guide/topics/renderscript/reference/rs_atomic.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript Graphics Functions and Types",
        "summary":"The graphics subsystem of RenderScript was removed at API level 23. An enum with the following values:\u00a0\u00a0\u00a0\u00a0\u00a0 When compiling for 32 bits. API level 16 - 22 Deprecated. Do not use. An enum with the following values:\u00a0\u00a0\u00a0\u00a0\u00a0 When compiling for 32 bits. API level\u2026",
        "url":"guide/topics/renderscript/reference/rs_graphics.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript Allocation Data Access Functions",
        "summary":"The functions below can be used to get and set the cells that comprise an allocation. Copies the specified number of cells from one allocation to another. The two allocations must be different. Using this function to copy whithin the same allocation yields\u2026",
        "url":"guide/topics/renderscript/reference/rs_allocation_data.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript Object Types",
        "summary":"The types below are used to manipulate RenderScript objects like allocations, samplers, elements, and scripts. Most of these object are created using the Java RenderScript APIs. An opaque handle to a RenderScript allocation. See android.renderscript.Allocation\u2026",
        "url":"guide/topics/renderscript/reference/rs_object_types.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript Matrix Functions",
        "summary":"These functions let you manipulate square matrices of rank 2x2, 3x3, and 4x4. They are particularly useful for graphical transformations and are compatible with OpenGL. We use a zero-based index for rows and columns. E.g. the last element of a rs_matrix4x4\u2026",
        "url":"guide/topics/renderscript/reference/rs_matrix.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript Mathematical Constants and Functions",
        "summary":"The mathematical functions below can be applied to scalars and vectors. When applied to vectors, the returned value is a vector of the function applied to each entry of the input. For example: float3 a, b; &#47;&#47; The following call sets &#47;&#47;\u2026",
        "url":"guide/topics/renderscript/reference/rs_math.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript Vector Math Functions",
        "summary":"These functions interpret the input arguments as representation of vectors in n-dimensional space. The precision of the mathematical operations on 32 bit floats is affected by the pragmas rs_fp_relaxed and rs_fp_full. See Mathematical Constants and Functions\u2026",
        "url":"guide/topics/renderscript/reference/rs_vector_math.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript Index",
        "summary":"",
        "url":"guide/topics/renderscript/reference/index.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript Quaternion Functions",
        "summary":"The following functions manipulate quaternions. Adds two quaternions, i.e. *q += *rhs; Conjugates the quaternion. Returns the dot product of two quaternions. Computes a rotation matrix from the normalized quaternion. Loads a quaternion that represents\u2026",
        "url":"guide/topics/renderscript/reference/rs_quaternion.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript Input&#47;Output Functions",
        "summary":"These functions are used to: Receive a new set of contents from the queue. Send the contents of the Allocation to the queue. Sends a message back to the client. This call does not block. It returns true if the message was sent and false if the message\u2026",
        "url":"guide/topics/renderscript/reference/rs_io.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"RenderScript Debugging Functions",
        "summary":"The functions below are intended to be used during application developement. They should not be used in shipping applications. This function prints a message to the standard log, followed by the provided values. This function is intended for debugging\u2026",
        "url":"guide/topics/renderscript/reference/rs_debug.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Computation",
        "summary":"It\u2019s been a year since the last blog post on RenderScript, and with the release of Android 4.2, it\u2019s a good time to talk about the performance work that we\u2019ve done since then. One of the major goals of this past year was to improve the performance of \u2026",
        "url":"guide/topics/renderscript/index.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Motion Sensors",
        "summary":"The Android platform provides several sensors that let you monitor the motion of a device. Two of these sensors are always hardware-based (the accelerometer and gyroscope), and three of these sensors can be either hardware-based or software-based (the\u2026",
        "url":"guide/topics/sensors/sensors_motion.html",
        "image":"images/axis_globe.png",
        "type":"guide",
        "keywords": ["sensorevent","accelerometer","gyroscope","gravity","rotation","stepcounter"],
        "tags": ["sensorevent","accelerometer","gyroscope","gravity","rotation","stepcounter"],
        "lang":"en"
      }, 
      {
        "title":"Environment Sensors",
        "summary":"The Android platform provides four sensors that let you monitor various environmental properties. You can use these sensors to monitor relative ambient humidity, illuminance, ambient pressure, and ambient temperature near an Android-powered device. All\u2026",
        "url":"guide/topics/sensors/sensors_environment.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Sensors Overview",
        "summary":"Most Android-powered devices have built-in sensors that measure motion, orientation, and various environmental conditions. These sensors are capable of providing raw data with high precision and accuracy, and are useful if you want to monitor three-dimensional\u2026",
        "url":"guide/topics/sensors/sensors_overview.html",
        "image":"images/axis_device.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Position Sensors",
        "summary":"The Android platform provides two sensors that let you determine the position of a device: the geomagnetic field sensor and the accelerometer. The Android platform also provides a sensor that lets you determine how close the face of a device is to an \u2026",
        "url":"guide/topics/sensors/sensors_position.html",
        "type":"guide",
        "keywords": ["sensorevent","orientation","proximity"],
        "tags": ["sensorevent","orientation","proximity"],
        "lang":"en"
      }, 
      {
        "title":"Location and Sensors APIs",
        "summary":"However, there\u2019s a new wrinkle: recently, a few devices have shipped (see here and here) that run Android on screens that are naturally landscape in their orientation. That is, when held in the default position, the screens are wider than they are tall\u2026",
        "url":"guide/topics/sensors/index.html",
        "type":"guide",
        "keywords": ["location","sensors"],
        "tags": ["location","sensors"],
        "lang":"en"
      }, 
      {
        "title":"Normal Permissions",
        "summary":"Many permissions are designated as PROTECTION_NORMAL, which indicates that there&#39;s no great risk to the user&#39;s privacy or security in letting apps have those permissions. For example, users would reasonably want to know whether an app can read\u2026",
        "url":"guide/topics/security/normal-permissions.html",
        "type":"guide",
        "keywords": ["permissions","normal"],
        "tags": ["permissions","normal"],
        "lang":"en"
      }, 
      {
        "title":"System Permissions",
        "summary":"Permissions Google I&#47;O 2015\u2014Android M Permissions: Best Practices for Developers Android is a privilege-separated operating system, in which each application runs with a distinct system identity (Linux user ID and group ID). Parts of the system are\u2026",
        "url":"guide/topics/security/permissions.html",
        "type":"guide",
        "keywords": ["permissions"],
        "tags": ["permissions"],
        "lang":"en"
      }, 
      {
        "title":"Security",
        "summary":"",
        "url":"guide/topics/security/index.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;grant-uri-permission&gt;",
        "summary":"Specifies which data subsets of the parent content provider permission can be granted for. Data subsets are indicated by the path part of a true&quot;, permission can be granted for any the data under the provider&#39;s purview. However, if that attribute\u2026",
        "url":"guide/topics/manifest/grant-uri-permission-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;compatible-screens&gt;",
        "summary":"Specifies each screen configuration with which the application is compatible. Only one instance of the &lt;compatible-screens&gt; element is allowed in the manifest, but it can contain multiple &lt;screen&gt; elements. Each &lt;screen&gt; element specifies\u2026",
        "url":"guide/topics/manifest/compatible-screens-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;supports-screens&gt;",
        "summary":"Lets you specify the screen sizes your application supports and enable screen compatibility mode for screens larger than what your application supports. It&#39;s important that you always use this element in your application to specify the screen sizes\u2026",
        "url":"guide/topics/manifest/supports-screens-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;supports-gl-texture&gt;",
        "summary":"Declares a single GL texture compression format that is supported by the application. An application &quot;supports&quot; a GL texture compression format if it is capable of providing texture assets that are compressed in that format, once the application\u2026",
        "url":"guide/topics/manifest/supports-gl-texture-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;provider&gt;",
        "summary":"Declares a content provider component. A content provider is a subclass of ContentProvider that supplies structured access to data managed by the application. All content providers in your application must be defined in a query(), which among other arguments\u2026",
        "url":"guide/topics/manifest/provider-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;service&gt;",
        "summary":"Declares a service (a Service subclass) as one of the application&#39;s components. Unlike activities, services lack a visual user interface. They&#39;re used to implement long-running background operations or a rich communications API that can be called\u2026",
        "url":"guide/topics/manifest/service-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;uses-library&gt;",
        "summary":"All of the android packages (such as app, content, view, and widget) are in the default library that all applications are automatically linked against. However, some packages (such as maps) are in separate libraries that are not automatically linked. \u2026",
        "url":"guide/topics/manifest/uses-library-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;permission-tree&gt;",
        "summary":"Declares the base name for a tree of permissions. The application takes ownership of all names within the tree. It can dynamically add new permissions to the tree by calling addPermission(). Names within the tree are separated by periods (&#39;taxes, \u2026",
        "url":"guide/topics/manifest/permission-tree-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;action&gt;",
        "summary":"Adds an action to an intent filter. An &lt;intent-filter&gt; element must contain one or more {@code } elements. If it doesn&#39;t contain any, no Intent objects will get through the filter. See Intents and Intent Filters for details on intent filters\u2026",
        "url":"guide/topics/manifest/action-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;intent-filter&gt;",
        "summary":"Specifies the types of intents that an activity, service, or broadcast receiver can respond to. An intent filter declares the capabilities of its parent component \u2014 what an activity or service can do and what types of broadcasts a receiver can handle.\u2026",
        "url":"guide/topics/manifest/intent-filter-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;activity-alias&gt;",
        "summary":"An alias for an activity, named by the targetActivity attribute. The target must be in the same application as the alias and it must be declared before the alias in the manifest. The alias presents the target activity as a independent entity. It can have\u2026",
        "url":"guide/topics/manifest/activity-alias-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;uses-permission&gt;",
        "summary":"Requests a permission that the application must be granted in order for it to operate correctly. Permissions are granted by the user when the application is installed (on devices running Android 5.1 and lower) or while the app is running (on devices running\u2026",
        "url":"guide/topics/manifest/uses-permission-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;meta-data&gt;",
        "summary":"A name-value pair for an item of additional, arbitrary data that can be supplied to the parent component. A component element can contain any number of Bundle object and made available to the component as the metaData field. Ordinary values are specified\u2026",
        "url":"guide/topics/manifest/meta-data-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;uses-permission-sdk-23&gt;",
        "summary":"Specifies that an app wants a particular permission, but only if the app is running on a device with API level 23 or higher. If the device is running API level 22 or lower, the app does not have the specified permission. This element is useful when you\u2026",
        "url":"guide/topics/manifest/uses-permission-sdk-23-element.html",
        "type":"guide",
        "keywords": ["uses-permission-sdk-23","permissions","uses-permission-sdk23"],
        "tags": ["uses-permission-sdk-23","permissions","uses-permission-sdk23"],
        "lang":"en"
      }, 
      {
        "title":"&lt;uses-configuration&gt;",
        "summary":"Indicates what hardware and software features the application requires. For example, an application might specify that it requires a physical keyboard or a particular navigation device, like a trackball. The specification is used to avoid installing the\u2026",
        "url":"guide/topics/manifest/uses-configuration-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;instrumentation&gt;",
        "summary":"Declares an Instrumentation class that enables you to monitor an application&#39;s interaction with the system. The Instrumentation object is instantiated before any of the application&#39;s components.\u2026",
        "url":"guide/topics/manifest/instrumentation-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;activity&gt;",
        "summary":"Declares an activity (an Activity subclass) that implements part of the application&#39;s visual user interface. All activities must be represented by {@code } elements in the manifest file. Any that are not declared there will not be seen by the system\u2026",
        "url":"guide/topics/manifest/activity-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;category&gt;",
        "summary":"Adds a category name to an intent filter. See Intents and Intent Filters for details on intent filters and the role of category specifications within a filter.\u2026",
        "url":"guide/topics/manifest/category-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;permission-group&gt;",
        "summary":"Declares a name for a logical grouping of related permissions. Individual permission join the group through the permissionGroup attribute of the &lt;permission&gt; element. Members of a group are presented together in the user interface. Note that this\u2026",
        "url":"guide/topics/manifest/permission-group-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;manifest&gt;",
        "summary":"The root element of the AndroidManifest.xml file. It must contain an &lt;application&gt; element and specify package attributes.\u2026",
        "url":"guide/topics/manifest/manifest-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"App Manifest",
        "summary":"The manifest file provides essential information about your app to the Android system, which the system must have before it can run any of the app&#39;s code.\u2026",
        "url":"guide/topics/manifest/manifest-intro.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;permission&gt;",
        "summary":"Declares a security permission that can be used to limit access to specific components or features of this or other applications. See the Permissions section in the introduction, and the Security and Permissions document for more information on how permissions\u2026",
        "url":"guide/topics/manifest/permission-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;path-permission&gt;",
        "summary":"Defines the path and required permissions for a specific subset of data within a content provider. This element can be specified multiple times to supply multiple paths.\u2026",
        "url":"guide/topics/manifest/path-permission-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;application&gt;",
        "summary":"The declaration of the application. This element contains subelements that declare each of the application&#39;s components and has attributes that can affect all the components. Many of these attributes (such as icon, label, permission, process, taskAffinity\u2026",
        "url":"guide/topics/manifest/application-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;uses-sdk&gt;",
        "summary":"Lets you express an application&#39;s compatibility with one or more versions of the Android platform, by means of an API Level integer. The API Level expressed by an application will be compared to the API Level of a given Android system, which may vary\u2026",
        "url":"guide/topics/manifest/uses-sdk-element.html",
        "type":"guide",
        "keywords": ["api levels","sdk version","minsdkversion","targetsdkversion","maxsdkversion"],
        "tags": ["apilevels","sdkversion","minsdkversion","targetsdkversion","maxsdkversion"],
        "lang":"en"
      }, 
      {
        "title":"&lt;data&gt;",
        "summary":"Adds a data specification to an intent filter. The specification can be just a data type (the mimeType attribute), just a URI, or both a data type and a URI. A URI is specified by separate attributes for each of its parts: port attribute and all the path\u2026",
        "url":"guide/topics/manifest/data-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;receiver&gt;",
        "summary":"Declares a broadcast receiver (a BroadcastReceiver subclass) as one of the application&#39;s components. Broadcast receivers enable applications to receive intents that are broadcast by the system or by other applications, even when other components of\u2026",
        "url":"guide/topics/manifest/receiver-element.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"&lt;uses-feature&gt;",
        "summary":"Declares a single hardware or software feature that is used by the application. The purpose of a &lt;uses-feature&gt; declaration is to inform any external entity of the set of hardware and software features on which your application depends. The element\u2026",
        "url":"guide/topics/manifest/uses-feature-element.html",
        "type":"guide",
        "keywords": ["filtering","features","google play filters","permissions"],
        "tags": ["filtering","features","googleplayfilters","permissions"],
        "lang":"en"
      }, 
      {
        "title":"Calendar Provider",
        "summary":"The Calendar Provider is a repository for a user&#39;s calendar events. The Calendar Provider API allows you to perform query, insert, update, and delete operations on calendars, events, attendees, reminders, and so on. The Calender Provider API can be\u2026",
        "url":"guide/topics/providers/calendar-provider.html",
        "image":"images/providers/datamodel.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Content Providers",
        "summary":"Content providers manage access to a structured set of data. They encapsulate the data, and provide mechanisms for defining data security. Content providers are the standard interface that connects data in one process with code running in another process\u2026",
        "url":"guide/topics/providers/content-providers.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Contacts Provider",
        "summary":"The Contacts Provider is a powerful and flexible Android component that manages the device&#39;s central repository of data about people. The Contacts Provider is the source of data you see in the device&#39;s contacts application, and you can also access\u2026",
        "url":"guide/topics/providers/contacts-provider.html",
        "image":"images/providers/contacts_structure.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating a Content Provider",
        "summary":"A content provider manages access to a central repository of data. You implement a provider as one or more classes in an Android application, along with elements in the manifest file. One of your classes implements a subclass ContentProvider, which is\u2026",
        "url":"guide/topics/providers/content-provider-creating.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Content Provider Basics",
        "summary":"A content provider manages access to a central repository of data. A provider is part of an Android application, which often provides its own UI for working with the data. However, content providers are primarily intended to be used by other applications\u2026",
        "url":"guide/topics/providers/content-provider-basics.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Storage Access Framework",
        "summary":"Android 4.4 (API level 19) introduces the Storage Access Framework (SAF). The SAF makes it simple for users to browse and open documents, images, and other files across all of their their preferred document storage providers. A standard, easy-to-use UI\u2026",
        "url":"guide/topics/providers/document-provider.html",
        "image":"images/providers/storage_datamodel.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"NFC Basics",
        "summary":"This document describes the basic NFC tasks you perform in Android. It explains how to send and receive NFC data in the form of NDEF messages and describes the Android framework APIs that support these features. For more advanced topics, including a discussion\u2026",
        "url":"guide/topics/connectivity/nfc/nfc.html",
        "image":"images/nfc_tag_dispatch.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Advanced NFC",
        "summary":"This document describes advanced NFC topics, such as working with various tag technologies, writing to NFC tags, and foreground dispatching, which allows an application in the foreground to handle intents even when other applications filter for the same\u2026",
        "url":"guide/topics/connectivity/nfc/advanced-nfc.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Host-based Card Emulation",
        "summary":"Many Android-powered devices that offer NFC functionality already support NFC card emulation. In most cases, the card is emulated by a separate chip in the device, called a secure element . Many SIM cards provided by wireless carriers also contain a secure\u2026",
        "url":"guide/topics/connectivity/nfc/hce.html",
        "image":"images/nfc/secure-element.png",
        "type":"guide",
        "keywords": ["host card emulation","hce","hostapduservice","offhostapduservice","tap and pay"],
        "tags": ["hostcardemulation","hce","hostapduservice","offhostapduservice","tapandpay"],
        "lang":"en"
      }, 
      {
        "title":"Near Field Communication",
        "summary":"Near Field Communication (NFC) is a set of short-range wireless technologies, typically requiring a distance of 4cm or less to initiate a connection. NFC allows you to share small payloads of data between an NFC tag and an Android-powered device, or between\u2026",
        "url":"guide/topics/connectivity/nfc/index.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Session Initiation Protocol",
        "summary":"Android provides an API that supports the Session Initiation Protocol (SIP). This lets you add SIP-based internet telephony features to your applications. Android includes a full SIP protocol stack and integrated call management services that let applications\u2026",
        "url":"guide/topics/connectivity/sip.html",
        "type":"guide",
        "keywords": ["sipmanager","sipprofile","sipaudiocall","telephony"],
        "tags": ["sipmanager","sipprofile","sipaudiocall","telephony"],
        "lang":"en"
      }, 
      {
        "title":"USB Accessory",
        "summary":"USB accessory mode allows users to connect USB host hardware specifically designed for Android-powered devices. The accessories must adhere to the Android accessory protocol outlined in the Android Accessory Development Kit documentation. This allows \u2026",
        "url":"guide/topics/connectivity/usb/accessory.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"USB Host",
        "summary":"When your Android-powered device is in USB host mode, it acts as the USB host, powers the bus, and enumerates connected USB devices. USB host mode is supported in Android 3.1 and higher. Before you begin, it is important to understand the classes that\u2026",
        "url":"guide/topics/connectivity/usb/host.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"USB Host and Accessory",
        "summary":"Android supports a variety of USB peripherals and Android USB accessories (hardware that implements the Android accessory protocol) through two modes: USB accessory and USB host. In USB accessory mode, the external USB hardware act as the USB hosts. Examples\u2026",
        "url":"guide/topics/connectivity/usb/index.html",
        "image":"images/usb-host-accessory.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Wi-Fi Peer-to-Peer",
        "summary":"Wi-Fi peer-to-peer (P2P) allows Android 4.0 (API level 14) or later devices with the appropriate hardware to connect directly to each other via Wi-Fi without an intermediate access point (Android&#39;s Wi-Fi P2P framework complies with the Wi-Fi Alliance\u2026",
        "url":"guide/topics/connectivity/wifip2p.html",
        "type":"guide",
        "keywords": ["wireless","wifip2pmanager","wi-fi direct","wifi direct","p2p","wi-fi p2p","wifi p2p"],
        "tags": ["wireless","wifip2pmanager","wi-fidirect","wifidirect","p2p","wi-fip2p","wifip2p"],
        "lang":"en"
      }, 
      {
        "title":"Bluetooth Low Energy",
        "summary":"DevBytes: Bluetooth Low Energy API Android 4.3 (API Level 18) introduces built-in platform support for Bluetooth Low Energy in the central role and provides APIs that apps can use to discover devices, query for services, and read&#47;write characteristics\u2026",
        "url":"guide/topics/connectivity/bluetooth-le.html",
        "type":"guide",
        "keywords": ["wireless","bluetoothadapter","bluetoothdevice","ble","btle"],
        "tags": ["wireless","bluetoothadapter","bluetoothdevice","ble","btle"],
        "lang":"en"
      }, 
      {
        "title":"Bluetooth",
        "summary":"The Android platform includes support for the Bluetooth network stack, which allows a device to wirelessly exchange data with other Bluetooth devices. The application framework provides access to the Bluetooth functionality through the Android Bluetooth\u2026",
        "url":"guide/topics/connectivity/bluetooth.html",
        "image":"images/bt_enable_request.png",
        "type":"guide",
        "keywords": ["wireless","bluetoothadapter","bluetoothdevice"],
        "tags": ["wireless","bluetoothadapter","bluetoothdevice"],
        "lang":"en"
      }, 
      {
        "title":"Connectivity",
        "summary":"This class demonstrates the best practices for scheduling and executing downloads using techniques such as caching, polling, and prefetching. You will learn how the power-use profile of the wireless radio can affect your choices on when, what, and how\u2026",
        "url":"guide/topics/connectivity/index.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Drawable Animation",
        "summary":"Drawable animation lets you load a series of Drawable resources one after another to create an animation. This is a traditional animation in the sense that it is created with a sequence of different images, played in order, like a roll of film. The AnimationDrawable\u2026",
        "url":"guide/topics/graphics/drawable-animation.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Hardware Acceleration",
        "summary":"Beginning in Android 3.0 (API level 11), the Android 2D rendering pipeline supports hardware acceleration, meaning that all drawing operations that are performed on a View&#39;s canvas use the GPU. Because of the increased resources required to enable\u2026",
        "url":"guide/topics/graphics/hardware-accel.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"OpenGL ES",
        "summary":"Android includes support for high performance 2D and 3D graphics with the Open Graphics Library (OpenGL\u00ae), specifically, the OpenGL ES API. OpenGL is a cross-platform graphics API that specifies a standard software interface for 3D graphics processing\u2026",
        "url":"guide/topics/graphics/opengl.html",
        "image":"images/opengl/coordinates.png",
        "type":"guide",
        "keywords": ["games"],
        "tags": ["games"],
        "lang":"en"
      }, 
      {
        "title":"View Animation",
        "summary":"You can use the view animation system to perform tweened animation on Views. Tween animation calculates the animation with information such as the start point, end point, size, rotation, and other common aspects of an animation. A tween animation can \u2026",
        "url":"guide/topics/graphics/view-animation.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Animation and Graphics Overview",
        "summary":"Android provides a variety of powerful APIs for applying animation to UI elements and drawing custom 2D and 3D graphics. The sections below provide an overview of the APIs and system capabilities available and help you decide with approach is best for\u2026",
        "url":"guide/topics/graphics/overview.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Animation and Graphics",
        "summary":"Earlier this year, Android 3.0 launched with a new 2D rendering pipeline designed to support hardware acceleration on tablets. With this new pipeline, all drawing operations performed by the UI toolkit are carried out using the GPU. You\u2019ll be happy to\u2026",
        "url":"guide/topics/graphics/index.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Canvas and Drawables",
        "summary":"The Android framework APIs provides a set of 2D-drawing APIs that allow you to render your own custom graphics onto a canvas or to modify existing Views to customize their look and feel. When drawing 2D graphics, you&#39;ll typically do so in one of two\u2026",
        "url":"guide/topics/graphics/2d-graphics.html",
        "image":"images/ninepatch_raw.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Property Animation",
        "summary":"The property animation system is a robust framework that allows you to animate almost anything. You can define an animation to change any object property over time, regardless of whether it draws to the screen or not. A property animation changes a property\u2026",
        "url":"guide/topics/graphics/prop-animation.html",
        "image":"images/animation/animation-linear.png",
        "type":"guide",
        "keywords": ["valueanimator","objectanimator","layouttransition","viewpropertyanimator"],
        "tags": ["valueanimator","objectanimator","layouttransition","viewpropertyanimator"],
        "lang":"en"
      }, 
      {
        "title":"Copy and Paste",
        "summary":"Android provides a powerful clipboard-based framework for copying and pasting. It supports both simple and complex data types, including text strings, complex data structures, text and binary stream data, and even application assets. Simple text data \u2026",
        "url":"guide/topics/text/copy-paste.html",
        "image":"images/ui/clipboard/copy_paste_framework.png",
        "type":"guide",
        "keywords": ["clipboardmanager","clipdata","input"],
        "tags": ["clipboardmanager","clipdata","input"],
        "lang":"en"
      }, 
      {
        "title":"Spelling Checker Framework",
        "summary":"The Android platform offers a spelling checker framework that lets you implement and access spell checking in your application. The framework is one of the Text Service APIs offered by the Android platform. To use the framework in your app, you create\u2026",
        "url":"guide/topics/text/spell-checker-framework.html",
        "image":"resources/articles/images/spellcheck_lifecycle.png",
        "type":"guide",
        "keywords": ["input","spellcheckerservice"],
        "tags": ["input","spellcheckerservice"],
        "lang":"en"
      }, 
      {
        "title":"Creating an Input Method",
        "summary":"An input method editor (IME) is a user control that enables users to enter text. Android provides an extensible input-method framework that allows applications to provide users alternative input methods, such as on-screen keyboards or even speech input\u2026",
        "url":"guide/topics/text/creating-input-method.html",
        "image":"resources/articles/images/inputmethod_lifecycle_image.png",
        "type":"guide",
        "keywords": ["ime","keyboard","inputmethodservice"],
        "tags": ["ime","keyboard","inputmethodservice"],
        "lang":"en"
      }, 
      {
        "title":"Text and Input",
        "summary":"A new feature available in Android 4.0 is voice typing: the difference for users is that the recognition results appear in the text box while they are still speaking. If you are an IME developer, you can easily integrate with voice typing. We believe \u2026",
        "url":"guide/topics/text/index.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Bound Services",
        "summary":"A bound service is the server in a client-server interface. A bound service allows components (such as activities) to bind to the service, send requests, receive responses, and even perform interprocess communication (IPC). A bound service typically lives\u2026",
        "url":"guide/components/bound-services.html",
        "image":"images/fundamentals/service_binding_tree_lifecycle.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Processes and Threads",
        "summary":"When an application component starts and the application does not have any other components running, the Android system starts a new Linux process for the application with a single thread of execution. By default, all components of the same application\u2026",
        "url":"guide/components/processes-and-threads.html",
        "type":"guide",
        "keywords": ["lifecycle","background"],
        "tags": ["lifecycle","background"],
        "lang":"en"
      }, 
      {
        "title":"Overview Screen",
        "summary":"The overview screen (also referred to as the recents screen, recent task list, or recent apps) is a system-level UI that lists recently accessed activities and tasks . The user can navigate through the list and select a task to resume, or the user can\u2026",
        "url":"guide/components/recents.html",
        "image":"images/components/recents.png",
        "type":"guide",
        "keywords": ["recents","overview"],
        "tags": ["recents","overview"],
        "lang":"en"
      }, 
      {
        "title":"Loaders",
        "summary":"Introduced in Android 3.0, loaders make it easy to asynchronously load data in an activity or fragment. Loaders have these characteristics: There are multiple classes and interfaces that may be involved in using loaders in an application. They are summarized\u2026",
        "url":"guide/components/loaders.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Intents and Intent Filters",
        "summary":"An Intent is a messaging object you can use to request an action from another app component . Although intents facilitate communication between components in several ways, there are three fundamental use-cases: An Activity represents a single screen in\u2026",
        "url":"guide/components/intents-filters.html",
        "image":"images/components/intent-filters@2x.png",
        "type":"guide",
        "keywords": ["intentfilter"],
        "tags": ["intentfilter"],
        "lang":"en"
      }, 
      {
        "title":"Common Intents",
        "summary":"An intent allows you to start an activity in another app by describing a simple action you&#39;d like to perform (such as &quot;view a map&quot; or &quot;take a picture&quot;) in an Intent object. This type of intent is called an implicit intent because\u2026",
        "url":"guide/components/intents-common.html",
        "image":"guide/components/images/voice-icon.png",
        "type":"guide",
        "keywords": ["intentfilter"],
        "tags": ["intentfilter"],
        "lang":"en"
      }, 
      {
        "title":"Application Fundamentals",
        "summary":"Android apps are written in the Java programming language. The Android SDK tools compile your code\u2014along with any data and resource files\u2014into an APK: an Android package , which is an archive file with an apk suffix. One APK file contains all the contents\u2026",
        "url":"guide/components/fundamentals.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Activities",
        "summary":"An Activity is an application component that provides a screen with which users can interact in order to do something, such as dial the phone, take a photo, send an email, or view a map. Each activity is given a window in which to draw its user interface\u2026",
        "url":"guide/components/activities.html",
        "image":"images/activity_lifecycle.png",
        "type":"guide",
        "keywords": ["activity","intent"],
        "tags": ["activity","intent"],
        "lang":"en"
      }, 
      {
        "title":"Tasks and Back Stack",
        "summary":"An application usually contains multiple activities . Each activity should be designed around a specific kind of action the user can perform and can start other activities. For example, an email application might have one activity to show a list of new\u2026",
        "url":"guide/components/tasks-and-back-stack.html",
        "image":"images/fundamentals/diagram_backstack.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Fragments",
        "summary":"A Fragment represents a behavior or a portion of user interface in an Activity. You can combine multiple fragments in a single activity to build a multi-pane UI and reuse a fragment in multiple activities. You can think of a fragment as a modular section\u2026",
        "url":"guide/components/fragments.html",
        "image":"images/fundamentals/fragments.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"App Components",
        "summary":"Android's application framework lets you create rich and innovative apps using a set of reusable components. This section explains how you can build the components that define the building blocks of your app and how to connect them together using intents.",
        "url":"guide/components/index.html",
        "image":"images/develop/app_components.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Services",
        "summary":"A Service is an application component that can perform long-running operations in the background and does not provide a user interface. Another application component can start a service and it will continue to run in the background even if the user switches\u2026",
        "url":"guide/components/services.html",
        "image":"images/service_lifecycle.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Android Interface Definition Language (AIDL)",
        "summary":"AIDL (Android Interface Definition Language) is similar to other IDLs you might have worked with. It allows you to define the programming interface that both the client and service agree upon in order to communicate with each other using interprocess \u2026",
        "url":"guide/components/aidl.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Introduction to Android",
        "summary":"Android provides a rich application framework that allows you to build innovative apps and games for mobile devices in a Java language environment. The documents listed in the left navigation provide details about how to build apps using Android&#39;s\u2026",
        "url":"guide/index.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Designing for Seamlessness",
        "summary":"Even if your application is fast and responsive, certain design decisions can still cause problems for users \u2014 because of unplanned interactions with other applications or dialogs, inadvertent loss of data, unintended blocking, and so on. To avoid these\u2026",
        "url":"guide/practices/app-design/seamlessness.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Application Design Goals",
        "summary":"When learning how to build applications on a new platform, you first learn what APIs are available and how to use them. Later, you learn the nuances of the platform. Put another way: first you learn how you can build applications; later, you learn how\u2026",
        "url":"guide/practices/app-design/index.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Supporting Tablets and Handsets",
        "summary":"The Android platform runs on a variety of screen sizes and the system gracefully resizes your application&#39;s UI to fit each one. Typically, all you need to do is design your UI to be flexible and optimize some elements for different sizes by providing\u2026",
        "url":"guide/practices/tablets-and-handsets.html",
        "image":"images/fundamentals/fragments.png",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Verifying App Behavior on the Android Runtime (ART)",
        "summary":"The Android runtime (ART) is the default runtime for devices running Android 5.0 (API level 21) and higher. This runtime offers a number of features that improve performance and smoothness of the Android platform and apps. You can find more information\u2026",
        "url":"guide/practices/verifying-apps-art.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Supporting Multiple Screens",
        "summary":"Managing UIs for the best display on multiple screen sizes.",
        "url":"guide/practices/screens_support.html",
        "image":"images/screens_support/screens-ranges.png",
        "type":"guide",
        "keywords": [],
        "tags": ["multiplescreens"],
        "lang":"en"
      }, 
      {
        "title":"Resources",
        "summary":"These resources will help you get started with Android and Google Play. \u3002",
        "url":"resources.html",
        "type":"guide",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }
];

var SAMPLES_RESOURCES = [
      {
        "title":"Content",
        "summary":"",
        "url":"samples/content.html",
        "type":"samples",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Renderscript",
        "summary":"",
        "url":"samples/renderscript.html",
        "type":"samples",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"UI",
        "summary":"",
        "url":"samples/ui.html",
        "type":"samples",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Testing",
        "summary":"",
        "url":"samples/testing.html",
        "type":"samples",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"System",
        "summary":"",
        "url":"samples/system.html",
        "type":"samples",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Media",
        "summary":"",
        "url":"samples/media.html",
        "type":"samples",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Connectivity",
        "summary":"",
        "url":"samples/connectivity.html",
        "type":"samples",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Views",
        "summary":"",
        "url":"samples/views.html",
        "type":"samples",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Wearable",
        "summary":"",
        "url":"samples/wearable.html",
        "type":"samples",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Notification",
        "summary":"",
        "url":"samples/notification.html",
        "type":"samples",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Sensors",
        "summary":"",
        "url":"samples/sensors.html",
        "type":"samples",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Admin",
        "summary":"",
        "url":"samples/admin.html",
        "type":"samples",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Input",
        "summary":"",
        "url":"samples/input.html",
        "type":"samples",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Security",
        "summary":"",
        "url":"samples/security.html",
        "type":"samples",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"What&#39;s New",
        "summary":"The following code samples were recently published. You can download them in the Android SDK Manager under the Samples for SDK component for Android 6.0 (API 23). This sample demonstrates how to use the NotificationManager to tell you how many notifications\u2026",
        "url":"samples/new/index.html",
        "image":"images/cards/samples-new_2x.png",
        "type":"samples",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Background",
        "summary":"",
        "url":"samples/background.html",
        "type":"samples",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Samples",
        "summary":"Welcome to code samples for Android developers. Here you can browse sample code and learn how to build different components for your applications. Use the categories on the left to browse the available samples. Each sample is a fully functioning Android\u2026",
        "url":"samples/index.html",
        "type":"samples",
        "keywords": ["examples","code"],
        "tags": ["examples","code"],
        "lang":"en"
      }
];

var TOOLS_RESOURCES = [
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please go to System Requirements .\u2026",
        "url":"sdk/1.1_r1/requirements.html",
        "type":"tools",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please go to Installing the Android SDK .\u2026",
        "url":"sdk/1.1_r1/installing.html",
        "type":"tools",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please go to System Requirements .\u2026",
        "url":"sdk/1.0_r2/requirements.html",
        "type":"tools",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please go to Installing the Android SDK .\u2026",
        "url":"sdk/1.0_r2/installing.html",
        "type":"tools",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please go to System Requirements .\u2026",
        "url":"sdk/1.5_r2/requirements.html",
        "type":"tools",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please go to Installing the Android SDK .\u2026",
        "url":"sdk/1.5_r2/installing.html",
        "type":"tools",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please go to System Requirements .\u2026",
        "url":"sdk/1.6_r1/requirements.html",
        "type":"tools",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please go to Installing the Android SDK .\u2026",
        "url":"sdk/1.6_r1/installing.html",
        "type":"tools",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please go to System Requirements .\u2026",
        "url":"sdk/1.5_r3/requirements.html",
        "type":"tools",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please go to Installing the Android SDK .\u2026",
        "url":"sdk/1.5_r3/installing.html",
        "type":"tools",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please go to System Requirements .\u2026",
        "url":"sdk/1.0_r1/requirements.html",
        "type":"tools",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please go to Installing the Android SDK .\u2026",
        "url":"sdk/1.0_r1/installing.html",
        "type":"tools",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please go to System Requirements .\u2026",
        "url":"sdk/1.5_r1/requirements.html",
        "type":"tools",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"",
        "summary":"You should have already been redirected by your browser. Please go to Installing the Android SDK .\u2026",
        "url":"sdk/1.5_r1/installing.html",
        "type":"tools",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }
];

var TRAINING_RESOURCES = [
      {
        "title":"Best Practices for Permissions and Identifiers",
        "summary":"The articles below highlight key guidelines for using permissions and identifiers properly in your apps.\u2026",
        "url":"training/best-permissions-ids.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Receiving Simple Data from Other Apps",
        "summary":"Just as your application can send data to other applications, so too can it easily receive data from applications. Think about how users interact with your application, and what data types you want to receive from other applications. For example, a social\u2026",
        "url":"training/sharing/receive.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Adding an Easy Share Action",
        "summary":"Implementing an effective and user friendly share action in your ActionBar is made even easier with the introduction of ActionProvider in Android 4.0 (API Level 14). An ActionProvider, once attached to a menu item in the action bar, handles both the appearance\u2026",
        "url":"training/sharing/shareaction.html",
        "image":"images/ui/actionbar-shareaction.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Sending Simple Data to Other Apps",
        "summary":"When you construct an intent, you must specify the action you want the intent to &quot;trigger.&quot; Android defines several actions, including ACTION_SEND which, as you can probably guess, indicates that the intent is sending data from one activity \u2026",
        "url":"training/sharing/send.html",
        "image":"images/training/sharing/share-text-screenshot.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Sharing Simple Data",
        "summary":"One of the great things about Android applications is their ability to communicate and integrate with each other. Why reinvent functionality that isn&#39;t core to your application when it already exists in another application? This class covers some \u2026",
        "url":"training/sharing/index.html",
        "type":"training",
        "keywords": ["intents","share"],
        "tags": ["intents","share"],
        "lang":"en"
      }, 
      {
        "title":"Best Practices for Security &amp; Privacy",
        "summary":"These classes and articles provide information about how to keep your app&#39;s data secure.\u2026",
        "url":"training/best-security.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Determining and Monitoring the Docking State and Type",
        "summary":"Android devices can be docked into several different kinds of docks. These include car or home docks and digital versus analog docks. The dock-state is typically closely linked to the charging state as many docks provide power to docked devices. How the\u2026",
        "url":"training/monitoring-device-state/docking-monitoring.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Manipulating Broadcast Receivers On Demand",
        "summary":"The simplest way to monitor device state changes is to create a BroadcastReceiver for each state you&#39;re monitoring and register each of them in your application manifest. Then within each of these receivers you simply reschedule your recurring alarms\u2026",
        "url":"training/monitoring-device-state/manifest-receivers.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Determining and Monitoring the Connectivity Status",
        "summary":"Some of the most common uses for repeating alarms and background services is to schedule regular updates of application data from Internet resources, cache data, or execute long running downloads. But if you aren&#39;t connected to the Internet, or the\u2026",
        "url":"training/monitoring-device-state/connectivity-monitoring.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Monitoring the Battery Level and Charging State",
        "summary":"When you&#39;re altering the frequency of your background updates to reduce the effect of those updates on battery life, checking the current battery level and charging state is a good place to start. The battery-life impact of performing application \u2026",
        "url":"training/monitoring-device-state/battery-monitoring.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Optimizing Battery Life",
        "summary":"Learn how to optimize your app to reduce battery drain and use power-hungry resources efficiently.",
        "url":"training/monitoring-device-state/index.html",
        "type":"training",
        "keywords": ["battery","network","internet"],
        "tags": ["battery","network","internet"],
        "lang":"en"
      }, 
      {
        "title":"Optimizing for Doze and App Standby",
        "summary":"Test and optimize your app for the power-saving features in Android 6.0.",
        "url":"training/monitoring-device-state/doze-standby.html",
        "image":"images/cards/card-doze_16-9_2x.png",
        "type":"training",
        "keywords": ["doze","app standby","marshmallow","alarms"],
        "tags": ["battery","marshmallow","alarms"],
        "lang":"en"
      }, 
      {
        "title":"Supporting Controllers Across Android Versions",
        "summary":"If you are supporting game controllers in your game, it&#39;s your responsibility to make sure that your game responds to controllers consistently across devices running on different versions of Android. This lets your game reach a wider audience, and\u2026",
        "url":"training/game-controllers/compatibility.html",
        "image":"images/training/backward-compatible-inputmanager.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Handling Controller Actions",
        "summary":"At the system level, Android reports input event codes from game controllers as Android key codes and axis values. In your game, you can receive these codes and values and convert them to specific in-game actions. When players physically connect or wirelessly\u2026",
        "url":"training/game-controllers/controller-input.html",
        "image":"images/training/game-controller-profiles.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Supporting Multiple Game Controllers",
        "summary":"While most games are designed to support a single user per Android device, it&#39;s also possible to support multiple users with game controllers that are connected simultaneously on the same Android device. This lesson covers some basic techniques for\u2026",
        "url":"training/game-controllers/multiple-controllers.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Supporting Game Controllers",
        "summary":"You can greatly enhance the user experience in your game by letting players use their favorite game controllers. The Android framework provides APIs for detecting and processing user input from game controllers. This class shows how to make your game \u2026",
        "url":"training/game-controllers/index.html",
        "type":"training",
        "keywords": ["game controller"],
        "tags": ["gamecontroller"],
        "lang":"en"
      }, 
      {
        "title":"Establishing In-app Billing Products for Sale",
        "summary":"Before publishing your In-app Billing application, you&#39;ll need to define the product list of digital goods available for purchase in the Google Play Developer Console . From the Developer Console, you can define product information for in-app products\u2026",
        "url":"training/in-app-billing/list-iab-products.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Purchasing In-app Billing Products",
        "summary":"Once your application is connected to Google Play, you can initiate purchase requests for in-app products. Google Play provides a checkout interface for users to enter their payment method, so your application does not need to handle payment transactions\u2026",
        "url":"training/in-app-billing/purchase-iab-products.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Testing Your In-app Billing Application",
        "summary":"To ensure that In-app Billing is functioning correctly in your application, you should test the test the application before you publish it on Google Play. Early testing also helps to ensure that the user flow for purchasing in-app items is not confusing\u2026",
        "url":"training/in-app-billing/test-iab-app.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Preparing Your In-app Billing Application",
        "summary":"Implementing Freemium Before you can start using the In-app Billing service, you need to add the library that contains the In-app Billing Version 3 API to your Android project. You also need to set the permissions for your application to communicate with\u2026",
        "url":"training/in-app-billing/preparing-iab-app.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Selling In-app Products",
        "summary":"In this class, you&#39;ll learn how to perform common In-app Billing operations from Android applications. In-app billing is a service hosted on Google Play that lets you charge for digital content or for upgrades in your app. The In-app Billing API makes\u2026",
        "url":"training/in-app-billing/index.html",
        "type":"training",
        "keywords": ["billing"],
        "tags": ["billing"],
        "lang":"en"
      }, 
      {
        "title":"Storing and Searching for Data",
        "summary":"There are many ways to store your data, such as in an online database, in a local SQLite database, or even in a text file. It is up to you to decide what is the best solution for your application. This lesson shows you how to create a SQLite virtual table\u2026",
        "url":"training/search/search.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Setting Up the Search Interface",
        "summary":"Beginning in Android 3.0, using the SearchView widget as an item in the app bar is the preferred way to provide search in your app. Like with all items in the app bar, you can define the SearchView to show at all times, only when there is room, or as \u2026",
        "url":"training/search/setup.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Remaining Backward Compatible",
        "summary":"The SearchView and action bar are only available on Android 3.0 and later. To support older platforms, you can fall back to the search dialog. The search dialog is a system provided UI that overlays on top of your application when invoked. To setup the\u2026",
        "url":"training/search/backward-compat.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Adding Search Functionality",
        "summary":"Android&#39;s built-in search features offer apps an easy way to provide a consistent search experience for all users. There are two ways to implement search in your app depending on the version of Android that is running on the device. This class covers\u2026",
        "url":"training/search/index.html",
        "type":"training",
        "keywords": ["searchview","database"],
        "tags": ["searchview","database"],
        "lang":"en"
      }, 
      {
        "title":"Hiding the Navigation Bar",
        "summary":"This lesson describes how to hide the navigation bar, which was introduced in Android 4.0 (API level 14). Even though this lesson focuses on hiding the navigation bar, you should design your app to hide the status bar at the same time, as described in\u2026",
        "url":"training/system-ui/navigation.html",
        "image":"images/training/navigation-bar.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Responding to UI Visibility Changes",
        "summary":"This lesson describes how to register a listener so that your app can get notified of system UI visibility changes. This is useful if you want to synchronize other parts of your UI with the hiding&#47;showing of system bars. To get notified of system \u2026",
        "url":"training/system-ui/visibility.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Using Immersive Full-Screen Mode",
        "summary":"DevBytes: Android 4.4 Immersive Mode Android 4.4 (API Level 19) introduces a new SYSTEM_UI_FLAG_IMMERSIVE flag for setSystemUiVisibility() that lets your app go truly &quot;full screen.&quot; This flag, when combined with the SYSTEM_UI_FLAG_HIDE_NAVIGATION\u2026",
        "url":"training/system-ui/immersive.html",
        "image":"images/training/imm-states.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Hiding the Status Bar",
        "summary":"This lesson describes how to hide the status bar on different versions of Android. Hiding the status bar (and optionally, the navigation bar) lets the content use more of the display space, thereby providing a more immersive user experience. Figure 1 \u2026",
        "url":"training/system-ui/status.html",
        "image":"images/training/status_bar_show.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Managing the System UI",
        "summary":"System Bars DevBytes: Android 4.4 Immersive Mode The system bars are screen areas dedicated to the display of notifications, communication of device status, and device navigation. Typically the system bars (which consist of the status and navigation bars\u2026",
        "url":"training/system-ui/index.html",
        "image":"images/training/system-ui.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Dimming the System Bars",
        "summary":"This lesson describes how to dim the system bars (that is, the status and the navigation bars) on Android 4.0 (API level 14) and higher. Android does not provide a built-in way to dim the system bars on earlier versions. When you use this approach, the\u2026",
        "url":"training/system-ui/dim.html",
        "image":"images/training/low_profile_hide2x.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Building Apps with Connectivity &amp; the Cloud",
        "summary":"These classes teach you how to connect your app to the world beyond the user&#39;s device. You&#39;ll learn how to connect to other devices in the area, connect to the Internet, backup and sync your app&#39;s data, and more.\u2026",
        "url":"training/building-connectivity.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Supporting Keyboard Navigation",
        "summary":"In addition to soft input methods (such as on-screen keyboards), Android supports physical keyboards attached to the device. A keyboard offers not only a convenient mode for text input, but also offers a way for users to navigate and interact with your\u2026",
        "url":"training/keyboard-input/navigation.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Handling Input Method Visibility",
        "summary":"When input focus moves into or out of an editable text field, Android shows or hides the input method (such as the on-screen keyboard) as appropriate. The system also makes decisions about how your UI and the text field appear above the input method. \u2026",
        "url":"training/keyboard-input/visibility.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Handling Keyboard Actions",
        "summary":"When the user gives focus to an editable text view such as an EditText element and the user has a hardware keyboard attached, all input is handled by the system. If, however, you&#39;d like to intercept or directly handle the keyboard input yourself, \u2026",
        "url":"training/keyboard-input/commands.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Specifying the Input Method Type",
        "summary":"Every text field expects a certain type of text input, such as an email address, phone number, or just plain text. So it&#39;s important that you specify the input type for each text field in your app so the system displays the appropriate soft input \u2026",
        "url":"training/keyboard-input/style.html",
        "image":"images/ui/edittext-phone.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Handling Keyboard Input",
        "summary":"The Android system shows an on-screen keyboard\u2014known as a soft input method \u2014when a text field in your UI receives focus. To provide the best user experience, you can specify characteristics about the type of input you expect (such as whether it&#39;s\u2026",
        "url":"training/keyboard-input/index.html",
        "type":"training",
        "keywords": ["edittext","accessibility"],
        "tags": ["edittext","accessibility"],
        "lang":"en"
      }, 
      {
        "title":"Building Apps with Multimedia",
        "summary":"These classes teach you how to create rich multimedia apps that behave the way users expect.\u2026",
        "url":"training/building-multimedia.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Adding Swipe-to-Refresh To Your App",
        "summary":"The swipe-to-refresh user interface pattern is implemented entirely within the SwipeRefreshLayout widget, which detects the vertical swipe, displays a distinctive progress bar, and triggers callback methods in your app. You enable this behavior by adding\u2026",
        "url":"training/swipe/add-swipe-interface.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Responding to a Refresh Request",
        "summary":"This lesson shows you how to update your app when the user requests a manual refresh, whether the user triggers the refresh with a swipe gesture or by using the action bar refresh action. When the user makes a swipe gesture, the system displays the progress\u2026",
        "url":"training/swipe/respond-refresh-request.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Supporting Swipe-to-Refresh",
        "summary":"Even if your app automatically updates its content on a regular basis, you can allow users to request manual updates as well. For example, a weather forecasting app can allow users get the latest forecasts on demand. To provide a standard user experience\u2026",
        "url":"training/swipe/index.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Adding a Guided Step",
        "summary":"Your application might have multi-step tasks for users. For example, your app might need to guide users through purchasing additional content, or setting up a complex configuration setting, or simply confirming a decision. All of these tasks require walking\u2026",
        "url":"training/tv/playback/guided-step.html",
        "image":"images/training/tv/playback/guided-step-screen.png",
        "type":"training",
        "keywords": ["tv","guided step","guidedstepfragment","guidedaction"],
        "tags": ["tv","guidedstep","guidedstepfragment","guidedaction"],
        "lang":"en"
      }, 
      {
        "title":"Adding Picture-in-picture",
        "summary":"In Android 7.0, Android TV users can now watch a video in a pinned window in a corner of the screen when navigating within or between apps. Picture-in-picture (PIP) mode lets apps run a video activity in the pinned window while another activity continues\u2026",
        "url":"training/tv/playback/picture-in-picture.html",
        "image":"images/android-7.0/pip-active.png",
        "type":"training",
        "keywords": ["androidn"],
        "tags": ["androidn"],
        "lang":"en"
      }, 
      {
        "title":"Displaying a Now Playing Card",
        "summary":"TV apps must display a Now Playing card when playing media behind the launcher or in the background. This card allows users to return to the app that is currently playing media. The Android framework displays a Now Playing card on the home screen when\u2026",
        "url":"training/tv/playback/now-playing.html",
        "image":"images/training/tv/playback/now-playing-screen.png",
        "type":"training",
        "keywords": ["tv","mediasession"],
        "tags": ["tv","mediasession"],
        "lang":"en"
      }, 
      {
        "title":"Creating a Catalog Browser",
        "summary":"A media app that runs on a TV needs to allow users to browse its content offerings, make a selection, and start playing content. The content browsing experience for apps of this type should be simple and intuitive, as well as visually pleasing and engaging\u2026",
        "url":"training/tv/playback/browse.html",
        "image":"images/tv/app-browse.png",
        "type":"training",
        "keywords": ["tv","browsefragment","presenter","backgroundmanager"],
        "tags": ["tv","browsefragment","presenter","backgroundmanager"],
        "lang":"en"
      }, 
      {
        "title":"Providing a Card View",
        "summary":"In the previous lesson, you created a catalog browser, implemented in a browse fragment, that displays a list of media items. In this lesson, you create the card views for your media items and present them in the browse fragment. The BaseCardView class\u2026",
        "url":"training/tv/playback/card.html",
        "image":"images/tv/card-view.png",
        "type":"training",
        "keywords": ["card"],
        "tags": ["card"],
        "lang":"en"
      }, 
      {
        "title":"Enabling Background Playback",
        "summary":"A user watching content on a TV device may decide to switch to the TV launcher at any time. If a user switches to the launcher while using a TV playback app, by default the app is paused. Since the user did not explicitly request to pause playback, the\u2026",
        "url":"training/tv/playback/options.html",
        "type":"training",
        "keywords": ["tv","play","playback","background"],
        "tags": ["tv","play","playback","background"],
        "lang":"en"
      }, 
      {
        "title":"Building TV Playback Apps",
        "summary":"DevBytes: Android TV \u2014 Using the Leanback library Browsing and playing media files is frequently part of the user experience provided by a TV app. Building such an experience from scratch, while making sure that it is fast, fluid, and attractive can be\u2026",
        "url":"training/tv/playback/index.html",
        "type":"training",
        "keywords": ["tv","leanback"],
        "tags": ["tv","leanback"],
        "lang":"en"
      }, 
      {
        "title":"Building a Details View",
        "summary":"The media browsing interface classes provided by the v17 leanback support library include classes for displaying additional information about a media item, such as a description or reviews, and for taking action on that item, such as purchasing it or \u2026",
        "url":"training/tv/playback/details.html",
        "type":"training",
        "keywords": ["tv","detailsfragment"],
        "tags": ["tv","detailsfragment"],
        "lang":"en"
      }, 
      {
        "title":"Get Started with TV Apps",
        "summary":"TV apps use the same structure as those for phones and tablets. This similarity means you can modify your existing apps to also run on TV devices or create new apps based on what you already know about building apps for Android. This lesson describes \u2026",
        "url":"training/tv/start/start.html",
        "type":"training",
        "keywords": ["leanback","recyclerview","launcher"],
        "tags": ["leanback","recyclerview","launcher"],
        "lang":"en"
      }, 
      {
        "title":"Creating TV Navigation",
        "summary":"TV devices provide a limited set of navigation controls for apps. Creating an effective navigation scheme for your TV app depends on understanding these limited controls and the limits of users&#39; perception while operating your app. As you build your\u2026",
        "url":"training/tv/start/navigation.html",
        "type":"training",
        "keywords": ["tv","d-pad","focus"],
        "tags": ["tv","d-pad","focus"],
        "lang":"en"
      }, 
      {
        "title":"Handling TV Hardware",
        "summary":"TV hardware is substantially different from other Android devices. TVs do not include some of the hardware features found on other Android devices, such as touch screens, cameras, and GPS receivers. TVs are also completely dependent on secondary hardware\u2026",
        "url":"training/tv/start/hardware.html",
        "type":"training",
        "keywords": ["unsupported"],
        "tags": ["unsupported"],
        "lang":"en"
      }, 
      {
        "title":"Building Layouts for TV",
        "summary":"A TV screen is typically viewed from about 10 feet away, and while it is much larger than most other Android device displays, this type of screen does not provide the same level of precise detail and color as a smaller device. These factors require you\u2026",
        "url":"training/tv/start/layouts.html",
        "type":"training",
        "keywords": ["tv"],
        "tags": ["tv"],
        "lang":"en"
      }, 
      {
        "title":"Building TV Apps",
        "summary":"Android offers a rich user experience that&#39;s optimized for apps running on large screen devices, such as high-definition televisions. Apps on TV offer new opportunities to delight your users from the comfort of their couch. TV apps use the same structure\u2026",
        "url":"training/tv/start/index.html",
        "type":"training",
        "keywords": ["tv","leanback"],
        "tags": ["tv","leanback"],
        "lang":"en"
      }, 
      {
        "title":"TV Apps Checklist",
        "summary":"Users enjoy the TV app experience when it is consistent, logical, and predictable. They should be able to navigate within your app and throughout Android TV without getting lost or having to &quot;reset&quot; the UI and start over. Users appreciate clear\u2026",
        "url":"training/tv/publishing/checklist.html",
        "type":"training",
        "keywords": ["tv","checklist"],
        "tags": ["tv","checklist"],
        "lang":"en"
      }, 
      {
        "title":"Building TV Games",
        "summary":"How to bring your games to Android TV, including recommendations and examples.",
        "url":"training/tv/games/index.html",
        "image":"images/games/game-controller-buttons_2x_crop.png",
        "type":"training",
        "keywords": ["tv","games","controller"],
        "tags": ["tv","games","controller"],
        "lang":"en"
      }, 
      {
        "title":"Developing a TV Input Service",
        "summary":"A TV input service represents a media stream source, and lets you present your media content in a linear, broadcast TV fashion as channels and programs. With the TV input service, you can provide parental controls, program guide information, and content\u2026",
        "url":"training/tv/tif/tvinput.html",
        "image":"images/tv/tvinput-life.png",
        "type":"training",
        "keywords": ["tv","tif"],
        "tags": ["tv","tif"],
        "lang":"en"
      }, 
      {
        "title":"Working with Channel Data",
        "summary":"Your TV input must provide Electronic Program Guide (EPG) data for at least one channel in its setup activity. You should also periodically update that data, with consideration for the size of the update and the processing thread that handles it. Additionally\u2026",
        "url":"training/tv/tif/channel.html",
        "image":"images/tv/channel-info.png",
        "type":"training",
        "keywords": ["tv","tif"],
        "tags": ["tv","tif"],
        "lang":"en"
      }, 
      {
        "title":"Managing User Interaction",
        "summary":"In the live TV experience the user changes channels and is presented with channel and program information briefly before the information disappears. Other types of information, such as messages (&quot;DO NOT ATTEMPT AT HOME&quot;), subtitles, or ads may\u2026",
        "url":"training/tv/tif/ui.html",
        "image":"images/tv/do-not-attempt.png",
        "type":"training",
        "keywords": ["tv","tif"],
        "tags": ["tv","tif"],
        "lang":"en"
      }, 
      {
        "title":"Supporting Content Recording",
        "summary":"TV input services let the user pause and resume channel playback via time-shifting APIs. Android 7.0 expands on time-shifting by letting the user save multiple recorded sessions. Users can schedule recordings in advance, or start a recording as they watch\u2026",
        "url":"training/tv/tif/content-recording.html",
        "type":"training",
        "keywords": ["tv","tif"],
        "tags": ["tv","tif"],
        "lang":"en"
      }, 
      {
        "title":"Building TV Channels",
        "summary":"Watching live TV shows and other continuous, channel-based content is a big part of the TV experience. Users are accustomed to selecting and watching shows on TV by channel browsing. To provide your users a similar experience, use the TV Input Framework\u2026",
        "url":"training/tv/tif/index.html",
        "image":"images/tv/tv-tif-overview.png",
        "type":"training",
        "keywords": ["tv","tif"],
        "tags": ["tv","tif"],
        "lang":"en"
      }, 
      {
        "title":"Building Apps for TV",
        "summary":"Starting point for building apps and games for Android TV, with guidelines, information, and examples.",
        "url":"training/tv/index.html",
        "image":"design/tv/images/focus.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Searching within TV Apps",
        "summary":"Users frequently have specific content in mind when using a media app on TV. If your app contains a large catalog of content, browsing for a specific title may not be the most efficient way for users to find what they are looking for. A search interface\u2026",
        "url":"training/tv/discovery/in-app-search.html",
        "type":"training",
        "keywords": ["tv","leanback"],
        "tags": ["tv","leanback"],
        "lang":"en"
      }, 
      {
        "title":"Recommending TV Content",
        "summary":"When interacting with TVs, users generally prefer to give minimal input before watching content. An ideal scenario for many TV users is: sit down, turn on, and watch. The fewest steps to get users to content they enjoy is generally the path they prefer\u2026",
        "url":"training/tv/discovery/recommendations.html",
        "image":"images/tv/home-recommendations.png",
        "type":"training",
        "keywords": ["tv","recommendations"],
        "tags": ["tv","recommendations"],
        "lang":"en"
      }, 
      {
        "title":"Making TV Apps Searchable",
        "summary":"Android TV uses the Android search interface to retrieve content data from installed apps and deliver search results to the user. Your app&#39;s content data can be included with these results, to give the user instant access to the content in your app\u2026",
        "url":"training/tv/discovery/searchable.html",
        "image":"images/tv/deep-link.png",
        "type":"training",
        "keywords": ["search","searchable"],
        "tags": ["search","searchable"],
        "lang":"en"
      }, 
      {
        "title":"Helping Users Find Your Content on TV",
        "summary":"TV devices offer many entertainment options for users. They have thousands of content options from apps and related content services. At the same time, most users prefer to use TVs with the least amount of input possible. With the number of choices available\u2026",
        "url":"training/tv/discovery/index.html",
        "type":"training",
        "keywords": ["tv","leanback"],
        "tags": ["tv","leanback"],
        "lang":"en"
      }, 
      {
        "title":"Making a Standard Request",
        "summary":"Volley: Easy, Fast Networking for Android This lesson describes how to use the common request types that Volley supports: If your expected response is one of these types, you probably won&#39;t have to implement a custom request. This lesson describes\u2026",
        "url":"training/volley/request.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Implementing a Custom Request",
        "summary":"Volley: Easy, Fast Networking for Android This lesson describes how to implement your own custom request types, for types that don&#39;t have out-of-the-box Volley support. For cases where you do need to implement a custom request, this is all you need\u2026",
        "url":"training/volley/request-custom.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Transmitting Network Data Using Volley",
        "summary":"Volley: Easy, Fast Networking for Android Volley is an HTTP library that makes networking for Android apps easier and most importantly, faster. Volley is available through the open AOSP repository. Volley offers the following benefits: Volley excels at\u2026",
        "url":"training/volley/index.html",
        "type":"training",
        "keywords": [""],
        "tags": [""],
        "lang":"en"
      }, 
      {
        "title":"Sending a Simple Request",
        "summary":"Volley: Easy, Fast Networking for Android At a high level, you use Volley by creating a RequestQueue and passing it Request objects. The RequestQueue manages worker threads for running the network operations, reading from and writing to the cache, and\u2026",
        "url":"training/volley/simple.html",
        "image":"images/training/volley-request.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Setting Up a RequestQueue",
        "summary":"Volley: Easy, Fast Networking for Android The previous lesson showed you how to use the convenience method Volley.newRequestQueue to set up a RequestQueue, taking advantage of Volley&#39;s default behaviors. This lesson walks you through the explicit \u2026",
        "url":"training/volley/requestqueue.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Using Google Play to Distribute &amp; Monetize",
        "summary":"These classes focus on the business aspects of your app strategy, including techniques for distributing your app on Google Play and techniques for building revenue.\u2026",
        "url":"training/distribute.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Providing Audio Playback for Auto",
        "summary":"Learn how to extend your audio apps for use in Android Auto devices.",
        "url":"training/auto/audio/index.html",
        "image":"auto/images/assets/icons/media_app_playback.png",
        "type":"training",
        "keywords": ["auto","car","automotive","audio"],
        "tags": ["auto","car","automotive","audio"],
        "lang":"en"
      }, 
      {
        "title":"Getting Started with Auto",
        "summary":"Android Auto extends the Android platform into the car. When users connect their handheld devices running Android 5.0 or higher to a compatible vehicle, the Auto user interface provides a car-optimized Android experience on the vehicle&#39;s screen. Users\u2026",
        "url":"training/auto/start/index.html",
        "image":"auto/images/assets/icons/auto_app_in_simulator.png",
        "type":"training",
        "keywords": ["auto","car","automotive"],
        "tags": ["auto","car","automotive"],
        "lang":"en"
      }, 
      {
        "title":"Providing Messaging for Auto",
        "summary":"Learn how to extend your messaging app for use in Android Auto devices.",
        "url":"training/auto/messaging/index.html",
        "image":"auto/images/assets/icons/messaging_app_notifications.png",
        "type":"training",
        "keywords": ["auto","car","automotive","messaging"],
        "tags": ["auto","car","automotive","messaging"],
        "lang":"en"
      }, 
      {
        "title":"Testing Apps for Auto",
        "summary":"Testing your Auto app ensures that users do not encounter unexpected results or have a poor experience when interacting with your apps. Android now provides Desktop Head Unit (DHU), a testing tool for Auto apps that lets you test pre-released versions\u2026",
        "url":"training/auto/testing/index.html",
        "image":"images/training/auto-desktop-head-unit-context-menu-enabled.png",
        "type":"training",
        "keywords": ["auto","car","automotive"],
        "tags": ["auto","car","automotive"],
        "lang":"en"
      }, 
      {
        "title":"Building Apps for Auto",
        "summary":"Starting point for building apps for Auto, with guidelines, information, and examples.",
        "url":"training/auto/index.html",
        "type":"training",
        "keywords": ["auto"],
        "tags": ["auto"],
        "lang":"en"
      }, 
      {
        "title":"Using Wi-Fi P2P for Service Discovery",
        "summary":"The first lesson in this class, Using Network Service Discovery , showed you how to discover services that are connected to a local network. However, using Wi-Fi Peer-to-Peer (P2P) Service Discovery allows you to discover the services of nearby devices\u2026",
        "url":"training/connect-devices-wirelessly/nsd-wifi-direct.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Using Network Service Discovery",
        "summary":"Adding Network Service Discovery (NSD) to your app allows your users to identify other devices on the local network that support the services your app requests. This is useful for a variety of peer-to-peer applications such as file sharing or multi-player\u2026",
        "url":"training/connect-devices-wirelessly/nsd.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating P2P Connections with Wi-Fi",
        "summary":"The Wi-Fi peer-to-peer (P2P) APIs allow applications to connect to nearby devices without needing to connect to a network or hotspot (Android&#39;s Wi-Fi P2P framework complies with the Wi-Fi Direct\u2122 certification program). Wi-Fi P2P allows your application\u2026",
        "url":"training/connect-devices-wirelessly/wifi-direct.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Connecting Devices Wirelessly",
        "summary":"DevBytes: Network Service Discovery Besides enabling communication with the cloud, Android&#39;s wireless APIs also enable communication with other devices on the same local network, and even devices which are not on a network, but are physically nearby\u2026",
        "url":"training/connect-devices-wirelessly/index.html",
        "type":"training",
        "keywords": ["wifi","network","wireless"],
        "tags": ["wifi","network","wireless"],
        "lang":"en"
      }, 
      {
        "title":"Building Apps for Wearables",
        "summary":"Learn how to build notifications, send and sync data, and use voice actions.",
        "url":"training/building-wearables.html",
        "image":"images/cards/android-wear-apps_2x.jpg",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Maintaining Compatibility",
        "summary":"Some material design features like the material theme and custom activity transitions are only available on Android 5.0 (API level 21) and above. However, you can design your apps to make use of these features when running on devices that support material\u2026",
        "url":"training/material/compatibility.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Using the Material Theme",
        "summary":"The new material theme provides: You can customize the look of the material theme according to your brand identity with a color palette you control. You can tint the action bar and the status bar using theme attributes, as shown in Figure 3 . The system\u2026",
        "url":"training/material/theme.html",
        "image":"design/material/images/MaterialDark.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Defining Shadows and Clipping Views",
        "summary":"Material design introduces elevation for UI elements. Elevation helps users understand the relative importance of each element and focus their attention to the task at hand. The elevation of a view, represented by the Z property, determines the visual\u2026",
        "url":"training/material/shadows-clipping.html",
        "image":"training/material/images/shadows-depth.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating Lists and Cards",
        "summary":"To create complex lists and cards with material design styles in your apps, you can use the RecyclerView and CardView widgets. The RecyclerView widget is a more advanced and flexible version of ListView. This widget is a container for displaying large\u2026",
        "url":"training/material/lists-cards.html",
        "image":"training/material/images/RecyclerView.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Getting Started",
        "summary":"To create apps with material design: You can add many material design features to your app while maintaining compatibility with versions of Android earlier than 5.0. For more information, see Maintaining Compatibility . To update an existing app to incorporate\u2026",
        "url":"training/material/get-started.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Defining Custom Animations",
        "summary":"Animations in material design give users feedback on their actions and provide visual continuity as users interact with your app. The material theme provides some default animations for buttons and activity transitions, and Android 5.0 (API level 21) \u2026",
        "url":"training/material/animations.html",
        "image":"training/material/images/SceneTransition.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Working with Drawables",
        "summary":"The following capabilities for drawables help you implement material design in your apps: This lesson shows you how to use these features in your app. With Android 5.0 (API level 21) and above, you can tint bitmaps and nine-patches defined as alpha masks\u2026",
        "url":"training/material/drawables.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Material Design for Developers",
        "summary":"Learn how to apply material design to your apps.",
        "url":"training/material/index.html",
        "image":"images/cards/material_2x.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Developing an Accessibility Service",
        "summary":"Accessibility services are a feature of the Android framework designed to provide alternative navigation feedback to the user on behalf of applications installed on Android devices. An accessibility service can communicate to the user on the application\u2026",
        "url":"training/accessibility/service.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Accessibility Testing Checklist",
        "summary":"Testing is an important part of making your application accessible to users with varying abilities. Following design and development guidelines for accessibility are important steps toward that goal, but testing for accessibility can uncover problems \u2026",
        "url":"training/accessibility/testing.html",
        "type":"training",
        "keywords": ["testing","accessibility"],
        "tags": ["testing","accessibility"],
        "lang":"en"
      }, 
      {
        "title":"Developing Accessible Applications",
        "summary":"Android has several accessibility-focused features baked into the platform, which make it easy to optimize your application for those with visual or physical disabilities. However, it&#39;s not always obvious what the correct optimizations are, or the\u2026",
        "url":"training/accessibility/accessible-app.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Implementing Accessibility",
        "summary":"When it comes to reaching as wide a userbase as possible, it&#39;s important to pay attention to accessibility in your Android application. Cues in your user interface that may work for a majority of users, such as a visible change in state when a button\u2026",
        "url":"training/accessibility/index.html",
        "type":"training",
        "keywords": ["navigation","input"],
        "tags": ["navigation","input"],
        "lang":"en"
      }, 
      {
        "title":"Creating an Implementation with Older APIs",
        "summary":"This lesson discusses how to create an implementation that mirrors newer APIs yet supports older devices. The most challenging task in using newer UI features in a backward-compatible way is deciding on and implementing an older (fallback) solution for\u2026",
        "url":"training/backward-compatible-ui/older-implementation.html",
        "image":"images/training/backward-compatible-ui-classes-eclair.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Proxying to the New APIs",
        "summary":"This lesson shows you how to subclass the CompatTab and TabHelper abstract classes and use new APIs. Your application can use this implementation on devices running a platform version that supports them. The concrete classes for CompatTab and TabHelper\u2026",
        "url":"training/backward-compatible-ui/new-implementation.html",
        "image":"images/training/backward-compatible-ui-classes-honeycomb.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating Backward-Compatible UIs",
        "summary":"This class demonstrates how to use UI components and APIs available in newer versions of Android in a backward-compatible way, ensuring that your application still runs on previous versions of the platform. Throughout this class, the new Action Bar Tabs\u2026",
        "url":"training/backward-compatible-ui/index.html",
        "type":"training",
        "keywords": ["widgets","support"],
        "tags": ["widgets","support"],
        "lang":"en"
      }, 
      {
        "title":"Abstracting the New APIs",
        "summary":"Suppose you want to use action bar tabs as the primary form of top-level navigation in your application. Unfortunately, the ActionBar APIs are only available in Android 3.0 or later (API level 11+). Thus, if you want to distribute your application to \u2026",
        "url":"training/backward-compatible-ui/abstracting.html",
        "image":"images/training/backward-compatible-ui-classes.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Using the Version-Aware Component",
        "summary":"Now that you have two implementations of TabHelper and CompatTab \u2014one for Android 3.0 and later and one for earlier versions of the platform\u2014it&#39;s time to do something with these implementations. This lesson discusses creating the logic for switching\u2026",
        "url":"training/backward-compatible-ui/using-component.html",
        "image":"images/training/backward-compatible-ui-gb.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Best Practices for Testing",
        "summary":"These classes and articles provide information about how to test your Android application.\u2026",
        "url":"training/testing.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Best Practices for Interaction and Engagement",
        "summary":"These classes teach you how to engage and retain your users by implementing the best interaction patterns for Android. For instance, to help users quickly discover content in your app, your app should match their expectations for user interaction on Android\u2026",
        "url":"training/best-ux.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Planning for Multiple Touchscreen Sizes",
        "summary":"Designing an intuitive, effective navigation for tablets and other devices.",
        "url":"training/design-navigation/multiple-sizes.html",
        "image":"images/training/app-navigation-multiple-sizes-strategy-stack.png",
        "type":"training",
        "keywords": [],
        "tags": ["multiplescreens"],
        "lang":"en"
      }, 
      {
        "title":"Providing Ancestral and Temporal Navigation",
        "summary":"Now that users can navigate deep into the application&#39;s screen hierarchy, we need to provide a method for navigating up the hierarchy, to parent and ancestor screens. Additionally, we should ensure that temporal navigation via the Back button is respected\u2026",
        "url":"training/design-navigation/ancestral-temporal.html",
        "image":"images/training/app-navigation-ancestral-navigate-back.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Putting it All Together: Wireframing the Example App",
        "summary":"Now that we have a solid understanding of navigation patterns and screen grouping techniques, it&#39;s time to apply them to our screens. Let&#39;s take another look at our exhaustive screen map for the example news application from the first lesson ,\u2026",
        "url":"training/design-navigation/wireframing.html",
        "image":"images/training/app-navigation-screen-planning-exhaustive-map.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Planning Screens and Their Relationships",
        "summary":"Most apps have an inherent information model that can be expressed as a tree or graph of object types. In more obvious terms, you can draw a diagram of different kinds of information that represents the types of things users interact with in your app.\u2026",
        "url":"training/design-navigation/screen-planning.html",
        "image":"images/training/app-navigation-screen-planning-erd.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Designing Effective Navigation",
        "summary":"This class is not specific to any particular version of the Android platform. It is also primarily design-focused and does not require knowledge of the Android SDK. That said, you should have experience using an Android device for a better understanding\u2026",
        "url":"training/design-navigation/index.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Providing Descendant and Lateral Navigation",
        "summary":"One way of providing access to the full range of an application&#39;s screens is to expose hierarchical navigation. In this lesson we discuss descendant navigation , allowing users to descend &#39;down&#39; a screen hierarchy into a child screen, and \u2026",
        "url":"training/design-navigation/descendant-lateral.html",
        "image":"images/training/app-navigation-descendant-lateral-desc.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Best Practices for Background Jobs",
        "summary":"These classes show you how to run jobs in the background to boost your application&#39;s performance and minimize its drain on the battery.\u2026",
        "url":"training/best-background.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Keeping the Device Awake",
        "summary":"To avoid draining the battery, an Android device that is left idle quickly falls asleep. However, there are times when an application needs to wake up the screen or the CPU and keep it awake to complete some work. The approach you take depends on the \u2026",
        "url":"training/scheduling/wakelock.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Scheduling Repeating Alarms",
        "summary":"The App Clinic: Cricket DevBytes: Efficient Data Transfers Alarms (based on the AlarmManager class) give you a way to perform time-based operations outside the lifetime of your application. For example, you could use an alarm to initiate a long-running\u2026",
        "url":"training/scheduling/alarms.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Managing Device Awake State",
        "summary":"When an Android device is left idle, it will first dim, then turn off the screen, and ultimately turn off the CPU. This prevents the device&#39;s battery from quickly getting drained. Yet there are times when your application might require a different\u2026",
        "url":"training/scheduling/index.html",
        "type":"training",
        "keywords": ["wakelock","alarmmanager","wakefulbroadcastreceiver"],
        "tags": ["wakelock","alarmmanager","wakefulbroadcastreceiver"],
        "lang":"en"
      }, 
      {
        "title":"Re-using Layouts with &lt;include&#47;&gt;",
        "summary":"Although Android offers a variety of widgets to provide small and re-usable interactive elements, you might also need to re-use larger components that require a special layout. To efficiently re-use complete layouts, you can use the View, you can do it\u2026",
        "url":"training/improving-layouts/reusing-layouts.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Optimizing Layout Hierarchies",
        "summary":"It is a common misconception that using the basic layout structures leads to the most efficient layouts. However, each widget and layout you add to your application requires initialization, layout, and drawing. For example, using nested instances of LinearLayout\u2026",
        "url":"training/improving-layouts/optimizing-layout.html",
        "image":"images/training/layout-listitem.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Making ListView Scrolling Smooth",
        "summary":"The key to a smoothly scrolling ListView is to keep the application\u2019s main thread (the UI thread) free from heavy processing. Ensure you do any disk access, network access, or SQL access in a separate thread. To test the status of your app, you can enable\u2026",
        "url":"training/improving-layouts/smooth-scrolling.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Improving Layout Performance",
        "summary":"DevBytes: Optimising Layouts with Hierarchy Viewer Layouts are a key part of Android applications that directly affect the user experience. If implemented poorly, your layout can lead to a memory hungry application with slow UIs. The Android SDK includes\u2026",
        "url":"training/improving-layouts/index.html",
        "type":"training",
        "keywords": ["include","merge","viewstub","listview"],
        "tags": ["include","merge","viewstub","listview"],
        "lang":"en"
      }, 
      {
        "title":"Loading Views On Demand",
        "summary":"Sometimes your layout might require complex views that are rarely used. Whether they are item details, progress indicators, or undo messages, you can reduce memory usage and speed up rendering by loading the views only when they are needed. ViewStub is\u2026",
        "url":"training/improving-layouts/loading-ondemand.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating a Manager for Multiple Threads",
        "summary":"The previous lesson showed how to define a task that executes on a separate thread. If you only want to run the task once, this may be all you need. If you want to run a task repeatedly on different sets of data, but you only need one execution running\u2026",
        "url":"training/multiple-threads/create-threadpool.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Specifying the Code to Run on a Thread",
        "summary":"This lesson shows you how to implement a Runnable class, which runs the code in its run() method on a separate thread. You can also pass a Runnable to another object that can then attach it to a thread and run it. One or more Runnable objects that perform\u2026",
        "url":"training/multiple-threads/define-runnable.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Running Code on a Thread Pool Thread",
        "summary":"The previous lesson showed you how to define a class that manages thread pools and the tasks that run on them. This lesson shows you how to run a task on a thread pool. To do this, you add the task to the pool&#39;s work queue. When a thread becomes available\u2026",
        "url":"training/multiple-threads/run-code.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Communicating with the UI Thread",
        "summary":"In the previous lesson you learned how to start a task on a thread managed by ThreadPoolExecutor. This final lesson shows you how to send data from the task to objects running on the user interface (UI) thread. This feature allows your tasks to do background\u2026",
        "url":"training/multiple-threads/communicate-ui.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Sending Operations to Multiple Threads",
        "summary":"The speed and efficiency of a long-running, data-intensive operation often improves when you split it into smaller operations running on multiple threads. On a device that has a CPU with multiple processors (cores), the system can run the threads in parallel\u2026",
        "url":"training/multiple-threads/index.html",
        "type":"training",
        "keywords": ["threadpool","runnable"],
        "tags": ["threadpool","runnable"],
        "lang":"en"
      }, 
      {
        "title":"Sending Files to Another Device",
        "summary":"This lesson shows you how to design your app to send large files to another device using Android Beam file transfer. To send files, you request permission to use NFC and external storage, test to ensure your device supports NFC, and provide URIs to Android\u2026",
        "url":"training/beam-files/send-files.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Receiving Files from Another Device",
        "summary":"Android Beam file transfer copies files to a special directory on the receiving device. It also scans the copied files using the Android Media Scanner and adds entries for media files to the MediaStore provider. This lesson shows you how to respond when\u2026",
        "url":"training/beam-files/receive-files.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Sharing Files with NFC",
        "summary":"Android allows you to transfer large files between devices using the Android Beam file transfer feature. This feature has a simple API and allows users to start the transfer process by simply touching devices. In response, Android Beam file transfer automatically\u2026",
        "url":"training/beam-files/index.html",
        "type":"training",
        "keywords": ["nfcadapter","android beam","share","file transfer"],
        "tags": ["nfcadapter","androidbeam","share","filetransfer"],
        "lang":"en"
      }, 
      {
        "title":"Adding Maps",
        "summary":"Allow your users to explore the world with rich maps provided by Google. Identify locations with custom markers, augment the map data with image overlays, embed one or more maps as fragments, and much more. The Google Maps Android API allows you to include\u2026",
        "url":"training/maps/index.html",
        "image":"images/google/gps-maps.png",
        "type":"training",
        "keywords": ["mapview","location"],
        "tags": ["mapview","location"],
        "lang":"en"
      }, 
      {
        "title":"Creating and Monitoring Geofences",
        "summary":"Geofencing combines awareness of the user&#39;s current location with awareness of the user&#39;s proximity to locations that may be of interest. To mark a location of interest, you specify its latitude and longitude. To adjust the proximity for the location\u2026",
        "url":"training/location/geofencing.html",
        "image":"images/training/geofence@2x.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Getting the Last Known Location",
        "summary":"Using the Google Play services location APIs, your app can request the last known location of the user&#39;s device. In most cases, you are interested in the user&#39;s current location, which is usually equivalent to the last known location of the device\u2026",
        "url":"training/location/retrieve-current.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Changing Location Settings",
        "summary":"If your app needs to request location or receive permission updates, the device needs to enable the appropriate system settings, such as GPS or Wi-Fi scanning. Rather than directly enabling services such as the device&#39;s GPS, your app specifies the\u2026",
        "url":"training/location/change-location-settings.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Displaying a Location Address",
        "summary":"The lessons Getting the Last Known Location and Receiving Location Updates describe how to get the user&#39;s location in the form of a Location object that contains latitude and longitude coordinates. Although latitude and longitude are useful for calculating\u2026",
        "url":"training/location/display-address.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Receiving Location Updates",
        "summary":"If your app can continuously track location, it can deliver more relevant information to the user. For example, if your app helps the user find their way while walking or driving, or if your app tracks the location of assets, it needs to get the location\u2026",
        "url":"training/location/receive-location-updates.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Making Your App Location-Aware",
        "summary":"Activity Recognition One of the unique features of mobile applications is location awareness. Mobile users take their devices with them everywhere, and adding location awareness to your app offers users a more contextual experience. The location APIs \u2026",
        "url":"training/location/index.html",
        "type":"training",
        "keywords": ["location","geofence","geofencing","activity recognition","activity detection","gps"],
        "tags": ["location","geofence","geofencing","activityrecognition","activitydetection","gps"],
        "lang":"en"
      }, 
      {
        "title":"Sending Work Requests to the Background Service",
        "summary":"The previous lesson showed you how to create an IntentService class. This lesson shows you how to trigger the IntentService to run an operation by sending it an Intent. This Intent can optionally contain data for the IntentService to process. You can \u2026",
        "url":"training/run-background-service/send-request.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating a Background Service",
        "summary":"The IntentService class provides a straightforward structure for running an operation on a single background thread. This allows it to handle long-running operations without affecting your user interface&#39;s responsiveness. Also, an IntentService isn\u2026",
        "url":"training/run-background-service/create-service.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Reporting Work Status",
        "summary":"This lesson shows you how to report the status of a work request run in a background service to the component that sent the request. This allows you, for example, to report the status of the request in an Activity object&#39;s UI. The recommended way \u2026",
        "url":"training/run-background-service/report-status.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Running in a Background Service",
        "summary":"Unless you specify otherwise, most of the operations you do in an app run in the foreground on a special thread called the UI thread. This can cause problems, because long-running operations will interfere with the responsiveness of your user interface\u2026",
        "url":"training/run-background-service/index.html",
        "type":"training",
        "keywords": ["intentservice"],
        "tags": ["intentservice"],
        "lang":"en"
      }, 
      {
        "title":"Specifying App Content for Indexing",
        "summary":"Google&#39;s web crawling bot ( Googlebot ), which crawls and indexes web sites for the Google search engine, can also index content in your Android app. By opting in, you can allow Googlebot to crawl the content in the APK through the Google Play Store\u2026",
        "url":"training/app-indexing/enabling-app-indexing.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Enabling Deep Links for App Content",
        "summary":"To enable Google to crawl your app content and allow users to enter your app from search results, you must add intent filters for the relevant activities in your app manifest. These intent filters allow deep linking to the content in any of your activities\u2026",
        "url":"training/app-indexing/deep-linking.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Making Your App Content Searchable by Google",
        "summary":"This class shows how to enable deep linking and indexing of your application content so that users can open this content directly from mobile search results.\u2026",
        "url":"training/app-indexing/index.html",
        "image":"images/cards/google-search_2x.png",
        "type":"training",
        "keywords": ["app indexing","search"],
        "tags": ["getusers","search","appindexing"],
        "lang":"en"
      }, 
      {
        "title":"Advanced Training",
        "summary":"Advanced Training contains a variety of classes that teach you best practices in Android development. These classes simplify the steps required to enhance your app with powerful platform features or effectively optimize your app performance. What you \u2026",
        "url":"training/advanced.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Resolving Cloud Save Conflicts",
        "summary":"This article describes how to design a robust conflict resolution strategy for apps that save data to the cloud using the Cloud Save service . The Cloud Save service allows you to store application data for each user of an application on Google&#39;s \u2026",
        "url":"training/cloudsave/conflict-res.html",
        "type":"training",
        "keywords": ["cloud"],
        "tags": ["cloud"],
        "lang":"en"
      }, 
      {
        "title":"Supporting Different Densities",
        "summary":"Providing sets of layouts and drawable resources for specific ranges of device screens.",
        "url":"training/multiscreen/screendensities.html",
        "type":"training",
        "keywords": [],
        "tags": ["multiplescreens"],
        "lang":"en"
      }, 
      {
        "title":"Supporting Different Screen Sizes",
        "summary":"This lesson shows you how to support different screen sizes by: To ensure that your layout is flexible and adapts to different screen sizes, you should use &quot;wrap_content&quot; and &quot;match_parent&quot; for the width and height of some view components\u2026",
        "url":"training/multiscreen/screensizes.html",
        "image":"images/training/layout-hvga.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Implementing Adaptative UI Flows",
        "summary":"Depending on the layout that your application is currently showing, the UI flow may be different. For example, if your application is in the dual-pane mode, clicking on an item on the left pane will simply display the content on the right pane; if it \u2026",
        "url":"training/multiscreen/adaptui.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Designing for Multiple Screens",
        "summary":"Training on how to add intuitive, effective navigation for tablets and other devices.",
        "url":"training/multiscreen/index.html",
        "type":"training",
        "keywords": ["tablet","tv","fragments","support"],
        "tags": ["tablet","tv","fragments","support"],
        "lang":"en"
      }, 
      {
        "title":"Permissions Best Practices",
        "summary":"It&#39;s easy for an app to overwhelm a user with permission requests. If a user finds the app frustrating to use, or the user is worried about what the app might be doing with the user&#39;s information, they may avoid using the app or uninstall it entirely\u2026",
        "url":"training/permissions/best-practices.html",
        "type":"training",
        "keywords": ["permissions"],
        "tags": ["permissions"],
        "lang":"en"
      }, 
      {
        "title":"Requesting Permissions at Run Time",
        "summary":"Learn about runtime permissions and how they make it easier for users to install and upgrade your apps.",
        "url":"training/permissions/requesting.html",
        "image":"images/permissions_check.png",
        "type":"training",
        "keywords": ["runtime permissions","androidm","marshmallow"],
        "tags": ["runtimepermissions","androidm","marshmallow"],
        "lang":"en"
      }, 
      {
        "title":"Working with System Permissions",
        "summary":"Permissions To protect the system&#39;s integrity and the user&#39;s privacy, Android runs each app in a limited access sandbox. If the app wants to use resources or information outside of its sandbox, the app has to explicitly request permission. Depending\u2026",
        "url":"training/permissions/index.html",
        "type":"training",
        "keywords": ["permissions"],
        "tags": ["permissions"],
        "lang":"en"
      }, 
      {
        "title":"Declaring Permissions",
        "summary":"Every Android app runs in a limited-access sandbox. If an app needs to use resources or information outside of its own sandbox, the app has to request the appropriate permission. You declare that your app needs a permission by listing the permission in\u2026",
        "url":"training/permissions/declaring.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating a Sync Adapter",
        "summary":"The sync adapter component in your app encapsulates the code for the tasks that transfer data between the device and a server. Based on the scheduling and triggers you provide in your app, the sync adapter framework runs the code in the sync adapter component\u2026",
        "url":"training/sync-adapters/creating-sync-adapter.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating a Stub Authenticator",
        "summary":"The sync adapter framework assumes that your sync adapter transfers data between device storage associated with an account and server storage that requires login access. For this reason, the framework expects you to provide a component called an authenticator\u2026",
        "url":"training/sync-adapters/creating-authenticator.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating a Stub Content Provider",
        "summary":"The sync adapter framework is designed to work with device data managed by the flexible and highly secure content provider framework. For this reason, the sync adapter framework expects that an app that uses the framework has already defined a content\u2026",
        "url":"training/sync-adapters/creating-stub-provider.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Transferring Data Using Sync Adapters",
        "summary":"Synchronizing data between an Android device and web servers can make your application significantly more useful and compelling for your users. For example, transferring data to a web server makes a useful backup, and transferring data from a server makes\u2026",
        "url":"training/sync-adapters/index.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Running a Sync Adapter",
        "summary":"In the previous lessons in this class, you learned how to create a sync adapter component that encapsulates data transfer code, and how to add the additional components that allow you to plug the sync adapter into the system. You now have everything you\u2026",
        "url":"training/sync-adapters/running-sync-adapter.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Building Apps with Contacts &amp; Sign-In",
        "summary":"These lessons teach you how to include contact information and authenticate users with the same credentials they use for Google. These features allow your app to connect users with people they care about and provide a personalized experience without creating\u2026",
        "url":"training/building-userinfo.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Adding an Action to a Message",
        "summary":"You can add an action to a Snackbar, allowing the user to respond to your message. If you add an action to a Snackbar, the Snackbar puts a button next to the message text. The user can trigger your action by pressing the button. For example, an email \u2026",
        "url":"training/snackbar/action.html",
        "image":"images/training/snackbar/snackbar_undo_action_2x.png",
        "type":"training",
        "keywords": ["snackbar action popup"],
        "tags": ["snackbaractionpopup"],
        "lang":"en"
      }, 
      {
        "title":"Building and Displaying a Pop-Up Message",
        "summary":"You can use a Snackbar to display a brief message to the user. The message automatically goes away after a short period. A Snackbar is ideal for brief messages that the user doesn&#39;t necessarily need to act on. For example, an email app could use a\u2026",
        "url":"training/snackbar/showing.html",
        "type":"training",
        "keywords": ["snackbar popup pop-up"],
        "tags": ["snackbarpopuppop-up"],
        "lang":"en"
      }, 
      {
        "title":"Showing Pop-Up Messages",
        "summary":"There are many situations where you might want your app to show a quick message to the user, without necessarily waiting for the user to respond. For example, when a user performs an action like sending an email or deleting a file, your app should show\u2026",
        "url":"training/snackbar/index.html",
        "image":"images/training/snackbar/snackbar_drive_2x.png",
        "type":"training",
        "keywords": ["snackbar","toast"],
        "tags": ["snackbar","toast"],
        "lang":"en"
      }, 
      {
        "title":"Displaying the Quick Contact Badge",
        "summary":"This lesson shows you how to add a QuickContactBadge to your UI and how to bind data to it. A QuickContactBadge is a widget that initially appears as a thumbnail image. Although you can use any Bitmap for the thumbnail image, you usually use a Bitmap \u2026",
        "url":"training/contacts-provider/display-contact-badge.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Retrieving a List of Contacts",
        "summary":"This lesson shows you how to retrieve a list of contacts whose data matches all or part of a search string, using the following techniques: To do any type of search of the Contacts Provider, your app must have READ_CONTACTS permission. To request this\u2026",
        "url":"training/contacts-provider/retrieve-names.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Retrieving Details for a Contact",
        "summary":"This lesson shows how to retrieve detail data for a contact, such as email addresses, phone numbers, and so forth. It&#39;s the details that users are looking for when they retrieve a contact. You can give them all the details for a contact, or only display\u2026",
        "url":"training/contacts-provider/retrieve-details.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Modifying Contacts Using Intents",
        "summary":"This lesson shows you how to use an Intent to insert a new contact or modify a contact&#39;s data. Instead of accessing the Contacts Provider directly, an Intent starts the contacts app, which runs the appropriate Activity. For the modification actions\u2026",
        "url":"training/contacts-provider/modify-data.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Accessing Contacts Data",
        "summary":"The Contacts Provider is the central repository of the user&#39;s contacts information, including data from contacts apps and social networking apps. In your apps, you can access Contacts Provider information directly by calling ContentResolver methods\u2026",
        "url":"training/contacts-provider/index.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Performance Tips",
        "summary":"This document primarily covers micro-optimizations that can improve overall app performance when combined, but it&#39;s unlikely that these changes will result in dramatic performance effects. Choosing the right algorithms and data structures should always\u2026",
        "url":"training/articles/perf-tips.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Supporting Direct Boot",
        "summary":"Android 7.0 runs in a secure, Direct Boot mode when the device has been powered on but the user has not unlocked the device. To support this, the system provides two storage locations for data: By default, apps do not run during Direct Boot mode. If your\u2026",
        "url":"training/articles/direct-boot.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"SMP Primer for Android",
        "summary":"Android 3.0 and later platform versions are optimized to support multiprocessor architectures. This document introduces issues that can arise when writing code for symmetric multiprocessor systems in C, C++, and the Java programming language (hereafter\u2026",
        "url":"training/articles/smp.html",
        "type":"training",
        "keywords": ["ndk","native"],
        "tags": ["ndk","native"],
        "lang":"en"
      }, 
      {
        "title":"Updating Your Security Provider to Protect Against SSL Exploits",
        "summary":"Android relies on a security Provider to provide secure network communications. However, from time to time, vulnerabilities are found in the default security provider. To protect against these vulnerabilities, Google Play services provides a way to automatically\u2026",
        "url":"training/articles/security-gms-provider.html",
        "type":"training",
        "keywords": ["network","certificates"],
        "tags": ["network","certificates"],
        "lang":"en"
      }, 
      {
        "title":"Key Attestation",
        "summary":"A tool for verifying security properties of hardware-backed key pairs.",
        "url":"training/articles/security-key-attestation.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Network Security Configuration",
        "summary":"Feature that allows app developers to customize network security settings in a safe configuration file.",
        "url":"training/articles/security-config.html",
        "image":"images/cards/card-nyc_2x.jpg",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Android Keystore System",
        "summary":"The Android Keystore system lets you store cryptographic keys in a container to make it more difficult to extract from the device. Once keys are in the keystore, they can be used for cryptographic operations with the key material remaining non-exportable\u2026",
        "url":"training/articles/keystore.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Keeping Your App Responsive",
        "summary":"It&#39;s possible to write code that wins every performance test in the world, but still feels sluggish, hang or freeze for significant periods, or take too long to process input. The worst thing that can happen to your app&#39;s responsiveness is an \u2026",
        "url":"training/articles/perf-anr.html",
        "image":"images/anr.png",
        "type":"training",
        "keywords": ["threads","asynctask"],
        "tags": ["threads","asynctask"],
        "lang":"en"
      }, 
      {
        "title":"Managing Your App&#39;s Memory",
        "summary":"Random-access memory (RAM) is a valuable resource in any software development environment, but it&#39;s even more valuable on a mobile operating system where physical memory is often constrained. Although Android&#39;s Dalvik virtual machine performs \u2026",
        "url":"training/articles/memory.html",
        "type":"training",
        "keywords": ["ram","low memory","outofmemoryerror","ontrimmemory"],
        "tags": ["ram","lowmemory","outofmemoryerror","ontrimmemory"],
        "lang":"en"
      }, 
      {
        "title":"Optimizing Content for the Assistant",
        "summary":"Support contextually relevant actions through the Assist API.",
        "url":"training/articles/assistant.html",
        "image":"images/cards/card-assist_16-9_2x.png",
        "type":"training",
        "keywords": ["assist","accessibility","now","now on tap"],
        "tags": ["assistant","marshmallow","now"],
        "lang":"en"
      }, 
      {
        "title":"\ufeffDetecting Location on Android Wear",
        "summary":"Location awareness on wearable devices enables you to create apps that give users a better understanding of their geographic position, movement and what&#39;s around them. With the small form factor and glanceable nature of a wearable device, you can \u2026",
        "url":"training/articles/wear-location-detection.html",
        "type":"training",
        "keywords": ["gps"],
        "tags": ["gps"],
        "lang":"en"
      }, 
      {
        "title":"Best Practices for App Permissions",
        "summary":"How to manage permissions to give users context and control.",
        "url":"training/articles/user-data-permissions.html",
        "image":"images/cards/card-user-permissions_2x.png",
        "type":"training",
        "keywords": ["permissions","user data"],
        "tags": ["permissions","userdata"],
        "lang":"en"
      }, 
      {
        "title":"\ufeffSecurity with HTTPS and SSL",
        "summary":"The Secure Sockets Layer (SSL)\u2014now technically known as Transport Layer Security (TLS) \u2014is a common building block for encrypted communications between clients and servers. It&#39;s possible that an application might use SSL incorrectly such that malicious\u2026",
        "url":"training/articles/security-ssl.html",
        "type":"training",
        "keywords": ["network","certificates"],
        "tags": ["network","certificates"],
        "lang":"en"
      }, 
      {
        "title":"Using Scoped Directory Access",
        "summary":"Apps such as photo apps usually just need access to specific directories in external storage, such as the Pictures directory. Existing approaches to accessing external storage aren&#39;t designed to easily provide targeted directory access for these types\u2026",
        "url":"training/articles/scoped-directory-access.html",
        "image":"images/android-7.0/scoped-directory-access-framed.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"JNI Tips",
        "summary":"JNI is the Java Native Interface. It defines a way for managed code (written in the Java programming language) to interact with native code (written in C&#47;C++). It&#39;s vendor-neutral, has support for loading code from dynamic shared libraries, and\u2026",
        "url":"training/articles/perf-jni.html",
        "type":"training",
        "keywords": ["ndk","native"],
        "tags": ["ndk","native"],
        "lang":"en"
      }, 
      {
        "title":"Best Practices for Unique Identifiers",
        "summary":"How to manage unique identifiers the right way for users.",
        "url":"training/articles/user-data-ids.html",
        "image":"images/cards/card-user-ids_2x.png",
        "type":"training",
        "keywords": ["ids","user data"],
        "tags": ["ids","userdata"],
        "lang":"en"
      }, 
      {
        "title":"Requesting Permissions on Android Wear",
        "summary":"Android 6.0 (API level 23) introduces a new permissions model , bringing some changes that are specific to Wear, and other changes that apply to all Android-powered devices. The user must now grant permissions to Wear apps separately from the handset \u2026",
        "url":"training/articles/wear-permissions.html",
        "image":"images/training/wear/multiple_permissions.png",
        "type":"training",
        "keywords": ["permissions"],
        "tags": ["permissions"],
        "lang":"en"
      }, 
      {
        "title":"Permissions and User Data",
        "summary":"An overview of permissions on Android and how to manage them.",
        "url":"training/articles/user-data-overview.html",
        "image":"images/cards/card-user_2x.png",
        "type":"training",
        "keywords": ["user data","permissions","identifiers"],
        "tags": ["userdata","permissions","identifiers"],
        "lang":"en"
      }, 
      {
        "title":"\ufeffSecurity Tips",
        "summary":"Android has security features built into the operating system that significantly reduce the frequency and impact of application security issues. The system is designed so you can typically build your apps with default system and file permissions and avoid\u2026",
        "url":"training/articles/security-tips.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Recording Videos Simply",
        "summary":"This lesson explains how to capture video using existing camera applications. Your application has a job to do, and integrating videos is only a small part of it. You want to take videos with minimal fuss, and not reinvent the camcorder. Happily, most\u2026",
        "url":"training/camera/videobasics.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Taking Photos Simply",
        "summary":"This lesson explains how to capture photos using an existing camera application. Suppose you are implementing a crowd-sourced weather service that makes a global weather map by blending together pictures of the sky taken by devices running your client\u2026",
        "url":"training/camera/photobasics.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Controlling the Camera",
        "summary":"In this lesson, we discuss how to control the camera hardware directly using the framework APIs. Directly controlling a device camera requires a lot more code than requesting pictures or videos from existing camera applications. However, if you want to\u2026",
        "url":"training/camera/cameradirect.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Capturing Photos",
        "summary":"The world was a dismal and featureless place before rich media became prevalent. Remember Gopher? We don&#39;t, either. For your app to become part of your users&#39; lives, give them a way to put their lives into it. Using the on-board cameras, your \u2026",
        "url":"training/camera/index.html",
        "type":"training",
        "keywords": ["camera","video","picture"],
        "tags": ["camera","video","picture"],
        "lang":"en"
      }, 
      {
        "title":"Building Apps with Location &amp; Maps",
        "summary":"These classes teach you how to add user location and mapping information to your app. Make your app more helpful and relevant to users by providing information about where they are and the world around them.\u2026",
        "url":"training/building-location.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Optimizing Downloads for Efficient Network Access",
        "summary":"Using the wireless radio to transfer data is potentially one of your app&#39;s most significant sources of battery drain. To minimize the battery drain associated with network activity, it&#39;s critical that you understand how your connectivity model\u2026",
        "url":"training/efficient-downloads/efficient-network-access.html",
        "image":"images/efficient-downloads/mobile_radio_state_machine.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Minimizing the Effect of Regular Updates",
        "summary":"The optimal frequency of regular updates will vary based on device state, network connectivity, user behavior, and explicit user preferences. Optimizing Battery Life discusses how to build battery-efficient apps that modify their refresh frequency based\u2026",
        "url":"training/efficient-downloads/regular_updates.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Modifying your Download Patterns Based on the Connectivity Type",
        "summary":"When it comes to impact on battery life, not all connection types are created equal. Not only does the Wi-Fi radio use significantly less battery than its wireless radio counterparts, but the radios used in different wireless radio technologies have different\u2026",
        "url":"training/efficient-downloads/connectivity_patterns.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Transferring Data Without Draining the Battery",
        "summary":"In this class you will learn to minimize the battery life impact of downloads and network connections, particularly in relation to the wireless radio.This class demonstrates the best practices for scheduling and executing downloads using techniques such\u2026",
        "url":"training/efficient-downloads/index.html",
        "type":"training",
        "keywords": ["battery","network","wireless"],
        "tags": ["battery","network","wireless"],
        "lang":"en"
      }, 
      {
        "title":"Redundant Downloads are Redundant",
        "summary":"The most fundamental way to reduce your downloads is to download only what you need. In terms of data, that means implementing REST APIs that allow you to specify query criteria that limit the returned data by using parameters such as the time of your\u2026",
        "url":"training/efficient-downloads/redundant_redundant.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Setting Up the App Bar",
        "summary":"In its most basic form, the action bar displays the title for the activity on one side and an overflow menu on the other. Even in this simple form, the app bar provides useful information to the users, and helps to give Android apps a consistent look \u2026",
        "url":"training/appbar/setting-up.html",
        "image":"images/training/appbar/appbar_basic_2x.png",
        "type":"training",
        "keywords": ["appbar","actionbar","toolbar"],
        "tags": ["appbar","actionbar","toolbar"],
        "lang":"en"
      }, 
      {
        "title":"Action Views and Action Providers",
        "summary":"The v7 appcompat support library Toolbar provides several different ways for users to interact with your app. Previous lessons described how to define an action , which can be either a button or a menu item. This lesson describes how to add two versatile\u2026",
        "url":"training/appbar/action-views.html",
        "image":"images/training/appbar/action_view_2x.png",
        "type":"training",
        "keywords": ["action view","action provider"],
        "tags": ["actionview","actionprovider"],
        "lang":"en"
      }, 
      {
        "title":"Adding an Up Action",
        "summary":"Your app should make it easy for users to find their way back to the app&#39;s main screen. One simple way to do this is to provide an Up button on the app bar for all activities except the main one. When the user selects the Up button, the app navigates\u2026",
        "url":"training/appbar/up-action.html",
        "type":"training",
        "keywords": ["appbar","actionbar","up"],
        "tags": ["appbar","actionbar","up"],
        "lang":"en"
      }, 
      {
        "title":"Adding and Handling Actions",
        "summary":"Action Buttons The app bar allows you to add buttons for user actions. This feature lets you put the most important actions for the current context right at the top of the app. For example, a photo browsing app might show share and create album buttons\u2026",
        "url":"training/appbar/actions.html",
        "image":"images/training/appbar/appbar_with_button_2x.png",
        "type":"training",
        "keywords": ["appbar","actionbar"],
        "tags": ["appbar","actionbar"],
        "lang":"en"
      }, 
      {
        "title":"Adding the App Bar",
        "summary":"The app bar , also known as the action bar , is one of the most important design elements in your app&#39;s activities, because it provides a visual structure and interactive elements that are familiar to users. Using the app bar makes your app consistent\u2026",
        "url":"training/appbar/index.html",
        "image":"images/training/appbar/appbar_sheets_2x.png",
        "type":"training",
        "keywords": ["appbar","actionbar"],
        "tags": ["appbar","actionbar"],
        "lang":"en"
      }, 
      {
        "title":"Dealing with Audio Output Hardware",
        "summary":"Users have a number of alternatives when it comes to enjoying the audio from their Android devices. Most devices have a built-in speaker, headphone jacks for wired headsets, and many also feature Bluetooth connectivity and support for A2DP audio. How \u2026",
        "url":"training/managing-audio/audio-output.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Managing Audio Focus",
        "summary":"With multiple apps potentially playing audio it&#39;s important to think about how they should interact. To avoid every music app playing at the same time, Android uses audio focus to moderate audio playback\u2014only apps that hold the audio focus should \u2026",
        "url":"training/managing-audio/audio-focus.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Managing Audio Playback",
        "summary":"If your app plays audio, it\u2019s important that your users can control the audio in a predictable manner. To ensure a great user experience, it\u2019s also important that your app manages the audio focus to ensure multiple apps aren\u2019t playing audio at the same\u2026",
        "url":"training/managing-audio/index.html",
        "type":"training",
        "keywords": ["audio","media"],
        "tags": ["audio","media"],
        "lang":"en"
      }, 
      {
        "title":"Controlling Your App\u2019s Volume and Playback",
        "summary":"A good user experience is a predictable one. If your app plays media it\u2019s important that your users can control the volume of your app using the hardware or software volume controls of their device, bluetooth headset, or headphones. Similarly, where appropriate\u2026",
        "url":"training/managing-audio/volume-playback.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Configuring Auto Backup for Apps",
        "summary":"Users frequently invest time and effort to configure apps just the way they like them. Switching to a new device can cancel out all that careful configuration. For apps whose target SDK version is Android 6.0 (API level 23) and higher, devices running\u2026",
        "url":"training/backup/autosyncapi.html",
        "image":"images/cards/card-auto-backup_2x.png",
        "type":"training",
        "keywords": ["backup","marshmallow","androidm"],
        "tags": ["backup","marshmallow","androidm"],
        "lang":"en"
      }, 
      {
        "title":"Backing up App Data to the Cloud",
        "summary":"Users often invest significant time and effort creating data and setting preferences within apps. Preserving that data for users if they replace a broken device or upgrade to a new one is an important part of ensuring a great user experience. This class\u2026",
        "url":"training/backup/index.html",
        "type":"training",
        "keywords": ["cloud","sync","backup"],
        "tags": ["cloud","sync","backup"],
        "lang":"en"
      }, 
      {
        "title":"Using the Backup API",
        "summary":"When a user purchases a new device or resets their existing one, they might expect that when Google Play restores your app back to their device during the initial setup, the previous data associated with the app restores as well. On versions of Android\u2026",
        "url":"training/backup/backupapi.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Testing Your Service",
        "summary":"If you are implementing a local Service as a component of your app, you should test the Service to ensure that it doesn&#39;t behave in an unexpected way. You can create instrumented unit tests to verify that the behavior in the Service is correct; for\u2026",
        "url":"training/testing/integration-testing/service-testing.html",
        "type":"training",
        "keywords": ["testing","service"],
        "tags": ["testing","service"],
        "lang":"en"
      }, 
      {
        "title":"Testing Your Content Provider",
        "summary":"If you are implementing a content provider to store and retrieve data or to make data accessible to other apps, you should test your provider to ensure that it doesn&#39;t behave in an unexpected way. This lesson describes how to test public content providers\u2026",
        "url":"training/testing/integration-testing/content-provider-testing.html",
        "type":"training",
        "keywords": ["testing","content provider"],
        "tags": ["testing","contentprovider"],
        "lang":"en"
      }, 
      {
        "title":"Testing App Component Integrations",
        "summary":"If your app uses components that users do not directly interact with, such as a Service or Content Provider , you should validate that these components behave in a correct way with your app. When developing such components, you should get into the habit\u2026",
        "url":"training/testing/integration-testing/index.html",
        "type":"training",
        "keywords": ["testing","integration"],
        "tags": ["testing","integration"],
        "lang":"en"
      }, 
      {
        "title":"Building Instrumented Unit Tests",
        "summary":"Instrumented unit tests are tests that run on physical devices and emulators, and they can take advantage of the Android framework APIs and supporting APIs, such as the Android Testing Support Library. You should create instrumented unit tests if your\u2026",
        "url":"training/testing/unit-testing/instrumented-unit-tests.html",
        "image":"images/tools/sync-project.png",
        "type":"training",
        "keywords": ["testing","androidjunitrunner","junit","unit test","mock","instrumentation"],
        "tags": ["testing","androidjunitrunner","junit","unittest","mock","instrumentation"],
        "lang":"en"
      }, 
      {
        "title":"Building Effective Unit Tests",
        "summary":"Unit tests are the fundamental tests in your app testing strategy. By creating and running unit tests against your code, you can easily verify that the logic of individual units is correct. Running unit tests after every build helps you to quickly catch\u2026",
        "url":"training/testing/unit-testing/index.html",
        "image":"images/testing/hwtest_junit_success.png",
        "type":"training",
        "keywords": ["testing","androidjunitrunner","junit","unit test"],
        "tags": ["testing","androidjunitrunner","junit","unittest"],
        "lang":"en"
      }, 
      {
        "title":"Building Local Unit Tests",
        "summary":"If your unit test has no dependencies or only has simple dependencies on Android, you should run your test on a local development machine. This testing approach is efficient because it helps you avoid the overhead of loading the target app and unit test\u2026",
        "url":"training/testing/unit-testing/local-unit-tests.html",
        "image":"images/tools/sync-project.png",
        "type":"training",
        "keywords": ["testing","androidjunitrunner","junit","unit test","mock"],
        "tags": ["testing","androidjunitrunner","junit","unittest","mock"],
        "lang":"en"
      }, 
      {
        "title":"\ufeffTesting Display Performance",
        "summary":"User interface (UI) performance testing ensures that your app not only meets its functional requirements, but that user interactions with your app are buttery smooth, running at a consistent 60 frames per second ( why 60fps? ), without any dropped or \u2026",
        "url":"training/testing/performance.html",
        "image":"images/cards/card-test-performance_2x.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Getting Started with Testing",
        "summary":"Android tests are based on JUnit , and you can run them either as local unit tests on the JVM or as instrumented tests on an Android device. This page provides an introduction to the concepts and tools for building Android tests. When using Android Studio\u2026",
        "url":"training/testing/start/index.html",
        "image":"images/tools/studio-main-screen.png",
        "type":"training",
        "keywords": ["testing"],
        "tags": ["testing"],
        "lang":"en"
      }, 
      {
        "title":"Testing UI for a Single App",
        "summary":"Testing user interactions within a single app helps to ensure that users do not encounter unexpected results or have a poor experience when interacting with your app. You should get into the habit of creating user interface (UI) tests if you need to verify\u2026",
        "url":"training/testing/ui-testing/espresso-testing.html",
        "type":"training",
        "keywords": ["testing","espresso"],
        "tags": ["testing","espresso"],
        "lang":"en"
      }, 
      {
        "title":"Automating User Interface Tests",
        "summary":"User interface (UI) testing lets you ensure that your app meets its functional requirements and achieves a high standard of quality such that it is more likely to be successfully adopted by users. One approach to UI testing is to simply have a human tester\u2026",
        "url":"training/testing/ui-testing/index.html",
        "image":"images/testing/UIAutomatorViewer.png",
        "type":"training",
        "keywords": ["testing"],
        "tags": ["testing"],
        "lang":"en"
      }, 
      {
        "title":"Testing UI for Multiple Apps",
        "summary":"A user interface (UI) test that involves user interactions across multiple apps lets you verify that your app behaves correctly when the user flow crosses into other apps or into the system UI. An example of such a user flow is a messaging app that lets\u2026",
        "url":"training/testing/ui-testing/uiautomator-testing.html",
        "type":"training",
        "keywords": ["testing","ui automator"],
        "tags": ["testing","uiautomator"],
        "lang":"en"
      }, 
      {
        "title":"Best Practices for Testing",
        "summary":"Starting point for testing Android apps, with guidelines, information, and examples.",
        "url":"training/testing/index.html",
        "image":"images/testing/hwtest_junit_success.png",
        "type":"training",
        "keywords": ["testing"],
        "tags": ["testing"],
        "lang":"en"
      }, 
      {
        "title":"Displaying Card Flip Animations",
        "summary":"This lesson shows you how to do a card flip animation with custom fragment animations. Card flips animate between views of content by showing an animation that emulates a card flipping over. Here&#39;s what a card flip looks like: If you want to jump \u2026",
        "url":"training/animation/cardflip.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Animating Layout Changes",
        "summary":"A layout animation is a pre-loaded animation that the system runs each time you make a change to the layout configuration. All you need to do is set an attribute in the layout to tell the Android system to animate these layout changes, and system-default\u2026",
        "url":"training/animation/layout.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Using ViewPager for Screen Slides",
        "summary":"Screen slides are transitions between one entire screen to another and are common with UIs like setup wizards or slideshows. This lesson shows you how to do screen slides with a ViewPager provided by the support library . ViewPagers can animate screen\u2026",
        "url":"training/animation/screen-slide.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Zooming a View",
        "summary":"This lesson demonstrates how to do a touch-to-zoom animation, which is useful for apps such as photo galleries to animate a view from a thumbnail to a full-size image that fills the screen. Here&#39;s what a touch-to-zoom animation looks like that expands\u2026",
        "url":"training/animation/zoom.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Crossfading Two Views",
        "summary":"Crossfade animations (also know as dissolve) gradually fade out one UI component while simultaneously fading in another. This animation is useful for situations where you want to switch content or views in your app. Crossfades are very subtle and short\u2026",
        "url":"training/animation/crossfade.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Adding Animations",
        "summary":"Animations can add subtle visual cues that notify users about what&#39;s going on in your app and improve their mental model of your app&#39;s interface. Animations are especially useful when the screen changes state, such as when content loads or new\u2026",
        "url":"training/animation/index.html",
        "type":"training",
        "keywords": ["animator","views","layout","user interface"],
        "tags": ["animator","views","layout","userinterface"],
        "lang":"en"
      }, 
      {
        "title":"Creating a Scene",
        "summary":"Scenes store the state of a view hierarchy, including all its views and their property values. The transitions framework can run animations between a starting and an ending scene. The starting scene is often determined automatically from the current state\u2026",
        "url":"training/transitions/scenes.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"The Transitions Framework",
        "summary":"Animating your app&#39;s user interface provides more than just visual appeal. Animations highlight changes and provide visual cues that help users learn how your app works. To help you animate a change between one view hierarchy and another, Android \u2026",
        "url":"training/transitions/overview.html",
        "image":"images/transitions/transitions_diagram.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating Custom Transitions",
        "summary":"A custom transition enables you to create an animation that is not available from any of the built-in transition classes. For example, you can define a custom transition that turns the foreground color of text and input fields to gray to indicate that\u2026",
        "url":"training/transitions/custom-transitions.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Applying a Transition",
        "summary":"In the transitions framework, animations create a series of frames that depict a change between the view hierarchies in the starting and ending scenes. The framework represents these animations as transition objects, which contain information about an\u2026",
        "url":"training/transitions/transitions.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Animating Views Using Scenes and Transitions",
        "summary":"DevBytes: Android 4.4 Transitions The user interface of an activity often changes in response to user input and other events. For example, an activity that contains a form where users can type search queries can hide the form when the user submits it \u2026",
        "url":"training/transitions/index.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Managing Touch Events in a ViewGroup",
        "summary":"Handling touch events in a ViewGroup takes special care, because it&#39;s common for a ViewGroup to have children that are targets for different touch events than the ViewGroup itself. To make sure that each view correctly receives the touch events intended\u2026",
        "url":"training/gestures/viewgroup.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Handling Multi-Touch Gestures",
        "summary":"A multi-touch gesture is when multiple pointers (fingers) touch the screen at the same time. This lesson describes how to detect gestures that involve multiple pointers. When multiple pointers touch the screen at the same time, the system generates the\u2026",
        "url":"training/gestures/multi.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Tracking Movement",
        "summary":"This lesson describes how to track movement in touch events. A new onTouchEvent() is triggered with an ACTION_MOVE event whenever the current touch contact position, pressure, or size changes. As described in Detecting Common Gestures , all of these events\u2026",
        "url":"training/gestures/movement.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Animating a Scroll Gesture",
        "summary":"In Android, scrolling is typically achieved by using the ScrollView class. Any standard layout that might extend beyond the bounds of its container should be nested in a ScrollView to provide a scrollable view that&#39;s managed by the framework. Implementing\u2026",
        "url":"training/gestures/scroll.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Using Touch Gestures",
        "summary":"This class describes how to write apps that allow users to interact with an app via touch gestures. Android provides a variety of APIs to help you create and detect gestures. Although your app should not depend on touch gestures for basic behaviors (since\u2026",
        "url":"training/gestures/index.html",
        "type":"training",
        "keywords": ["input","navigation","gesturedetector","scroller"],
        "tags": ["input","navigation","gesturedetector","scroller"],
        "lang":"en"
      }, 
      {
        "title":"Dragging and Scaling",
        "summary":"This lesson describes how to use touch gestures to drag and scale on-screen objects, using onTouchEvent() to intercept touch events. A common operation for a touch gesture is to use it to drag an object across the screen. The following snippet lets the\u2026",
        "url":"training/gestures/scale.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Detecting Common Gestures",
        "summary":"A &quot;touch gesture&quot; occurs when a user places one or more fingers on the touch screen, and your application interprets that pattern of touches as a particular gesture. There are correspondingly two phases to gesture detection: The examples in \u2026",
        "url":"training/gestures/detector.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Best Practices for Performance",
        "summary":"These classes and articles help you build an app that&#39;s smooth, responsive, and uses as little battery as possible.\u2026",
        "url":"training/best-performance.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Adding Sign-In",
        "summary":"Google Sign-In for Android lets you authenticate a user with the same credentials they use on Google. After a user signs in with Google, you can create more engaging experiences and drive usage of your app. The Google Android API allows you to integrate\u2026",
        "url":"training/sign-in/index.html",
        "image":"images/google/gps-googleplus.png",
        "type":"training",
        "keywords": ["authentication","signin"],
        "tags": ["authentication","signin"],
        "lang":"en"
      }, 
      {
        "title":"Responding to Touch Events",
        "summary":"Making objects move according to a preset program like the rotating triangle is useful for getting some attention, but what if you want to have users interact with your OpenGL ES graphics? The key to making your OpenGL ES application touch interactive\u2026",
        "url":"training/graphics/opengl/touch.html",
        "image":"images/opengl/ogl-triangle-touch.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Adding Motion",
        "summary":"Drawing objects on screen is a pretty basic feature of OpenGL, but you can do this with other Android graphics framwork classes, including Canvas and Drawable objects. OpenGL ES provides additional capabilities for moving and transforming drawn objects\u2026",
        "url":"training/graphics/opengl/motion.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Drawing Shapes",
        "summary":"After you define shapes to be drawn with OpenGL, you probably want to draw them. Drawing shapes with the OpenGL ES 2.0 takes a bit more code than you might imagine, because the API provides a great deal of control over the graphics rendering pipeline.\u2026",
        "url":"training/graphics/opengl/draw.html",
        "image":"images/opengl/ogl-triangle.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Defining Shapes",
        "summary":"Being able to define shapes to be drawn in the context of an OpenGL ES view is the first step in creating your high-end graphics masterpiece. Drawing with OpenGL ES can be a little tricky without knowing a few basic things about how OpenGL ES expects \u2026",
        "url":"training/graphics/opengl/shapes.html",
        "image":"images/opengl/ccw-square.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Building an OpenGL ES Environment",
        "summary":"In order to draw graphics with OpenGL ES in your Android application, you must create a view container for them. One of the more straight-forward ways to do this is to implement both a GLSurfaceView and a Renderer. A GLSurfaceView is a view container \u2026",
        "url":"training/graphics/opengl/environment.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Displaying Graphics with OpenGL ES",
        "summary":"The Android framework provides plenty of standard tools for creating attractive, functional graphical user interfaces. However, if you want more control of what your application draws on screen, or are venturing into three dimensional graphics, you need\u2026",
        "url":"training/graphics/opengl/index.html",
        "type":"training",
        "keywords": ["open gl","graphics"],
        "tags": ["opengl","graphics"],
        "lang":"en"
      }, 
      {
        "title":"Applying Projection and Camera Views",
        "summary":"In the OpenGL ES environment, projection and camera views allow you to display drawn objects in a way that more closely resembles how you see physical objects with your eyes. This simulation of physical viewing is done with mathematical transformations\u2026",
        "url":"training/graphics/opengl/projection.html",
        "image":"images/opengl/ogl-triangle-projected.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Best Practices for User Input",
        "summary":"These classes cover various subjects of user input, such as touch screen gestures and text input through on-screen input methods and hardware keyboards.\u2026",
        "url":"training/best-user-input.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Printing HTML Documents",
        "summary":"Printing out content beyond a simple photo on Android requires composing text and graphics in a print document. The Android framework provides a way to use HTML to compose a document and print it with a minimum of code. In Android 4.4 (API level 19), \u2026",
        "url":"training/printing/html-docs.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Printing Custom Documents",
        "summary":"For some applications, such as drawing apps, page layout apps and other apps that focus on graphic output, creating beautiful printed pages is a key feature. In this case, it is not enough to print an image or an HTML document. The print output for these\u2026",
        "url":"training/printing/custom-docs.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Printing Photos",
        "summary":"Taking and sharing photos is one of the most popular uses for mobile devices. If your application takes photos, displays them, or allows users to share images, you should consider enabling printing of those images in your application. The Android Support\u2026",
        "url":"training/printing/photos.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Printing Content",
        "summary":"DevBytes: Android 4.4 Printing API Android users frequently view content solely on their devices, but there are times when showing someone a screen is not an adequate way to share information. Being able to print information from your Android application\u2026",
        "url":"training/printing/index.html",
        "type":"training",
        "keywords": ["print","navigation","gesturedetector","scroller"],
        "tags": ["print","navigation","gesturedetector","scroller"],
        "lang":"en"
      }, 
      {
        "title":"Checking URLs with the Safe Browsing API",
        "summary":"SafetyNet provides services for determining whether a URL has been marked as a known threat by Google. The service provides an API your app can use to determine whether a particular URL has been classified by Google as a known threat. Internally, SafetyNet\u2026",
        "url":"training/safebrowsing/index.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Setting Up File Sharing",
        "summary":"To securely offer a file from your app to another app, you need to configure your app to offer a secure handle to the file, in the form of a content URI. The Android FileProvider component generates content URIs for files, based on specifications you \u2026",
        "url":"training/secure-file-sharing/setup-sharing.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Retrieving File Information",
        "summary":"Before a client app tries to work with a file for which it has a content URI, the app can request information about the file from the server app, including the file&#39;s data type and file size. The data type helps the client app to determine if it can\u2026",
        "url":"training/secure-file-sharing/retrieve-info.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Requesting a Shared File",
        "summary":"When an app wants to access a file shared by another app, the requesting app (the client) usually sends a request to the app sharing the files (the server). In most cases, the request starts an Activity in the server app that displays the files it can\u2026",
        "url":"training/secure-file-sharing/request-file.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Sharing Files",
        "summary":"Apps often have a need to offer one or more of their files to another app. For example, an image gallery may want to offer files to image editors, or a file management app may want to allow users to copy and paste files between areas in external storage\u2026",
        "url":"training/secure-file-sharing/index.html",
        "type":"training",
        "keywords": ["fileprovider","share","contentprovider"],
        "tags": ["fileprovider","share","contentprovider"],
        "lang":"en"
      }, 
      {
        "title":"Sharing a File",
        "summary":"Once you have set up your app to share files using content URIs, you can respond to other apps&#39; requests for those files. One way to respond to these requests is to provide a file selection interface from the server app that other applications can\u2026",
        "url":"training/secure-file-sharing/share-file.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating a View Class",
        "summary":"A well-designed custom view is much like any other well-designed class. It encapsulates a specific set of functionality with an easy to use interface, it uses CPU and memory efficiently, and so forth. In addition to being a well-designed class, though\u2026",
        "url":"training/custom-views/create-view.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Optimizing the View",
        "summary":"Now that you have a well-designed view that responds to gestures and transitions between states, ensure that the view runs fast. To avoid a UI that feels sluggish or stutters during playback, ensure that animations consistently run at 60 frames per second\u2026",
        "url":"training/custom-views/optimizing-view.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Custom Drawing",
        "summary":"The most important part of a custom view is its appearance. Custom drawing can be easy or complex according to your application&#39;s needs. This lesson covers some of the most common operations. The most important step in drawing a custom view is to \u2026",
        "url":"training/custom-views/custom-drawing.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Making the View Interactive",
        "summary":"Drawing a UI is only one part of creating a custom view. You also need to make your view respond to user input in a way that closely resembles the real-world action you&#39;re mimicking. Objects should always act in the same way that real objects do. \u2026",
        "url":"training/custom-views/making-interactive.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating Custom Views",
        "summary":"The Android framework has a large set of View classes for interacting with the user and displaying various types of data. But sometimes your app has unique needs that aren\u2019t covered by the built-in views. This class shows you how to create your own views\u2026",
        "url":"training/custom-views/index.html",
        "type":"training",
        "keywords": ["widgets","ui","layout"],
        "tags": ["widgets","ui","layout"],
        "lang":"en"
      }, 
      {
        "title":"Checking Device Compatibility with SafetyNet",
        "summary":"SafetyNet provides services for analyzing the configuration of a particular device, to make sure that apps function properly on a particular device and that users have a great experience. The service provides an API your app can use to analyze the device\u2026",
        "url":"training/safetynet/index.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Handling the Results",
        "summary":"As shown in the previous lesson, you should begin loading your data with a CursorLoader in your implementation of onCreateLoader(). The loader then provides the query results to your Activity or FragmentActivity in your implementation of onLoadFinished\u2026",
        "url":"training/load-data-background/handle-results.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Running a Query with a CursorLoader",
        "summary":"A CursorLoader runs an asynchronous query in the background against a ContentProvider, and returns the results to the Activity or FragmentActivity from which it was called. This allows the Activity or FragmentActivity to continue to interact with the \u2026",
        "url":"training/load-data-background/setup-loader.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Loading Data in the Background",
        "summary":"Querying a ContentProvider for data you want to display takes time. If you run the query directly from an Activity, it may get blocked and cause the system to issue an &quot;Application Not Responding&quot; message. Even if it doesn&#39;t, users will \u2026",
        "url":"training/load-data-background/index.html",
        "type":"training",
        "keywords": ["cursorloader"],
        "tags": ["cursorloader"],
        "lang":"en"
      }, 
      {
        "title":"Adding Pages to a Notification",
        "summary":"When you&#39;d like to provide more information without requiring users to open your app on their handheld device, you can add one or more pages to the notification on the wearable. The additional pages appear immediately to the right of the main notification\u2026",
        "url":"training/wearables/notifications/pages.html",
        "image":"wear/images/09_pages.png",
        "type":"training",
        "keywords": ["notifications"],
        "tags": ["notifications"],
        "lang":"en"
      }, 
      {
        "title":"Receiving Voice Input in a Notification",
        "summary":"If you have handheld notifications that include an action to input text, such as reply to an email, it should normally launch an activity on the handheld device to input the text. However, when your notification appears on a wearable, there is no keyboard\u2026",
        "url":"training/wearables/notifications/voice-input.html",
        "image":"wear/images/13_voicereply.png",
        "type":"training",
        "keywords": ["notifications"],
        "tags": ["notifications"],
        "lang":"en"
      }, 
      {
        "title":"Creating a Notification for Wearables",
        "summary":"To build handheld notifications that are also sent to wearables, use Builder. When you build notifications with this class, the system takes care of displaying notifications properly, whether they appear on a handheld or wearable. To import the necessary\u2026",
        "url":"training/wearables/notifications/creating.html",
        "image":"wear/images/circle_email_action.png",
        "type":"training",
        "keywords": ["notifications"],
        "tags": ["notifications"],
        "lang":"en"
      }, 
      {
        "title":"Stacking Notifications",
        "summary":"When creating notifications for a handheld device, you should always aggregate similar notifications into a single summary notification. For example, if your app creates notifications for received messages, you should not show more than one notification\u2026",
        "url":"training/wearables/notifications/stacks.html",
        "image":"wear/images/11_bundles_B.png",
        "type":"training",
        "keywords": ["notifications"],
        "tags": ["notifications"],
        "lang":"en"
      }, 
      {
        "title":"Adding Wearable Features to Notifications",
        "summary":"When an Android handheld (phone or tablet) and Android wearable are connected, the handheld automatically shares notifications with the wearable. On the wearable, each notification appears as a new card in the context stream . However, to give users the\u2026",
        "url":"training/wearables/notifications/index.html",
        "image":"wear/images/01_notifications.png",
        "type":"training",
        "keywords": ["notifications","wear"],
        "tags": ["notifications","wear"],
        "lang":"en"
      }, 
      {
        "title":"Addressing Common Issues",
        "summary":"Creating a custom watch face for Android Wear is substantially different from creating notifications and wearable-specific activities. This class shows you how to resolve some issues that you may encounter as you implement your first few watch faces. \u2026",
        "url":"training/wearables/watch-faces/issues.html",
        "image":"training/wearables/watch-faces/images/AnalogNoCard.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Building a Watch Face Service",
        "summary":"Watch faces in Android Wear are implemented as services and packaged inside a wearable app . When users install a handheld app that contains a wearable app with watch faces, these watch faces become available in the Android Wear companion app on the handheld\u2026",
        "url":"training/wearables/watch-faces/service.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Showing Information in Watch Faces",
        "summary":"In addition to telling time, Android Wear devices provide users with contextually relevant information in the form of cards, notifications, and other wearable apps. Creating a custom watch face not only gives you the opportunity to tell time in visually\u2026",
        "url":"training/wearables/watch-faces/information.html",
        "image":"training/wearables/watch-faces/images/Render_Saturn.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Providing Configuration Activities",
        "summary":"When users install a handheld app that contains a wearable app with watch faces, these watch faces become available in the Android Wear companion app on the companion device and in the watch face picker on the wearable. Users can choose the active watch\u2026",
        "url":"training/wearables/watch-faces/configuration.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Optimizing Performance and Battery Life",
        "summary":"This lesson has tips for conserving power and improving performance. A watch face runs continuously, so it must use power efficiently. Services must not perform unnecessary computations. Watch faces with animations must run smoothly while accommodating\u2026",
        "url":"training/wearables/watch-faces/performance.html",
        "image":"training/wearables/watch-faces/images/ClockHandFull.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Designing Watch Faces",
        "summary":"Watch Faces Similar to the process of designing a traditional watch face, creating one for Android Wear is an exercise in visualizing time clearly. Android Wear devices provide advanced capabilities for watch faces that you can leverage in your designs\u2026",
        "url":"training/wearables/watch-faces/designing.html",
        "image":"training/wearables/watch-faces/images/Render_Next.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating Interactive Watch Faces",
        "summary":"Your watch&#39;s display is more than just a pretty face: Users can interact with it. For example, a user might tap the watch face to learn what song is currently playing, or to see the day&#39;s agenda. Android Wear allows Android Wear watch faces to\u2026",
        "url":"training/wearables/watch-faces/interacting.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Drawing Watch Faces",
        "summary":"After you have configured your project and added a class that implements the watch face service, you can start writing code to initialize and draw your custom watch face. This lesson includes examples from the WatchFace sample to show how the system uses\u2026",
        "url":"training/wearables/watch-faces/drawing.html",
        "image":"training/wearables/watch-faces/images/preview_analog.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating Watch Faces",
        "summary":"Watch Faces DevBytes: Watch Faces for Android Wear Watch faces in Android Wear leverage a dynamic digital canvas to tell time using colors, animations, and relevant contextual information. The Android Wear companion app provides watch faces with different\u2026",
        "url":"training/wearables/watch-faces/index.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Using Speakers on Wearables",
        "summary":"Some Android Wear devices include speakers, enabling them to incorporate sound into their apps and offer an extra dimension of engagement with the user. A speaker-equipped Wear device might trigger a clock or timer alarm, complete with audio notification\u2026",
        "url":"training/wearables/wearable-sounds.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Showing Confirmations",
        "summary":"Confirmations in Android Wear apps use the whole screen or a larger portion of it than those in handheld apps. This ensures that users can see these confirmations by just glancing at the screen and that they have large enough touch targets to cancel an\u2026",
        "url":"training/wearables/ui/confirm.html",
        "image":"wear/images/09_uilib.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Exiting Full-Screen Activities",
        "summary":"By default, users exit Android Wear activities by swiping from left to right. If the app contains horizontally scrollable content, users first have to navigate to the edge of the content and then swipe again from left to right to exit the app. For more\u2026",
        "url":"training/wearables/ui/exit.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating a 2D Picker",
        "summary":"The 2D Picker pattern in Android Wear allows users to navigate and choose from a set of items shown as pages. The Wearable UI Library lets you easily implement this pattern using a page grid, which is a layout manager that allows users to scroll vertically\u2026",
        "url":"training/wearables/ui/2d-picker.html",
        "image":"wear/images/07_uilib.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating Lists",
        "summary":"Lists let users select an item from a set of choices easily on wearable devices. This lesson shows you how to create lists in your Android Wear apps. The Wearable UI Library includes the WearableListView class, which is a list implementation optimized\u2026",
        "url":"training/wearables/ui/lists.html",
        "image":"wear/images/06_uilib.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating Cards",
        "summary":"Cards present information to users with a consistent look and feel across different apps. This lesson shows you how to create cards in your Android Wear apps. The Wearable UI Library provides implementations of cards specifically designed for wearable\u2026",
        "url":"training/wearables/ui/cards.html",
        "image":"wear/images/05_uilib.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Defining Layouts",
        "summary":"Wearables use the same layout techniques as handheld Android devices, but need to be designed with specific constraints. Do not port functionality and the UI from a handheld app and expect a good experience. For more information on how to design great\u2026",
        "url":"training/wearables/ui/layouts.html",
        "image":"wear/images/01_uilib.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating Custom UIs for Wear Devices",
        "summary":"User interfaces for wearable apps differ significantly from those built for handheld devices. Apps for wearables should follow the Android Wear design principles and implement the recommended UI patterns , which ensure a consistent user experience across\u2026",
        "url":"training/wearables/ui/index.html",
        "image":"wear/images/10_uilib.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Transferring Assets",
        "summary":"To send large blobs of binary data over the Bluetooth transport, such as images, attach an Asset to a data item and the put the data item into the replicated data store. Assets automatically handle caching of data to prevent retransmission and conserve\u2026",
        "url":"training/wearables/data-layer/assets.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Sending and Receiving Messages",
        "summary":"You send messages using the MessageApi and attach the following items to the message: Unlike with data items, there is no syncing between the handheld and wearable apps. Messages are a one-way communication mechanism that&#39;s good for remote procedure\u2026",
        "url":"training/wearables/data-layer/messages.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Accessing the Wearable Data Layer",
        "summary":"To call the Data Layer API, create an instance of GoogleApiClient , the main entry point for any of the Google Play services APIs. GoogleApiClient provides a builder that makes it easy to create an instance of the client. A minimal GoogleApiClient looks\u2026",
        "url":"training/wearables/data-layer/accessing.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Handling Data Layer Events",
        "summary":"When you make calls to the Data Layer API, you can receive the status of the call when it completes as well as listen for any changes that the call ends up making with listeners. You&#39;ll notice that calls to the Data Layer API sometimes return a PendingResult\u2026",
        "url":"training/wearables/data-layer/events.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Syncing Data Items",
        "summary":"A DataItem defines the data interface that the system uses to synchronize data between handhelds and wearables. A DataItem generally consists of the following items: You normally don&#39;t implement DataItem directly. Instead, you: When requesting data\u2026",
        "url":"training/wearables/data-layer/data-items.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Sending and Syncing Data",
        "summary":"The Wearable Data Layer API, which is part of Google Play services, provides a communication channel for your handheld and wearable apps. The API consists of a set of data objects that the system can send and synchronize over the wire and listeners that\u2026",
        "url":"training/wearables/data-layer/index.html",
        "image":"wear/images/wear_cloud_node.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Packaging Wearable Apps",
        "summary":"When publishing to users, you must package a wearable app inside of a handheld app, because users cannot browse and install apps directly on the wearable. If packaged properly, when users download the handheld app, the system automatically pushes the \u2026",
        "url":"training/wearables/apps/packaging.html",
        "type":"training",
        "keywords": ["wear"],
        "tags": ["wear"],
        "lang":"en"
      }, 
      {
        "title":"Keeping Your App Visible",
        "summary":"Some Wear apps are most useful when they are constantly visible to the user. For example, users out on a run can glance at their wearable to see the distance covered and time elapsed, or after recording a grocery list on their wearable, users can quickly\u2026",
        "url":"training/wearables/apps/always-on.html",
        "type":"training",
        "keywords": ["wear"],
        "tags": ["wear"],
        "lang":"en"
      }, 
      {
        "title":"Creating Android Wear Apps for China",
        "summary":"Handsets sold in China do not have Google Play services preinstalled. For this reason, wearable apps running on devices in China must communicate with paired handsets through the Android Wear companion app. To enable you to develop a single APK that works\u2026",
        "url":"training/wearables/apps/creating-app-china.html",
        "type":"training",
        "keywords": ["wearable","apps","china"],
        "tags": ["wearable","apps","china"],
        "lang":"en"
      }, 
      {
        "title":"Creating and Running a Wearable App",
        "summary":"Wearable apps run directly on the wearable device, giving you access to low-level hardware such as sensors, activities, services, and more, right on the wearable. A companion handheld app that contains the wearable app is also required when you want to\u2026",
        "url":"training/wearables/apps/creating.html",
        "type":"training",
        "keywords": ["wear"],
        "tags": ["wear"],
        "lang":"en"
      }, 
      {
        "title":"Debugging over Bluetooth",
        "summary":"You can debug your wearable over Bluetooth by routing its debug output to the handheld device that&#39;s connected to your development machine. In the Android Wear companion app, you should see the status change to: If there are no other devices connected\u2026",
        "url":"training/wearables/apps/bt-debugging.html",
        "type":"training",
        "keywords": ["wear"],
        "tags": ["wear"],
        "lang":"en"
      }, 
      {
        "title":"Creating Custom Layouts",
        "summary":"Creating layouts for wearables is the same as handheld devices, except you have to design for the screen size and for glanceability. Do not port functionality and the UI from a handheld app and expect a good experience. You should create custom layouts\u2026",
        "url":"training/wearables/apps/layouts.html",
        "type":"training",
        "keywords": ["wear"],
        "tags": ["wear"],
        "lang":"en"
      }, 
      {
        "title":"Creating Wearable Apps",
        "summary":"Wearable apps run directly on the device, giving you access to hardware such as sensors and the GPU. They are fundamentally the same as apps built for other devices using the Android SDK, but differ greatly in design and usability and the amount of functionality\u2026",
        "url":"training/wearables/apps/index.html",
        "image":"wear/images/01_create.png",
        "type":"training",
        "keywords": ["wear"],
        "tags": ["wear"],
        "lang":"en"
      }, 
      {
        "title":"Adding Voice Capabilities",
        "summary":"Voice actions are an important part of the wearable experience. They let users carry out actions hands-free and quickly. Wear provides two types of voice actions: The Android Wear platform provides several voice intents that are based on user actions \u2026",
        "url":"training/wearables/apps/voice.html",
        "type":"training",
        "keywords": ["wear"],
        "tags": ["wear"],
        "lang":"en"
      }, 
      {
        "title":"Best Practices for User Interface",
        "summary":"These classes teach you how to build a user interface using Android layouts for all types of devices. Android provides a flexible framework for UI design that allows your app to display different layouts for different devices, create custom UI widgets\u2026",
        "url":"training/best-ui.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Optimizing Network Data Usage",
        "summary":"Over the life of a smartphone, the cost of a cellular data plan can easily exceed the cost of the device itself. From Android 7.0 (API level 24), users users can enable Data Saver on a device-wide basis in order optimize their device&#39;s data usage,\u2026",
        "url":"training/basics/network-ops/data-saver.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Managing Network Usage",
        "summary":"This lesson describes how to write applications that have fine-grained control over their usage of network resources. If your application performs a lot of network operations, you should provide user settings that allow users to control your app\u2019s data\u2026",
        "url":"training/basics/network-ops/managing.html",
        "image":"images/training/basics/network-settings1.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Connecting to the Network",
        "summary":"This lesson shows you how to implement a simple application that connects to the network. It explains some of the best practices you should follow in creating even the simplest network-connected app. Note that to perform the network operations described\u2026",
        "url":"training/basics/network-ops/connecting.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Performing Network Operations",
        "summary":"This class explains the basic tasks involved in connecting to the network, monitoring the network connection (including connection changes), and giving users control over an app&#39;s network usage. It also describes how to parse and consume XML data.\u2026",
        "url":"training/basics/network-ops/index.html",
        "type":"training",
        "keywords": ["network","wireless"],
        "tags": ["network","wireless"],
        "lang":"en"
      }, 
      {
        "title":"Parsing XML Data",
        "summary":"Extensible Markup Language (XML) is a set of rules for encoding documents in machine-readable form. XML is a popular format for sharing data on the internet. Websites that frequently update their content, such as news sites or blogs, often provide an \u2026",
        "url":"training/basics/network-ops/xml.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Stopping and Restarting an Activity",
        "summary":"Properly stopping and restarting your activity is an important process in the activity lifecycle that ensures your users perceive that your app is always alive and doesn&#39;t lose their progress. There are a few of key scenarios in which your activity\u2026",
        "url":"training/basics/activity-lifecycle/stopping.html",
        "image":"images/training/basics/basic-lifecycle-stopped.png",
        "type":"training",
        "keywords": ["activity lifecycle"],
        "tags": ["activitylifecycle"],
        "lang":"en"
      }, 
      {
        "title":"Starting an Activity",
        "summary":"Unlike other programming paradigms in which apps are launched with a main() method, the Android system initiates code in an Activity instance by invoking specific callback methods that correspond to specific stages of its lifecycle. There is a sequence\u2026",
        "url":"training/basics/activity-lifecycle/starting.html",
        "image":"images/training/basics/basic-lifecycle.png",
        "type":"training",
        "keywords": ["activity lifecycle"],
        "tags": ["activitylifecycle"],
        "lang":"en"
      }, 
      {
        "title":"Pausing and Resuming an Activity",
        "summary":"During normal app use, the app sometimes loses focus, causing the activity to pause . For example, when apps run in multi-window mode , only one of the apps has the focus at any time; the system pauses all other apps. Similarly, when a semi-transparent\u2026",
        "url":"training/basics/activity-lifecycle/pausing.html",
        "image":"images/training/basics/basic-lifecycle-paused.png",
        "type":"training",
        "keywords": ["activity lifecycle"],
        "tags": ["activitylifecycle"],
        "lang":"en"
      }, 
      {
        "title":"Managing the Activity Lifecycle",
        "summary":"As a user navigates through, out of, and back to your app, the Activity instances in your app transition between different states in their lifecycle. For instance, when your activity starts for the first time, it comes to the foreground of the system \u2026",
        "url":"training/basics/activity-lifecycle/index.html",
        "type":"training",
        "keywords": ["activity lifecycle"],
        "tags": ["activitylifecycle"],
        "lang":"en"
      }, 
      {
        "title":"Recreating an Activity",
        "summary":"There are a few scenarios in which your activity is destroyed due to normal app behavior, such as when the user presses the Back button or your activity signals its own destruction by calling finish(). The system may also destroy your activity if it&#39\u2026",
        "url":"training/basics/activity-lifecycle/recreating.html",
        "image":"images/training/basics/basic-lifecycle-savestate.png",
        "type":"training",
        "keywords": ["activity lifecycle"],
        "tags": ["activitylifecycle"],
        "lang":"en"
      }, 
      {
        "title":"Supporting Different Screens",
        "summary":"Android categorizes device screens using two general properties: size and density. You should expect that your app will be installed on devices with screens that range in both size and density. As such, you should include some alternative resources that\u2026",
        "url":"training/basics/supporting-devices/screens.html",
        "type":"training",
        "keywords": ["layouts"],
        "tags": ["layouts"],
        "lang":"en"
      }, 
      {
        "title":"Supporting Different Platform Versions",
        "summary":"Training on how to declare support for minimum and target API levels.",
        "url":"training/basics/supporting-devices/platforms.html",
        "type":"training",
        "keywords": ["styles"],
        "tags": ["styles"],
        "lang":"en"
      }, 
      {
        "title":"Supporting Different Languages",
        "summary":"It\u2019s always a good practice to extract UI strings from your app code and keep them in an external file. Android makes this easy with a resources directory in each Android project. If you created your project using the Android SDK Tools (read Creating \u2026",
        "url":"training/basics/supporting-devices/languages.html",
        "type":"training",
        "keywords": ["strings","localizing","localization","resources","formats","l10n"],
        "tags": ["strings","localizing","localization","resources","formats","l10n"],
        "lang":"en"
      }, 
      {
        "title":"Supporting Different Devices",
        "summary":"Android devices come in many shapes and sizes all around the world. With a wide range of device types, you have an opportunity to reach a huge audience with your app. In order to be as successful as possible on Android, your app needs to adapt to various\u2026",
        "url":"training/basics/supporting-devices/index.html",
        "type":"training",
        "keywords": ["layouts","resources","screens","localization"],
        "tags": ["layouts","resources","screens","localization"],
        "lang":"en"
      }, 
      {
        "title":"Running Your App",
        "summary":"In the previous lesson , you created an Android project. The project contains a default app that displays &quot;Hello World&quot;. In this lesson, you will run the app on a device or emulator. Set up your device as follows: Run the app from Android Studio\u2026",
        "url":"training/basics/firstapp/running-app.html",
        "image":"images/tools/as-run.png",
        "type":"training",
        "keywords": ["emulator"],
        "tags": ["emulator"],
        "lang":"en"
      }, 
      {
        "title":"Starting Another Activity",
        "summary":"After completing the previous lesson , you have an app that shows an activity (a single screen) with a text field and a button. In this lesson, you\u2019ll add some code to MainActivity that starts a new activity when the user clicks the Send button. This \u2026",
        "url":"training/basics/firstapp/starting-activity.html",
        "type":"training",
        "keywords": ["intents"],
        "tags": ["intents"],
        "lang":"en"
      }, 
      {
        "title":"Creating an Android Project",
        "summary":"This lesson shows you how to create a new Android project with Android Studio and describes some of the files in the project. Here&#39;s a brief explanation of each field: The Minimum Required SDK is the earliest version of Android that your app supports\u2026",
        "url":"training/basics/firstapp/creating-project.html",
        "type":"training",
        "keywords": ["project setup"],
        "tags": ["projectsetup"],
        "lang":"en"
      }, 
      {
        "title":"Building a Simple User Interface",
        "summary":"In this lesson, you create a layout in XML that includes a text field and a button. In the next lesson, your app responds when the button is pressed by sending the content of the text field to another activity. The graphical user interface for an Android\u2026",
        "url":"training/basics/firstapp/building-ui.html",
        "image":"images/viewgroup.png",
        "type":"training",
        "keywords": ["ui"],
        "tags": ["ui"],
        "lang":"en"
      }, 
      {
        "title":"Building Your First App",
        "summary":"If you're new to Android app development, this where you should begin. This series of lessons shows you how to create a new project, build a simple app, and run it on a device or emulator.",
        "url":"training/basics/firstapp/index.html",
        "type":"training",
        "keywords": ["sdk tools"],
        "tags": ["sdktools"],
        "lang":"en"
      }, 
      {
        "title":"Building a Flexible UI",
        "summary":"When designing your application to support a wide range of screen sizes, you can reuse your fragments in different layout configurations to optimize the user experience based on the available screen space. For example, on a handset device it might be \u2026",
        "url":"training/basics/fragments/fragment-ui.html",
        "image":"images/training/basics/fragments-screen-mock.png",
        "type":"training",
        "keywords": ["fragments"],
        "tags": ["fragments"],
        "lang":"en"
      }, 
      {
        "title":"Creating a Fragment",
        "summary":"You can think of a fragment as a modular section of an activity, which has its own lifecycle, receives its own input events, and which you can add or remove while the activity is running (sort of like a &quot;sub activity&quot; that you can reuse in different\u2026",
        "url":"training/basics/fragments/creating.html",
        "type":"training",
        "keywords": ["fragments"],
        "tags": ["fragments"],
        "lang":"en"
      }, 
      {
        "title":"Communicating with Other Fragments",
        "summary":"In order to reuse the Fragment UI components, you should build each as a completely self-contained, modular component that defines its own layout and behavior. Once you have defined these reusable Fragments, you can associate them with an Activity and\u2026",
        "url":"training/basics/fragments/communicating.html",
        "type":"training",
        "keywords": ["fragments"],
        "tags": ["fragments"],
        "lang":"en"
      }, 
      {
        "title":"Building a Dynamic UI with Fragments",
        "summary":"To create a dynamic and multi-pane user interface on Android, you need to encapsulate UI components and activity behaviors into modules that you can swap into and out of your activities. You can create these modules with the Fragment class, which behaves\u2026",
        "url":"training/basics/fragments/index.html",
        "type":"training",
        "keywords": ["fragments","user interface","support library"],
        "tags": ["fragments","userinterface","supportlibrary"],
        "lang":"en"
      }, 
      {
        "title":"Sending the User to Another App",
        "summary":"One of Android&#39;s most important features is an app&#39;s ability to send the user to another app based on an &quot;action&quot; it would like to perform. For example, if your app has the address of a business that you&#39;d like to show on a map, \u2026",
        "url":"training/basics/intents/sending.html",
        "image":"images/training/basics/intents-choice.png",
        "type":"training",
        "keywords": ["intents"],
        "tags": ["intents"],
        "lang":"en"
      }, 
      {
        "title":"Allowing Other Apps to Start Your Activity",
        "summary":"The previous two lessons focused on one side of the story: starting another app&#39;s activity from your app. But if your app can perform an action that might be useful to another app, your app should be prepared to respond to action requests from other\u2026",
        "url":"training/basics/intents/filters.html",
        "type":"training",
        "keywords": ["intents"],
        "tags": ["intents"],
        "lang":"en"
      }, 
      {
        "title":"Getting a Result from an Activity",
        "summary":"Starting another activity doesn&#39;t have to be one-way. You can also start another activity and receive a result back. To receive a result, call startActivityForResult() (instead of startActivity()). For example, your app can start a camera app and \u2026",
        "url":"training/basics/intents/result.html",
        "type":"training",
        "keywords": ["intents"],
        "tags": ["intents"],
        "lang":"en"
      }, 
      {
        "title":"Interacting with Other Apps",
        "summary":"An Android app typically has several activities . Each activity displays a user interface that allows the user to perform a specific task (such as view a map or take a photo). To take the user from one activity to another, your app must use an Intent \u2026",
        "url":"training/basics/intents/index.html",
        "type":"training",
        "keywords": ["intents","activity"],
        "tags": ["intents","activity"],
        "lang":"en"
      }, 
      {
        "title":"Saving Data in SQL Databases",
        "summary":"Saving data to a database is ideal for repeating or structured data, such as contact information. This class assumes that you are familiar with SQL databases in general and helps you get started with SQLite databases on Android. The APIs you&#39;ll need\u2026",
        "url":"training/basics/data-storage/databases.html",
        "type":"training",
        "keywords": ["data storage"],
        "tags": ["datastorage"],
        "lang":"en"
      }, 
      {
        "title":"Saving Files",
        "summary":"Android uses a file system that&#39;s similar to disk-based file systems on other platforms. This lesson describes how to work with the Android file system to read and write files with the File APIs. A File object is suited to reading or writing large\u2026",
        "url":"training/basics/data-storage/files.html",
        "type":"training",
        "keywords": ["data storage"],
        "tags": ["datastorage"],
        "lang":"en"
      }, 
      {
        "title":"Saving Key-Value Sets",
        "summary":"If you have a relatively small collection of key-values that you&#39;d like to save, you should use the SharedPreferences APIs. A SharedPreferences object points to a file containing key-value pairs and provides simple methods to read and write them. \u2026",
        "url":"training/basics/data-storage/shared-preferences.html",
        "type":"training",
        "keywords": ["data storage"],
        "tags": ["datastorage"],
        "lang":"en"
      }, 
      {
        "title":"Saving Data",
        "summary":"Most Android apps need to save data, even if only to save information about the app state during onPause() so the user&#39;s progress is not lost. Most non-trivial apps also need to save user settings, and some apps must manage large amounts of information\u2026",
        "url":"training/basics/data-storage/index.html",
        "type":"training",
        "keywords": ["data storage","files","sql","database","preferences"],
        "tags": ["datastorage","files","sql","database","preferences"],
        "lang":"en"
      }, 
      {
        "title":"Building Apps with Content Sharing",
        "summary":"These classes teach you how to create apps that share data between apps and devices.\u2026",
        "url":"training/building-content-sharing.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Processing Bitmaps Off the UI Thread",
        "summary":"The AsyncTask and shows you how to handle concurrency issues. The AsyncTask class provides an easy way to execute some work in a background thread and publish the results back on the UI thread. To use it, create a subclass and override the provided methods\u2026",
        "url":"training/displaying-bitmaps/process-bitmap.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Displaying Bitmaps in Your UI",
        "summary":"This lesson brings together everything from previous lessons, showing you how to load multiple bitmaps into ViewPager and GridView components using a background thread and bitmap cache, while dealing with concurrency and configuration changes. The swipe\u2026",
        "url":"training/displaying-bitmaps/display-bitmap.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Managing Bitmap Memory",
        "summary":"In addition to the steps described in Caching Bitmaps , there are specific things you can do to facilitate garbage collection and bitmap reuse. The recommended strategy depends on which version(s) of Android you are targeting. The BitmapFun sample app\u2026",
        "url":"training/displaying-bitmaps/manage-memory.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Caching Bitmaps",
        "summary":"Loading a single bitmap into your user interface (UI) is straightforward, however things get more complicated if you need to load a larger set of images at once. In many cases (such as with components like ListView, GridView or LruCache class (also available\u2026",
        "url":"training/displaying-bitmaps/cache-bitmap.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Loading Large Bitmaps Efficiently",
        "summary":"Images come in all shapes and sizes. In many cases they are larger than required for a typical application user interface (UI). For example, the system Gallery application displays photos taken using your Android devices&#39;s camera which are typically\u2026",
        "url":"training/displaying-bitmaps/load-bitmap.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Displaying Bitmaps Efficiently",
        "summary":"DevBytes: Bitmap Allocation DevBytes: Making Apps Beautiful - Part 4 - Performance Tuning Learn how to use common techniques to process and load Bitmap objects in a way that keeps your user interface (UI) components responsive and avoids exceeding your\u2026",
        "url":"training/displaying-bitmaps/index.html",
        "type":"training",
        "keywords": ["bitmaps","images","graphics"],
        "tags": ["bitmaps","images","graphics"],
        "lang":"en"
      }, 
      {
        "title":"Handling App Links",
        "summary":"Users following web links on devices are frequently presented with confusing choices. Tapping a link often results in the system asking the user which app should handle that link. For example, clicking a URI in an email from a bank might result in a dialog\u2026",
        "url":"training/app-links/index.html",
        "image":"images/cards/card-app-linking_2x.png",
        "type":"training",
        "keywords": ["androidm","marshmallow"],
        "tags": ["androidm","marshmallow"],
        "lang":"en"
      }, 
      {
        "title":"Authenticating to OAuth2 Services",
        "summary":"In order to securely access an online service, users need to authenticate to the service\u2014they need to provide proof of their identity. For an application that accesses a third-party service, the security problem is even more complicated. Not only does\u2026",
        "url":"training/id-auth/authenticate.html",
        "image":"images/training/oauth_dance.png",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Remembering Your User",
        "summary":"Everyone likes it when you remember their name. One of the simplest, most effective things you can do to make your app more lovable is to remember who your user is\u2014especially when the user upgrades to a new device or starts carrying a tablet as well as\u2026",
        "url":"training/id-auth/identify.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating a Custom Account Type",
        "summary":"So far we&#39;ve talked about accessing Google APIs, which use accounts and users defined by Google. If you have your own online service, though, it won&#39;t have Google accounts or users, so what do you do? It turns out to be relatively straightforward\u2026",
        "url":"training/id-auth/custom_auth.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Remembering Users",
        "summary":"Android users get attached to their devices and to applications that they love. One way to make your application lovable is to make it personal. Android devices know who your user is, what services they have access to, and where they store your data. \u2026",
        "url":"training/id-auth/index.html",
        "type":"training",
        "keywords": ["privacy","oauth","accounts"],
        "tags": ["privacy","oauth","accounts"],
        "lang":"en"
      }, 
      {
        "title":"Building Apps with Graphics &amp; Animation",
        "summary":"These classes teach you how to accomplish tasks with graphics that can give your app an edge on the competition. If you want to go beyond the basic user interface to create a beautiful visual experience, these classes will help you get there.\u2026",
        "url":"training/building-graphics.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Getting Started",
        "summary":"Android Training provides a collection of classes that aim to help you build great apps for Android. Each class explains the steps required to solve a problem or implement a feature using code snippets and sample code for you to use in your apps.",
        "url":"training/index.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating Multiple APKs for Different API Levels",
        "summary":"When developing your Android application to take advantage of multiple APKs on Google Play, it\u2019s important to adopt some good practices from the get-go, and prevent unnecessary headaches further into the development process. This lesson shows you how \u2026",
        "url":"training/multiple-apks/api.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating Multiple APKs for Different Screen Sizes",
        "summary":"When developing your Android application to take advantage of multiple APKs on Google Play, it\u2019s important to adopt some good practices from the get-go, and prevent unnecessary headaches further into the development process. This lesson shows you how \u2026",
        "url":"training/multiple-apks/screensize.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating Multiple APKs with 2+ Dimensions",
        "summary":"When developing your Android application to take advantage of multiple APKs on Google Play, it\u2019s important to adopt some good practices from the get-go, and prevent unnecessary headaches further into the development process. This lesson shows you how \u2026",
        "url":"training/multiple-apks/multiple.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating Multiple APKs for Different GL Textures",
        "summary":"When developing your Android application to take advantage of multiple APKs on Google Play, it\u2019s important to adopt some good practices from the get-go, and prevent unnecessary headaches further into the development process. This lesson shows you how \u2026",
        "url":"training/multiple-apks/texture.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Maintaining Multiple APKs",
        "summary":"Multiple APK support is a feature of Google Play that allows you to publish multiple APKs under the same application listing. Each APK is a complete instance of your application, optimized to target specific device configurations. Each APK can target \u2026",
        "url":"training/multiple-apks/index.html",
        "type":"training",
        "keywords": ["support"],
        "tags": ["support"],
        "lang":"en"
      }, 
      {
        "title":"Using Big View Styles",
        "summary":"Notifications in the notification drawer appear in two main visual styles, normal view and big view. The big view of a notification only appears when the notification is expanded. This happens when the notification is at the top of the drawer, or the \u2026",
        "url":"training/notify-user/expanded.html",
        "image":"images/training/notifications-normalview.png",
        "type":"training",
        "keywords": ["notifications"],
        "tags": ["notifications"],
        "lang":"en"
      }, 
      {
        "title":"Preserving Navigation when Starting an Activity",
        "summary":"Part of designing a notification is preserving the user&#39;s expected navigation experience. For a detailed discussion of this topic, see the Notifications API guide. There are two general situations: To set up a PendingIntent that starts a direct entry\u2026",
        "url":"training/notify-user/navigation.html",
        "type":"training",
        "keywords": ["notifications"],
        "tags": ["notifications"],
        "lang":"en"
      }, 
      {
        "title":"Displaying Progress in a Notification",
        "summary":"Notifications can include an animated progress indicator that shows users the status of an ongoing operation. If you can estimate how long the operation takes and how much of it is complete at any time, use the &quot;determinate&quot; form of the indicator\u2026",
        "url":"training/notify-user/display-progress.html",
        "image":"images/ui/notifications/progress_bar_summary.png",
        "type":"training",
        "keywords": ["notifications"],
        "tags": ["notifications"],
        "lang":"en"
      }, 
      {
        "title":"Building a Notification",
        "summary":"This lesson explains how to create and issue a notification. The examples in this class are based on the Builder class. Builder is in the Support Library . You should use NotificationCompat and its subclasses, particularly Builder, to provide the best\u2026",
        "url":"training/notify-user/build-notification.html",
        "type":"training",
        "keywords": ["notifications"],
        "tags": ["notifications"],
        "lang":"en"
      }, 
      {
        "title":"Updating Notifications",
        "summary":"When you need to issue a notification multiple times for the same type of event, you should avoid making a completely new notification. Instead, you should consider updating a previous notification, either by changing some of its values or by adding to\u2026",
        "url":"training/notify-user/managing.html",
        "type":"training",
        "keywords": ["notifications"],
        "tags": ["notifications"],
        "lang":"en"
      }, 
      {
        "title":"Notifying the User",
        "summary":"A notification is a user interface element that you display outside your app&#39;s normal UI to indicate that an event has occurred. Users can choose to view the notification while using other apps and respond to it when it&#39;s convenient for them. \u2026",
        "url":"training/notify-user/index.html",
        "type":"training",
        "keywords": ["notifications"],
        "tags": ["notifications"],
        "lang":"en"
      }, 
      {
        "title":"Creating Swipe Views with Tabs",
        "summary":"Swipe views provide lateral navigation between sibling screens such as tabs with a horizontal finger gesture (a pattern sometimes known as horizontal paging). This lesson teaches you how to create a tab layout with swipe views for switching between tabs\u2026",
        "url":"training/implementing-navigation/lateral.html",
        "type":"training",
        "keywords": ["viewpager","horizontal","paging","swipe view","tabs"],
        "tags": ["viewpager","horizontal","paging","swipeview","tabs"],
        "lang":"en"
      }, 
      {
        "title":"Implementing Descendant Navigation",
        "summary":"Descendant navigation is navigation down the application&#39;s information hierarchy. This is described in Designing Effective Navigation and also covered in Android Design: Application Structure . Descendant navigation is usually implemented using Intent\u2026",
        "url":"training/implementing-navigation/descendant.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Creating a Navigation Drawer",
        "summary":"The navigation drawer is a panel that displays the app\u2019s main navigation options on the left edge of the screen. It is hidden most of the time, but is revealed when the user swipes a finger from the left edge of the screen or, while at the top level of\u2026",
        "url":"training/implementing-navigation/nav-drawer.html",
        "type":"training",
        "keywords": ["drawerlayout","navigation"],
        "tags": ["drawerlayout","navigation"],
        "lang":"en"
      }, 
      {
        "title":"Providing Up Navigation",
        "summary":"All screens in your app that are not the main entrance to your app (the &quot;home&quot; screen) should offer the user a way to navigate to the logical parent screen in the app&#39;s hierarchy by pressing the Up button in the action bar . This lesson \u2026",
        "url":"training/implementing-navigation/ancestral.html",
        "image":"images/training/implementing-navigation-up.png",
        "type":"training",
        "keywords": ["up navigation","navutils","taskstackbuilder"],
        "tags": ["upnavigation","navutils","taskstackbuilder"],
        "lang":"en"
      }, 
      {
        "title":"Implementing Effective Navigation",
        "summary":"This class demonstrates how to implement the key navigation design patterns detailed in the Designing Effective Navigation class. After reading the lessons in this class, you should have a strong understanding of how to implement navigation patterns with\u2026",
        "url":"training/implementing-navigation/index.html",
        "type":"training",
        "keywords": [],
        "tags": [],
        "lang":"en"
      }, 
      {
        "title":"Providing Proper Back Navigation",
        "summary":"Back navigation is how users move backward through the history of screens they previously visited. All Android devices provide a Back button for this type of navigation, so your app should not add a Back button to the UI . In almost all situations, the\u2026",
        "url":"training/implementing-navigation/temporal.html",
        "type":"training",
        "keywords": ["back navigation","navutils","taskstackbuilder"],
        "tags": ["backnavigation","navutils","taskstackbuilder"],
        "lang":"en"
      }
];

var _BY_TAG = {
    "emote":[2], 
    "e-mote":[2], 
    "adt":[2]
};

var ABOUT_BY_TAG = {
    "wear-preview":[1,2,3,4,6,7,8,9,10,11], 
    "wear":[3,6,7,9,14], 
    "preview":[5,13,14,21,23,28], 
    "developerpreview":[5,13], 
    "tv":[15], 
    "leanback":[15], 
    "android7.0":[19,20,22], 
    "androidn":[19,20], 
    "nougat":[19,20,22], 
    "marshmallow":[27,29,31], 
    "api23":[27], 
    "android60":[27,30], 
    "androidm":[27,29,31], 
    "marshamallow":[30], 
    "ecosystem":[35], 
    "versions":[35], 
    "whatsnew":[35], 
    "dashboards":[35], 
    "androidforwork":[37,42,43], 
    "work":[37,41,42,43], 
    "enterprise":[37], 
    "corporate":[37]
};

var DESIGN_BY_TAG = {
    "tv":[11], 
    "leanback":[11,26], 
    "designguidelines":[11], 
    "design":[12,15,34,36], 
    "auto":[12], 
    "material":[15], 
    "navigation":[16,18,23,25,27], 
    "layout":[16], 
    "tablet":[16], 
    "support":[17], 
    "viewpager":[18], 
    "buttons":[19], 
    "settings":[20], 
    "preferences":[20], 
    "kitkat":[22], 
    "android4.4":[22], 
    "dialog":[24], 
    "toast":[24], 
    "notification":[24], 
    "accessibility":[25], 
    "fullscreen":[26], 
    "immersive":[26], 
    "actionbar":[27], 
    "appwidget":[29], 
    "home":[29], 
    "downloads":[34], 
    "beautifulapps":[36]
};

var DEVELOP_BY_TAG = {
    "material":[0], 
    "design":[0], 
    "databinding":[6], 
    "layouts":[6], 
    "battery":[17], 
    "performance":[21]
};

var DISTRIBUTE_BY_TAG = {
    "in-app":[0,4], 
    "iap":[0,4], 
    "monetizing":[0,1,3,4,6], 
    "free":[0], 
    "trials":[0], 
    "conversions":[2], 
    "googleplay":[5,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,43,87,93,100], 
    "payments":[5], 
    "giftcard":[5], 
    "developerstory":[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 
    "apps":[9,10,11,12,13,14], 
    "google":[33,39,42,58,98,100], 
    "identity":[33,39,42,58], 
    "installs":[33], 
    "users":[34,35,36,38,43,44,52], 
    "growth":[34,36,38,43,90], 
    "promotion":[34], 
    "abtesting":[37], 
    "experiments":[37], 
    "testing":[37], 
    "banner":[40], 
    "chrome":[40], 
    "web":[40], 
    "useracquisition":[41], 
    "reports":[41], 
    "cohorts":[41], 
    "listing":[43], 
    "updates":[46], 
    "":[47,59], 
    "engagement":[48,55,57,60], 
    "intents":[48], 
    "games":[49,96], 
    "gamesservices":[49], 
    "playgames":[49], 
    "beta":[51], 
    "alpha":[51], 
    "releasechannels":[51], 
    "apptranslationservice":[53], 
    "translation":[53], 
    "localization":[53], 
    "gcm":[54], 
    "analytics":[56,62,63,64,65,66,68], 
    "userbehavior":[56,62,63,64,65,66,68], 
    "wear":[73,91], 
    "wearables":[73], 
    "quality":[73,76,84,85,86,91,92,94], 
    "guidelines":[73,76,86,92,94], 
    "brand":[77], 
    "bugdroid":[77], 
    "assets":[77], 
    "promoting":[78,79], 
    "disttools":[79,81,82], 
    "localizing":[81,82], 
    "publishing":[81,82,89], 
    "auto":[84], 
    "publish":[84,85,91,100], 
    "tv":[85], 
    "education":[86,88], 
    "gpfe":[87], 
    "visibility":[90], 
    "families":[92,93,94], 
    "cast":[95], 
    "video":[95], 
    "chromecast":[95], 
    "vr":[96], 
    "cardboard":[96], 
    "enterprise":[97], 
    "emm":[97], 
    "business":[97], 
    "administrator":[97], 
    "profile":[97], 
    "playbook":[98], 
    "play":[98,100]
};

var GOOGLE_BY_TAG = {
    "licensing":[4], 
    "drm":[4], 
    "apksize":[5], 
    "apkmax":[5], 
    "largeassets":[5], 
    "in-appbilling":[6], 
    "googleplay":[6], 
    "inappbilling":[6,6,13,14,15], 
    "inapp":[7,9,12], 
    "billing":[7,9,12], 
    "iap":[7,9,12], 
    "monetization":[13,14], 
    "monetizing":[15], 
    "google":[21], 
    "play":[21], 
    "services":[21], 
    "maps":[21], 
    "location":[21], 
    "gcm":[21], 
    "messaging":[21], 
    "places":[21]
};

var GUIDE_BY_TAG = {
    "video":[8,24,25], 
    "audio":[8,25], 
    "mpeg":[8], 
    "mp4":[8], 
    "m4a":[8], 
    "mp3":[8], 
    "3gp":[8], 
    "3gpp":[8], 
    "flac":[8], 
    "wave":[8], 
    "wav":[8], 
    "searchrecentsuggestionsprovider":[17,19], 
    "searchview":[18], 
    "searchrecentsuggestions":[19], 
    "mediarouter":[22], 
    "cast":[22], 
    "chromecast":[22], 
    "wirelessdisplay":[22], 
    "miracast":[22], 
    "photo":[24], 
    "mediarecorder":[26], 
    "mediaplayer":[28], 
    "soundpool":[28], 
    "audiomanager":[28], 
    "mediarouteprovider":[30], 
    "mediacontrolintent":[30], 
    "database":[31], 
    "sharedpreferences":[31], 
    "sdcard":[31,33], 
    "localizing":[40], 
    "localization":[40], 
    "resources":[40], 
    "formats":[40], 
    "l10n":[40], 
    "androidn":[46], 
    "activity":[51,183], 
    "lifecycle":[51,177], 
    "view":[54,85], 
    "viewgroup":[54], 
    "clipdata":[57,172], 
    "dragevent":[57], 
    "onlongclicklistener":[57], 
    "accessibility":[61], 
    "gridview":[67], 
    "linearlayout":[68], 
    "listview":[69], 
    "relativelayout":[71], 
    "alertdialog":[72], 
    "dialogfragment":[72], 
    "preference":[74], 
    "preferenceactivity":[74], 
    "preferencefragment":[74], 
    "switch":[76], 
    "togglebutton":[76], 
    "radiobutton":[77], 
    "radiogroup":[77], 
    "edittext":[78], 
    "autocompletetextview":[78], 
    "adapterview":[79], 
    "spinneradapter":[79], 
    "datepicker":[80], 
    "timepicker":[80], 
    "button":[81], 
    "imagebutton":[81], 
    "appwidgethost":[86], 
    "homescreen":[86], 
    "launcher":[86], 
    "home":[87], 
    "appwidgetprovider":[87], 
    "devicepolicymanager":[88], 
    "policy":[88], 
    "security":[88], 
    "sensorevent":[110,113], 
    "accelerometer":[110], 
    "gyroscope":[110], 
    "gravity":[110], 
    "rotation":[110], 
    "stepcounter":[110], 
    "location":[114], 
    "sensors":[114], 
    "permissions":[115,116,131,145], 
    "normal":[115], 
    "uses-permission-sdk-23":[131], 
    "apilevels":[142], 
    "sdkversion":[142], 
    "minsdkversion":[142], 
    "targetsdkversion":[142], 
    "maxsdkversion":[142], 
    "filtering":[145], 
    "features":[145], 
    "googleplayfilters":[145], 
    "hostcardemulation":[154], 
    "hce":[154], 
    "hostapduservice":[154], 
    "offhostapduservice":[154], 
    "tapandpay":[154], 
    "sipmanager":[156], 
    "sipprofile":[156], 
    "sipaudiocall":[156], 
    "telephony":[156], 
    "wireless":[160,161,162], 
    "wifip2pmanager":[160], 
    "wi-fidirect":[160], 
    "wifidirect":[160], 
    "p2p":[160], 
    "wi-fip2p":[160], 
    "wifip2p":[160], 
    "games":[166], 
    "valueanimator":[171], 
    "objectanimator":[171], 
    "layouttransition":[171], 
    "viewpropertyanimator":[171], 
    "clipboardmanager":[172], 
    "input":[173], 
    "spellcheckerservice":[173], 
    "ime":[174], 
    "keyboard":[174], 
    "inputmethodservice":[174], 
    "recents":[178], 
    "overview":[178], 
    "intentfilter":[180,181], 
    "multiplescreens":[194]
};

var SAMPLES_BY_TAG = {
    "examples":[16], 
    "code":[16]
};

var TOOLS_BY_TAG = {
};

var TRAINING_BY_TAG = {
    "intents":[4,314,322,323,324,325], 
    "share":[4,123,251], 
    "battery":[10,11,189], 
    "network":[10,80,165,174,189,302], 
    "internet":[10], 
    "gamecontroller":[15], 
    "billing":[20], 
    "searchview":[24], 
    "database":[24,329], 
    "edittext":[36], 
    "accessibility":[36,91], 
    "tv":[41,43,44,46,47,48,50,52,53,54,55,56,57,58,59,60,62,63,65,143], 
    "guidedstep":[41], 
    "guidedstepfragment":[41], 
    "guidedaction":[41], 
    "androidn":[42], 
    "card":[45], 
    "leanback":[49,53,62,65], 
    "recyclerview":[49], 
    "launcher":[49], 
    "unsupported":[51], 
    "search":[64,137], 
    "searchable":[64], 
    "":[68], 
    "auto":[72,73,74,75,76], 
    "car":[72,73,74,75], 
    "automotive":[72,73,74,75], 
    "audio":[72,198], 
    "wifi":[80], 
    "testing":[91,203,204,205,206,207,208,210,211,212,213,214], 
    "navigation":[93,230,246,357], 
    "input":[93,230], 
    "widgets":[96,257], 
    "support":[96,143,348], 
    "multiplescreens":[101,140], 
    "wakelock":[110], 
    "alarmmanager":[110], 
    "wakefulbroadcastreceiver":[110], 
    "include":[114], 
    "merge":[114], 
    "viewstub":[114], 
    "listview":[114], 
    "threadpool":[120], 
    "runnable":[120], 
    "nfcadapter":[123], 
    "androidbeam":[123], 
    "mapview":[124], 
    "location":[124,130], 
    "intentservice":[134], 
    "getusers":[137], 
    "cloud":[139,201], 
    "tablet":[143], 
    "permissions":[144,146,173,178,179], 
    "runtimepermissions":[145], 
    "androidm":[145,200,337], 
    "marshmallow":[145,171,200,337], 
    "snackbaractionpopup":[154], 
    "snackbarpopuppop-up":[155], 
    "snackbar":[156], 
    "toast":[156], 
    "ndk":[164,176], 
    "native":[164,176], 
    "threads":[169], 
    "asynctask":[169], 
    "ram":[170], 
    "lowmemory":[170], 
    "outofmemoryerror":[170], 
    "ontrimmemory":[170], 
    "assistant":[171], 
    "gps":[172], 
    "ids":[177], 
    "userdata":[177,179], 
    "camera":[184], 
    "video":[184], 
    "picture":[184], 
    "appbar":[191,193,194,195], 
    "actionbar":[191,193,194,195], 
    "toolbar":[191], 
    "actionview":[192], 
    "actionprovider":[192], 
    "backup":[200,201], 
    "animator":[220], 
    "views":[220], 
    "layout":[220,257], 
    "userinterface":[220,321], 
    "authentication":[234], 
    "signin":[234], 
    "opengl":[240], 
    "graphics":[240,336], 
    "print":[246], 
    "fileprovider":[251], 
    "cursorloader":[261], 
    "notifications":[262,263,264,265,266,349,350,351,352,353,354], 
    "wear":[290,291,293,294,295,296,297], 
    "wearable":[292], 
    "apps":[292], 
    "china":[292], 
    "activitylifecycle":[304,305,306,307,308], 
    "layouts":[309,312], 
    "styles":[310], 
    "strings":[311], 
    "localizing":[311], 
    "localization":[311,312], 
    "resources":[311,312], 
    "formats":[311], 
    "l10n":[311], 
    "emulator":[313], 
    "projectsetup":[315], 
    "ui":[316], 
    "sdktools":[317], 
    "fragments":[318,319,320,321], 
    "datastorage":[326,327,328,329], 
    "bitmaps":[336], 
    "images":[336], 
    "privacy":[341], 
    "oauth":[341], 
    "accounts":[341], 
    "viewpager":[355], 
    "horizontal":[355], 
    "paging":[355], 
    "swipeview":[355], 
    "tabs":[355], 
    "drawerlayout":[357], 
    "upnavigation":[358], 
    "navutils":[358,360], 
    "taskstackbuilder":[358,360], 
    "backnavigation":[360]
};


