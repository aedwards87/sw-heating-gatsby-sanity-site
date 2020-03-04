export default {
  name: 'work',
  title: 'Work',
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
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
          styles: [{ title: 'Normal', value: 'normal' }],
        }
      ]
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
      name: 'eigthImage',
      title: 'Eight image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    }
  }
}
