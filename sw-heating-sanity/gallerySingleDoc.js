// in sanity-structure.js

import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Gallery")
        .child(
          S.editor()
            .id('singletonGallery')
            .schemaType("gallery")
            .documentId("singleton-gallery")
        ),
      ...S.documentTypeListItems()
        .filter(listItem => !['gallery']
          .includes(listItem.getId()))
    ]);