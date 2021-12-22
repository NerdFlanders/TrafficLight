function setup() {
  createCanvas(400, 400);

  res = 0;
  // https://www.xarg.org/puzzle/project-euler/problem-38/

  for(let i = 9234; i <= 9487; i++) {
    let num = 100002 * i
    if(isPandigital(num)) {
      if (num > res) {
        res = num;
      }
    }
  }
  print(res)
}

function isPandigital(prod) {
  const prods = prod.toString().split('');
  let result = true;

  if (prods.length != 9) {
    return false;
  }

  for(let j = 1; j <= 9; j++) {
    result = result && prods.filter(x => x === j.toString()).length === 1;    
  }
  return result
}

function draw() {
  background(220);
}
