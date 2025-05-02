document.addEventListener('DOMContentLoaded', function() {
    // チャットボットボタンの処理
    const chatbotButton = document.getElementById('chatbot-button');
    chatbotButton.addEventListener('click', function() {
        const container = document.getElementById('chatbot-iframe-container');
        if (!container.innerHTML) {
            container.innerHTML = `<iframe
                src="https://cloud.dify.ai/explore/installed/331714bd-e510-4ef3-867d-1a1b00c721ff"
                style="width: 100%; height: 600px; border: none;">
            </iframe>`;
        }
        container.style.display = 'block';
        container.scrollIntoView({ behavior: 'smooth' });
    });

    // LINEボタンの処理
    const lineButton = document.getElementById('line-button');
    lineButton.addEventListener('click', function() {
        // LINE QRコードを表示するモーダルを作成
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';

        const modalContent = document.createElement('div');
        modalContent.style.backgroundColor = 'white';
        modalContent.style.padding = '2rem';
        modalContent.style.borderRadius = '5px';
        modalContent.style.position = 'relative';

        const closeButton = document.createElement('button');
        closeButton.textContent = '×';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.style.border = 'none';
        closeButton.style.background = 'none';
        closeButton.style.fontSize = '1.5rem';
        closeButton.style.cursor = 'pointer';

        const qrImage = document.createElement('img');
        qrImage.src = 'path/to/your/line-qr-code.png';
        qrImage.alt = 'LINE QR Code';
        qrImage.style.maxWidth = '300px';

        modalContent.appendChild(closeButton);
        modalContent.appendChild(qrImage);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        closeButton.addEventListener('click', function() {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    });

    // お問い合わせフォームの処理
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // フォームデータの取得
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        // ここでフォームデータをサーバーに送信する処理を実装
        // 例: fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // });

        // 送信完了メッセージの表示
        alert('お問い合わせありがとうございます。\n内容を確認次第、ご連絡させていただきます。');
        contactForm.reset();
    });
}); 