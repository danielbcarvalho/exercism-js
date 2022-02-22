//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if(!series) {
      throw new Error('series cannot be empty')
    }
    this._series = series.split('').map(Number)
  }

  slices(sliceLength) {
    if(sliceLength > this._series.length) {
      throw new Error('slice length cannot be greater than series length')
    }
    if(sliceLength === 0) {
      throw new Error('slice length cannot be zero')
    }
    if(sliceLength < 0) {
      throw new Error('slice length cannot be negative')
    }
    let sliced = []
    for(let i = 0; i < this._series.length; i++) {
      sliced[i] = this._series.slice(i, sliceLength + i)
      if( (sliceLength + i) >= this._series.length ) {
        break
      }
    }
    return sliced
  }
}
