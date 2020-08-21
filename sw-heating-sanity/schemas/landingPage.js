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
      name: 'images',
      title: 'Images',
      description: 'List of images to appear on the landing page, from top to bottom',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          { type: 'images' },

        ],
      }],
      validation: Rule => [
        Rule.unique().error('You have duplicate images'),
        Rule.min(4),
      ],
    },
  ]
}
