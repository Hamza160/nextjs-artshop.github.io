export default {
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: Rule => Rule.required().unique()
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      options: {
        dateFormat: "YYYY-MM-DDTHH:mm:ssZ"
      },
      readonly: true,
    },

  ]
}