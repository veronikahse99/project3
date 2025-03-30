const img = document.getElementById('shakableImage');
        let isShaking = false;

        img.addEventListener('click', () => {
            if (isShaking) {
                img.classList.remove('shake');
            } else {
                img.classList.add('shake');
            }
            isShaking = !isShaking;
        });

const img2 = document.getElementById('shakableImage2');
        let isShaking2 = false;

        img2.addEventListener('click', () => {
            if (isShaking2) {
                img2.classList.remove('shake2');
            } else {
                img2.classList.add('shake2');
            }
            isShaking2 = !isShaking2;
        });








        const images = document.querySelectorAll('.draggable');
        let draggedImage = null;

        images.forEach(img => {
            img.addEventListener('dragstart', (event) => {
                draggedImage = event.target;
                event.target.style.opacity = "0.5";
            });

            img.addEventListener('dragend', (event) => {
                event.target.style.opacity = "1";
            });
        });

        document.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        document.addEventListener('drop', (event) => {
            event.preventDefault();
            if (draggedImage) {
                draggedImage.style.position = "absolute";
                draggedImage.style.left = `${event.clientX - 50}px`;
                draggedImage.style.top = `${event.clientY - 50}px`;
                draggedImage = null;
            }
        });














function changeImage(element) {
    document.getElementById('displayedImage').src = element.src;
}








/*переключалка*/ 

function showPage(pageNumber) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });
    document.getElementById("page" + pageNumber).classList.add("active");
}
/*переключалка*/ 


function revealImage(index) {
    // Скрыть все изображения перед показом нового
    document.querySelectorAll('.hidden-image').forEach(img => img.style.display = 'none');
    
    // Показать выбранное изображение
    document.getElementById(`hidden${index + 1}`).style.display = 'block';
}






















function displaySpecialImage(src) {
    let preview = document.getElementById('special-preview');
    let images = preview.getElementsByTagName('img');
    
    if (images.length >= 2) {
        preview.innerHTML = '';
    }
    
    let newImg = document.createElement('img');
    newImg.src = src;
    preview.appendChild(newImg);
}