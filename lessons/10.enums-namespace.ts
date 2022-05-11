enum Fruit {
    STRAWBERRY = 'strawberry',
    ORANGE = 'orange',
    APPLE = 'apple'
}

const flag = true

namespace Fruit {
    export const VEGETABLE: string = flag ? "carrot" : "brussel sprouts"
}

const myFruit: typeof Fruit.VEGETABLE = "carrot"

console.log(myFruit, Fruit.STRAWBERRY)