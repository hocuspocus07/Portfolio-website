import {defineField, defineType} from 'sanity'

export const certificates = defineType({
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Certificate Title'}),
    defineField({name: 'issuedBy', type: 'string', title: 'Issued By'}),
    defineField({name: 'pdf', type: 'file', title: 'Certificate file'}),
    defineField({name: 'dateIssued', type: 'string', title: 'Date Issued'}),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          {title: 'Cybersecurity', value: 'cybersecurity'}, // cybersec
          {title: 'Web Development', value: 'webdev'}, // webdev certs
          {title: 'Hackathon', value: 'hackathon'}, // Hackathons
          {title: 'CTF', value: 'ctf'}, // CTFs
          {title: 'Professional', value: 'professional'}, // Job-related certs
          {title: 'Other', value: 'other'},
        ],
        layout: 'dropdown',
      },
    }),
  ],
})
