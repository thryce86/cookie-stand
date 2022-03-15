'use strict';


let section_with_list = document.getElementById('id_1');


let seattle = {
  name: 'Seattle',
  min:23 ,
  max: 56 ,
  aveSales: 6.3,
  customersPerHour : [],
  salesPerHour: [],
  hours : [],
  randomGen : function(){  // multiples the random amount of 
    // let temp=[] ;
    for(let i=0 ;i<this.hours.length ; i++){
        // t = (Math.random() *(this.max -this.min +1 ) + this.min) * aveSales  ;
        // console.log(t);
        // this.salesPerHour.push((Math.random() *(this.max -this.min +1 ) + this.min) * aveSales );
        this.salesPerHour.push( Math.ceil( (Math.random() *(this.max -this.min +1 ) + this.min) * this.aveSales ) );
    }
       
  }
  ,make_hours: function(){
    let am = [];
    let pm = [];
    
    // let i1 = 11-7;
    // let i2=7-1 +1;

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
     
  },
  render:function(){  
      
   

      let parentList = document.createElement('ul');
      parentList.textContent=this.name;
      section_with_list.appendChild(parentList);


      let listElem = document.createElement('ul');
      parentList.appendChild(listElem);
      // section_with_list.appendChild(listElem);

      // let list_line = document.createElement('li');
      let total=0;

      for( let i=0; i<this.hours.length; i++ ){
        total=total + this.salesPerHour[i] ;


        let list_line = document.createElement('li');
      list_line.textContent = `${this.hours[i]}: ${this.salesPerHour[i]} cookies`; 
      // parent . append child
      listElem.appendChild(list_line);


      }

      let list_line = document.createElement('li');
      list_line.textContent = `Total: ${total} cookies`; 
      // parent . append child
      listElem.appendChild(list_line);




  }//end render 
  
  

 
 



}// end seattle 



