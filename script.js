function increaseLike(button) {
    let text = button.textContent;
    let likeCount = parseInt(text.split(" ")[0]);
    likeCount++;
    button.textContent = `${likeCount} like(s) Like`;
}
