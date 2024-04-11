import dayjs from 'dayjs'

const greeting = 'Hello, World'
const today = dayjs().format('DD/MM/YYYY')

console.log(`${today}: ${greeting}`)
