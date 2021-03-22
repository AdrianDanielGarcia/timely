export interface Full {
    url: string;
    width: number;
    height: number;
}

export interface Small {
    url: string;
    width: number;
    height: number;
}

export interface Medium {
    url: string;
    width: number;
    height: number;
}

export interface Thumbnail {
    url: string;
    width: number;
    height: number;
}

export interface Sizes {
    full: Full;
    small: Small;
    medium: Medium;
    thumbnail: Thumbnail;
}

export interface Full2 {
    url: string;
    width: number;
    height: number;
}

export interface Small2 {
    url: string;
    width: number;
    height: number;
}

export interface Medium2 {
    url: string;
    width: number;
    height: number;
}

export interface Thumbnail2 {
    url: string;
    width: number;
    height: number;
}

export interface Image {
    id: number;
    reference_id: number;
    title: string;
    file_name: string;
    sizes: Sizes;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
    file_hash?: any;
    full: Full2;
    small: Small2;
    medium: Medium2;
    thumbnail: Thumbnail2;
}

export interface Item {
    id: number;
    reference_id: number;
    item_type: string;
    image_id?: number;
    filter_group_id?: any;
    title: string;
    color: string;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
    image: Image;
}

export interface Data {
    id?: any;
    name: string;
    query_name: string;
    display_name: string;
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url?: any;
    path: string;
    per_page: string;
    prev_page_url?: any;
    to: number;
    total: number;
    items: Item[];
}

export interface TaxonomyResponse {
    success: boolean;
    code: number;
    message: string;
    data: Data;
}
