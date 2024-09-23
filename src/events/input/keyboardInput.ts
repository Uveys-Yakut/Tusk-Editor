class KeyboardInputs {
    private textareaProccesed: HTMLTextAreaElement;
    private onEnterCallback: (value: string) => void;
    private onKeyPressCallback: (key: string) => void;

    constructor(textareaElmnt: HTMLTextAreaElement, onEnterCallback: (value: string) => void, onKeyPressCallback: (key: string) => void) {
        this.textareaProccesed = textareaElmnt;
        this.onEnterCallback = onEnterCallback;
        this.onKeyPressCallback = onKeyPressCallback;

        this.initialize();
    }

    private initialize() {
        // Textarea odaklanma olayı
        this.textareaProccesed.addEventListener('focus', () => {
            this.textareaProccesed.addEventListener('keydown', this.handleKeyDown.bind(this));
        });

        // Textarea odak dışı olunca dinleyiciyi kaldır
        this.textareaProccesed.addEventListener('blur', () => {
            this.textareaProccesed.removeEventListener('keydown', this.handleKeyDown.bind(this));
        });
    }

    private handleKeyDown(event: KeyboardEvent) {
        // Enter tuşuna basıldığında
        if (event.key === 'Enter') {
            event.preventDefault(); // Varsayılan davranışı engelle
            this.onEnterCallback(this.textareaProccesed.value); // Callback fonksiyonunu çağır
        } else {
            // Diğer tuşlar için callback
            this.onKeyPressCallback(event.key);

            // Metin seçme kombinasyonları
            if (event.ctrlKey || event.metaKey) { // Ctrl (Windows) veya Cmd (Mac) tuşu
                if (event.key === 'a') {
                    console.log('Tüm metin seçildi.');
                } else if (event.key === 'c') {
                    console.log('Metin kopyalandı.');
                } else if (event.key === 'x') {
                    console.log('Metin kesildi.');
                } else if (event.key === 'v') {
                    console.log('Metin yapıştırıldı.');
                }
            }

            // Ok tuşları ile seçim
            if (event.key === 'ArrowUp') {
                console.log('Yukarı ok tuşuna basıldı.');
            } else if (event.key === 'ArrowDown') {
                console.log('Aşağı ok tuşuna basıldı.');
            } else if (event.key === 'ArrowLeft') {
                console.log('Sola ok tuşuna basıldı.');
            } else if (event.key === 'ArrowRight') {
                console.log('Sağa ok tuşuna basıldı.');
            }
        }
    }
}

export { KeyboardInputs }
