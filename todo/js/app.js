window.onload = () => {
    AsideEvent.getInstance().addEventShowMenuButton();
    AsideEvent.getInstance().addEventMainChange();
    InformationEvent.getInstance().addEventPhotoChangeClick();
    InformationEvent.getInstance().addEventPhotoChange();
    // InformationEvent.getInstance().addEventWriteAboutMe();
    // InformationEvent.getInstance().addEventWriteIntroduction();
    InformationEvent.getInstance().addEventAboutMeModifyClick();
    InformationEvent.getInstance().addEventAboutMeSaveClick();
    InformationEvent.getInstance().addEventIntroduceModifyClick();
    InformationEvent.getInstance().addEventIntroduceSaveClick();
    ToDoEvent.getInstance().addEventAddTodoClick();
    ToDoEvent.getInstance().addEventAddTodoKeyUp();
    TodoService.getInstance();
    TodoService.getInstance().deleteTodoList();
    
}