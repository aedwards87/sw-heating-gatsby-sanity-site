export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'strapLine',
      title: 'Strap Line',
      type: 'text'
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
  ]
}
