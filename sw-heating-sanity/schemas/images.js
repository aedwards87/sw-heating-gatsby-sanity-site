// This needs to take in all images from what will already be in the other files
import { IoIosImages as icon } from 'react-icons/io';

export default {
  name: 'images',
  title: 'Images',
  icon,
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
  ],
}
