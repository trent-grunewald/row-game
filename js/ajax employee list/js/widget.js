let test = new XMLHttpRequest();
test.onreadystatechange = function(){
    if(test.readyState === 4) {
      if(test.status === 200){
      let room = JSON.parse(test.responseText);
      let statusHTML = '<ul class="rooms">';
        for(let i=0; i < room.length; i++) {
          if (room[i].available === true){
          statusHTML += '<li class="empty">';
       } else {
          statusHTML += '<li class="full">';
       }
          statusHTML += room[i].room;
          statusHTML += '</li>';
      }
        statusHTML += '</ul>';
        document.getElementById('roomList').innerHTML = statusHTML;
     }
    }
  };

test.open('GET', 'data/rooms.json');
test.send();

let request = new XMLHttpRequest();
request.onreadystatechange = function(){
    if(request.readyState === 4) {
      if(request.status === 200){
      let employees = JSON.parse(request.responseText);
      let statusHTML = '<ul class="bulleted">';
        for(let i=0; i < employees.length; i++) {
          if (employees[i].inoffice === true){
          statusHTML += '<li class="in">';
       } else {
          statusHTML += '<li class="out">';
       }
          statusHTML += employees[i].name;
          statusHTML += '</li>';
      }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
     }
    }
  };

request.open('GET', 'data/employees.json');
request.send();