//
$(function () {

	//
	var Book = Backbone.Model.extend({
		defaults: {
			title: "My Title",
			author: "My Author",
			checked: false
		},
		toggle: function () {
			this.set('checked',!this.get('checked'));
		},
		initialize: function () {
			this.checked = false;
		}
	});

	//
	var Books = Backbone.Collection.extend({
		model: Book,
		url: "/getBooks",
		getChecked: function () {
			return this.where({checked:true});
		},
		parse: function (data) {
			return data.Books;
		}
	});
	
	//
	var BookView = Backbone.View.extend({
		tagName: 'li',
		events: {
			'click': 'toggleBook'
		},
		render: function () {
			var h = '';
			h += '<input type="checkbox" value="1" name="';
			h += this.model.get('title');
			h += '"/> <em><b>'+this.model.get('title')+'</em></b> By: <span>';
			h += this.model.get('author')+'</span>';
			this.$el.html(h);
			this.$('input').prop('checked',this.model.get('checked'));
			return this;
		},
		toggleBook: function () {
			this.model.toggle();
		}
	});

	//
	var BooksView = Backbone.View.extend({
		el: $('#booksView'),
		initialize: function () {
			this.list = $('#books');
			this.listenTo(books,'update',this.render);
		},
		render: function () {
			books.each(function (book) {
				var v = new BookView({model: book});
				this.list.append(v.render().el);
			},this);
			$("#booksView").fadeIn(500);
			return this;
		}
	});

	//
	var books = new Books();
	var booksView = new BooksView();

	books.fetch({success:function(){books.trigger('update')}});

});
