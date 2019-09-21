class StringAnalysis {
  constructor(text) {
    this.str = text;
  }

  getSentenceCount () {
    const strCount = this.str.match(/[.?!\n]/g);
    return strCount.length;
  }

  biggestSentence () {
    const strArr = this.str.split(/[.?!\n]/g);
    const bigStr = {
      length: 0,
      str: '',
    };

    strArr.forEach(str => {
      if (str.length > bigStr.length) {
        bigStr.str = str;
      }
    })

    return bigStr.str;
  }

  wordCountOfBiggestSentence () {
    const str = this.biggestSentence();
    return str.trim().split(' ').length
  }

  mostRepetitiveWord () {
    let counts = {}, mostRepet, mostWord;
    this.str.match(/\w+/g).forEach( word => {
      counts[word] = (counts[word] || 0) + 1;
    });

    for (let word in counts) {
      if (!(counts[word] < mostRepet)) {
        mostRepet = counts[word];
        mostWord = word;
      }
    }
    return {mostWord, mostRepet};
  }
}

const myText = new StringAnalysis ( 'Lorem ipsum dolor sit amet, con abc sect lorem etur adipisicing elit. Cumquem abc lorem olestiae, autem, abc praesenti abc umdicta sed repud lorem iandae eius veniam labore vero repellat velit consequuntur ad totam. Minus, explicabo, iste. Velit debitis eaque at tempora, adipisci laboriosam rem temporibus et illo dolores dolorem neque enim quod tempore, quisquam quas nam mollitia necessitatibus consequuntur. Architecto voluptas tempora atque alias voluptatibus illum iste, labore assumenda sit quisquam cumque culpa, commodi provident ducimus fuga vel ad fugit aliquam nostrum, sunt animi harum unde! Nam quaerat maxime, cupiditate aut pariatur expedita, quam excepturi quis impedit voluptatum, facilis eos cum neque minus minima enim. Modi quod laudantium ex. abc facere consequatur doloremque! ac abc cusamus delectus\n dignissimos odit corrupti volu ab ptas volupt. atibus, deb itis, error qui totam, voluptatem quasi magni quam ab neque?');

const sentenceCount = myText.getSentenceCount();
const bigSentence = myText.biggestSentence();
const wordCountOfBiggestSentence = myText.wordCountOfBiggestSentence();
const mostRepetitiveWord = myText.mostRepetitiveWord();

console.log('sentenceCount: ', sentenceCount);
console.log('biggestSentence: ', bigSentence);
console.log('wordCountOfBiggestSentence: ', wordCountOfBiggestSentence);
console.log('mostRepetitiveWord: ', mostRepetitiveWord);
