const { parentPort } = require('node:worker_threads')
const { sleep } = require('./utils')

parentPort.on('message', async ({ id, time }) => {
  console.log(`Thread id ${id} started`)
  await sleep(time)
  console.log(`Thread id ${id} finished`)

  parentPort.close();
})
