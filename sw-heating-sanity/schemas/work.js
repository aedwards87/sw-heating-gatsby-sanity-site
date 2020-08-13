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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'secondImage',
      title: 'Second image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'thirdImage',
      title: 'Third image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'fourthImage',
      title: 'Fourth image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'fifthImage',
      title: 'Fifth image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'sixthImage',
      title: 'Sixth image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'seventhImage',
      title: 'Seventh image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'eighthImage',
      title: 'Eighth image',
      type: 'image',
      options: {
        hotspot: true
      }
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
