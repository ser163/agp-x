function fakeEmbed(text) {
  return text.split("").map(c => c.charCodeAt(0) % 10);
}

function normalize(vec) {
  const sum = Math.sqrt(vec.reduce((a, b) => a + b * b, 0));
  return vec.map(v => v / sum);
}

function buildEmbedding(fsd) {
  const semantic = fakeEmbed(fsd.intent);
  const tags = fakeEmbed((fsd.tags || []).join(" "));

  const combined = semantic.concat(tags);

  return normalize(combined);
}

module.exports = { buildEmbedding };
