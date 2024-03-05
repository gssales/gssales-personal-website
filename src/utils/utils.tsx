const module = {
  getTranslationArray: (obj: any): any[] => {
    let array = []
    if (Array.isArray(obj)) 
      array = obj as Array<any>
    return array
  },
  highlightText: (text: string, highlights: string[]) => {
    const lowerCaseHighlight = highlights.map(h => h.toLowerCase())
    const parts = text
      .split(new RegExp(`(${lowerCaseHighlight.join('|')})`, 'gi'))
      .map(p => lowerCaseHighlight.includes(p.toLowerCase()) ? <span data-highlight>{p}</span> : p)
    return <> { parts } </>
  }
}
export default module