export function calculateStringsSimilarityRate(str: string, prompt: string): number {
  const strArr = str.toLowerCase().split(' ')
  const promptArr = prompt.toLowerCase().split(' ')

  let matchCoefficient = 0

  strArr.forEach(strElem => {
    promptArr.forEach(promptElem => {
      if (strElem === promptElem) {
        matchCoefficient += 1
      }
    })
  })

  return matchCoefficient
}
