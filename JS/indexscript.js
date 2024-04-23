const array = document.getElementsByClassName('card');

// const rect = element.getBoundingClientRect();

// console.log(rect.left); // Outputs the X-coordinate of the left edge of the element.
// console.log(rect.top); // Outputs the Y-coordinate of the top edge of the element.
// console.log(rect.right); // Outputs the X-coordinate of the right edge of the element.
// console.log(rect.bottom); /

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     const rect = element.getBoundingClientRect();
//     // if(rect.left + rect.right)
//     console.log(rect.left);
//     console.log(rect.top);
//     console.log(rect.right);
//     console.log(rect.bottom);
    
// }

$(document).load().scrollTop(0);

function search_function(){
    const input_value = document.getElementById("search_bar").value;
    const pattern = new RegExp(`${input_value}`, 'i');
    let arr = document.getElementsByClassName("search-card");

    for (let i = 0; i < arr.length; i++) {
        
        
        let temp = arr[i].id;

        // console.log(pattern.test(arr[i].id) );
        if(pattern.test(temp) == false){
         document.getElementById(temp).style.display = "none";
        }
        else{
            
            document.getElementById(temp).style.display = "flex";
       }
        
    }
}


function show_menu(){
    let menu = document.getElementById("menu");
    let icons = document.getElementById("icons");
    icons.style.display = "none";
    let bar = document.getElementById("bar");
    bar.style.borderRadius = "20px 20px 0 0";
    menu.style.display = "block";
}
function remove_menu(){
    // alert("before setTimeout");

    setTimeout(function(){
            // alert("I am setTimeout");
            let icons = document.getElementById("icons");
            icons.style.display = "flex";
            let menu = document.getElementById("menu");
            let bar = document.getElementById("bar");
            menu.style.display = "none";
            bar.style.borderRadius = "20px";
       },300);
    
    //   alert("after setTimeout");
}
function redirect(){
    
}



function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    var middle = (elemBottom + elemTop)/ 2 ;
    return ((middle  <= docViewBottom) && (middle+100 >= docViewTop));
}

$(window).scroll(function(){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        if (isScrolledIntoView(element) === true) {
            $(element).addClass('in-view');
        }
        else{
            
            $(element).removeClass('in-view');
        }
    }

    

});
