export default {
    name: 'post2',
    title: 'Post2',
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
        name: 'work',
        title: 'Work',
        type: 'reference',
        to: { type: 'work' }
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      // {
      //   name: 'categories',
      //   title: 'Categories',
      //   type: 'array',
      //   of: [{ type: 'reference', to: { type: 'category' } }]
      // },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime'
      },
      {
        name: 'body',
        title: 'Body',
        type: 'text'
      }
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'work.name',
        media: 'mainImage'
      },
      // prepare(selection) {
      //   const { work } = selection
      //   return Object.assign({}, selection, {
      //     subtitle: author && `by ${work}`
      //   })
      // }
    }
  }
  