let submit1 = document.getElementById("submit1");
let submit2 = document.getElementById("submit2");
let submit3 = document.getElementById("submit3");

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
if (submit1 != null){
    submit1.addEventListener("click",()=>{
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
}
let S  = 0;
let S2 = 0;
if (submit2 != null){
    submit2.addEventListener("click",()=>{
        randomizedPointList = [];
        S  = 0;
        S2 = 0;
        ns = 0;
        A  = 0;
        Fn = 0;
        const fx = document.getElementById("fx").value;
        const a = document.getElementById("a").value;
        const b = document.getElementById("b").value;
        const n = document.getElementById("n").value;
        let x = 0;
        for (let i = 0; i < n; i++) {
            // M1 
            let r = Number(getRndInteger(0,1));
            x  = a  + ((b-a)*r);
            S  = S  + (Math.sqrt(x));
            S2 = S2 + (Math.sqrt(x)) * (Math.sqrt(x));
            randomizedPointList.push(x);
          }
          const Favg  = S/n;
          const F2avg = S2/n;
    
          Fn = (b-a)*Favg;
          Pe = (b-a)*Math.sqrt((F2avg-(Favg*Favg))/n)
          document.getElementById("var-ns").innerText=ns;
          document.getElementById("var-Fn").innerText=Fn;
          document.getElementById("var-Fx").innerText=5.333333;
          document.getElementById("var-Error").innerText=Math.abs(Fn-5.333333);
          document.getElementById("var-Error2").innerText=Pe;
    });
}
const fxy = (x,y) => {
    return (Math.sqrt(4-(x*x)-(y*y)));
}
if (submit3 != null){
    submit3.addEventListener("click",()=>{
        randomizedPointList = [];
        S  = 0;
        S2 = 0;
        ns = 0;
        A  = 0;
        Fn = 0;
        const fx = document.getElementById("fx").value;
        const a = document.getElementById("a").value;
        const b = document.getElementById("b").value;
        const c = document.getElementById("c").value;
        const d = document.getElementById("d").value;
        const n = document.getElementById("n").value;
        let x = 0;
        let y = 0;
        for (let i = 0; i < n; i++) {
            // M1 
            let r = Number(getRndInteger(0,1));
            let r2 = Number(getRndInteger(0,1));
            x  = a  + ((b-a)*r);
            y  = a  + ((d-c)*r2);
            // (4-x^2-y^2)^(1/2)
            S  = S  + fxy(x,y);
            S2 = S2 + (fxy(x,y) * fxy(x,y));
            randomizedPointList.push(x);
          }
          const Favg  = S/n;
          console.log(Favg)
          const F2avg = S2/n;
          console.log(F2avg)
    
          Fn = (b-a)*(d-c)*Favg;
          Pe = (b-a)*(d-c)*Math.sqrt((F2avg-(Favg*Favg))/n)
          document.getElementById("var-Fn").innerText=Fn;
          document.getElementById("var-Fx").innerText=fx;
          document.getElementById("var-Error2").innerText=Pe;
    });
}
