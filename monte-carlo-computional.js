const submit = document.getElementById("submit");
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getValue() {
        const obj = {
            x:this.x,
            y:this.y
        }
        return obj;
    }
  }

let randomizedPointList = [];
let ns = 0;
let A  = 0;
let Fn = 0;
const getRndInteger = (min, max) => {
    return Math.random() * (max - min)  + min;
};
submit.addEventListener("click",()=>{
    randomizedPointList = [];
    ns = 0;
    A  = 0;
    Fn = 0;
    const fx = document.getElementById("fx").value;
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const n = document.getElementById("n").value;
    const h = document.getElementById("h").value; 
    let x = 0;
    let y = 0;
    A = h * ( b - a );
    for (let i = 0; i < n; i++) {
        // M1 
        x = Number(getRndInteger(a,b));
        y = Number(getRndInteger(0,h));
        randomizedPointList.push(new Point(x,y));
        // console.log(x,y)
        // console.log (Math.sqrt(x));
        if( y <= (Math.sqrt(x))){
            ns++;
        }

        //  // M2
        // const r1 = Number(getRndInteger(0,1));
        // const r2 = Number(getRndInteger(0,1));
        // x = a + ((b - a)*r1); 
        // y = r2*h;
        // randomizedPointList.push(new Point(x,y));
        // if( y <= (Math.sqrt(x))){
        //     ns++;
        // } 
      }
      Fn = (ns/n)*A;
      document.getElementById("var-ns").innerText=ns;
      document.getElementById("var-Fn").innerText=Fn;
      document.getElementById("var-Fx").innerText=5.333333;
      document.getElementById("var-Error").innerText=Math.abs(Fn-5.333333);
});