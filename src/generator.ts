export function barcodeGenerator(len: string) {
  const r = Math.random()
    .toString(10)
    .slice(-len + 1)

  const body = [...r].map((s) => +s)

  const evenSum = body.filter((_, i) => i % 2 === 0).reduce((a, b) => a + b)
  const oddSum = body.filter((_, i) => i % 2 !== 0).reduce((a, b) => a + b)

  const checkDesit = `${10 - (evenSum * 3 + oddSum)}`.slice(-1)
  return `${r}${checkDesit}`
}

function main(len: string) {
  const result = barcodeGenerator(len)
  console.log(result)
}

main(process.argv[2])
