const app = Vue.createApp({
    data() {
        return {
            inputText: '',
            characterCount: 0,
            lineCount: 0
        }
    },
    methods: {
        countCharacters() {
            let text = this.inputText.trim();
            let characters = text.length;
            let lines = text.split(/\r*\n/).length;
            this.characterCount = characters - lines + 1;
            this.lineCount = lines;
        }
    }
})

app.mount('#app')
