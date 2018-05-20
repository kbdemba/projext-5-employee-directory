//make the ajax call
$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    createCards(data.results);
    bringmodal(data.results)
    //console.log(data.results[0])
  }//success
});//ajaz

// function to create the employees with their basic info
function createCards(emplyees){
  emplyees.forEach(function(person, i){

    let container = $(".container").html()
    let innercard = container
    // the API ID SOMETIMES RETURNS NULL
    innercard += `<div class="card" id="${i}">
                      <div class="left">
                          <img class="image" alt="dhhdh" src="${person.picture.medium}"> </img>
                      </div>
                      <div class="right" >
                          <div class="name"> ${person.name.first} ${person.name.last}</div>
                          <div class="email"> ${person.email} </div>
                          <div class="email"> ${person.location.city} </div>
                      </div>
                  </div>`
    $(".container").html(innercard)
  })
}

// function to display the modal
function bringmodal(person){
  $(".card").on("click", function(e){
    var index = $(this)[0].id
    $(".modal").css("display","block")
    console.log(person)
    console.log(person[index])
    modalContent(person[index])
  })
}


// function to put info in the modal content and to close the modal
function modalContent(employee){
  let modalC = ""
  const dob = employee.dob.substring(0, 10) // not to include the time of birth

  modalC +=`<span id="close">&times;</span>
           <div class="card-modal" >
              <img class="image-modal" alt="dhhdh" src="${employee.picture.medium}"> </img>
              <div class="name"> ${employee.name.first} ${employee.name.last}</div>
              <div class="email"> ${employee.email} </div>
              <div class="city"> ${employee.location.city} </div>
              <hr>
              <div class="cell"> ${employee.cell} </div>
              <div class="location"> ${employee.location.street}, ${employee.location.city}
                      ${employee.location.state}, ${employee.location.postcode}</div>
              <div class="birthdate"> Birthdate: ${dob} </div>
            </div>`
  $("#modal-content").html(modalC)

  //functionality to close the modal
  $("#close").on("click", function(){
    $(".modal").css("display","none")
  })
}
