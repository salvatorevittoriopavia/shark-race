
// player object
const player = {
	character : $("#player"),
	playerPos : 0
}

// ai object

const ai = {
	character: $("#ai"),
	aiPos : 0
}

let playerPosition = 0
let aiPosition = 0;

//move the player function
let speed = 100
player.character.click(function(){
	$(this).animate({
		'left': (playerPosition+=speed)+'px'

	})
	player.playerPos = playerPosition
	result()
})

$(window).keydown(function(){
	speed = 500
})

$(window).keyup(function(){
	speed = 100
})
const result = () => {
	if(player.playerPos >= 1000){
		alert('Player Won!')
		return true;
	}
	if(ai.aiPos >= 1000){
	alert('AI won!')
	return;
	}
}	

//move the ai function
$('#easy').click(function(){
aiMove()

	
})
$('#medium').click(function(){
aiMoveMedium()
	
})
$('#hard').click(function(){
aiMoveHard()
	
})

$('#reset').click(function(){
	$("#ai").animate({
		left : 0
	})
	$("#player").animate({
		left : 0
	})
	ai.aiPos = 0
	aiPosition = 0
	player.playerPos = 0
	playerPosition = 0
	
})

let random = Math.floor(Math.random()*1000)

function aiMove(){
		if(ai.aiPos < 1000){
		$("#ai").animate({
			'left' : (aiPosition+=100)+'px'
		}, random)
		ai.aiPos = aiPosition
		if(player.playerPos >= 1000){
			return;
		}
		setTimeout(aiMove, random)
		result()

	}
}
function aiMoveMedium(){
		if(ai.aiPos < 1000){
		$("#ai").animate({
			'left' : (aiPosition+=100)+'px'
		}, 500)
		ai.aiPos = aiPosition
		if(player.playerPos >= 1000){
			return;
		}
		setTimeout(aiMoveMedium, 500)
		result()
	}
}
function aiMoveHard(){
		if(ai.aiPos < 1000){
		$("#ai").animate({
			'left' : (aiPosition+=100)+'px'
		}, 200)
		ai.aiPos = aiPosition
		if(player.playerPos >= 1000){
			return;
		}
		setTimeout(aiMoveHard, 200)
		result()
	}
}


player.character.dblclick(function(){
	$('#playerAvatar').attr('src', "./assets/images/image4.png")
})