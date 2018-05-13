// Splash screen level 1, JS object literal notation

var splash1 = {

	create: function () {

		game.add.image(0, 0, 'bg');

		var instructions = game.add.text(game.world.centerX, 200, 'Level 1:\n FLY To THE PLANET AKALA\nCOLLECT enough oxygen to get to the next plant\n Before the Jellyfish come!', {
			font: "25px Rammetto One",
			fill: "#fff",
		});
		
		instructions.anchor.set(0.5);
		
		//what does twen do???
		tween = game.add.tween(instructions).to({
			y: game.world.centerY
		}, 1500, Phaser.Easing.Bounce.Out, true);
		tween.onComplete.add(onComplete, this);
		
		// Add the background sound
		bgSound = game.add.audio('wouldn_doo');
		bgSound.play();
		bgSound.loopFull();

		setTimeout(function () {
			game.state.start("level1");
		}, 5000);
		
		function onComplete() {
    		this.tween = game.add.tween(instructions).to( { y: 700 }, 1000, Phaser.Easing.Exponential.Out, true, 3000);

			}
	},

}
