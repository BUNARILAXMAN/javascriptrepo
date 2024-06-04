function doAvg()
{
    let a =document.getElementById('t1').Value="10"
    let b =document.getElementById('t2').Value="20"
    let c =document.getElementById('t3').Value="30"
    let d =document.getElementById('t4').Value="40"
    let e =document.getElementById('t5').Value="50"
    let f =document.getElementById('t6').Value="60"
    let avg =eval(a)+eval(b)+eval(c)+eval(d)+eval(e)+eval(f)/6
    alert(avg)
}
function eraseData() {
    document.getElementById('t1').Value =""
    document.getElementById('t2').Value =""
    document.getElementById('t3').Value =""
    document.getElementById('t4').Value =""
    document.getElementById('t5').Value =""
    document.getElementById('t6').Value =""
}