onload = () => {
        // Menghilangkan class "container" dari semua elemen div dengan class "container"
        const divElements = document.querySelectorAll(".container");
        divElements.forEach((element) => {
            element.classList.remove("container");
        });
    };
