// in sanity-structure.js

import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Landing Page")
        .child(
          S.document()
            .id('singletonLandingPage')
            .schemaType("landingPage")
            .documentId("singleton-landing-page")
        ),
      ...S.documentTypeListItems()
        .filter(listItem => !['landingPage']
          .includes(listItem.getId())),

    ]);

