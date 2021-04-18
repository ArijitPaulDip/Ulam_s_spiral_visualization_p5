let N = 699;
let con;

function setup() {
  createCanvas(700, 700);
  background(0);
  con = height/ N; // Height must be strictly greater than "N". else 'con' will be "0.(someting)" and index will be 'something*0' and that will be 0 :)
  visualiseUlamsSpiral();
}

function visualiseUlamsSpiral() {
  let n = int(N);
  let s1 = n / 2;
  let s2 = (n - 1) / 2;

  let c = 1;
  let con = 2, con2 = 3;
  let r = 1, u = 2, l = 3, d = 5;
  while (c <= N*N) {
    if (c == r) {
      s2++;
      show(c, int(s1), int(s2));

      d = l + con;
    } else if (c == u) {
      show(c, int(s1), int(s2));

      s1--;
    } else if (c == l) {
      show(c, int(s1), int(s2));

      s2--;
    } else if (c == d) {
      show(c, int(s1), int(s2));
      s1++;

      r = d + con;
      u = r + con2;
      l = u + con2;
      con += 2;
      con2 += 2;
    } else if (c > r && c < u) {
      show(c, int(s1), int(s2));

      s2++;
    } else if (c > u && c < l) {
      show(c, int(s1), int(s2));

      s1--;
    } else if (c > l && c < d) {
      show(c, int(s1), int(s2));

      s2--;
    } else if (c > d && c < r) {
      show(c, int(s1), int(s2));

      s1++;
    }
    c++;
  }
}

function show(g, i_, j_) {
  if (isPrime(int(g))) {
    stroke('#9C02CB');
    strokeWeight(con);
    point(i_ * con, j_ * con);
  }
}

function isPrime(n) 
{ 
  if (n <= 1) {
    return false;
  }
  if (n <= 3) { 
    return true;
  } 
  if (n % 2 == 0 || n % 3 == 0) { 
    return false;
  }
  for (let i = 5; i * i <= n; i = i + 6) { 
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
} 