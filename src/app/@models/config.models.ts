  export interface DefaultAccountBilling {
      id: number;
      name: string;
      currency: string;
      type: string;
      public_key?: any;
  }

  export interface DesignCustomizations {
      metadata: string;
      header?: any;
      footer: string;
      custom_css: string;
      embed_metadata_customization: boolean;
      embed_section_customization: boolean;
      embed_custom_css_customization: boolean;
      embed_metadata?: any;
      embed_header?: any;
      embed_footer?: any;
      embed_custom_css?: any;
  }

  export interface GoogleAnalytics {
      enabled: boolean;
      script?: any;
  }

  export interface Disclaimer {
      enabled: boolean;
      text?: any;
      required: boolean;
  }

  export interface Filter {
      taxonomy_type: string;
      required: boolean;
      show_new_btn: boolean;
      filter_group_id: number;
  }

  export interface CustomField {
      custom_field_version_uid: string;
      text: string;
      type: string;
      hidden: boolean;
      required: boolean;
  }

  export interface Fes {
      enabled: boolean;
      auto_approve_fes: boolean;
      auto_approve_events: boolean;
      hide_fes_btn: boolean;
      require_signin: boolean;
      disclaimer: Disclaimer;
      filters: Filter[];
      custom_fields: CustomField[];
  }

  export interface Date {
      delimiter: string;
      format: string;
      include_year: boolean;
      setting: string;
  }

  export interface Time {
      format: string;
      include_timezone: boolean;
      military: boolean;
      timezone: string;
  }

  export interface Toolbar {
      show_date_range: boolean;
      show_timezone_btn: boolean;
  }

  export interface TwitterToken {
      oauth_token: string;
      oauth_token_secret: string;
      user_id: string;
      screen_name: string;
  }

  export interface TwitterAccount {
      twitter_token: TwitterToken;
  }

  export interface Colors {
      test: number;
  }

  export interface Naos {
      name: string;
      colors: Colors;
  }

  export interface Colors2 {
      text: string;
      links: string;
      linksHover: string;
      background: string;
      eventBackground: string;
      eventBorder: string;
      border: string;
      buttonsBackground: string;
      buttonsBorder: string;
      buttonsText: string;
      eventTitle: string;
      eventTitleBackground: string;
      eventTitleBorder: string;
      eventActionsIcons: string;
      eventActionsBackground: string;
      eventActionsBorder: string;
      eventSharingBackground: string;
      eventTabHover: string;
      eventTabFont: string;
      eventDetailsText: string;
      eventDetailsLink: string;
      eventDetailsBackground: string;
      eventDescriptionBackground: string;
      eventDescriptionText: string;
      eventDescriptionTitle: string;
      eventDetailsBorder: string;
      posterboardBackground: string;
      posterboardBackgroundHover: string;
      posterboardBorder: string;
      posterboardTitle: string;
      posterboardTime: string;
      posterboardExcerpt: string;
      posterboardImageBackground: string;
      posterboardDateBackground: string;
      posterboardDateText: string;
      tileBackground: string;
      tileBackgroundHover: string;
      tileBorder: string;
      tileTitle: string;
      tileTime: string;
      tileExcerpt: string;
      tileImageBackground: string;
      tileDateBackground: string;
      tileDateText: string;
      streamDateDividerBg: string;
      streamDateDividerText: string;
      streamBackground: string;
      streamBackgroundHover: string;
      streamTitle: string;
      streamText: string;
      agendaBackground: string;
      agendaBackgroundHover: string;
      agendaBorder: string;
      agendaTitle: string;
      agendaTime: string;
      agendaExcerpt: string;
      agendaDateMonthBackground: string;
      agendaDateBackground: string;
      agendaDateText: string;
      agendaDayPrimaryBackground: string;
      agendaDaySecondaryBackground: string;
      agendaDayBorder: string;
      monthThHeaderBackground: string;
      monthThHeaderText: string;
      monthEventHeaderBackground: string;
      monthMobileEventHeaderBackground: string;
      monthEventHeaderText: string;
      monthMobileEventHeaderText: string;
      monthMobileEventCountBackground: string;
      monthMobileEventCountText: string;
      monthPopupBackground: string;
      monthPopupImageBackground: string;
      monthPopupText: string;
      monthMultiDaySectionBackground: string;
      monthMultiDayBackground: string;
      monthMultiDay: string;
      monthDayBackground: string;
      monthDayText: string;
      monthTodayBackground: string;
      monthMobileDayActiveBackground: string;
      sliderBackgroundPrimary: string;
      sliderBackgroundSecondary: string;
      sliderHoverBackgroundPrimary: string;
      sliderHoverBackgroundSecondary: string;
      sliderEventDate: string;
      sliderEventDateHover: string;
      sliderEventTime: string;
      sliderEventTimeHover: string;
      sliderEventDetails: string;
      sliderEventDetailsHover: string;
      sliderControls: string;
      sliderItemIndicator: string;
      sliderItemIndicatorActive: string;
  }

  export interface Night {
      name: string;
      colors: Colors2;
      font: string;
      fontUrl: string;
      titleFont: string;
  }

  export interface Colors3 {
      test: number;
      monthMobileEventHeaderBackground: string;
      monthEventHeaderBackground: string;
      monthThHeaderBackground: string;
      posterboardBackground: string;
      tileBackground: string;
      monthDayBackground: string;
      monthThHeaderText: string;
      monthEventHeaderText: string;
      monthDayText: string;
  }

  export interface Default {
      name: string;
      colors: Colors3;
  }

  export interface Themes {
      naos: Naos;
      night: Night;
      default: Default;
  }

  export interface Branding {
      calendar_icon?: any;
      calendar_logo?: any;
  }

  export interface DateTimeFormats {
      name: string;
      default: string;
      datepicker: string;
      hours: number;
  }

  export interface CustomMetaTags {
      description?: any;
      keywords?: any;
      hide_calendar_from_robots: boolean;
  }

  export interface MiscSettings {
      language: string;
      position?: any;
      max_pages: number;
      equal_rows: boolean;
      slider_delay: string;
      tickets_text: string;
      show_load_more: boolean;
      required_filters: boolean;
      default_billing_type: string;
      primary_calendar_url: string;
      default_billing_account: number;
      default_billing_currency: string;
      show_timezone_btn: boolean;
      event_url_format?: any;
      end_date: boolean;
  }

  export interface Features {
      autoshare_facebook: number;
      autoshare_twitter: number;
      browser_extension: number;
      custom_domain: number;
      custom_header_footer: number;
      custom_meta_tags: number;
      custom_theme: number;
      disable_export_feeds: number;
      embed_limit: number;
      event_finder: number;
      favorite_events: number;
      filter_advanced: number;
      filter_by_organizer: number;
      filter_by_venue: number;
      filter_custom_groups: number;
      frontend_submissions: number;
      frontend_submissions_custom_fields: number;
      import_feeds_file: number;
      import_feeds_synced: number;
      keyword_search: number;
      multi_language: number;
      newsletter_mailchimp: number;
      number_of_users: number;
      theme_naos: number;
      ticketing: number;
      view_agenda: number;
      view_map: number;
      view_month: number;
      view_posterboard: number;
      view_slider: number;
      view_stream: number;
      view_tile: number;
      view_week: number;
      white_label: number;
      "addon_minimum_fees-tickets": number;
      "addon_ticket-transactional-fees": number;
  }

  export interface Data {
      id: number;
      title: string;
      default_account_billing: DefaultAccountBilling;
      default_account_billing_id: number;
      product: string;
      calendar_url: string;
      calendar_url_default: string;
      canonical_url: string;
      design_customizations: DesignCustomizations;
      google_analytics: GoogleAnalytics;
      fes: Fes;
      date: Date;
      time: Time;
      toolbar: Toolbar;
      url?: any;
      timezone: string;
      twitter_notice_interval?: any;
      twitter_account: TwitterAccount;
      post_to_twitter_default: boolean;
      mailchimp_api_key: string;
      google_maps_api_key: string;
      disable_export_feeds: boolean;
      facebook_notice_interval?: any;
      facebook_access_token?: any;
      facebook_account?: any;
      post_to_facebook_default: boolean;
      relabelling?: any;
      taxonomies_visible?: any;
      taxonomies_pre_selected?: any;
      active_theme: string;
      themes: Themes;
      branding: Branding;
      date_time_formats: DateTimeFormats;
      custom_meta_tags: CustomMetaTags;
      send_order_copy_to_admin: boolean;
      calendar_filters: any[];
      expand_filters: boolean;
      filter_style?: any;
      show_filters: boolean;
      misc_settings: MiscSettings;
      social: boolean;
      default_view: string;
      default_mobile_view: string;
      featured_tags?: any;
      week_start: number;
      enabled_posterboard: boolean;
      enabled_tile: boolean;
      enabled_stream: boolean;
      enabled_agenda: boolean;
      enabled_month: boolean;
      enabled_week: boolean;
      enabled_map: boolean;
      enabled_mobile_posterboard: boolean;
      enabled_mobile_tile: boolean;
      enabled_mobile_stream: boolean;
      enabled_mobile_agenda: boolean;
      enabled_mobile_month: boolean;
      enabled_mobile_week: boolean;
      enabled_mobile_map: boolean;
      lazy_load: boolean;
      show_more: boolean;
      page_limit: number;
      max_pages: number;
      has_end_date: boolean;
      tile_width: number;
      max_width: number;
      week_day_start: number;
      week_day_end: number;
      show_slider: boolean;
      slider_delay: number;
      calendar_logo_images?: any;
      features: Features;
  }

  export interface ConfigResponse {
      success: boolean;
      code: number;
      message: string;
      data: Data;
  }



