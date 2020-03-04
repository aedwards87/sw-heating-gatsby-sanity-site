export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'strapLine',
      title: 'Strap Line',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImageAltTag',
      title: 'Main image short description',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'secondImage',
      title: 'Second image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'secondImageAltTag',
      title: 'Second image short description',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'thirdImage',
      title: 'Third image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'thirdImageAltTag',
      title: 'Third image short description',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'fourthImage',
      title: 'Fourth image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'fourthImageAltTag',
      title: 'Fourth image short description',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'fifthImage',
      title: 'Fifth image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'fifthImageAltTag',
      title: 'Fifth image short description',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ]
}
