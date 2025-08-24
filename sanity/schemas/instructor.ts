import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'instructor',
  title: 'Instructor',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name', validation: r => r.required() }),
    defineField({ name: 'role', type: 'string', title: 'Role / Title' }),
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Headshot',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
    }),
    defineField({ name: 'specialties', type: 'array', of: [{ type: 'string' }], title: 'Specialties' }),
    defineField({ name: 'bio', type: 'text', title: 'Short bio' }),
    defineField({ name: 'order', type: 'number', title: 'Order', initialValue: 100 }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'name' } }),
  ],
})