import { AiOutlineStar as icon } from 'react-icons/ai';

export default {
  name: 'feedback',
  title: 'Feedback',
  icon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text'
    },
  ],
  preview: {
    select: {
      title: 'name',
    }
  }
}
