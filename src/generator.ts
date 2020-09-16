function main(len: string[]) {
  const r = Math.random()
    .toString(9)
    .slice(Number(-len[2]) + 1)
  //@ts-ignore
  const body = [...r]
  const evenSum = body
    .filter((_, i) => i % 2 === 0)
    .reduce((a, b) => Number(a) + Number(b))
  const oddSum = body
    .filter((_, i) => i % 2 !== 0)
    .reduce((a, b) => Number(a) + Number(b))

  const checkDesit = 10 - Number((evenSum * 3 + oddSum).toString().slice(-1))
  console.log(`${r}${checkDesit}`)
}

main(process.argv)
