// This needs to take in all images from what will already be in the other files

export default {
  name: 'images',
  title: 'Images',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Caption',
      type: 'string',
      description: 'A caption depicting the image, important for SEO and accessiblity.',
      validation: Rule => Rule.required().error('Must include a caption')
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        validation: Rule => Rule.required().error('Must include an image')
      },
      // fields: [
      //   {
      //     name: 'title',
      //     type: 'string',
      //     title: 'Caption',
      //     description: 'A caption depicting the image, important for SEO and accessiblity.',
      //     options: {
      //       isHighlighted: true,
      //     },
      //     validation: Rule => Rule.required().error('Must include a caption')
      //   },
      // ]
    },
    {
      name: 'work',
      title: 'Services',
      description: 'Select the service(s) that relates to the image',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          { type: 'work' },
        ],
      }],
      validation: Rule => [
        Rule.unique().error('You have duplicate services'),
        Rule.min(1),
      ],
    },
  ],
}
