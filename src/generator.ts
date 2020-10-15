function main(argv: string[]) {
  const l = +argv[3] || 1
  for (let i = 0; i < l; i++) {
    try {
      const r = Math.random()
        .toString(10)
        .slice(-argv[2] + 1)

      const body = [...r].map((s) => +s)

      const evenSum = body.filter((_, i) => i % 2 === 0).reduce((a, b) => a + b)
      const oddSum = body.filter((_, i) => i % 2 !== 0).reduce((a, b) => a + b)

      const res = 10 - +(evenSum * 3 + oddSum).toString().slice(-1)
      const checkDesit = res === 10 ? 1 : res
      console.log(`${r}${checkDesit}`)
    } catch (e) {
      console.error(e)
    }
  }
}

main(process.argv)
