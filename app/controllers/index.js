import Controller from '@ember/controller';
// import { computed, observer } from '@ember/object';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
    headerMessage: 'Welcome',

    emailAddress: '',

    // actualEmailAdress: computed('emailAddress', function() {
    //     console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
    // }),

    // emailAddressChanged: observer('emailAddress', function() {
    //     console.log('observer is called', this.get('emailAddress'));
    // }),

    isValid: match('emailAddress', /^.+@.+\..+$/),

    isDisabled: not('isValid'),

    actions: {
        saveInvitation() {
            const email = this.get('emailAddress');

            const newInvitation = this.store.createRecord('invitation', { email: email });
            newInvitation.save().then(response => {
                this.set('responseMessage', `Thank you! We saved your email address: ${response.get('id')}`);
                this.set('emailAddress', '');
            });
        }
    }

});
