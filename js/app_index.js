// 'use strict';

// define targets to write to 
let section_with_list = document.getElementById('id_1');
let table_1 = document.createElement('table');
let contact_info= document.getElementById('table_contact');





// define array to hold everything
let array_of_cities =[] ;

// add listener

let new_location = document.getElementById('contact-form');
new_location.addEventListener('submit', form_action);



new city('Seattle', 23,65,6.3,'101 Elm Street', '857-5309');
new city('Tokyo', 3,24 ,1.2,'99 Parkway Street', '798-1235');
new city('Dubai', 11,38,3.7,'101 Elm Street', '857-5307');
new city('Paris', 20,38,2.3,'178 La Rue ', '999-1111');
new city('Lima', 2,16,4.6,'1600 Pennsylvania Ave', '796-5287');



function form_action( event){
  event.preventDefault();
   //gotta have it. prevents page reload
  let name = event.target.location.value;
  let address = event.target.Address.value;

  let phone_number = event.target.phone_number.value;

  let max = parseInt( event.target.max_number.value);
  let min = parseInt(event.target.min_number.value);
  let average = parseFloat(event.target.average.value);

  // console.log(average);
  new city( name , min, max, average, address, phone_number);
  // new city('test', 23,65,6.3,'101 Elm Street', '857-5309');

  // renderAll(array_of_cities);
  makeContactTable2();

}

function makeContactTable2(){



  // var Table = document.getElementById("contact_info");
  contact_info.innerHTML = "";

  let heading_row = document.createElement('tr');
  contact_info.appendChild(heading_row);


    let place = document.createElement('th');
    place.textContent = "Location" ;
    heading_row.appendChild(place);

    let addy = document.createElement('th');
    addy.textContent = "Address" ;
    heading_row.appendChild(addy);

    let phone_numb = document.createElement('th');
    phone_numb.textContent = "Phone Number" ;
    heading_row.appendChild(phone_numb);
   
   
    let hours_heading = document.createElement('th');
    hours_heading.textContent = "Hours " ;
    heading_row.appendChild(hours_heading);


    for(let i=0; i<array_of_cities.length ; i++ ){
     
      let temp = array_of_cities[i] ; 
      // console.log(temp);
      // add row to table
      let row = document.createElement('tr');
      contact_info.appendChild(row);
      //adds the city name
      let name = document.createElement('td');
      name.textContent = temp.name ;
      row.appendChild(name);
      //adds the address
      let location = document.createElement('td');
      location.textContent = temp.address ;
      row.appendChild(location);
      // adds the phone number 
      let contact = document.createElement('td');
      contact.textContent = temp.phone_number ;
      row.appendChild(contact);
      
      let times_open = document.createElement('td');
      times_open.textContent = "6am-7pm" ;
      row.appendChild(times_open);times_open


            // temp.textContent = this.salesPerHour[i];
            // row.appendChild(temp) ;
      
    }// end for 
}// end makeContactTable()





// constructor for each city
function  city(name, min,max,aveSales,address,phone_number)  {
  this.name=name;
  this.min =min;
  this.total=0;
  this.max = max ;
  this.aveSales = aveSales   ; 
  // this.customersPerHour = [];
  this.address =address;
  this.phone_number = phone_number;
  this.salesPerHour = [] ;
  this.hours = [] ;


  // let customersPerHour = [];
  // let salesPerHour =  [];
  // let hours = [];
  array_of_cities.push(this);
}////////////////////////////////////////////////////////////////////////// end constructor 



function makeContactTable(){

  let heading_row = document.createElement('tr');
  contact_info.appendChild(heading_row);


    // let place = document.createElement('th');
    // place.textContent = "Location" ;
    // heading_row.appendChild(place);

    // let addy = document.createElement('th');
    // addy.textContent = "Address" ;
    // heading_row.appendChild(addy);

    // let phone_numb = document.createElement('th');
    // phone_numb.textContent = "Address" ;
    // heading_row.appendChild(phone_numb);



    let place = document.createElement('th');
    place.textContent = "Location" ;
    heading_row.appendChild(place);

    let addy = document.createElement('th');
    addy.textContent = "Address" ;
    heading_row.appendChild(addy);

    let phone_numb = document.createElement('th');
    phone_numb.textContent = "Phone Number" ;
    heading_row.appendChild(phone_numb);
   
   
    let hours_heading = document.createElement('th');
    hours_heading.textContent = "Hours " ;
    heading_row.appendChild(hours_heading);






    for(let i=0; i<array_of_cities.length ; i++ ){
     
      let temp = array_of_cities[i] ; 
      // console.log(temp);
      // add row to table
      let row = document.createElement('tr');
      contact_info.appendChild(row);
      //adds the city name
      let name = document.createElement('td');
      name.textContent = temp.name ;
      row.appendChild(name);
      //adds the address
      let location = document.createElement('td');
      location.textContent = temp.address ;
      row.appendChild(location);
      // adds the phone number 
      let contact = document.createElement('td');
      contact.textContent = temp.phone_number ;
      row.appendChild(contact);
      
      let times_open = document.createElement('td');
      times_open.textContent = "6am-7pm" ;
      row.appendChild(times_open);times_open


            // temp.textContent = this.salesPerHour[i];
            // row.appendChild(temp) ;
      
    }// end for 
}// end makeContactTable()

 city.prototype.make_hours =  function(){
    let am = [];
    let pm = [];
    

    // trying to be cute and combine 2 lists
    for(let i =6 ; i<=12 ; i++){
        am.push(i+'am');
    }
      // console.log(am);

    for(let i =1 ; i<=7 ; i++){
      pm.push(i+'pm');
  }
      // console.log(pm);
      this.hours = am.concat(pm);
     
  }////////////////////////////////////////////////make_hours









