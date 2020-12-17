$(document).ready( function(){

  // 1. When the submit button is clicked....
  $('#doSearch').on( 'click', function(){

    $('#details').hide(); // in case they were visible

    $('#drinks').empty().show(); // in case they were hidden



    // 2. Get the search text that was typed into the form...
    const searchText = $('#searchText').val();
    console.log('button clicked, searchText: ', searchText);

    // 3. ... and plug that search text into the correct URL
    // for doing a cocktaildb.com cocktail search with AJAX
    $.getJSON( `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ searchText }` )
    .done( function( response ){
      // 4. When we get the search drinks, let's show
      // them on the page
    console.log( 'response:', response );

      for( let i = 0; i < response.drinks.length; i++ ){
        const cocktail = response.drinks[i];
        // console.log( cocktail.title, cocktail.popularity );

        // Use jQuery to make a new <h1> tag, and set the
        // contents of the tag to be cocktail.title

        const cocktailName = response.strDrink;

        //TODO: check for 'null' drink_path images
        const $cocktailResult = $(`
          <h3 cocktail_id="${ cocktail.idDrink }">${ i+1 }. ${ cocktail.strDrink } </h3>${ cocktail.strInstructions })</p>
          <p>${ cocktail.strMeasure1 }</p>
          <img src= "${ cocktail.strDrinkThumb }">
          <hr>
        `);

        // $cocktailResult.on('click', function(){
        //   showDetails(cocktail);
        // });

        // Append that tag to the DOM, ie. $('#drinks')
        $('#drinks').append( $cocktailResult );

      } // for each cocktail


    })
    .fail( function( err ){
      console.warn( err.status, err.statusText );
    });

  }); // search button click


  // When a user clicks on a cocktail result title....
  // console.log('Attaching click handler to all h3 tags on page');
  // console.log('Number of h3 tags', $('h3').length  );

  // Use the 'event delegation' pattern to handle clicks
  // on h3 tags NO MATTER WHEN they are added to the page
  // NOT THIS: $('h3').on('click', function(){

  $(document).on('click', 'h3', function(){
    // console.log('An H3 was clicked!');
    // How can we refer to the clicked element?
    // console.log('clicked item', $(this).attr('cocktail_id') );

    // Hide the search drinks, so we can see the details div
    $('#drinks').hide();

    const cocktailID = $(this).attr('cocktail_id');

    const url = `https://api.thecocktaildb.org/3/cocktail/${ cocktail.idDrink }?api_key=1`;

    $.getJSON(url)
    .done( function( response ){
      // When we get a response with the cocktail details...
      console.log('cocktail details:', response);

      const $details = $(`
        <button id="goBack">&lt;&lt; Back</button>
        <h1>${ response.strDrink }</h1>
        <h4>${ response.strGlass }</h4
        <p>${ response.strInstructions }</p>
        <img src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview${ response.strDrinkThumb }">
      `);

      $('#details').html( $details ).show();

    }) // done
    .fail( console.warn );

  }); // h3 click handler


  $(document).on('click', '#goBack', function(){
    console.log('back clicked!');
    $('#details').hide();
    $('#drinks').show();
  });


}); // document ready
