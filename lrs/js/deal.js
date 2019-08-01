 function randomsort(a,b){
              return Math.random() > 0.5 ? -1 : 1;
          }
          var arr=['yyj','lr','pm','pm','pm','lr','lr','sw','nw'];
          arr.sort(randomsort);
          
		  console.log(arr)
		  localStorage.setItem('aarr',arr)