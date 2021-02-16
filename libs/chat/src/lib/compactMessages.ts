export const compactMessages = (messages) => {
  const compactInterval = 90e3; // 1,5 min

  return messages.map((message, index, array) => {
    let compact = false;

    if (index > 0) {
      const diff =
        parseInt(message.createdAt, 10) -
        parseInt(array[index - 1].createdAt, 10);

      if (
        diff < compactInterval &&
        message.authorId === array[index - 1].authorId
      ) {
        compact = true;
      }
    }

    return { ...message, compact };
  });
};
