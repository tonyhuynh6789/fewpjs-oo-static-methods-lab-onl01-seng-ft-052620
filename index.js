class Formatter {
  //add static methods here


  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }


  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9-' ]+/g, '')
  }


  static titleize(string){
    const allowed = ["the", 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = string.split(" ")
    words[0] = this.capitalize(words[0]);
    for(let i = 1; i < words.length; i++) {
      if (!allowed.includes(words[i])){
        words[i] = this.capitalize(words[i])
      }
    }
    return words.join(" ")
  }
}