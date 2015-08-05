# spongeapi
Used as a wrapper for Studio API calls, as well as common functions for dynamic integrations.

## init(params)
**@param {string} spongeapi.type**

The type of animation ('canvas','edge','gwd','custom')

**@param {Object} spongeapi.initObj**

An object to use for initialization and dynamic parsing

**@param {Boolean} spongeapi.isDynamic**
Apply automatic dynamic parsing

**@param {Function} spongeapi.onReady**
Callback funciton to run after API is initalized
