export const copyText = (text: string) => {
    const textarea = document.createElement('textarea');
    
    textarea.value = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
    } catch (err) {
    } finally {
        document.body.removeChild(textarea);
    }
}