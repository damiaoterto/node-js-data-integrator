const { TIME_TEXT } = require('./constants')

async function main() {
  console.time(TIME_TEXT)

  console.timeEnd(TIME_TEXT)
}
main()
