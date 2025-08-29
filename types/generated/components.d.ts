import type { Schema, Struct } from '@strapi/strapi';

export interface CarouselBanner extends Struct.ComponentSchema {
  collectionName: 'components_carousel_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    hero_banner_landscape: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    hero_banner_portrait: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CarouselTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_carousel_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    profile_picture: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LinkTitleProject extends Struct.ComponentSchema {
  collectionName: 'components_link_title_projects';
  info: {
    displayName: 'project';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MetadataKeywords extends Struct.ComponentSchema {
  collectionName: 'components_metadata_keywords';
  info: {
    displayName: 'keywords';
    icon: 'stack';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MetadataMetadata extends Struct.ComponentSchema {
  collectionName: 'components_metadata_metadata';
  info: {
    displayName: 'Metadata';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Keywords: Schema.Attribute.Component<'metadata.keywords', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
    title_image: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SpesifikasiItem extends Struct.ComponentSchema {
  collectionName: 'components_spesifikasi_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SpesifikasiSpesifikasi extends Struct.ComponentSchema {
  collectionName: 'components_spesifikasi_spesifikasis';
  info: {
    displayName: 'spesifikasi';
  };
  attributes: {
    item: Schema.Attribute.Component<'spesifikasi.item', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'carousel.banner': CarouselBanner;
      'carousel.testimonial': CarouselTestimonial;
      'link-title.project': LinkTitleProject;
      'metadata.keywords': MetadataKeywords;
      'metadata.metadata': MetadataMetadata;
      'spesifikasi.item': SpesifikasiItem;
      'spesifikasi.spesifikasi': SpesifikasiSpesifikasi;
    }
  }
}
