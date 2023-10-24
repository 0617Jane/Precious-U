const my_website_code = 'Pete123'
const queryParams = {
    website_code: my_website_code,
}

const queryString = new URLSearchParams(queryParams).toString();
const urlWithParams = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community_events/"+"?"+queryString;
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
}

fetch(urlWithParams, requestOptions)
.then(response => response.json())
.then(function(data){
  var content = document.getElementById('content')
  var html = ""
  for (var i = 0; i < data.length; i++){
  html += '<tr>'
  html += '<td>'+data[i].date_time+'</td>'
  html += '<td>'+data[i].description+'</td>'
  html += '<td>'+data[i].event_type+'</td>'
  html += '<td>'+data[i].id+'</td>'
  html += '<td>'+data[i].location+'</td>'
  html += '<td>'+data[i].name+'</td>'
  html += '<td>'+data[i].organiser+'</td>'
  html += '<td><img src = "'+data[i].photo+'"></img></td>'
  html += '<td>'+data[i].website_code+'</td>'
  html += '</tr>'
  }
content.innerHTML = html
}) 