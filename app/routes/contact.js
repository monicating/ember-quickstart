import Route from '@ember/routing/route';

export default Route.extend({
    
  model() {
    return this.store.createRecord('contact');
  },

  actions: {
    sendMessage(newContact) {
        newContact.save().then(() => {
            this.controller.set('responseMessage', true);
        });
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      // this.controller.get('model').rollbackAttributes();

      let model = this.controller.get('model');
      if (model.get('isNew')) {
          model.destroyRecord();
      }
      this.controller.set('responseMessage', false);
    }
  }
});
