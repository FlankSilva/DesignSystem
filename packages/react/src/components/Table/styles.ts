import { styled } from '../../styles'

export const TableContainer = styled('table', {
  width: '100%',
  maxWidth: '800px',
  borderCollapse: 'collapse',
})

export const Thead = styled('thead', {
  th: {
    textAlign: 'start',
    background: 'rgba(0, 0, 0, .7)',
    color: '$white',
    padding: '10px 10px',
  },
})

export const Tbody = styled('tbody', {
  td: {
    padding: '5px 10px',
    color: '#ccc',
  },

  'tr:nth-child(even) td': {
    background: '#444',
  },
})
