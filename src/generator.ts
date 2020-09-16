function main(len: string[]) {
  try {
    const r = Math.random()
      .toString(10)
      .slice(-len[2] + 1)

    const body = [...r].map((s) => +s)

    const evenSum = body.filter((_, i) => i % 2 === 0).reduce((a, b) => a + b)
    const oddSum = body.filter((_, i) => i % 2 !== 0).reduce((a, b) => a + b)

    const checkDesit = `${10 - +(evenSum * 3 + oddSum)}`.slice(-1)
    console.log(`${r}${checkDesit}`)
  } catch (e) {
    console.error(e)
  }
}

main(process.argv)
