// 'use strict';

// define targets to write to 
let section_with_list = document.getElementById('id_1');
let table_1 = document.createElement('table');



let array_of_cities =[] ;



new city('Seattle', 23,65,6.3);
new city('Tokyo', 3,24 ,1.2);
new city('Dubai', 11,38,3.7);
new city('Paris', 20,38,2.3);
new city('Lima', 2,16,4.6);






// constructor for each city
function  city(name, min,max,aveSales)  {
  this.name=name;
  this.min =min;
  this.total=0;
  this.max = max ;
  this.aveSales = aveSales   ; 
  // this.customersPerHour = [];
  this.salesPerHour = [] ;
  this.hours = [] ;


  // let customersPerHour = [];
  // let salesPerHour =  [];
  // let hours = [];
  array_of_cities.push(this);
}////////////////////////////////////////////////////////////////////////// end constructor 


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
  
  section_with_list.appendChild(table_1);
  
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


renderAll(array_of_cities);

