
var currentChatName = null;

function setChatListHeader() {
    var grHistoryRefreshBtn = gradioApp().querySelector('button#gr-history-refresh-btn');
    var grHistoryUploadBtn = gradioApp().querySelector('button#gr-history-upload-btn');
    // var grNewCharacterBtn = gradioApp().querySelector('button#gr-new-character-btn');

    grHistoryRefreshBtn.className = "";
    grHistoryUploadBtn.className = "";
    // grNewCharacterBtn.className = "";


    grHistoryRefreshBtn.innerHTML = HistoryRefreshIcon;
    grHistoryUploadBtn.innerHTML = HistoryUploadIcon;
    // grNewCharacterBtn.innerHTML = NewCharacterIcon;
}

function setChatList() {
    var selectedChat = null;
    var chatList = gradioApp().querySelector('fieldset#history-select-dropdown');
    selectedChat = chatList.querySelector("label.selected")
    if (!selectedChat) {
        currentChatName = null;
        return;
    }

    // if (userLogged) {
    //     currentChatName = username + "/" + selectedChat.querySelector('span').innerText;
    // } else {
        currentChatName = selectedChat.querySelector('span').innerText;
    // }

    if (selectedChat.classList.contains('added-chat-btns')) {
        return;
    }

    chatList.querySelector('.chat-selected-btns')?.remove(); // remove old buttons
    chatList.querySelectorAll('.added-chat-btns').forEach(chat => chat.classList.remove('added-chat-btns'));

    var ChatSelectedBtns = document.createElement('div');
    ChatSelectedBtns.classList.add('chat-selected-btns');
    selectedChat.classList.add('added-chat-btns');
    ChatSelectedBtns.innerHTML = selectedChatBtns;

    var renameBtn = ChatSelectedBtns.querySelector('#history-rename-btn');
    renameBtn.addEventListener('click', function () {
        gradioApp().querySelector('#gr-history-save-btn').click();
    });

    var deleteBtn = ChatSelectedBtns.querySelector('#history-delete-btn');
    deleteBtn.addEventListener('click', function () {
        gradioApp().querySelector('#gr-history-delete-btn').click();
    });
    selectedChat.appendChild(ChatSelectedBtns);

    return;
}


function saveChatHistory(a, b, c, d) {
    var fileName = b;

    while (true) {
        var result = prompt(renameChat_i18n, fileName);

        if (result === null) {
            throw new Error("rename operation cancelled");
            // 不返回原文件名，而是使用 throw new Error() 打断程序，避免 gradio 进行保存操作
            // break;
        } else if (isValidFileName(result)) {
            return [a, result, c, d];
        } else {
            alert(validFileName_i18n + "!@#$%^&*()<>?/\\|}{~:");
        }
    }
    return [a, b, c, d]; // 兜底保障
}

function isValidFileName(fileName) {
    // 使用正则表达式来检查文件名是否包含不合格字符
    var regex = /[!@#$%^&*()<>?/\\|}{~:]/;
    return !regex.test(fileName) && fileName.trim() !== "";
}

const selectedChatBtns = `
<button id="history-rename-btn"><svg class="icon-need-hover" stroke="currentColor" fill="none" stroke-width="2" height="18px" width="18px" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></button>
<button id="history-delete-btn"><svg class="icon-need-hover" stroke="currentColor" fill="none" stroke-width="2" height="18px" width="18px" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
`

const HistoryRefreshIcon = '<svg class="icon-need-hover" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><rect x="8" y="4" width="2" height="10" /><rect x="4" y="8" width="10" height="2" /></g></svg>';
const HistoryUploadIcon  = '<svg class="icon-need-hover" width="18px" height="18px" viewBox="0 0 21.0234 19.5352" version="1.1" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M4.03125 19.5352C5.34375 19.5352 8.01562 18.1758 9.90234 16.7812C16.4531 16.8281 21.0234 13.1016 21.0234 8.40234C21.0234 3.75 16.3477 0 10.5117 0C4.6875 0 0 3.75 0 8.40234C0 11.4258 1.93359 14.1211 4.83984 15.4336C4.41797 16.2539 3.62109 17.4141 3.19922 17.9766C2.69531 18.6445 3.01172 19.5352 4.03125 19.5352ZM5.17969 17.7891C5.10938 17.8242 5.08594 17.7656 5.13281 17.707C5.67188 17.0391 6.38672 16.0547 6.69141 15.5156C6.98438 14.9883 6.91406 14.4961 6.23438 14.1797C3.35156 12.8438 1.73438 10.7695 1.73438 8.40234C1.73438 4.73438 5.625 1.73438 10.5117 1.73438C15.4102 1.73438 19.2891 4.73438 19.2891 8.40234C19.2891 12.0586 15.4102 15.0586 10.5117 15.0586C10.3945 15.0586 10.1602 15.0586 9.82031 15.0586C9.38672 15.0586 9.05859 15.1992 8.67188 15.5156C7.65234 16.3125 6.03516 17.3789 5.17969 17.7891Z"/><path d="M10.5234 13.1133C10.9805 13.1133 11.3086 12.7969 11.3086 12.3398L11.3086 8.20312L11.2266 6.10547L12.0938 7.19531L13.0312 8.15625C13.1719 8.30859 13.3594 8.37891 13.5938 8.37891C14.0156 8.37891 14.3555 8.05078 14.3555 7.62891C14.3555 7.41797 14.2734 7.21875 14.1445 7.08984L11.1445 4.10156C10.9453 3.90234 10.7578 3.79688 10.5234 3.79688C10.3008 3.79688 10.125 3.89062 9.91406 4.10156L6.91406 7.08984C6.77344 7.21875 6.70312 7.41797 6.70312 7.62891C6.70312 8.05078 7.03125 8.37891 7.46484 8.37891C7.6875 8.37891 7.875 8.29688 8.01562 8.15625L8.96484 7.19531L9.82031 6.11719L9.75 8.20312L9.75 12.3398C9.75 12.7969 10.0781 13.1133 10.5234 13.1133Z"/></g></svg>';
const NewCharacterIcon = '<svg width="18px" height="18px" viewBox="0 0 15.0076 15.0274" version="1.1" xmlns="http://www.w3.org/2000/svg"><g transform-origin="center" transform="scale(0.75)"><path d="M0 7.50785C0 7.89996 0.328243 8.23184 0.723986 8.23184L6.78387 8.23184L6.78387 14.2917C6.78387 14.6794 7.11574 15.0157 7.50785 15.0157C7.89996 15.0157 8.22375 14.6794 8.22375 14.2917L8.22375 8.23184L14.2917 8.23184C14.6794 8.23184 15.0076 7.89996 15.0076 7.50785C15.0076 7.11574 14.6794 6.78387 14.2917 6.78387L8.22375 6.78387L8.22375 0.723986C8.22375 0.336329 7.89996 0 7.50785 0C7.11574 0 6.78387 0.336329 6.78387 0.723986L6.78387 6.78387L0.723986 6.78387C0.328243 6.78387 0 7.11574 0 7.50785Z" fill="currentColor" fill-opacity="0.85"/></g></svg>'