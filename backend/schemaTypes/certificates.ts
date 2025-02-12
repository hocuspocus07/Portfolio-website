import {defineField, defineType} from 'sanity'

export const certificates = defineType({
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    defineField({ name: "title", type: "string", title: "Certificate Title" }),
    defineField({ name: "issuedBy", type: "string", title: "Issued By" }),
    defineField({ name: "pdf", type: "file", title: "Certificate file" }),
    defineField({name:"dateIssued",type:"string",title:"Date Issued"})
  ],
})