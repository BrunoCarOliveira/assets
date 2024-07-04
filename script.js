
const convertbutton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

const currencySelectTop = document.querySelector(".currency-select-top")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //moeda de cima
    const currencyValueConverted = document.querySelector(".currency-value-converted") //moeda de baixo


    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.3
    const realToday = 1.0
    const bitcoinToday = 354.908
    const rupiaToday = 17.5

    // currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    // style: "currency",
    //  currency: "BRL"
    //  }).format(inputCurrencyValue / realToday)


    if (currencySelectTop.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)

    }

    if (currencySelectTop.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelectTop.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelectTop.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }

    if (currencySelectTop.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)

    }

    if (currencySelectTop.value == "rupia") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "INR"
        }).format(inputCurrencyValue / rupiaToday)

    }


    //converter para

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }



    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }


    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }


    if (currencySelect.value == "rupia") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "INR"
        }).format(inputCurrencyValue / rupiaToday)
    }

    convertValues()
}


function changeCurrency() { //moeda convertida
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-Img")

    const currencyNameTop = document.querySelector(".currency-top")
    const currencyImgTop = document.querySelector(".currency-img-top")


    //converter de

    if (currencySelectTop.value == "dolar") {
        currencyNameTop.innerHTML = "Dolar"
        currencyImgTop.src = "./assets/dolar.png"

    }

    if (currencySelectTop.value == "real") {
        currencyNameTop.innerHTML = "Real"
        currencyImgTop.src = "./assets/real.png"

    }

    if (currencySelectTop.value == "real") {
        currencyNameTop.innerHTML = "Real"
        currencyImgTop.src = "./assets/real.png"

    }

    if (currencySelectTop.value == "euro") {
        currencyNameTop.innerHTML = "Euro"
        currencyImgTop.src = "./assets/euro.png"

    }

    if (currencySelectTop.value == "libra") {
        currencyNameTop.innerHTML = "Libra"
        currencyImgTop.src = "./assets/libra.png"

    }

    if (currencySelectTop.value == "bitcoin") {
        currencyNameTop.innerHTML = "Bitcoin"
        currencyImgTop.src = "./assets/bitcoin1.png"
    }

    if (currencySelectTop.value == "rupia") {
        currencyNameTop.innerHTML = "Rupia"
        currencyImgTop.src = "./assets/rupiaimg.jpg"

    }



    //converter para
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"

    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "libra"
        currencyImg.src = "./assets/libra.png"
    }


    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin1.png"
    }


    if (currencySelect.value == "rupia") {
        currencyName.innerHTML = "Rupia"
        currencyImg.src = "./assets/rupiaimg.jpg"
    }


    convertValues()
}

currencySelectTop.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertbutton.addEventListener("click", convertValues)


