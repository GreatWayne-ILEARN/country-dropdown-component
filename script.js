const input = document.querySelector("#phone");
    window.intlTelInput(input, {
    initialCountry: "auto",
    geoIpLookup: callback => {
        fetch("https://ipapi.co/json")
        .then(res => res.json())
        .then(data => callback(data.country_code))
        .catch(() => callback("us"));
    },
    utilsScript: "/intl-tel-input/js/utils.js?1722010922246" // just for formatting/placeholders etc
    });

  