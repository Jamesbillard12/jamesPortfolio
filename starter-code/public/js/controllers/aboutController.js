'use strict';

(function(module) {
  const aboutController = {};

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.index = () => {
    $('.tab-content').hide();
    $('#aboutMe').fadeIn('slow');
  };

  module.aboutController = aboutController;
})(window);
