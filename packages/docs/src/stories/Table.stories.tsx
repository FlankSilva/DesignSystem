import type { StoryObj, Meta } from '@storybook/react'
import { Table, TableProps } from '@flank-ignite-ui/react'

export default {
  title: 'Surfaces/Table',
  component: Table,

  args: {
    data: [
      {
        id: 1,
        name: 'Name',
        last: 'Last Name',
        address: 'One',
        number: 1,
        city: 'City',
        state: 'State',
        email: 'name@gmail.com',
      },
      {
        id: 2,
        name: 'Name',
        last: 'Last Name',
        address: 'One',
        number: 1,
        city: 'City',
        state: 'State',
        email: 'name@gmail.com',
      },
      {
        id: 3,
        name: 'Name',
        last: 'Last Name',
        address: 'One',
        number: 1,
        city: 'City',
        state: 'State',
        email: 'name@gmail.com',
      },
    ],

    head: {
      id: '',
      name: 'name',
      last: 'last',
      address: 'address',
      number: 'Nº',
      city: 'city',
      state: 'state',
      email: 'email',
    },

    sizes: ['40px', '120px', '80px', '150px', '50px', '90px', '90px'],
  },
} as Meta<TableProps>

export const Primary: StoryObj<TableProps> = {
  args: {},
}
