const m = new Map()

m.set('color', 'red')
m.set('age', 2)

const color = m.get('color')
const age = m.get('age')
const hasColor = m.has('color')
const size = m.size

console.log(color, age, hasColor, size);

for (const [k, v] of m) {
  console.log(k, v)
}

