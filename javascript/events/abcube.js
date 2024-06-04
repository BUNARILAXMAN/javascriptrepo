function doCube()
{
    let a =document.getElementById('t1').Value="2"
    let b=document.getElementById('t2').Value="3"
    

    let Cube = ((a*a*a)+3*(a*a)*b+3*(b*b)*a+(b*b*b))
    alert(Cube)
}
function eraseData() {
    document.getElementById('t1').Value =""
    document.getElementById('t2').Value =""
    

}