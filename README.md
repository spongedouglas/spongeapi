# spongeapi
Used as a wrapper for Studio API calls, as well as common functions for dynamic integrations.

## init(params)
**@param type:String**: The type of animation ('canvas','edge','gwd','custom')

**@param initObj:Object**: An object to use for initialization and dynamic parsing

**@param isDynamic:Boolean**: Apply automatic dynamic parsing

**@param onReady:Function**: Callback funciton to run after API is initalized

### Usage examples:
** DYNAMIC CANVAS **: *spongeapi.init('canvas',loader,true);*