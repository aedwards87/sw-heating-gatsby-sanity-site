export default {
  name: 'work',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' }
          ],
        }
      ]
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          { type: 'images' },
        ],
      }],
    },
    {
      name: 'order',
      title: 'Order',
      description: 'The order that it will appear (Best not to touch)',
      type: 'string',
      options: {
        list: [
          { title: '1', value: '1' },
          { title: '2', value: '2' },
          { title: '3', value: '3' },
          { title: '4', value: '4' },
          { title: '5', value: '5' },
          { title: '6', value: '6' },
          { title: '7', value: '7' },
          { title: '8', value: '8' },
        ],
        layout: 'radio',
        options: {
          isHighlighted: false,
        },
      },
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0.image',
    }
  }
}
