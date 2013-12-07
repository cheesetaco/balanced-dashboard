Balanced.ModalComponent = Ember.Component.extend({
	submitAction: 'submit',
	classNames: ['modal-container'],
	modalElement: '.modal',

	willDestroyElement: function() {
		$(this.get('modalElement')).modal('hide');
	},

	actions: {
		open: function(model) {
			var modalElement = this.get('modalElement');
			model.on('didCreate', function() {
				$(modalElement).modal('hide');
			});

			this.set('model', model);

			this.$(modalElement).modal({
				manager: this.$()
			});
		},

		save: function(model) {
			if (this.get('model.isSaving')) {
				return;
			}
			this.sendAction('submitAction', model);
		}
	}

});
