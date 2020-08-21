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
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0.image',
    }
  }
}
