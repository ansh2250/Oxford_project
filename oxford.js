const input = document.querySelector("#phone");
        const iti = window.intlTelInput(input, {
            initialCountry: "in",  // Set default country to India
            separateDialCode: true, // Separate dial code from number
            onlyCountries: ["in"], // Restrict to India only
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js"
        });
        
        // Restrict input to numbers only
        input.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '');
        });