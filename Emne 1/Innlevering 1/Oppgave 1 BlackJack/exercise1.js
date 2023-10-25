function countBlackJackPoints(cards) {
    let points = 0;
    if (cards === null) {
        return null;
    }
    for (let card of cards) {
        let suitAndRank = card.split(' ');
        let rank = suitAndRank[1];
        if (rank === "Knekt" || rank === "Dame" || rank === "Konge") {
            points += 10;
        }
        else if (rank === "Ess") {
            if (points >= 11) {
                points += 1;
            } else {
                points += 11;
            }
        }
        else {
            points += parseInt(rank);
        }
    }
    return points;
}