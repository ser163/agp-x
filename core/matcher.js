function cosine(a, b) {
  let dot = 0, na = 0, nb = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }

  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

function fakeEmbed(text) {
  return text.split("").map(c => c.charCodeAt(0) % 10);
}

function matchFunction(query, db) {
  const qVec = fakeEmbed(query);

  let best = null;
  let bestScore = 0;

  db.forEach(f => {
    const score = cosine(qVec, f.embedding);
    if (score > bestScore) {
      best = f;
      bestScore = score;
    }
  });

  return {
    match: best?.id,
    similarity: bestScore
  };
}

module.exports = { matchFunction };
