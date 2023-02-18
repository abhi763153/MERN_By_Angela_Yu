// $("h1").css("color", "red"); // appling css using jQuery 

// $("h1").css("font-size", "5rem");

// $("button").css("margin", "10px 30px");

//  console.log($("h1").css("font-size"));

// It is not good practice to styling element using javascript

$("h1").addClass("header");

// $(document).keypress((event)=>{
//     $("h1").text(event.key);
// });

$("h1").on("mouseover", ()=>{
    $("h1").css("color", "purple");
});
$("h1").on("mouseout", ()=>{
    $("h1").css("color", "green");
});

$("h1").before("<button>Submit</button>");

$("h1").after('<img src="https://scontent.fdbd1-2.fna.fbcdn.net/v/t1.6435-9/204801101_832023517422327_7739650113045864971_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VGiD2ccdqNEAX9WPabM&_nc_ht=scontent.fdbd1-2.fna&oh=00_AT9V9cZzA8VseDZp7Frnj4EOdukNTqjhn1yOP6OdYu20TA&oe=624300BF" alt"Not responding">');

$("h1").prepend('<input type="checkbox" name="check">');
$("h1").append('<input type="checkbox" name="check">');