city.prototype.randomGen = function(){    
  // let temp=[] ;


        for(let i=0 ;i<this.hours.length ; i++){
          // t = (Math.random() *(this.max -this.min +1 ) + this.min) * aveSales  ;
          // console.log(t);
          // this.salesPerHour.push((Math.random() *(this.max -this.min +1 ) + this.min) * aveSales );
          this.salesPerHour.push( Math.ceil( (Math.random() *(this.max -this.min +1 ) + this.min) * this.aveSales ) );
      }

                                          }////////////////////////////////////////////////////////////////end randomGen

city.prototype.getTotal = function(){
        // this.total=0;

      for( let i=0; i<this.hours.length; i++ ){
        this.total =   this.total + this.salesPerHour[i] ;


}
}



city.prototype.render = function(){
  
  // make a new row 
  let row = document.createElement('tr');
  table_1.appendChild(row);

  // Add cell name 
  nameCell = document.createElement('td');
 
  nameCell.textContent= this.name; 
  row.appendChild(nameCell);



  //iterate thru the objects and post these values into the rows 
  // console.log( this.salesPerHour);



      for(let i =0; i  < this.salesPerHour.length  ; i++){
            // console.log(this.salesPerHour[i]);
            let temp = document.createElement('td');
            temp.textContent = this.salesPerHour[i];
            row.appendChild(temp) ; 
        }// end for j
   

}




function renderAll(input){
  let times = input[0].hours;
  // console.log(times);
  // section_with_list first target

  //make table
  
  //#td  maybe unquote and remove ''
  // section_with_list.appendChild('table_1');
  
  //make heading
  let temp = document.createElement('tr');
      table_1.appendChild(temp);
  // let namer = document.createElement('th');
  //     temp.textContent='City'; 
  //     table_1.appendChild(namer);
   
  //  tt.concat(times);
  // console.log();
   //Adjusting to add Name to the front 

   let tt= ['Name'];
    times = tt.concat(times)

   

  // Populate heading with the hours 
  for(let i=0; i < times.length  ; i++){
    let temp = document.createElement('th');
    temp.textContent = times[i];
    table_1.appendChild(temp) ; 
    }//end for

    // console.log(input.length);

    for(let i=0; i < input.length  ; i++){

      input[i].render();
     
     //just in case 
      // Add row 
    //   let row = document.createElement('tr');
    //   table_1.appendChild(row);

    //   nameCell = document.createElement('td');
    //   console.log(input[i].name);
    //   nameCell.textContent=input[i].name; 
    //   row.appendChild(nameCell);
      
    // //iterate thru the objects and post these values into the rows 
    //         for(let j=0; j < times.length-1  ; j++){
    //           let temp = document.createElement('td');
    //           temp.textContent = input[i].salesPerHour[j];
    //           row.appendChild(temp) ; 
    //           }// end for j
      
      
      
            }//end for i


  // create total row 
  let row = document.createElement('tr');
  table_1.appendChild(row);

  let total_name = document.createElement('th');
  total_name.textContent = 'Total';
  row.appendChild(total_name);

// console.log(input[0].hours);
let sumVal = [];

  //for loop to iter over the columns
  for (let i=1; i<= input[0].hours.length ;  i++){
    // console.log(table_1.rows.length);
    sumVal[i-1]=0;

    for(let j =1 ; j < table_1.rows.length-1 ; j++){
      // console.log(i, j);
      // https://www.youtube.com/watch?v=2p39swI3_Rs

    // console.log(table_1.rows[j].cells[i].innerHTML) ;
   sumVal[i-1] += parseInt(table_1.rows[j].cells[i].innerHTML) 

    }// end j 


  }//end i 

  // console.log(sumVal);


  for (let i=1; i<= input[0].hours.length ;  i++){
  let total_value = document.createElement('th');
  total_value.textContent = sumVal[i-1];
  row.appendChild(total_value);
  }



    

}  // end render all 



function finish_objects(){
  for(let i =0 ; i < array_of_cities.length;i++){
    
      array_of_cities[i].make_hours();
      array_of_cities[i].randomGen();
      array_of_cities[i].getTotal();          

  }


   }

finish_objects();

makeContactTable(); 
renderAll(array_of_cities);



