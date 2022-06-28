import regeneratorRuntime from "regenerator-runtime";

const postMessageItem = async (e) => {
    const inputMessage = document.querySelector('.chat-footer form').elements[1];
    const bodyMessages = document.querySelector('.messages');
    const currentDate = new Date();

    bodyMessages.innerHTML += `
        <div class="message-item outgoing-message">
                            <div class="message-avatar">
                                <figure class="avatar">
                                    <img src="images/user2.png" class="rounded-circle" alt="image">
                                </figure>
                                <div>
                                    <h5>SuperUser</h5>
                                    <div class="time">${currentDate.getHours()}: ${currentDate.getMinutes()}</div>
                                </div>
                            </div>
                            <div class="message-content">
                               ${inputMessage.value}
                            </div>
                    </div>
    `;

    inputMessage.value = '';
    e.preventDefault();

}

export default postMessageItem;