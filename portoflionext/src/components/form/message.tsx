import React from 'react';

const MessageInput: React.FC = () => {
    return (
        <div class="form-outline">
            <textarea class="form-control" id="textAreaExample1" rows="4"></textarea>
            <label class="form-label" for="textAreaExample">Message</label>
        </div>
    );
};

export default MessageInput;
