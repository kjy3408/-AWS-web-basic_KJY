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

    addEventAboutMeModifyClick() {
        const aboutMeModifyButton = document.querySelector(".m-aboutme")
        aboutMeModifyButton.onclick = () => {
            const aboutMeSaveButton = document.querySelector(".s-aboutme");
            aboutMeSaveButton.classList.remove("button-hidden");
            aboutMeModifyButton.classList.add("button-hidden");
           
            const infoInputContainers = document.querySelectorAll(".info-input-container");
            infoInputContainers.forEach(infoInputContainer => {
                infoInputContainer.querySelector(".info-input").disabled = false;
            });            
        }
    }
    
    addEventAboutMeSaveClick() {
        const aboutMeSaveButton = document.querySelector(".s-aboutme");
        aboutMeSaveButton.onclick = () => {
            const aboutMeModifyButton = document.querySelector(".m-aboutme")
            aboutMeSaveButton.classList.add("button-hidden");
            aboutMeModifyButton.classList.remove("button-hidden"); 
           
            const infoInputContainers = document.querySelectorAll(".info-input-container");
            infoInputContainers.forEach(infoInputContainer => {
                infoInputContainer.querySelector(".info-input").disabled = true;
            });            
        }
    }

    addEventIntroduceModifyClick() {
        const introduceModifyButton = document.querySelector(".m-introduce")
        introduceModifyButton.onclick = () => {
            const introduceSaveButton = document.querySelector(".s-introduce");
            introduceSaveButton.classList.remove("button-hidden");
            introduceModifyButton.classList.add("button-hidden");
            const introduceInput = document.querySelector(".introduce-input");
            introduceInput.disabled = false;
        }
    }
    
    addEventIntroduceSaveClick() {
        const introduceSaveButton = document.querySelector(".s-introduce");
        introduceSaveButton.onclick = () => {
            const introduceModifyButton = document.querySelector(".m-introduce")
            introduceSaveButton.classList.add("button-hidden");
            introduceModifyButton.classList.remove("button-hidden"); 
            const introduceInput = document.querySelector(".introduce-input");
            introduceInput.disabled = true;
                     
        }
    }

    // 위아래 암거나 써도됨

    // addEventWriteAboutMe() {
    //     const mAboutMe = document.querySelector(".m-aboutme");
    //     const infoInputs = document.querySelectorAll(".info-input");
    //     const sAboutMe = documecorrectionnt.querySelector(".s-aboutme");
       
    //     mAboutMe.onclick = () => {
    //         infoInputs.forEach(infoInput => {
    //             infoInput.disabled = false;
    //         });  
    //         sAboutMe.classList.remove("button-hidden");
    //         mAboutMe.classList.add("button-hidden");
    //     }
        
    //     sAboutMe.onclick = () => {
    //         infoInputs.forEach(infoInput => {
    //             infoInput.disabled = true;
    //         });  
    //         sAboutMe.classList.add("button-hidden");
    //         mAboutMe.classList.remove("button-hidden");
    //     }
    // }

    // addEventWriteIntroduction() {
    //     const mIntroduce = document.querySelector(".m-introduce");
    //     const introduceInput = document.querySelector(".introduce-input");
    //     const sIntroduce = document.querySelector(".s-introduce");

    //     mIntroduce.onclick = () => {
    //         introduceInput.disabled = false;
    //         sIntroduce.classList.remove("button-hidden");
    //         mIntroduce.classList.add("button-hidden");
    //     }
        
    //     sIntroduce.onclick = () => {
    //         introduceInput.disabled = true;
    //         sIntroduce.classList.add("button-hidden");
    //         mIntroduce.classList.remove("button-hidden");
    //     }
    // }

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
