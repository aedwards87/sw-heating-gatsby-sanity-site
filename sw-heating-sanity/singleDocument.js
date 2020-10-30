// in sanity-structure.js
import { RiHomeSmile2Line as icon } from 'react-icons/ri';
import S from "@sanity/desk-tool/structure-builder";

export default () =>
  // This is the side bar menu layout on sanity from top to bottom
  S.list()
    .title("SW Heating and Sons")
    //TODO: .icon(swheating flame logo)
    // Below is the Sub Item we create. so Landing Page, this way helps to create a single document
    .items([
      S.listItem()
        .title("Landing Page")
        .icon(icon)
        .child(
          S.document()
            .id('singletonLandingPage')
            .schemaType("landingPage")
            .documentId("singleton-landing-page")
        ),
      // Following the same as above and duplicating, we can create more single documents if we require
      // --
      // --
      // add/spread in the rest of the docuement items
      ...S.documentTypeListItems()
        .filter(listItem => !['landingPage']
          .includes(listItem.getId())),

    ]);

