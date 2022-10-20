import "./css/index.css"
import IMask from "imask"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
    const colors = {
        "visa": ["#2D57F2", "#436D99", "#AF1DE2"],
        "mastercard": ["#C69347", "#DF6F29", "#DF2929"],
        "default": ["black", "gray"],
    }
    
    ccBgColor01.setAttribute("fill", colors[type] [0] )
    ccBgColor02.setAttribute("fill", colors[type] [1] )
    ccBgColor02.setAttribute("fill", colors[type] [2] )
    ccLogo.setAttribute("src",`cc-${type}.svg`)
}

setCardType("mastercard")
// globalThis.setCardType = setCardType

// Código de segurança
const cvcSecurity = document.getElementById("security-code")
const securityCodePattern = {
    mask: "0000"
}
const securityCodeMasked = IMask(cvcSecurity, securityCodePattern)

// Datava de validade do cartão
const expirationDate = document.getElementById("expiration-date")
const expirationDatePattern = {
    mask: "00{/}00"
}
const expirationDateValidate = IMask(expirationDate, expirationDatePattern)

// Nímero do caortão Visa

const numberCard = document.getElementById("card-number")
const numberCardPattern = {
  mask: [
    {
      mask: "000 0000 0000 0000",
      regex: /^4\d{0,15}$/,
      cardType: "visa",
    },
    {
      mask: "000 0000 0000 0000",
      regex: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
      cardType: "master",
    },    
  ],
}

const numberCardSet = IMask(numberCard, numberCardPattern)











