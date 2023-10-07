


const pregunta_incorecta=(Incorecta,correcta,respuestaincorect)=>{
    const respuestaincorecta = document.getElementById(respuestaincorect)
    const yes_1 = document.getElementById(Incorecta)
    const no_1 = document.getElementById(correcta)
    respuestaincorecta.textContent = "Respuesta incorecta perra"
    yes_1.style.backgroundColor = "red"
    no_1.disabled  = true
    
}
  const pregunta_corecta=(correcta,incorrecta,respuestacorecta)=>{
      const respuestacorecta_n = document.getElementById(respuestacorecta)
      const no_1 = document.getElementById(correcta)
      const yes_1 = document.getElementById(incorrecta)
      respuestacorecta_n.textContent = "Respuesta corecta congratulation"
      no_1.style.backgroundColor = "green"
      yes_1.disabled  = true
}
  



const start=()=>{
    document.getElementById("btn_yes_1").addEventListener("click",()=>pregunta_incorecta("btn_no_1","btn_yes_1","respuestaincorecta_1"))
    document.getElementById("btn_no_1").addEventListener("click",()=>pregunta_corecta("btn_yes_1","btn_no_1","respuestacorecta_1"))
    document.getElementById("btn_yes_2").addEventListener("click",()=>pregunta_corecta("btn_yes_2","btn_no_2","respuestacorecta_2"))
    document.getElementById("btn_no_2").addEventListener("click",()=>pregunta_incorecta("btn_no_2","btn_yes_2","respuestaincorecta_2"))
    document.getElementById("btn_yes_3").addEventListener("click",()=>pregunta_corecta("btn_yes_3","btn_no_3","respuestacorecta_3"))
    document.getElementById("btn_no_3").addEventListener("click",()=>pregunta_incorecta("btn_no_3","btn_yes_3","respuestaincorecta_3"))
    document.getElementById("btn_no_4").addEventListener("click",()=>pregunta_corecta("btn_no_4","btn_yes_4","respuestacorecta_4"))
    document.getElementById("btn_yes_4").addEventListener("click",()=>pregunta_incorecta("btn_yes_4","btn_no_4","respuestaincorecta_4"))
}


window.onload = start