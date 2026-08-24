const toTimestamp = (value) => new Date(value).getTime();

export const selectRelatedPosts = (currentEntry, candidates, limit = 3) => {
  const currentTags = new Set(currentEntry.data.tags ?? []);
  const currentCategory = currentEntry.data.category ?? null;

  return candidates
    .filter((candidate) => candidate.id !== currentEntry.id)
    .map((candidate) => {
      const sharedTags = (candidate.data.tags ?? []).filter((tag) => currentTags.has(tag));
      const sameCategory = Boolean(currentCategory && candidate.data.category === currentCategory);

      return {
        entry: candidate,
        sharedTags,
        sameCategory,
        score: sharedTags.length * 10 + (sameCategory ? 1 : 0),
      };
    })
    .filter(({ sharedTags, sameCategory }) =>
      currentTags.size > 0 ? sharedTags.length > 0 : sameCategory
    )
    .sort(
      (left, right) =>
        right.score - left.score ||
        toTimestamp(right.entry.data.date) - toTimestamp(left.entry.data.date)
    )
    .slice(0, limit)
    .map(({ entry, sharedTags }) => ({ entry, sharedTags }));
};
