import { ComponentProps } from 'react'
import { TableContainer, Thead, Tbody } from './styles'

export interface TableProps extends ComponentProps<typeof TableContainer> {
  data: any
  head: any
  sizes?: string[]
}

export const Table = ({ data = [], head, sizes }: TableProps) => {
  const keys = Object.keys(data[0])
  const tableHead = head || {}

  return (
    <TableContainer>
      <Thead>
        <tr>
          {keys.map((item, index) => (
            <th key={item} style={{ minWidth: sizes && sizes[index] }}>
              {tableHead[item] || item}
            </th>
          ))}
        </tr>
      </Thead>
      <Tbody>
        {data.map((item: any) => {
          const keysBody = Object.keys(item)

          return (
            // eslint-disable-next-line react/jsx-key
            <tr>
              {keysBody.map((key, index) => {
                const keyTd = `td-${index}`

                return <td key={keyTd}>{item[key]}</td>
              })}
            </tr>
          )
        })}
      </Tbody>
    </TableContainer>
  )
}
