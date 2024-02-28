import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentCalloutWithLink extends Schema.Component {
  collectionName: 'components_content_callout_with_links';
  info: {
    displayName: 'LinkBlock';
    description: '';
  };
  attributes: {
    text: Attribute.Blocks;
    url: Attribute.String;
    image: Attribute.Media;
    linkText: Attribute.String;
  };
}

export interface ContentInfoBlock extends Schema.Component {
  collectionName: 'components_content_info_blocks';
  info: {
    displayName: 'InfoBlock';
    description: '';
  };
  attributes: {
    text: Attribute.Blocks;
  };
}

export interface ContentTextBlock extends Schema.Component {
  collectionName: 'components_content_text_blocks';
  info: {
    displayName: 'TextBlock';
  };
  attributes: {
    text: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.callout-with-link': ContentCalloutWithLink;
      'content.info-block': ContentInfoBlock;
      'content.text-block': ContentTextBlock;
    }
  }
}
