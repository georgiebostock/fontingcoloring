document.addEventListener("DOMContentLoaded", function () {
    const target = document.getElementById("typewriter-effect");
    const text = "Unlock your metabolic health. Test, track & optimise for long-term success...";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Adjust speed if needed
        }
    }

    target.innerHTML = ""; // Ensures no previous text appears
    typeWriter();
});
