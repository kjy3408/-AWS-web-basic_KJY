class InformationEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null){
            this.#instance = new InformationEvent();
        }
        return this.#instance;
    }

    addEventPhotoChangeClick() {
        const infoPhoto = document.querySelector(".info-photo");
        infoPhoto.onclick = () => {
            const photoFile = document.querySelector(".photo-file");
            photoFile.click(); //click 하게 만듬.
        }
    }

    addEventPhotoChange() {
        const photoFile = document.querySelector(".photo-file");
        photoFile.onchange = () => {
            fileService.getInstance().changePhoto();
        } 
    }
}

class fileService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null){
            this.#instance = new fileService();
        }
        return this.#instance;
    }

    changePhoto() {
        const photoForm = document.querySelector(".photo-form");
        const formData = new FormData(photoForm);
        const fileValue = formData.get("file");
        this.showPreview(fileValue);
    }

    showPreview(fileValue) {
        const fileReader = new FileReader();
        
        fileReader.readAsDataURL(fileValue);

        fileReader.onload = (e) => {
            const photoImg = document.querySelector(".info-photo img");
            photoImg.src = e.target.result;
        }

    }
}