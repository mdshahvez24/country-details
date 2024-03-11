function getData(){
    const Request = new XMLHttpRequest()
    Request.open("get","https://restcountries.com/v3.1/name/bharat")
    Request.send()

    Request.addEventListener('load',()=>{
        var [data] = JSON.parse(Request.responseText)
        document.getElementById("name").innerHTML =  data.name.official
        document.getElementById("capital").innerHTML =  data.capital[0]
        document.getElementById("flags").src =  data.flags.svg
        document.getElementById("borders").innerHTML =  data.borders
        document.getElementById("timezones").innerHTML =  data.timezones
        document.getElementById("population").innerHTML =  data.population
        document.getElementById("area").innerHTML =  data.area
        document.getElementById("region").innerHTML =  data.region
        document.getElementById("subregion").innerHTML =  data.subregion
        document.getElementById("unMember").innerHTML =  data.unMember
        document.getElementById("independent").innerHTML =  data.independent
        document.getElementById("startOfWeek").innerHTML =  data.startOfWeek
        document.getElementById("landlocked").innerHTML =  data.landlocked
        document.getElementById("maps").href =  data.maps.googleMaps
    })
}
getData()
function fun(){
    const Request = new XMLHttpRequest()
    var name = document.getElementById("search").value
    Request.open("get","https://restcountries.com/v3.1/name/"+name)
    Request.send()

    Request.addEventListener('load',()=>{
        var [data] = JSON.parse(Request.responseText)
        document.getElementById("name").innerHTML =  data.name.official
        document.getElementById("capital").innerHTML =  data.capital[0]
        document.getElementById("flags").src =  data.flags.svg
        document.getElementById("borders").innerHTML =  data.borders
        document.getElementById("timezones").innerHTML =  data.timezones
        document.getElementById("population").innerHTML =  data.population
        document.getElementById("area").innerHTML =  data.area
        document.getElementById("region").innerHTML =  data.region
        document.getElementById("subregion").innerHTML =  data.subregion
        document.getElementById("unMember").innerHTML =  data.unMember
        document.getElementById("independent").innerHTML =  data.independent
        document.getElementById("startOfWeek").innerHTML =  data.startOfWeek
        document.getElementById("landlocked").innerHTML =  data.landlocked
        document.getElementById("maps").href =  data.maps.googleMaps
    })
}