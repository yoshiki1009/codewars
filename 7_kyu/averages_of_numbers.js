function averages(numbers) {
    let arr=[]
    if(!numbers) return arr
    for(let i =0; i<numbers.length-1; i++){
      let ave = (numbers[i]+numbers[i+1])/2
      arr.push(ave)
    }return arr
  }