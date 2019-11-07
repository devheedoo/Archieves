function goToMostPointedAnswerInGithubIssue() {
  const pointsWithIndex = [];
  const gEmojis = document.querySelectorAll('g-emoji');
  gEmojis.forEach((gEmoji, index) => {
    // find +1 point emoji elements
    if (gEmoji.getAttribute('alias') === '+1'
       && gEmoji.closest('.timeline-comment-group').getAttribute('id').includes('comment')
    ) {
      const splitedHtml = gEmoji.parentElement.innerHTML.split('</g-emoji>');
      const point = Number(splitedHtml[splitedHtml.length - 1].trim());
      if (point > 0) {
        pointsWithIndex.push({ point, index });
      }
    }
  });
  const bestAnswerInfo = pointsWithIndex.reduce((prev, next) => prev.point > next.point ? prev : next);
  const bestAnswerId = gEmojis[bestAnswerInfo.index]
    .closest('.timeline-comment-group')
    .getAttribute('id');
  location.href = location.href.split('#')[0] + `#${bestAnswerId}`;
}
