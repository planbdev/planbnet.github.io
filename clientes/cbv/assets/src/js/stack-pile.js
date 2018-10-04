let $stackedCards = $('.stacked-cards');

function addCard(cardContent) {
	let $newCard = $(cardContent);
	$stackedCards.append($newCard);
	setTimeout(() => {
		requestAnimationFrame(() => {
			$newCard.addClass('card--added');
		});
	}, 10);
}


$('#js-add-card').on('click', () => {
    let $activeCard = $stackedCards.children().first();
    $activeCard.remove();
    addCard('<div class="card">' + $activeCard.html() + '</div>');
});


$('#js-remove-card').on('click', () => {

    let $activeCard = $stackedCards.children().slice(-1);
   
	$activeCard.removeClass('card--added');
	setTimeout(() => {
		requestAnimationFrame(() => {
		    $activeCard.remove();
		    $activeCard.addClass('card--added');
		    $stackedCards.prepend($activeCard);
		});
	}, 400); // Match CSS transition time
});