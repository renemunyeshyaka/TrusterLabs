
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              primary: {
                900: "#1a237e",
                800: "#283593",
                700: "#303f9f",
              },
              secondary: {
                500: "#ffd600",
                400: "#ffea00",
              },
            },
            animation: {
              "text-reveal": "textReveal 5s ease forwards",
              "fade-in": "fadeIn 1s ease-in-out",
              "slide-up": "slideUp 0.8s ease-out",
              float: "float 3s ease-in-out infinite",
              flip: "flip 1s ease-in-out",
            },
            keyframes: {
              textReveal: {
                "0%": {
                  "background-size": "0% 100%",
                  "background-position": "left center",
                },
                "100%": {
                  "background-size": "100% 100%",
                  "background-position": "right center",
                },
              },
              fadeIn: {
                "0%": { opacity: "0" },
                "100%": { opacity: "1" },
              },
              
              slideUp: {
                "0%": {
                  opacity: "0",
                  transform: "translateY(20px)",
                },
                "100%": {
                  opacity: "1",
                  transform: "translateY(0)",
                },
              },
              float: {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(-10px)" },
              },
              flip: {
                "0%": { transform: "rotateY(0deg)" },
                "100%": { transform: "rotateY(180deg)" },
              },
            },
          },
        },
      };
   