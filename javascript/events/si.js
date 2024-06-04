function doSi()
{
    let p =document.getElementById('t1').Value="10000"
    let t =document.getElementById('t2').Value="12"
    let r =document.getElementById('t3').Value="2"

    let Si = (p*t*r)/100
    alert(Si)
}
function eraseData() {
    document.getElementById('t1').Value =""
    document.getElementById('t2').Value =""
    document.getElementById('t3').Value =""

}