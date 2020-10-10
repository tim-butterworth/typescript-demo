/*
I grew up poor. 
I had little formal education. 
No real skills. 
I don't work especially hard, and most of my ideas are either unoriginal or total crap. 
And yet, I walked right into a job for which I was ill-prepared, ill-suited, and somebody else already had, and I got it. 
If you ask me, that's the American dream right there. 
Anything can happen to anyone. 
It's just random.

- Nellie
*/

// define them ourselves
interface SomeInterface {
    a: string
    b: number
}

type GreatNeatoType = string;

const impl: SomeInterface = {
    "a": "",
    "b": 1
}

console.log(JSON.stringify(impl, null, "  "))

// Types can come from outside the source code
const fancyImpl: AmbientTypesNamespace.FancyInterface = {
    "prop": ""
}