const { isMainThread, Worker } = require('node:worker_threads')
const { resolve } = require('node:path')

async function main() {
    if (isMainThread) {
        for (let i = 0; i < 9; i++) {
            const workerFile = resolve(__dirname, 'worker.js')
            const worker = new Worker(workerFile)

            const randTime = (Math.floor(Math.random() * 10)) * 1000

            worker.postMessage({ id: worker.threadId, time: randTime })
        }

        return;
    }
}
main()
