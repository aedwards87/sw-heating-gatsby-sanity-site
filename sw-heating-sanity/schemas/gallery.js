// This needs to take in all images from what will already be in the other files

export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'work',
      title: 'Work',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          { type: 'work' },
        ],
      }]
    },
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //   }
  // }
}
