export default {
  name: 'feedback',
  title: 'Feedback',
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
