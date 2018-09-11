import DS from 'ember-data';
import { match, not, and, gte } from '@ember/object/computed';

export default DS.Model.extend({
  
  email: DS.attr('string'),
  message: DS.attr('string'),
  
  isValidEmail: match('email', /^.+@.+\..+$/),

  isValidMessage: gte('message.length', 5), 

  isValidForm: and('isValidEmail', 'isValidMessage'),

  isDisabled: not('isValidForm')
});
