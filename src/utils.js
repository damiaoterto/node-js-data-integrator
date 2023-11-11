const { setTimeout } = require('node:timers/promises')

module.exports = {
  sleep: (time) => setTimeout(time),
}
