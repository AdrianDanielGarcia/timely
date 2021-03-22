  export interface Small {
      width: number;
      url: string;
      height: number;
  }

  export interface Thumbnail {
      width: number;
      url: string;
      height: number;
  }

  export interface Small2 {
      width: number;
      url: string;
      height: number;
  }

  export interface Thumbnail2 {
      width: number;
      url: string;
      height: number;
  }

  export interface Medium {
      width: number;
      url: string;
      height: number;
  }

  export interface Full {
      width: number;
      url: string;
      height: number;
  }

  export interface Sizes {
      small: Small2;
      thumbnail: Thumbnail2;
      medium: Medium;
      full: Full;
  }

  export interface Medium2 {
      width: number;
      url: string;
      height: number;
  }

  export interface Full2 {
      width: number;
      url: string;
      height: number;
  }

  export interface Image {
      small: Small;
      thumbnail: Thumbnail;
      reference_id: number;
      sizes: Sizes;
      updated_at: string;
      file_name: string;
      created_at: string;
      id: number;
      medium: Medium2;
      title: string;
      deleted_at?: any;
      full: Full2;
  }

  export interface Pivot {
      taxonomy_id: number;
      event_id: number;
  }

  export interface TaxonomyTag {
      image?: any;
      reference_id: number;
      color?: any;
      updated_at: string;
      item_type: string;
      created_at: string;
      pivot: Pivot;
      id: number;
      image_id?: any;
      title: string;
      deleted_at?: any;
      filter_group_id?: any;
  }

  export interface Small3 {
      width: number;
      url: string;
      height: number;
  }

  export interface Thumbnail3 {
      width: number;
      url: string;
      height: number;
  }

  export interface Small4 {
      width: number;
      url: string;
      height: number;
  }

  export interface Thumbnail4 {
      width: number;
      url: string;
      height: number;
  }

  export interface Medium3 {
      width: number;
      url: string;
      height: number;
  }

  export interface Full3 {
      width: number;
      url: string;
      height: number;
  }

  export interface Sizes2 {
      small: Small4;
      thumbnail: Thumbnail4;
      medium: Medium3;
      full: Full3;
  }

  export interface Medium4 {
      width: number;
      url: string;
      height: number;
  }

  export interface Full4 {
      width: number;
      url: string;
      height: number;
  }

  export interface Image2 {
      small: Small3;
      thumbnail: Thumbnail3;
      reference_id: number;
      sizes: Sizes2;
      updated_at: string;
      file_name: string;
      created_at: string;
      id: number;
      medium: Medium4;
      title: string;
      deleted_at?: any;
      full: Full4;
  }

  export interface TaxonomyVenue {
      country?: any;
      website?: any;
      images: Image2[];
      address: string;
      geo_location: string;
      reference_id: number;
      address2?: any;
      city: string;
      timezone?: any;
      item_type: string;
      phone2?: any;
      created_at: string;
      title: string;
      deleted_at?: any;
      country_first_division: string;
      updated_at: string;
      phone?: any;
      venue_type: string;
      id: number;
      image_id?: number;
      postal_code: string;
      email?: any;
      place_id?: any;
      image?: any;
  }

  export interface Pivot2 {
      taxonomy_id: any;
      event_id: any;
  }

  export interface TaxonomyCategory {
      image?: any;
      reference_id: number;
      color: string;
      updated_at: string;
      item_type: string;
      created_at: string;
      pivot: Pivot2;
      id: number;
      image_id?: any;
      title: string;
      deleted_at?: any;
      filter_group_id?: any;
  }

  export interface Taxonomies {
      taxonomy_tag: TaxonomyTag[];
      taxonomy_venue: TaxonomyVenue[];
      taxonomy_category: TaxonomyCategory[];
  }

  export interface EventItem {
      cost_display: string;
      instance: string;
      cost_external_url: string;
      calendar_id: number;
      start_datetime: string;
      end_datetime: string;
      cost_type: string;
      timezone: string;
      post_to_twitter: boolean;
      post_to_facebook: boolean;
      title: string;
      is_example_event: boolean;
      feed_id?: any;
      uid: string;
      allday: boolean;
      id: number;
      user: string;
      event_status: string;
      custom_url: string;
      url: string;
      canonical_url: string;
      images: Image[];
      description_short: string;
      taxonomies: Taxonomies;
  }

  export interface Data {
      total: number;
      from: number;
      size: number;
      has_prior: boolean;
      has_next: boolean;
      items: EventItem[];
  }

  export interface EventsResponse {
      success: boolean;
      code: number;
      message: string;
      data: Data;
  }