let tokyo = {
  name: 'Tokyo',
  min:3 ,
  max: 24 ,
  aveSales: 1.2,
  customersPerHour : [],
  salesPerHour: [],
  hours : [],
  randomGen : function(){  // multiples the random amount of 
    // let temp=[] ;
    for(let i=0 ;i<this.hours.length ; i++){
        // t = (Math.random() *(this.max -this.min +1 ) + this.min) * aveSales  ;
        // console.log(t);
        // this.salesPerHour.push((Math.random() *(this.max -this.min +1 ) + this.min) * aveSales );
        this.salesPerHour.push( Math.ceil( (Math.random() *(this.max -this.min +1 ) + this.min) * this.aveSales ) );
    }
       
  }
  ,make_hours: function(){
    let am = [];
    let pm = [];
    
    // let i1 = 11-7;
    // let i2=7-1 +1;

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
     
  },
  render:function(){  
      
   

      let parentList = document.createElement('ul');
      parentList.textContent=this.name;
      section_with_list.appendChild(parentList);


      let listElem = document.createElement('ul');
      parentList.appendChild(listElem);
      // section_with_list.appendChild(listElem);

      // let list_line = document.createElement('li');
      let total=0;

      for( let i=0; i<this.hours.length; i++ ){
        total=total + this.salesPerHour[i] ;


        let list_line = document.createElement('li');
      list_line.textContent = `${this.hours[i]}: ${this.salesPerHour[i]} cookies`; 
      // parent . append child
      listElem.appendChild(list_line);


      }

      let list_line = document.createElement('li');
      list_line.textContent = `Total: ${total} cookies`; 
      // parent . append child
      listElem.appendChild(list_line);




  }//end render 





  
  
      }
 

  let dubai = {
    name: 'Dubai',
    min: 11 ,
    max: 38 ,
    aveSales: 3.7,
    customersPerHour : [],
    salesPerHour: [],
    hours : [],
    randomGen : function(){  // multiples the random amount of 
      // let temp=[] ;
      for(let i=0 ;i<this.hours.length ; i++){
          // t = (Math.random() *(this.max -this.min +1 ) + this.min) * aveSales  ;
          // console.log(t);
          // this.salesPerHour.push((Math.random() *(this.max -this.min +1 ) + this.min) * aveSales );
          this.salesPerHour.push( Math.ceil( (Math.random() *(this.max -this.min +1 ) + this.min) * this.aveSales ) );
      }
         
    }
    ,make_hours: function(){
      let am = [];
      let pm = [];
      
      // let i1 = 11-7;
      // let i2=7-1 +1;
  
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
       
    },
    render:function(){  
      
   

      let parentList = document.createElement('ul');
      parentList.textContent=this.name;
      section_with_list.appendChild(parentList);


      let listElem = document.createElement('ul');
      parentList.appendChild(listElem);
      // section_with_list.appendChild(listElem);

      // let list_line = document.createElement('li');
      let total=0;

      for( let i=0; i<this.hours.length; i++ ){
        total=total + this.salesPerHour[i] ;


        let list_line = document.createElement('li');
      list_line.textContent = `${this.hours[i]}: ${this.salesPerHour[i]} cookies`; 
      // parent . append child
      listElem.appendChild(list_line);


      }

      let list_line = document.createElement('li');
      list_line.textContent = `Total: ${total} cookies`; 
      // parent . append child
      listElem.appendChild(list_line);




  }//end render 
    
    
  
   
   
  
  
  
  }// end 
 





  let  paris = {
    name: 'Paris',
    min: 20 ,
    max: 38 ,
    aveSales: 2.3,
    customersPerHour : [],
    salesPerHour: [],
    hours : [],
    randomGen : function(){  // multiples the random amount of 
      // let temp=[] ;
      for(let i=0 ;i<this.hours.length ; i++){
          // t = (Math.random() *(this.max -this.min +1 ) + this.min) * aveSales  ;
          // console.log(t);
          // this.salesPerHour.push((Math.random() *(this.max -this.min +1 ) + this.min) * aveSales );
          this.salesPerHour.push( Math.ceil( (Math.random() *(this.max -this.min +1 ) + this.min) * this.aveSales ) );
      }
         
    }
    ,make_hours: function(){
      let am = [];
      let pm = [];
      
      // let i1 = 11-7;
      // let i2=7-1 +1;
  
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
       
    },
    render:function(){  
      
   

      let parentList = document.createElement('ul');
      parentList.textContent=this.name;
      section_with_list.appendChild(parentList);


      let listElem = document.createElement('ul');
      parentList.appendChild(listElem);
      // section_with_list.appendChild(listElem);

      // let list_line = document.createElement('li');
      let total=0;

      for( let i=0; i<this.hours.length; i++ ){
        total=total + this.salesPerHour[i] ;


        let list_line = document.createElement('li');
      list_line.textContent = `${this.hours[i]}: ${this.salesPerHour[i]} cookies`; 
      // parent . append child
      listElem.appendChild(list_line);


      }

      let list_line = document.createElement('li');
      list_line.textContent = `Total: ${total} cookies`; 
      // parent . append child
      listElem.appendChild(list_line);




  }//end render 
    
    
  
   
   
  
  
  
  }// end 




  let lima = {
    name: 'Lima',
    min: 2 ,
    max: 16 ,
    aveSales: 4.6,
    customersPerHour : [],
    salesPerHour: [],
    hours : [],
    randomGen : function(){  // multiples the random amount of 
      // let temp=[] ;
      for(let i=0 ;i<this.hours.length ; i++){
          // t = (Math.random() *(this.max -this.min +1 ) + this.min) * aveSales  ;
          // console.log(t);
          // this.salesPerHour.push((Math.random() *(this.max -this.min +1 ) + this.min) * aveSales );
          this.salesPerHour.push( Math.ceil( (Math.random() *(this.max -this.min +1 ) + this.min) * this.aveSales ) );
      }
         
    }
    ,make_hours: function(){
      let am = [];
      let pm = [];
      
      // let i1 = 11-7;
      // let i2=7-1 +1;
  
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
       
    },
    render:function(){  
      
   

      let parentList = document.createElement('ul');
      parentList.textContent=this.name;
      section_with_list.appendChild(parentList);


      let listElem = document.createElement('ul');
      parentList.appendChild(listElem);
      // section_with_list.appendChild(listElem);

      // let list_line = document.createElement('li');
      let total=0;

      for( let i=0; i<this.hours.length; i++ ){
        total=total + this.salesPerHour[i] ;


        let list_line = document.createElement('li');
      list_line.textContent = `${this.hours[i]}: ${this.salesPerHour[i]} cookies`; 
      // parent . append child
      listElem.appendChild(list_line);


      }

      let list_line = document.createElement('li');
      list_line.textContent = `Total: ${total} cookies`; 
      // parent . append child
      listElem.appendChild(list_line);




  }//end render 
    
    
  
   
   
  
  
  
  }// end 
// Calls 


seattle.make_hours();//
seattle.randomGen();
seattle.render();

function maker(obj){
  obj.make_hours()
  obj.randomGen();
  obj.render()
};


maker(tokyo);

maker(paris);

maker( dubai );

maker( lima);



