(function (){  // wrapper function

	var app = angular.module('store',[]);

	app.controller('StoreController', function(){

		this.products = gems;


	});

	app.controller("PanelController", function(){

		this.tab = 1;

		this.selectTab = function (setTab){
			this.tab = setTab;

		};

		this.isSelected = function(checkTab){
			//console.log("tab = " + this.tab);
			return this.tab == checkTab;
		};

		this.getTab = function (){
			return this.tab;

		};

	});


	app.controller("ReviewController", function(){
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});


	var gems = [
		
		{
			name: "Бриллант Изящество",
			price: 280.05,
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi a, soluta adipisci consectetur. Eos distinctio, voluptas neque. Libero molestias sapiente magnam accusantium minus quasi fugiat maxime architecto placeat, beatae delectus enim quam deleniti voluptatem blanditiis ducimus earum veniam atque officia sequi? Magni alias nisi, sed assumenda molestiae eos sint quidem!",
			canPurchase: true,
			images: [
				{
					full: 'img/mar1.jpg',
					thumb: 'img/mar2.jpg'
				}
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				}
			]	

		},
		
		{
			name: "Бриллант Слеза",
			price: 500.95,
			description: "Amazing gem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error excepturi asperiores accusamus ut ex tempora molestiae dicta totam ipsa rerum illum, magnam, consequatur a culpa amet ad officiis nihil omnis! Suscipit expedita, ex, delectus ipsam eaque minus modi corporis mollitia cumque adipisci aperiam temporibus magnam. Rerum rem beatae dolorem maiores!",
			canPurchase: true,
			images: [
				{
					full: 'img/mar3.jpg',
					thumb: 'img/mar4.jpg'
				}
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				}
			]

		},

		{
			name: "Бриллант Рассвет",
			price: 500.95,
			description: "Funny gem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto non nam quam temporibus, nostrum pariatur, amet reiciendis quia soluta necessitatibus harum voluptatibus veniam obcaecati totam molestias laboriosam optio quasi, deserunt. Totam cum culpa enim, eligendi ipsa, omnis, quae veritatis ipsam excepturi quibusdam suscipit debitis temporibus facere fugit consectetur ipsum iure.",
			canPurchase: true,
			images: [
				{
					full: 'img/mar3.jpg',
					thumb: 'img/mar4.jpg'
				}
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				}
			]	

		}


	];

})();