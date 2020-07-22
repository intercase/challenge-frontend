(function () {
    'use strict'

      // Account Settings
      var div = document.getElementById('account-settings');
      var form = div.getElementsByTagName("form")[0];
      form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
          event.stopPropagation();
          div.classList.add('was-validated');
          return;
        }

        div.classList.add('is-completed');

        var currentStep = document.getElementById("first-step");
        currentStep.classList.remove('is-active');

        var nextStep = document.getElementById('secound-step');
        nextStep.classList.add('is-active');

        var secoundDiv = document.getElementById('address');
        secoundDiv.classList.add('is-started');
        secoundDiv.classList.remove('is-comming');
      }, false);

      // Address
      var addressContainer = document.getElementById('address');
      var formAddress = addressContainer.getElementsByTagName("form")[0];
      formAddress.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!formAddress.checkValidity()) {
          event.stopPropagation();
          addressContainer.classList.add('was-validated');
          return;
        }

        addressContainer.classList.remove('is-started')
        addressContainer.classList.add('is-completed');

        var currentStep = document.getElementById("secound-step");
        currentStep.classList.remove('is-active');

        var nextStep = document.getElementById('third-step');
        nextStep.classList.add('is-active');

        var thirdDiv = document.getElementById('review');
        thirdDiv.classList.add('is-started');
        thirdDiv.classList.remove('is-comming')

      }, false);

  })()