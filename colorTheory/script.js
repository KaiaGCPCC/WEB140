/* ========================================
   COLOR THEORY PROJECT
======================================== */


/* ========================================
   COLOR PALETTES

   Students should replace these colors
   with their own colors.
======================================== */

const palettes = {

    palette1: {

        name: "Complementary",

        primary: "#248068",

        secondary: "#802B11",

        accent: "#97D4C4",

        background: "#FFF5F2",

        surface: "#FCEDE8",

        text: "#402118"

    },


    palette2: {

        name: "Analogus",

        primary: "#FF1C36",

        secondary: "#FF3C1C",

        accent: "#FFB32B",

        background: "#FFE0C2",

        surface: "#FFF2E6",

        text: "#FF641C"

    },


    palette3: {

        name: "Triadic",

        primary: "#0E4175",

        secondary: "#F54033",

        accent: "#1A87F5",

        background: "#F0F5CA",

        surface: "#FBF6E9",

        text: "#A11208"

    }

};


/* ========================================
   APPLY SELECTED PALETTE
======================================== */

function applyPalette(palette) {

    const root =
        document.documentElement;


    /* Apply palette colors */

    root.style.setProperty(
        "--primary",
        palette.primary
    );


    root.style.setProperty(
        "--secondary",
        palette.secondary
    );


    root.style.setProperty(
        "--accent",
        palette.accent
    );


    root.style.setProperty(
        "--background",
        palette.background
    );


    root.style.setProperty(
        "--surface",
        palette.surface
    );


    root.style.setProperty(
        "--text",
        palette.text
    );


    /* Update HEX values */

    document.getElementById("primaryHex").textContent =
        palette.primary;


    document.getElementById("secondaryHex").textContent =
        palette.secondary;


    document.getElementById("accentHex").textContent =
        palette.accent;


    document.getElementById("backgroundHex").textContent =
        palette.background;


    document.getElementById("textHex").textContent =
        palette.text;

}


/* ========================================
   PALETTE BUTTONS
======================================== */

const paletteButtons =
    document.querySelectorAll("[data-palette]");


paletteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const paletteName =
            button.dataset.palette;


        const selectedPalette =
            palettes[paletteName];


        applyPalette(selectedPalette);

    });

});


/* ========================================
   INITIAL PALETTE
======================================== */

applyPalette(palettes.palette1);